---
title: "Destruktiver Fräsfail #1"
date: "2022-08-12"
description: "Eine neue Maschine birgt neue Stolpersteine, und gerade bei einer CNC-Fräse wo hohe mechanische Kräfte und eine Vielzahl an Einstellmöglichkeiten und somit Fehlerquellen vorkommen ist es nur eine Frage der Zeit bis mal etwas schiefläuft.Wir haben das zugegebenermaßen recht schnell geschafft, anfräsen des Nutentischs, kaum ein Nutentisch der keine solchen Spuren vorweist aber dennoch suboptimal"
image: "/media/IMG_20220811_225616k.jpg"
wordpressId: 6070
---

Eine neue Maschine birgt neue Stolpersteine, und gerade bei einer CNC-Fräse wo hohe mechanische Kräfte und eine Vielzahl an Einstellmöglichkeiten und somit Fehlerquellen vorkommen ist es nur eine Frage der Zeit bis mal etwas schiefläuft.  
Wir haben das zugegebenermaßen recht schnell geschafft, anfräsen des Nutentischs, kaum ein Nutentisch der keine solchen Spuren vorweist aber dennoch suboptimal für die Maschine, extrem ärgerlich und ganz ganz schlecht fürs Ego 😉

Da das, gerade in den Anfängen, einer der häufigsten Vorfälle ist haben wir eigentlich alles unternommen um uns so einen Patzer zu ersparen. Eigentlich. Es wurde der komplette Fräsablauf „trocken“ in sicherer Höhe getestet, um sicherzustellen dass auch genau das gemacht wird was wir vor hatten und der Fräser auch sicher mit keiner Spannpratze oder sonstigen Hindernissen kollidiert.  
Es wurde berücksichtigt dass der Fräser nicht eintauchfähig ist und mit einer Rampe ins Material fahren muss, das Material wurde bombenfest aufgespannt, Stege eingefügt damit sich das Material nicht verschieben kann, diverse Vorschubrechner bemüht, 100 mal geprüft ob die Frästiefe auch ja nicht zu tief eingestellt ist und es somit absolut unmöglich ist dass der Fräser durch die Opferplatte den Nutentisch erreicht.  
  
Wie es scheint hat die CNC-Fräse aber eine andere Auffassung von „unmöglich“ und hat uns eine Lektion erteilt sowie dabei auch noch erschwerend genau den Moment abgepasst, an dem sich der Adrenalinspiegel wieder normalisiert und die Anspannung nahezu gelöst hat, da der Fräsvorgang fast beendet war und bisher alles gut ging. Bisher…  
  
Die Geräuschkulisse hatte sich deutlich verändert, es war klar dass gerade etwas relativ schief läuft, die Reaktionszeit zum STOP-Knopf war etwas zu lange, wäre aber auch nicht rechtzeitig zu schaffen gewesen und so endete es erstmal mit einem zerstörten 8mm Schaftfräser und einigen erstaunten Gesichtern.

Eine Schichtfrästiefe von 2mm in Sperrholz kann das eigentlich nicht verursachen, was war also passiert?  
Nachdem das Material entfernt war wurde das Ausmaß sichtbar, ein tiefer Schnitt in die Nutenplatte, absolut klar dass der Fräser das so nicht mitmachte aber genauso absolut unklar WARUM der Fräser die Nutenplatte überhaupt berühren konnte.  
Programmtechnisch hätte der Fräser zu diesem Zeitpunkt noch 5mm Material + 3mm Opferplatte unter sich haben müssen, hatte aber mindestens 5mm in die Nutenplatte gefräst und war somit mindestens 13mm tiefer als er hätte sein dürfen.  
Auch die Tiefenänderung die in der letzten Fräsbahn durch das Material, die Opferplatte und leider den Nutentisch ersichtlich war passte nicht zu dem programmierten Ablauf der pro Schicht maximal eine Tiefenänderung von 2mm vorsah.

Da ein Fehler dessen Ursache nicht gefunden wird auch zukünftig nicht verhindert werden kann versetzten wir uns in den CSI-Modus und analysierten die Spurenlage an Material, Fräser und Nutentisch und kamen der Ursache, an die wirklich keiner gedacht hatte und die in keinem der gefühlt 2000 angeschauten CNC-Fail-Videos vorkam, auf den Grund.  
Es war wohl eine Kombination aus der Bauart, dem verhältnismäßig sehr langen, laut Rezensionen und eigener Hörerfahrung nicht gerade laufruhigen Fräser und der leider zu zaghaften Einspannung desselben in der Spindel.  
Das führte dazu dass der Fräser duch die spiralförmige Bauform, Vibrationen verstärkt durch die Länge, Späne und Materialkontakt ein stark genuges Zugmoment aufbaute dass er aus der Einspannvorrichtung der Spindel gezogen wurde.

Es gibt somit also eher kein zu festes einspannen, gerade bei spiralförmigen Fräsern. Man könnte auch den Fräser markieren in der Einspannung, dann würde man zumindest sehen können dass der Fräser wandert, das hätte in diesem Fall vermutlich den Unterschied zwischen zusätzlicher ungeplanter Nut im Nutentisch und lediglich einem kleinen Schrecken und Sicherheitsstopp bedeutet aber wer macht das schon wenn man nicht im Traum erwartet dass so etwas überhaupt passieren könnte.  
  
Größtes Learning aus dieser Geschichte somit: erwarte das Unerwartete 😉
