# digitaleinitiativen.at

Website und Makerlab-Wiki der Digitalen Initiativen. Alles liegt als Markdown in diesem Repo. Bei jeder Änderung auf
`main` baut GitHub die Seite neu und veröffentlicht sie auf GitHub Pages.

## Wo liegt was?

| Ordner | Inhalt | Adresse |
| --- | --- | --- |
| `src/content/pages/` | normale Seiten, der Pfad ist die Adresse | `ueber-uns/verein.md` → `/ueber-uns/verein/` |
| `src/content/news/` | „What's up?“-Geschichten | `/geschichten/<datei>/` |
| `src/content/wiki/` | Makerlab-Wiki (früher Confluence). Ordner sind Kapitel, `index.md` ist die Kapitelseite | `/wiki/...` |
| `public/` | Bilder und Dateien, die 1:1 ausgeliefert werden | |
| `src/site.ts` | Name, Adresse und Hauptmenü | |

## Bearbeiten

- **Über Ditarr:** Sag Ditarr in Slack, was sich ändern soll. Ditarr committet die Änderung hierher, und sie steht im
  Ditarr-Log.
- **Direkt auf GitHub:** Unter jeder Seite gibt es den Link „bearbeite die Seite auf GitHub“.
- **Lokal:** `npm install`, dann `npm run dev` und http://localhost:4321 öffnen.

Jede Seite beginnt mit einem Kopf („Front Matter“):

```md
---
title: Lasercutter
order: 2        # nur Wiki: Reihenfolge in der Seitenleiste, optional
---

Hier steht der Text in Markdown.
```

## Umzug aus WordPress und Confluence

Das Workflow **Import from WordPress and Confluence** (unter *Actions*, „Run workflow“) holt alle Seiten, Beiträge und
Bilder aus WordPress sowie alle Seiten und Anhänge aus dem Confluence-Space `MR`. Daraus macht es einen Pull Request.
Lokal geht dasselbe mit `npm run import:wordpress` und `npm run import:confluence`.

Ein Import überschreibt das Wiki komplett. Deshalb sollte er laufen, bevor jemand hier im Wiki etwas ändert. Danach
ist dieses Repo die Quelle, und Confluence kann gekündigt werden.

Der Import meldet Seiten mit Formularen (Kontakt, Sesam). Für die gibt es noch keinen Ersatz.

## Veröffentlichen

Einmalig einrichten:

1. *Settings → Pages → Build and deployment → Source:* **GitHub Actions**.
2. *Settings → Actions → General → Workflow permissions:* „Allow GitHub Actions to create and approve pull requests“
   anhaken (für den Import).

Die Seite läuft dann unter https://digitaleinitiativen.github.io/website/. Links in Markdown schreibt man trotzdem
ohne `/website` (z. B. `/wiki/lasercutter/`); der Build ergänzt den Pfad.

Umstellen auf digitaleinitiativen.at, wenn alles passt:

1. Bei Gandi die A-Einträge von `digitaleinitiativen.at` auf die GitHub-Pages-Adressen setzen
   (185.199.108.153, 185.199.109.153, 185.199.110.153, 185.199.111.153) und `www` als CNAME auf
   `digitaleinitiativen.github.io.`.
2. In *Settings → Pages → Custom domain* `digitaleinitiativen.at` eintragen und „Enforce HTTPS“ anhaken, sobald GitHub
   das Zertifikat ausgestellt hat. Der nächste Build nimmt die neue Adresse automatisch.
3. In Ditarrs `.env` `WEBSITE_URL=https://digitaleinitiativen.at` setzen.
