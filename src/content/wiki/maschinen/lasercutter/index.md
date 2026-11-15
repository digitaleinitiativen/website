---
title: "Lasercutter"
updated: "2024-05-17"
order: 52
confluenceId: "22511617"
---

**MOST IMPORTANTLY**

-   Innenraum vor dem Einschalten auf Hindernisse überprüfen.
    
-   Nur geeignetes Material verwenden (siehe Materialdatenbank).
    
-   Magnete vorsichtig behandeln und in der Ablage ablegen, nie unkontrolliert zusammenprallen lassen.
    
-   **NIEMALS** mehr als 60% Leistung einstellen, es bringt nicht mehr Leistung und schadet nur der Röhre.
    
-   **Laser nie unbeaufsichtigt laufen lassen!**
    
-   Immer eine angemessene Zeit warten, bis der Deckel geöffnet wird damit Dämpfe abziehen können.
    
-   Laser auf und unter dem Wabenbett nach dem Verwenden von kleinen Teilen und Restmaterial befreien→ sonst kann ein Schmorbrand entstehen! Schlüssel zum Öffnen des unteren Bereichs befindet sich im gelben Koffer.
    
-   Nach dem Lasern wird die Maschine gereinigt! Schlüssel für die Sammelklappe ist im kleinen Koffer.
    
-   Bitte nicht auf das Wabenbett lehnen! → Es ist dann nicht mehr im Wasser.
    

**How to get started:**  
\> Hauptschalter an der rechten Seite der Maschine einschalten (roter Drehknopf)

\> Computer (hinten am Bildschirm rechts) einschalten und Passwort 😉 eingeben

\> Laserkopf fährt nun auf den letzten Startpunkt. Wenn der Laserkopf zum Stehen kommt, ist ein Signalton zu hören. Der Laser ist nun bereit für die Nutzung.

![](/wiki-files/22511617/giphy-2.gif)

Warnlicht am Lasercutter Blinkt rot → Resetknopf drücken **(immer nach dem Türöffnen)**

max. Materialgröße: 1300mm x 900mm

### **Laser einrichten**

Deckel öffnen und gewünschtes Material einlegen, Deckel schließen und Resetknopf drücken  

![](/wiki-files/22511617/distanzblock-lasercutter-01.jpg)

**Fall 1A: Der Laserkopf ist über 2 cm von der Materialoberfläche entfernt**

Mittels Z-Achse (Steuerungspanel an der Maschine) die passende Höhe einstellen.  
Dafür wird am Steuerungspanel der Knopf Z gedrückt (Pfeil rechts bewegt das Wabenbett nach unten und Pfeil links nach oben). Mit der Esc Taste landet man im normalen Steuerungsmodus.

Weiter zu Schritt 1B.

**Fall 1B : Der Laserkopf ist weniger als 2cm von der Materialoberfläche entfernt**

Jetzt muss nur mehr mittels Distanzblock die Linsenhöhe arretiert werden.

Seitliches Rad am Laserkopf öffnen; Laserkopf liegt locker am Distanzblock; Schraube festziehen und sicherstellen, dass nichts zwischen Linse und Material liegt. Gegebenenfalls Material mit Magneten sichern.

Nun wird der **Startpunkt** im Lasercutter gesetzt. Dabei sollte platzsparend gearbeitet werden. Der rot leuchtende Punkt unterhalb des Laserkopfs markiert die aktuelle Position. Der Startpunkt wird gesetzt indem der Knopf ‘Bestätigen Startposition’ gedrückt wird. Achtung! Je nachdem, wo der Ankerpunkt im Programm gesetzt wird, fährt der Laser danach in eine vorgefertigte Richtung. Es empfiehlt sich die Einstellungen durch die Funtkion ‘_Test Rahmen_’ im Programm RD Works zu prüfen.

Die Voreinstellungen sind nun abgeschlossen.

![](/wiki-files/22511617/giphy-3.gif)

### **Programm RD Works öffnen**

Welche Dateiformate sind möglich? → dxf, pdf und jpg (z.B. für Fotos).  
\-> Datei importieren

![](/wiki-files/22511617/image.jpg)

Mit der _Farbpalette_ _(siehe Bild 1 unten links)_ können die Objekte in verschiedene **Gravier- & Schneideeinstellungen** eingeteilt/unterschieden werden. Dabei können spezifische Eigenschaften in der Ebenenpalette festgelegt werden. Jede genutzte Farbe wird als Ebene in der Ebenenpalette _(siehe Bild 1 oben rechts)_ angezeigt. Mit einem Doppelklick in der Ebenenpalette können die Ebeneneinstellungen geöffnet werden.

![](/wiki-files/22511617/image-1.png)

![](/wiki-files/22511617/image-2.png)

In der **Materialbibliothek** _(siehe Bild 2: Ebeneneinstellungen)_ befinden sich diverse Materialien mit den jeweiligen Voreinstellungen.

**Es werden nur jene Objekte gelasert, die im Dokument markiert wurden.**

Das grüne Quadrat im Auswahlrahmen _(siehe Bild 1 Ankerpunkt)_ zeigt den **Startpunkt des Lasers** an. Dieser muss nun mit der Laserposition auf dem eingelegten Material im Lasercutter übereinstimmen. (siehe Laser einrichten).

**Position einstellen:** Einstellungen > Systemeinstellungen > Haupteinstellungen > Kopfposition) bitte an den anderen Parametern nichts umstellen. Danke 😉

**Prioritäten: Zuerst Gravieren, dann schneiden.**  
Durch das Anordnen der Farben in der Ebenenpalette kann die Reihenfolge der Gravierebenen bestimmt werden. Das Programm arbeitet immer von oben nach unten.

**Kontrolle der Objektgröße**

Rechts unten im Programm befindet sich der Block _‘Laseransteuerung’_ . Mit _‘Test Rahmen’_ kann die Gesamtfläche, bestehend aus einem automatisch generierte Rechteck um alle markierten Objekten, am Material abgefahren und die Position kontrolliert werden. Nach dem Klick auf ‘Test Rahmen’ geht ein Fenster für die Geschwindigkeit auf. Hier gibt man ein, wie schnell der Laser den Rahmen abfahren soll. **Empfehlung: 100 mm/s.**  
Hierbei ist zu beachten, dass der rote Punkt sich über die ganze Strecke hinweg auf dem Material befinden soll, sonst muss das Material oder die Grafik adjustiert werden.

Good to know: Die Funktion _‘Cut Rahmen’ w_ürde das Material an der zuvor beschriebenen Linie durchschneiden.

**Passt alles?**

→ **Kontrolle:** Häckchen unten rechts bei ‘_ausgewählte Grafiken_’ ist gesetzt.  

Drücke ‘_Start_’ und vermerke die Maschinenlaufzeit und das verbrauchte Material im [Calculator](http://xiberg.eu/di/calculator/#).

**MASCHINE STOPPEN**  
  
**'Pause/Weiter'**: Im Programm und am Bedienfeld des Lasers zu finden. Ermöglicht es, während eines Auftrags zu unterbrechen. Lose Stücke können so während einem Auftrag entfernt oder Material mit Magneten fixiert werden, ohne den Auftrag ganz abzubrechen.  
Wenn alles erledigt ist Klappe schließen > _Resetknopf_ drücken > ‘_Weiter_’ drücken

**‘Stop’:** Der gesamte Auftrag wird gecancelt. Laserkopf geht in Ausgangsposition.

**‘Notaus’:** Laserkopf bleibt in Position und hört auf zu lasern. Nach Behebung des Problems, muss der _Not-Aus-Knopf_ wieder entriegelt werden (drehen) um die Maschine wieder zu aktivieren.

**When things get hot**

**Magnete:** Genug Distanz zwischen Laserkopf und Magneten!

**Es raucht stark oder brennt:** Das könnte daran liegen, dass die Absaugung nicht korrekt eingestellt ist oder der Laser zu langsam/mit zuviel Kraft fährt. Lösung: RESET / NOT AUS! Wende dich an die im Maschinenraum zuständige Person.

Im Zweifelsfall Feuerlöscher! **ACHTUNG KOHLENDIOXID FEUERLÖSCHER VERWENDEN!**

Nur hinterlegte Materialien verwenden. Im Zweifelsfall Hosts oder Maschinenraumteam fragen.

![](/wiki-files/22511617/giphy-4.gif)

<table data-table-width="760" data-layout="default" data-local-id="ea3a2067-6799-4c56-97b9-6f53609a84c7" class="confluenceTable"><colgroup><col style="width: 254.0px;"><col style="width: 253.0px;"><col style="width: 253.0px;"></colgroup><tbody><tr><th class="confluenceTh"><p style="text-align: center;"><strong>Material</strong></p></th><th class="confluenceTh"><p style="text-align: center;"><strong>Schneiden</strong></p></th><th class="confluenceTh"><p style="text-align: center;"><strong>Gravieren</strong></p></th></tr><tr><td class="confluenceTd"><p><strong><span class="inline-comment-marker" data-ref="948ca6ab-9e27-4fa6-9d10-4fe153e2ccb2">Holzarten</span></strong></p></td><td class="confluenceTd"><p></p></td><td class="confluenceTd"><p></p></td></tr><tr><td class="confluenceTd"><p>Echtholz / Vollholz</p></td><td class="confluenceTd"><p style="text-align: center;"><span data-colorid="dus24gtuw2">ja</span></p></td><td class="confluenceTd"><p style="text-align: center;"><span data-colorid="j0inn7pcyt">ja</span></p></td></tr><tr><td class="confluenceTd"><p>Sperrholz / Schichtholz</p></td><td class="confluenceTd"><p style="text-align: center;"><span data-colorid="cz78i1ehlk">ja</span></p></td><td class="confluenceTd"><p style="text-align: center;"><span data-colorid="mil8tgwph5">ja</span></p></td></tr><tr><td class="confluenceTd"><p>MDF</p></td><td class="confluenceTd"><p style="text-align: center;"><span data-colorid="s79gxto7vv">ja</span></p></td><td class="confluenceTd"><p style="text-align: center;"><span data-colorid="bd9alw88dw">ja</span></p></td></tr><tr><td class="confluenceTd"><p>HDF</p></td><td class="confluenceTd"><p style="text-align: center;"><span data-colorid="d5a3t6aw9y">ja</span></p></td><td class="confluenceTd"><p style="text-align: center;"><span data-colorid="lre6c0bdry">ja</span></p></td></tr><tr><td class="confluenceTd"><p>Pressspanplatten</p></td><td class="confluenceTd"><p style="text-align: center;"><span data-colorid="lzls3g8707">ja</span></p></td><td class="confluenceTd"><p style="text-align: center;"><span data-colorid="ebhmv553ur">ja</span></p></td></tr><tr><td class="confluenceTd"><p>Kork</p></td><td class="confluenceTd"><p style="text-align: center;"><span data-colorid="ur6qdzutjj">ja</span></p></td><td class="confluenceTd"><p style="text-align: center;"><span data-colorid="vp6ouufdxw">ja</span></p></td></tr><tr><td class="confluenceTd"><p></p></td><td class="confluenceTd"><p></p></td><td class="confluenceTd"><p></p></td></tr><tr><td class="confluenceTd"><p><strong>Kunststoffe</strong></p></td><td class="confluenceTd"><p></p></td><td class="confluenceTd"><p></p></td></tr><tr><td class="confluenceTd"><p>Acrylglas XT</p></td><td class="confluenceTd"><p style="text-align: center;"><span data-colorid="qpexle0wj3">ja</span></p></td><td class="confluenceTd"><p style="text-align: center;"><span data-colorid="ehci55tn1l">ja</span></p></td></tr><tr><td class="confluenceTd"><p>Acrylglas GS</p></td><td class="confluenceTd"><p style="text-align: center;"><span data-colorid="qtt0ugk4h7">ja</span></p></td><td class="confluenceTd"><p style="text-align: center;"><span data-colorid="jasrvbbkjb">ja</span></p></td></tr><tr><td class="confluenceTd"><p>POM</p></td><td class="confluenceTd"><p style="text-align: center;"><span data-colorid="qw75fztm5h">ja</span></p></td><td class="confluenceTd"><p style="text-align: center;"><span data-colorid="wbqo59rcuo">ja</span></p></td></tr><tr><td class="confluenceTd"><p>PE</p></td><td class="confluenceTd"><p style="text-align: center;"><span data-colorid="u4zihejysr">ja</span></p></td><td class="confluenceTd"><p style="text-align: center;"><span data-colorid="qud0ahd2ay">nein</span></p></td></tr><tr><td class="confluenceTd"><p>PA</p></td><td class="confluenceTd"><p style="text-align: center;"><span data-colorid="mfme7mbnte">ja</span></p></td><td class="confluenceTd"><p style="text-align: center;"><span data-colorid="jbd4mxe20g">nein</span></p></td></tr><tr><td class="confluenceTd"><p>Gummi</p></td><td class="confluenceTd"><p style="text-align: center;"><span data-colorid="ram3vf3wxi">ja</span></p></td><td class="confluenceTd"><p style="text-align: center;"><span data-colorid="p4l3rgypu6">ja</span></p></td></tr><tr><td class="confluenceTd"><p>Moosgummi</p></td><td class="confluenceTd"><p style="text-align: center;"><span data-colorid="xn7iafidm2">ja</span></p></td><td class="confluenceTd"><p style="text-align: center;"><span data-colorid="inwznrsnau">ja</span></p></td></tr><tr><td class="confluenceTd"><p>PS</p></td><td class="confluenceTd"><p style="text-align: center;"><span data-colorid="zyyv6nflg1">ja</span></p></td><td class="confluenceTd"><p style="text-align: center;"><span data-colorid="wb7y6ym6v1">nein</span></p></td></tr><tr><td class="confluenceTd"><p>SAN</p></td><td class="confluenceTd"><p style="text-align: center;"><span data-colorid="p0f7jlle65">ja</span></p></td><td class="confluenceTd"><p style="text-align: center;"><span data-colorid="pvfh7x2ari">nein</span></p></td></tr><tr><td class="confluenceTd"><p>PUR</p></td><td class="confluenceTd"><p style="text-align: center;"><span data-colorid="fzsqten546">ja</span></p></td><td class="confluenceTd"><p style="text-align: center;"><span data-colorid="f0paji8hjt">ja</span></p></td></tr><tr><td class="confluenceTd"><p>Schichtkunststoff / Schichtacryl</p></td><td class="confluenceTd"><p style="text-align: center;"><span data-colorid="xm9pq8c9xt">ja</span></p></td><td class="confluenceTd"><p style="text-align: center;"><span data-colorid="etx02ll8w1">ja</span></p></td></tr><tr><td class="confluenceTd"><p>Spiegelacryl</p></td><td class="confluenceTd"><p style="text-align: center;"><span data-colorid="rjyu7nx1f6">ja</span></p></td><td class="confluenceTd"><p style="text-align: center;"><span data-colorid="fgvtio346z">ja</span></p></td></tr><tr><td class="confluenceTd"><p>PVC &amp; andere Chlorid-haltige Kunststoffe</p></td><td class="confluenceTd"><p><span data-colorid="nlhtddbq98">NEIN: Es entsteht hochgiftiges Chlorgas!!!</span></p></td><td class="confluenceTd"><p><span data-colorid="cvkm6ab0lp">NEIN: Es entsteht hochgiftiges Chlorgas!!!</span></p></td></tr><tr><td class="confluenceTd"><p></p></td><td class="confluenceTd"><p></p></td><td class="confluenceTd"><p></p></td></tr><tr><td class="confluenceTd"><p><strong>Schaumstoffe</strong></p></td><td class="confluenceTd"><p style="text-align: center;"></p></td><td class="confluenceTd"><p style="text-align: center;"></p></td></tr><tr><td class="confluenceTd"><p>PU-Schaum</p></td><td class="confluenceTd"><p style="text-align: center;"><span data-colorid="dsqhc80a4t">ja</span></p></td><td class="confluenceTd"><p style="text-align: center;"><span data-colorid="xl2jvfmfhm">ja</span></p></td></tr><tr><td class="confluenceTd"><p>PE-Schaum</p></td><td class="confluenceTd"><p style="text-align: center;"><span data-colorid="ea5rvebikb">ja</span></p></td><td class="confluenceTd"><p style="text-align: center;"><span data-colorid="u7ks16zgp6">ja</span></p></td></tr><tr><td class="confluenceTd"><p>Styropor / Styrodur</p></td><td class="confluenceTd"><p style="text-align: center;"><span data-colorid="kkuhsyn7yq">ja</span></p></td><td class="confluenceTd"><p style="text-align: center;"><span data-colorid="yu9b8amosc">nein</span></p></td></tr><tr><td class="confluenceTd"><p>Schaumstoff</p></td><td class="confluenceTd"><p style="text-align: center;"><span data-colorid="nirtciu3ar">ja</span></p></td><td class="confluenceTd"><p style="text-align: center;"><span data-colorid="dsp94p19ld">ja</span></p></td></tr><tr><td class="confluenceTd"><p></p></td><td class="confluenceTd"><p></p></td><td class="confluenceTd"><p></p></td></tr><tr><td class="confluenceTd"><p></p></td><td class="confluenceTd"><p></p></td><td class="confluenceTd"><p></p></td></tr><tr><td class="confluenceTd"><p></p></td><td class="confluenceTd"><p></p></td><td class="confluenceTd"><p></p></td></tr><tr><td class="confluenceTd"><p><strong>Sonstige Materialien</strong></p></td><td class="confluenceTd"><p></p></td><td class="confluenceTd"><p></p></td></tr><tr><td class="confluenceTd"><p>Stein, Granit, Marmor</p></td><td class="confluenceTd"><p style="text-align: center;"><span data-colorid="hq7yjadk4v">nein</span></p></td><td class="confluenceTd"><p style="text-align: center;"><span data-colorid="wkwv1r2jgt">ja</span></p></td></tr><tr><td class="confluenceTd"><p>Fliese</p></td><td class="confluenceTd"><p style="text-align: center;"><span data-colorid="xh8rr3wi01">nein</span></p></td><td class="confluenceTd"><p style="text-align: center;"><span data-colorid="o5z03hwu7s">ja</span></p></td></tr><tr><td class="confluenceTd"><p>Glas, Spiegel</p></td><td class="confluenceTd"><p style="text-align: center;"><span data-colorid="ct1p67v5ur">nein</span></p></td><td class="confluenceTd"><p style="text-align: center;"><span data-colorid="pnw4v8nc3i">ja</span></p></td></tr><tr><td class="confluenceTd"><p>Schiefer</p></td><td class="confluenceTd"><p style="text-align: center;"><span data-colorid="qdv4xte6s7">nein</span></p></td><td class="confluenceTd"><p style="text-align: center;"><span data-colorid="irp0lgu36o">ja</span></p></td></tr><tr><td class="confluenceTd"><p>Leder</p></td><td class="confluenceTd"><p style="text-align: center;"><span data-colorid="a7fm74y3ea">ja</span></p></td><td class="confluenceTd"><p style="text-align: center;"><span data-colorid="dn752eaodh">ja</span></p></td></tr><tr><td class="confluenceTd"><p>Jeansstoff, Filz</p></td><td class="confluenceTd"><p style="text-align: center;"><span data-colorid="pn1z6xq6xc">ja</span></p></td><td class="confluenceTd"><p style="text-align: center;"><span data-colorid="mi6md56eny">ja</span></p></td></tr><tr><td class="confluenceTd"><p>Baumwollstoffe</p></td><td class="confluenceTd"><p style="text-align: center;"><span data-colorid="symc2y5cak">ja</span></p></td><td class="confluenceTd"><p style="text-align: center;"><span data-colorid="lbefy6zn7l">ja</span></p></td></tr><tr><td class="confluenceTd"><p>Synthetische Stoffe</p></td><td class="confluenceTd"><p style="text-align: center;"><span data-colorid="bn7b7357m0">ja</span></p></td><td class="confluenceTd"><p style="text-align: center;"><span data-colorid="woxqsqnqv5">ja</span></p></td></tr></tbody></table>

**Sonderfall Metalle:** Schneiden ist weder bei Aluminium noch Kupfer möglich. Gravieren: bei Alu, wenn es eloxiert ist lässt sich die Eloxalschicht wegbrennen, das geht also. Bei blankem Alu passiert nichts.  
Bei Kupfer ähnlich, blankes Kupfer wird nix passieren, wenn es eine Oxydschicht drauf hat kann man die weggravieren.  
Will man Metalle trotzdem gravieren muss man sich so einen Gravur-Lack besorgen der vom Laser dann eingebrannt wird.

![](/wiki-files/22511617/giphy-5.gif)
