---
title: "Sortierschalen"
updated: "2023-11-12"
order: 39
confluenceId: "168493096"
---

![](/wiki-files/168493096/image-20231110-162641.png)

Wähle ein Brett und gib die **Dimensionen** in Vcarve Pro - Menü: _Rohlingsmaße_ ein. Achte darauf, dass der _Material-Ursprung_ richtig (Vorne-Links auf der Materialoberfläche) eingestellt ist.

 Danach erstellst du im **2D-Bereich** die Vektoren für die Werkzeug (Fräser)-Pfade.

Dazu kannst du die Werkzeuge (_Rechteck-Tool_) im **Linken-Menübereich** verwenden.

![](/wiki-files/168493096/image-20231110-162814.png)

![](/wiki-files/168493096/image-20231110-162526.png)

Den Umriss-Vektor kannst du mit dem _Versatzlinien-Werkzeug_ erstellen:

Markiere dazu, zuerst die drei Quadrate.

![](/wiki-files/168493096/image-20231110-163208.png)

* * *

Gib als Abstand die gewünschte Wandstärke eine.

Danach wechselst du in den **Werkzeug-Weg-Bereich** (Rechtes Menü).

![](/wiki-files/168493096/image-20231110-163628.png)

Markiere die drei Quadrate und wähle danach das _Taschen-Werkzeug_. Im Eingabe-Pennel musst due dann die entsprechenden Werte auswählen bzw. eingeben.

![](/wiki-files/168493096/image-20231110-163929.png)

Danach bei markierter Außenlinie das Werkzeug _Kontur_ anklicken und die notwendigen Parameter setzen:

![](/wiki-files/168493096/image-20231110-164128.png)

wenn alle **Werkzeugpfade** generiert sind, solltest du eine Simulation durchführen und kontrollieren, ob das Ergebnis deinen Vorstellungen entspricht.

![](/wiki-files/168493096/image-20231110-170236.png)

Wenn alles OK ist, müssen die Werkzeugpfade mit den zusätzlichen Daten als NC-Datei (G-Code inklusive M-Code) abgespeichert werden. Dabei ist wichtig, dass der richtige Post-Prozessor ausgewählt ist.

Diese NC-Datei wird dann mit Hilfe der CNC-Steuersoftware (CNC4) an die Maschine gesendet, die damit das Werkstück fräst.

* * *

![](/wiki-files/168493096/sortierschale3fach-2.jpg)
