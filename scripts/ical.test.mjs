import assert from "node:assert/strict";
import { test } from "node:test";
import { formatEventDate, parseIcal } from "./lib/ical.mjs";

const feed = [
  "BEGIN:VCALENDAR",
  "VERSION:2.0",
  "BEGIN:VEVENT",
  "DTSTART;TZID=Europe/Vienna:20261117T190000",
  "SUMMARY:#inDIdev Meetup",
  "URL;VALUE=URI:https://www.meetup.com/digitale-initiativen/events/312632287/",
  "END:VEVENT",
  "BEGIN:VEVENT",
  "DTSTART:20261113T170000Z",
  "SUMMARY:Magic Vorarlberg presents DI Gathering\\, mit Karten",
  "URL:https://www.meetup.com/digitale-initiativen/events/317121060/",
  "END:VEVENT",
  "BEGIN:VEVENT",
  "DTSTART;VALUE=DATE:20260701",
  "SUMMARY:Schon vorbei",
  "END:VEVENT",
  "BEGIN:VEVENT",
  "DTSTART;VALUE=DATE:20270101",
  "SUMMARY:Neujahr mit sehr langem Titel, der umgebro",
  " chen wurde",
  "END:VEVENT",
  "END:VCALENDAR",
].join("\r\n");

test("keeps upcoming events, sorted, with Vienna times", () => {
  const events = parseIcal(feed, { now: new Date("2026-11-01T00:00:00Z") });
  assert.deepEqual(events.map((e) => e.title), [
    "Magic Vorarlberg presents DI Gathering, mit Karten",
    "#inDIdev Meetup",
    "Neujahr mit sehr langem Titel, der umgebrochen wurde",
  ]);
  assert.equal(formatEventDate(events[0]), "13.11.2026 18:00");
  assert.equal(formatEventDate(events[1]), "17.11.2026 19:00");
  assert.equal(events[1].start.toISOString(), "2026-11-17T18:00:00.000Z");
  assert.equal(events[1].url, "https://www.meetup.com/digitale-initiativen/events/312632287/");
  assert.equal(formatEventDate(events[2]), "01.01.2027");
  assert.equal(events[2].url, "");
});

test("drops events that already started", () => {
  const events = parseIcal(feed, { now: new Date("2026-11-15T00:00:00Z") });
  assert.equal(events[0].title, "#inDIdev Meetup");
});

test("summer time is handled", () => {
  const [e] = parseIcal("BEGIN:VEVENT\nDTSTART;TZID=Europe/Vienna:20270615T190000\nSUMMARY:x\nEND:VEVENT", {
    now: new Date("2027-01-01"),
  });
  assert.equal(e.start.toISOString(), "2027-06-15T17:00:00.000Z");
});
