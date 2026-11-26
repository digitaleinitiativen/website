# An der Website arbeiten

Website und Makerlab-Wiki der Digitalen Initiativen, gebaut mit Astro und auf GitHub Pages veröffentlicht. Was wo
liegt, steht in der [README.md](README.md). Diese Datei ist für Menschen und Coding-Agenten, die hier etwas ändern.

## Befehle

Node 22 oder neuer.

```sh
npm install
npm test        # Tests der Import-Skripte (scripts/*.test.mjs)
npm run build   # baut die Seite nach dist/
npm run dev     # http://localhost:4321
```

Der Workflow `Deploy` baut bei jedem Pull Request mit (`npm test`, `npm run build`). Veröffentlicht wird nur, was auf
`main` landet.

## Ditarr schreibt hier auch

Ditarr (der Vereins-Bot, Repo `digitaleinitiativen/ditarr`) committet direkt auf `main`: `web:edit` ändert
Seiten, News und Wiki, `news:spread` legt Geschichten in `src/content/news/` und Bilder in `public/media/news/` an,
und `social:post` legt Bilder in `social/` ab (Instagram holt sie dort ab). Ditarr liest außerdem
`src/content/pages/` und `src/content/wiki/`, um Antwortentwürfe auf Anfragen an team@ zu schreiben.

Deshalb:

- Ordner, Dateinamen und das Front Matter (`title`, im Wiki `order`) nicht umbenennen oder umbauen, ohne vorher ein
  Issue zu öffnen. Ditarr findet Seiten über diese Pfade.
- Dateien in `social/` und in `public/media/news/` nicht löschen, alte Posts verlinken darauf.
- Vor dem Arbeiten `main` holen, Ditarr ändert hier oft etwas.

## Regeln

- In einem eigenen Branch arbeiten und einen Pull Request öffnen. Nie direkt auf `main` pushen (das macht nur
  Ditarr).
- Inhalte nicht erfinden: keine Preise, Öffnungszeiten, Namen oder Termine, die nicht schon irgendwo stehen. Lieber im
  PR nachfragen. Ditarr verwendet diese Seiten für Antworten an Anfragende, ein falscher Satz hier landet dort.
- Keine personenbezogenen Daten von Mitgliedern auf die Seite, außer sie haben zugestimmt.
- Texte auf Deutsch. Links ohne `/website` schreiben (z. B. `/wiki/lasercutter/`), der Build ergänzt den Pfad.
- Keine Imports aus WordPress oder Confluence starten. Ein Import überschreibt das ganze Wiki.
