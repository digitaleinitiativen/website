// Reads upcoming events from an iCal feed (e.g. Meetup). Port of the old WordPress "iCal Events" plugin:
// only SUMMARY, DTSTART and URL are used, events that already started are dropped, the rest is sorted by start.

const DEFAULT_TZ = "Europe/Vienna";

/** Offset of `timeZone` from UTC at the instant `ms`, in milliseconds. */
function tzOffset(ms, timeZone) {
  const parts = Object.fromEntries(
    new Intl.DateTimeFormat("en-US", {
      timeZone,
      hourCycle: "h23",
      year: "numeric", month: "2-digit", day: "2-digit",
      hour: "2-digit", minute: "2-digit", second: "2-digit",
    })
      .formatToParts(new Date(ms))
      .map((p) => [p.type, p.value]),
  );
  const asUtc = Date.UTC(+parts.year, +parts.month - 1, +parts.day, +parts.hour, +parts.minute, +parts.second);
  return asUtc - Math.floor(ms / 1000) * 1000;
}

/** Wall-clock time in `timeZone` → Date. */
function zoned(y, mo, d, h, mi, s, timeZone) {
  const guess = Date.UTC(y, mo - 1, d, h, mi, s);
  let ms = guess - tzOffset(guess, timeZone);
  ms = guess - tzOffset(ms, timeZone); // second pass settles DST changes
  return new Date(ms);
}

function validZone(tz) {
  try {
    new Intl.DateTimeFormat("en-US", { timeZone: tz });
    return true;
  } catch {
    return false;
  }
}

/** Parses a DTSTART value (with its TZID parameter, if any). Returns { start, allDay } or null. */
export function parseDate(value, tzid, timeZone = DEFAULT_TZ) {
  const v = value.trim();
  let m = v.match(/^(\d{4})(\d{2})(\d{2})$/);
  if (m) return { start: zoned(+m[1], +m[2], +m[3], 0, 0, 0, timeZone), allDay: true };
  m = v.match(/^(\d{4})(\d{2})(\d{2})T(\d{2})(\d{2})(\d{2})(Z?)$/);
  if (!m) return null;
  const [y, mo, d, h, mi, s] = m.slice(1, 7).map(Number);
  if (m[7] === "Z") return { start: new Date(Date.UTC(y, mo - 1, d, h, mi, s)), allDay: false };
  const zone = tzid && validZone(tzid) ? tzid : timeZone;
  return { start: zoned(y, mo, d, h, mi, s, zone), allDay: false };
}

function unescape(value) {
  return value.replace(/\\([\\,;nN])/g, (_, c) => (c === "n" || c === "N" ? "\n" : c));
}

/** Upcoming events in `ical`, earliest first: [{ start: Date, allDay, title, url }]. */
export function parseIcal(ical, { now = new Date(), timeZone = DEFAULT_TZ } = {}) {
  const lines = ical.replace(/\r\n?/g, "\n").replace(/\n[ \t]/g, "").split("\n");
  const events = [];
  let current = null;

  for (const raw of lines) {
    const line = raw.trim();
    if (line === "BEGIN:VEVENT") {
      current = { title: "", dtstart: "", tzid: "", url: "" };
      continue;
    }
    if (line === "END:VEVENT" && current) {
      const date = current.dtstart && parseDate(current.dtstart, current.tzid, timeZone);
      if (date && date.start >= now) {
        events.push({ ...date, title: current.title || "(Kein Titel)", url: current.url });
      }
      current = null;
      continue;
    }
    if (!current) continue;

    const colon = line.indexOf(":");
    if (colon < 0) continue;
    const [name, ...params] = line.slice(0, colon).split(";");
    const value = line.slice(colon + 1);
    const key = name.toUpperCase();

    if (key === "SUMMARY") current.title = unescape(value);
    else if (key === "URL") current.url = unescape(value);
    else if (key === "DTSTART") {
      current.dtstart = value;
      const tz = params.find((p) => /^TZID=/i.test(p));
      current.tzid = tz ? tz.slice(5).replace(/^"|"$/g, "") : "";
    }
  }

  return events.sort((a, b) => a.start - b.start);
}

/** "17.11.2026 19:00", or "17.11.2026" for all-day events, like the old plugin showed it. */
export function formatEventDate({ start, allDay }, timeZone = DEFAULT_TZ) {
  const opts = { timeZone, day: "2-digit", month: "2-digit", year: "numeric" };
  const date = new Intl.DateTimeFormat("de-AT", opts).format(start);
  if (allDay) return date;
  const time = new Intl.DateTimeFormat("de-AT", { timeZone, hour: "2-digit", minute: "2-digit", hourCycle: "h23" }).format(start);
  return `${date} ${time}`;
}

const cache = new Map();

/**
 * Fetches and parses the feed once per build. Never throws: on any problem it logs a warning and
 * returns null, so a Meetup outage doesn't break the deploy (the page then just links to Meetup).
 */
export function fetchEvents(url, options) {
  if (!cache.has(url)) {
    cache.set(
      url,
      (async () => {
        try {
          const res = await fetch(url, { signal: AbortSignal.timeout(15000), headers: { "user-agent": "digitaleinitiativen-website" } });
          if (!res.ok) throw new Error(`HTTP ${res.status}`);
          const body = await res.text();
          if (!body.includes("BEGIN:VCALENDAR")) throw new Error("keine iCal-Datei");
          return parseIcal(body, options);
        } catch (err) {
          console.warn(`[events] Kalender ${url} konnte nicht geladen werden: ${err.message}`);
          return null;
        }
      })(),
    );
  }
  return cache.get(url);
}
