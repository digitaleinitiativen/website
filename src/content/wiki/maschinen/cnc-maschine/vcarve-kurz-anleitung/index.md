---
title: "Vcarve - Kurz-Anleitung"
updated: "2025-03-01"
order: 2319
confluenceId: "144211972"
---

# _\*NEU\*_ Vectric VCarve Pro 12

**Vcarve Pro 11** wird nicht mehr unterstützt, bitte nur noch VCarve Pro 12 verwenden!

Um **VCarve Pro 12** verwenden zu können braucht man einen eigenen Account der mit dem Maschinenraum verknüpft sein muss. Dies ersetzt auch die bisher nötige MakerspaceId. Es gibt zwei Möglichkeiten einen solchen verknüpften Account zu erstellen:

-   Am CNC-Rechner im Maschinenraum **VCarve Pro 12** starten und in dem Logindialog dann einen neuen Benutzer registrieren, die Verknüpfung erfolgt dann automatisch, man darf allerdings nicht vergessen den Bestätigungslink im Registrierungsmail welches man erhält zu öffnen und den Anweisungen zu folgen.
    
-   Mit folgendem **Einladungslink** einen Benutzer registrieren: [Einladungslink Maschinenraum Dornbirn](https://portal.vectric.com/organization/shared-invite/k5ssWib9xA0Ig4nvX6SF)  
    Auch hier erhält man ein Bestätigungsmail mit einem Link den man klicken und den Anweisungen folgen muss bevor man sich damit bei **VCarve Pro 12** anmelden kann.
    
-   Wer schon einen Benutzer hat oder direkt auf [V&Co Benutzerportal](https://portal.vectric.com) einen angelegt hat, kann dann nachträglich noch den Einladungslink aus dem zweiten Punkt verwenden um die Verknüpfung mit unserem Makerspace zu bewerkstelligen.
    

Im [V&Co Benutzerportal](https://portal.vectric.com) findet man auch den Downloadlink von VCarve Pro Trial. Wenn man diese installiert und sich dann dort mit seinen Benutzerdaten anmeldet hat man eine Vollversion der Software die alles kann bis auf Gcode erstellen. Dies geht nur über die Softwareinstanz auf dem CNC-PC im Maschinenraum. Dort könnt ihr euch dann direkt mit euren Benutzerdaten anmelden.  
  
PS: Solltet gefragt werden welcher Postprocessor benutzt werden soll, bitte nicht den BZT USB V2 nehmen sondern sucht in der Liste nach “MS Maschinenraum BZT USB V3.2”. Prinzipiell hat ersterer zwar auch funktioniert bei Tests, aber wir hatten bisher immer den V3.2 verwendet und bleiben lieber bei dem.  
Hintergrundinfo: Es lassen sich in **VCarve Pro 12** nur noch Postprocessoren verwenden die Vectric bereitstellt, und da gab es bislang nur den V2, unser V3.2 wurde nun aber für uns auch bereit gestellt.

Bei Problemen mit der Registrierung/Verknüpfung gerne in Slack bei @Stefan Lutz oder per Mail bei [stefan.lutz@digitaleinitiativen.at](mailto:stefan.lutz@digitaleinitiativen.at) melden.

# **2.5D - Fräsen**

1.  Erstelle ein neues Dokument und gib die Maße deines Rohmaterials ein
    
2.  Lade deine DXF-Datei oder erstelle mit [**Vcarve**](/wiki/maschinen/cnc-maschine/vcarve-kurz-anleitung/vcarve-anleitung/) [Vcarve - Anleitung](/wiki/maschinen/cnc-maschine/vcarve-kurz-anleitung/vcarve-anleitung/) deine Linien(Pfade) für die Werkzeugwege
    
3.  Markiere eine Linie und definiere die Art des Werkzeugweges (Kontur, Tasche, …) und das zu verwendende Werkzeug (Fräser)
    
4.  Definiere die Fräser-Parameter (und speichere sie in der Werkzeug-Datenbank zur Wiederverwendung
    
5.  Generiere den NC-Code und speichere ihn
    
6.  verwende diese NC-Datei mit der Steuerungssoftware [CNC4.03-Anleitung](/wiki/maschinen/cnc-maschine/cnc4-03-anleitung/)
    

# **3D - Fräsen**

1.  lade deine STL-Datei
    
2.  definiere die Maße des Material-Rohteils
    
3.  markiere das 3D-Objekt und wähle 3D-Schruppen und definiere einen **Schruppfräser**
    
4.  markiere das 3D-Objekt und wähle 3D-Schlichten und definiere einen **Schlichtfräser**
    
5.  speichere die Werkzeugwege als g-Code (NC-Datei)
    
6.  verwende diese NC-Datei mit der Steuerungssoftware [CNC4.03-Anleitung](/wiki/maschinen/cnc-maschine/cnc4-03-anleitung/)
    
7.  hole dir einen Kaffee - das Fräsen dauert 😀
