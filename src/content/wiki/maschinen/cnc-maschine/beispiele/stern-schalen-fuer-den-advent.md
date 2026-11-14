---
title: "Stern-Schalen für den Advent"
updated: "2023-11-16"
order: 329401434
confluenceId: "172720195"
---

Wähle ein **Hartholzbrett** mit ca. 10-20mm Stärke aus und gib wie gewohnt die Dimensionen ein:

zum Beispiel so:

![](/wiki-files/172720195/image-20231116-112629.png)

* * *

![](/wiki-files/172720195/image-20231116-105536.png)

Zeichne einen Stern oder lade diese Datei: [KrippeStern.dxf](/wiki/maschinen/cnc-maschine/beispiele/stern-schalen-fuer-den-advent/) und füge eine **Versatzline** (5-6mm Abstand) hinzu.

![](/wiki-files/172720195/image-20231116-105711.png)

Dein Stern schaut jetzt etwa so aus.

Jetzt kannst mit \[Strg+C und Strg+V\] mehrere **Kopien** davon **anfertigen**.

![](/wiki-files/172720195/image-20231116-110048.png)

Die platzsparendste Anordnung kann du mit dem “Nesting-Tool” erzeugen. Markiere dazu alle Sterne und wähle das **Verschalteln-Werkzeug**.

* * *

Gib folgende Einstellungen ein:

![](/wiki-files/172720195/image-20231116-110602.png)

Der **Werkzeug-Durchmesser** ist jener des Konturfräsers. Der **Z-Abstand** benennt den zusätzlichen Abstand zwischen den Teilen und der **Randabstand** bezeichnet den Abstand zum Material-Rand.

* * *

Jetzt musst du nur noch die Werkzeug-Wege generieren. Markiere die inneren Sterne und wähle das **Taschen-Werkzeug**.

Es können **mehrere Fräser** dafür **eingegeben** werden. So kann der dickere die Tasche ausräumen und der schmalere kann danach besser in die Ecken fräsen.

siehe unter Werkzeug:

![](/wiki-files/172720195/image-20231116-111002.png)![](/wiki-files/172720195/image-20231116-112052.png)

Als Frästiefe muss keine **absolute Tiefe** angegeben werden. Es kann auch der **Parameter Z** (für die Materialstärke) verwendet werden. Im Beispiel wird der Boden immer 5mm stark - egal wie stark das Material ist.

Zum Schluss noch die Außen-Kontur fräsen:

Die Stege nicht vergessen!

Die Parameter für die Kontur:

![](/wiki-files/172720195/image-20231116-111517.png)

* * *

![](/wiki-files/172720195/sterne2.jpg)
