---
title: "Raumbuchung"
updated: "2026-11-16"
order: 320
confluenceId: "48398351"
---

## Maschinenbuchung

Auf der **Suche** nach der **Maschinenbuchung**? Die haben wir in unsere schicke Makerlabsoftware Fabman verlagert. 👉🏻 [**Hier gehts zu unserem Makerlab Portal**](https://fabman.io/manage/2099/).

Falls du noch keinen Account hast, wende dich gerne an [team@digitaleinitiativen.at](mailto:team@digitaleinitiativen.at). Wir helfen dir gerne weiter, damit du das Makerlab nutzen kannst 🤗.

Maschinenbuchungen werden im [Vereinskalender](/kalender/) **angezeigt**, gebucht wird aber in Fabman.

## 📘 Raumbuchung. Wie geht’s?

Räume und interne Termine (Kids OpenLab, Workshops, Vereinsabend, …) buchst du direkt bei unserem Bot **Ditarr**, in Slack, Signal oder WhatsApp. Schreib Ditarr einfach eine Nachricht:

```
cal.add morgen 14-17 Lange Tafel Kids OpenLab
cal.add Sa 9-12:30 Main Area + Maschinenraum Kids OpenLab wöchentlich bis 19.12.
cal.add 27.11. 12:00 - 28.11. 16:00 Main Area UH26
```

1.  **Wann:** `heute`, `morgen`, ein Wochentag (`Fr`, `Freitag`: der nächste) oder ein Datum (`20.11.`).
2.  **Uhrzeit:** von-bis, z. B. `14-17` oder `14:30-17:00`. Wir empfehlen dir, 30 Minuten vor und nach der eigentlichen Nutzung zu buchen, damit du genug Zeit für Aufbau und Umstellen hast.
3.  **Raum:** `Main Area`, `Maschinenraum`, `Lange Tafel` oder `Coworking`, mehrere mit `+`. Ohne Raum ist es nur ein Termin im Kalender.
4.  **Titel:** ein sprechender Name, z. B. `Kids OpenLab`.
5.  **Regelmäßig?** Hänge `wöchentlich`, `alle 2 Wochen` oder `täglich` an, optional mit `bis 19.12.`.

Ist der Raum schon belegt, sagt dir Ditarr, von wem. Sprich dich ab oder nimm eine andere Zeit. Mit `cal.add!` buchst du trotzdem.

Weitere Befehle:

-   `cal.list` zeigt die nächsten 7 Tage (auch `cal.list heute`, `cal.list monat`, `cal.list Main Area`). Jede Buchung hat eine Nummer, z. B. `#12`.
-   `cal.cancel 12` storniert Buchung 12, `cal.cancel 12 5.12.` nur diesen Tag einer Serie, `cal.cancel 12 ab 1.1.` die Serie ab diesem Tag.

Die Community dankt. Du bist ferdisch ✅

## Kalender bei dir anzeigen lassen

Alle Raumbuchungen, Maschinenbuchungen und Events siehst du im [Vereinskalender](/kalender/). Dort findest du auch den Link, mit dem du den Kalender in deiner Kalender-App abonnierst. Ditarr schickt ihn dir auch, wenn du `cal.feed` schreibst.
