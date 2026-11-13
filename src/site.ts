export const site = {
  name: "Digitale Initiativen",
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
