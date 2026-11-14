---
title: "DrehZahl - VorSchub"
updated: "2023-11-22"
order: 350034531
confluenceId: "174981123"
---

Für ein gutes Fräsergebnis ist die richtige **Auswahl verschiedener Parameter** notwendig:

![](/wiki-files/174981123/drehzahl-vorschub.jpeg)

Als erstes muss das **Material** und die damit zusammenhängende **Schnitt-Geschwindigkeit (Vc)** ermittelt werden. Mit ihr und dem **Durchmesser (D)** des Fräsers kann dann die **Spindel-Drehzahl (n)** berechnet werden, die wiederum für die Berechnung der **Vorschub-Geschwindigkeit (Vf)** notwendig ist. Und aus dieser wiederum wird die **Eintauch-Geschwindigkeit (Ve)** berechnet.

Die Werte für die Schnittgeschwindigkeit und Spanvolumen werden aus dem _Datenblatt des Fräsers_ oder aus _Tabellen_ herausgelesen.

Diese Excel-Tabelle [\_ParameterBerechnung.was…](/wiki/maschinen/cnc-maschine/einblick-in-die-welt-der-cnc-fraeser/drehzahl-vorschub/) berechnet die Fräser-Parameter für die _BZT PFE 1010_ im Maschinenraum des Mutterschiffs. Die Version 2 berücksichtigt dabei die maximale Drehzahl der Motorspindel.

![](/wiki-files/174981123/image-20231118-195936.png)

In der Software zur Erstellung der Werkzeugwege: **Vcarve**, kann eine **Werkzeug-Datenbank** angelegt werden:

Sie gliedert sich in **Materialien** (MDF, Weichholz, Hartholz, Acryl, Aluminium, …), **Fräser-Typen** (Schaft, Radius, Kugel-Kopf, Gravur, Kegel-V-Fräser, ua.) und die einzelnen **Fräser**.

Gib deinen Fräsern **sinnvolle Namen**. Am besten mit den wichtigsten Parametern (Art, Durchmesser, Schneiden) z.B. #FräserNummer, Typ (Schneiden, Durchmesser, Länge)!

![](/wiki-files/174981123/image-20231118-200411.png)

Lege die Daten für deinen Fräser immer auch für die anderen (verwendeten) Materialien an.

![](/wiki-files/174981123/image-20231118-203924.png)
