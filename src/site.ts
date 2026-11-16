export const site = {
  name: "Plattform für digitale Initiativen",
  tagline: "Gemeinsam bauen, tüfteln und lernen. In Dornbirn.",
  address: ["Dr.-Anton-Schneider-Straße 28b", "Gebäude M / Raum M02", "6850 Dornbirn"],
  editUrl: "https://github.com/digitaleinitiativen/website/edit/main/",
};

/** Main navigation. Edit freely; links that point to missing pages show up in the build log. */
export const nav: { label: string; href: string; children?: { label: string; href: string }[] }[] = [
  { label: "Makerlab", href: "/makerlab/" },
  { label: "Wiki", href: "/wiki/" },
  { label: "Raum", href: "/raum/" },
  { label: "Hackathon", href: "/hackathon/" },
  { label: "What's up?", href: "/geschichten/" },
  { label: "Initiativen", href: "/initiativen/" },
  { label: "Mitmachen", href: "/mitmachen/" },
  {
    label: "Über uns",
    href: "/ueber-uns/",
    children: [
      { label: "Verein", href: "/ueber-uns/verein/" },
      { label: "Vorstand", href: "/ueber-uns/vorstand/" },
      { label: "Partner", href: "/ueber-uns/partner/" },
      { label: "Jahresberichte", href: "/ueber-uns/jahresberichte/" },
      { label: "Kontakt", href: "/kontakt/" },
      { label: "Friends", href: "/friends/" },
    ],
  },
];

/**
 * "Die nächsten Events" on /geschichten/. The iCal feed is read at build time; the deploy workflow
 * rebuilds the site every night so the list stays current.
 */
export const events = {
  icalUrl: "https://www.meetup.com/digitale-initiativen/events/ical/",
  allUrl: "https://www.meetup.com/digitale-initiativen/events/",
  count: 5,
};

/**
 * /kalender/: the club calendar from Ditarr (room bookings, internal dates, Fabman machine bookings and Meetup
 * events), read in the browser so it is always current. Replaces Teamup.
 */
export const calendar = {
  jsonUrl: "https://ditarr.digitaleinitiativen.at/calendar.json",
  icsUrl: "https://ditarr.digitaleinitiativen.at/calendar.ics",
  days: 42,
};
