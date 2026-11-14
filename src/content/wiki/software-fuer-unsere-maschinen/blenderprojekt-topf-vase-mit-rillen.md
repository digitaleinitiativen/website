---
title: "✨ Blenderprojekt: Topf/Vase mit Rillen"
updated: "2025-03-15"
order: 274267334
confluenceId: "620625925"
---

**Document Properties**

-   open a **New File**
    
-   delete the cube
    
-   change units
    

![Bildschirmfoto 2025-03-11 um 11.42.16.png](/wiki-files/620625925/bildschirmfoto-2025-03-11-um-11-42-16.png)

Grid disappears? - yes, that's no problem 🙂

-   change clipping: ‘End’ to **100000cm**
    
    ![Bildschirmfoto 2025-03-11 um 11.47.57.png](/wiki-files/620625925/bildschirmfoto-2025-03-11-um-11-47-57.png)
    
-   and change the scale in the ‘Overlays’ Dropdown to **0.01**
    
    ![Bildschirmfoto 2025-03-11 um 11.52.28.png](/wiki-files/620625925/bildschirmfoto-2025-03-11-um-11-52-28.png)
    
    Now we are ready to start modeling 😎
    

**SE MAGIC STARTS NOW → ‘The Ridge’**

We need Top View (Draufsicht) → click 'Z' in Viewpoint

→ Add a circle **SHIFT + A (edit: 16 Vertices, Radius 1cm)**

→ Go to **Edit Mode**, **Vertex Select Mode** and delete the lower half of the circle (delete Vertices)

→ Go to **Object Mode** and add another circle **SHIFT + A (edit: 16 Vertices, Radius 0.25cm)**

→ Go to Edit Mode, Vertex Select Mode and delete the upper half of the circle (delete Vertices)

![Bildschirmfoto 2025-03-11 um 15.47.29.png](/wiki-files/620625925/bildschirmfoto-2025-03-11-um-15-47-29.png)![Bildschirmfoto 2025-03-11 um 15.50.20.png](/wiki-files/620625925/bildschirmfoto-2025-03-11-um-15-50-20.png)

Go back to **Object Mode** (TAB)

→ duplicate the smaller circle (SHIFT + D)

→ activate SNAP (magnet) and Vertex _(Abb. 5)_

![Bildschirmfoto 2025-03-11 um 15.55.13.png](/wiki-files/620625925/bildschirmfoto-2025-03-11-um-15-55-13.png)

→ snap the smaller circles to the big one. (**G** for _grab)_

→ select all three and press **CTRL + J** to join them _(Abb. 6)_

→ go to Edit Mode **TAB**

→ Press **A** to select all

![Bildschirmfoto 2025-03-11 um 15.58.04.png](/wiki-files/620625925/bildschirmfoto-2025-03-11-um-15-58-04.png)

→ delete four Vertices on each end till it look like _Abb. 7_

![Bildschirmfoto 2025-03-11 um 16.18.40.png](/wiki-files/620625925/bildschirmfoto-2025-03-11-um-16-18-40.png)

We can see, that the Origin _(Abb. 7 mouse)_ has changed. **Object Mode:** Lets go to ‘Object’ - ‘Set Origin’ - 'Origin to 3D Curser) _Abb. 8_

![Bildschirmfoto 2025-03-11 um 16.19.57.png](/wiki-files/620625925/bildschirmfoto-2025-03-11-um-16-19-57.png)

**Now we have a repeatable pattern ✨**

![Bildschirmfoto 2025-03-11 um 16.23.28.png](/wiki-files/620625925/bildschirmfoto-2025-03-11-um-16-23-28.png)

→ go to Edit Mode **TAB**

→ activate the two outer vertices (Abb.9)

→ press **E** to extrude an **Y** (along y-axis) till the next mayor grid

→ press **F** to fill _(Abb. 10)_

![Bildschirmfoto 2025-03-11 um 16.25.33.png](/wiki-files/620625925/bildschirmfoto-2025-03-11-um-16-25-33.png)

→ with this selection, press **CTRL+R** and press **5** (5 selections)

→ hit **ESC** or rightclick to get out of the menu

→ press **A** to select everything and press **F** to fill

→ now we have a ‘face’

![Bildschirmfoto 2025-03-11 um 16.33.01.png](/wiki-files/620625925/bildschirmfoto-2025-03-11-um-16-33-01.png)

→ Select the bottom vertices

→ Press E and Y and pull them down about two more big sections _(Abb.11)_

→ Go to Object Mode and turn on ‘Face Orientation’ (Abb. 12)

![Bildschirmfoto 2025-03-11 um 16.36.34.png](/wiki-files/620625925/bildschirmfoto-2025-03-11-um-16-36-34.png)

Now it’s red, but we want it blue.

→ go to Edit Mode and press **A**

→ Mesh → Normals → Flip _(Abb. 13)_

![Bildschirmfoto 2025-03-11 um 16.38.42.png](/wiki-files/620625925/bildschirmfoto-2025-03-11-um-16-38-42.png)

→ choose Face Select Mode

![Bildschirmfoto 2025-03-11 um 16.42.39.png](/wiki-files/620625925/bildschirmfoto-2025-03-11-um-16-42-39.png)

→ select everything and press **E** to extrude and press **2** (should make it two unit’s tall) 🥳

![Bildschirmfoto 2025-03-12 um 13.56.43.png](/wiki-files/620625925/bildschirmfoto-2025-03-12-um-13-56-43.png)

→ select the faces on each side _(Abb. 14)_

→ press **DEL** to delete the faces (two on each side)

![Bildschirmfoto 2025-03-12 um 14.14.13.png](/wiki-files/620625925/bildschirmfoto-2025-03-12-um-14-14-13.png)

→ go into **edge select mode**

→ double click on the round part (Abb. 15)

(if it’s not working, hold **ALT** while clicking)

→ hold SHIFT and double click on the other round edge

→ and SHIFT + double klick on the upper straight edge

→ three edges are active (see _Abb. 15_)

![Bildschirmfoto 2025-03-12 um 14.12.10.png](/wiki-files/620625925/bildschirmfoto-2025-03-12-um-14-12-10.png)

→ CTRL + B to bevel

→ **Bevel Options**:

-   Width to 0,25cm
    
-   Segments 3
    

→ Go back to Object Mode and add an **Array Modifier** _(Abb. 17)_

![Bildschirmfoto 2025-03-12 um 15.01.48.png](/wiki-files/620625925/bildschirmfoto-2025-03-12-um-15-01-48.png)

→ Settings _(Abb. 18)_:

-   **Count: 100**, activate **Merge** (see the difference in x-ray mode)
    

![Bildschirmfoto 2025-03-12 um 15.07.55.png](/wiki-files/620625925/bildschirmfoto-2025-03-12-um-15-07-55.png)

→ Add **‘Simple Deform’ Modifier**

![Bildschirmfoto 2025-03-12 um 15.09.56.png](/wiki-files/620625925/bildschirmfoto-2025-03-12-um-15-09-56.png)

-   activate **Bend**, Angle **\-360**, Axis **Z**
    

_(Abb. 18)_

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

**Optional: Now you have the chance to re-adjust the thickness.**

![Bildschirmfoto 2025-03-12 um 15.11.58.png](/wiki-files/620625925/bildschirmfoto-2025-03-12-um-15-11-58.png)

→ Go to Edit Mode - **TAB**

→ make sure you are in **x-ray Mode**

→ choose **vertex select** and select the inner vertices (Abb. 20)

→ press **G + Y** (grab - y-axis)

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

![Bildschirmfoto 2025-03-12 um 15.17.29.png](/wiki-files/620625925/bildschirmfoto-2025-03-12-um-15-17-29.png)

Once you are happy, apply the Array Modifier - next apply the Simple Deform Modifier.

→ dropdown (Abb. 21)

In x-ray mode, you can see a line in the Object. That means we have duplicate vertices there.

![Bildschirmfoto 2025-03-12 um 15.20.04.png](/wiki-files/620625925/bildschirmfoto-2025-03-12-um-15-20-04.png)

  
→ go to **Edit Mode**

→ Press **A** to select everything

→ Go to **Mesh** → **Merge** → **By Distance** _(Abb. 22)_

**WE HAVE A RING 🔥**

![Bildschirmfoto 2025-03-12 um 15.26.02.png](/wiki-files/620625925/bildschirmfoto-2025-03-12-um-15-26-02.png)

→ Go to **Object Mode** TAB

→ **Object** → **Set Origin** → **Geometry to Origin**  

_Abb. 23_

![Bildschirmfoto 2025-03-12 um 15.28.15.png](/wiki-files/620625925/bildschirmfoto-2025-03-12-um-15-28-15.png)

-   a little menu pops up left below
    
-   instead of Median Center, choose **Bounds Center** (_Abb. 24)_
    
-   now it centers everything perfectly up 🥳
    

Juhu! → Go into the **Side View** (click on the x-axis)

→ Press **G + Z + 1** (now the bottom of the object rests exact on the floor.)

→ Now we have to move the Origin again. Object → Set Origin → Orgin to 3D-Cursor. _(Abb. 25)_

![Bildschirmfoto 2025-03-12 um 15.36.22.png](/wiki-files/620625925/bildschirmfoto-2025-03-12-um-15-36-22.png)

→ Change the dimensions as you can see in _Abb. 26_.

![Bildschirmfoto 2025-03-12 um 15.41.14.png](/wiki-files/620625925/bildschirmfoto-2025-03-12-um-15-41-14.png)

→ now you have to apply the scaling.

-   press **CTRL+A** and click **Scale**
    
-   look at the 'Transform' window like Abb 26. → the Scale has successfully changed! (1.000)
    

**Now we are ready to change the size vertically! ⚡️**

→ go to **Object Mode**, **side view** (x-axis), x-ray mode, select everything **A**

→ go to **Edit Mode** → **Vertex Select** → and box select all the upper vertices _(Abb. 27)_

![Bildschirmfoto 2025-03-12 um 17.16.47.png](/wiki-files/620625925/bildschirmfoto-2025-03-12-um-17-16-47.png)

→ go to the **‘Transform’** box → select **‘Global’** → tipp in **Z 15cm** _(Abb.28)_

→ if you want another high, you are free. You can also change it afterwards.

![Bildschirmfoto 2025-03-12 um 17.19.59.png](/wiki-files/620625925/bildschirmfoto-2025-03-12-um-17-19-59.png)

Now we do some sections for the edge loops. Go out from x-ray mode.

→ put the mouse around the center of the object.

→ press **CTRL+R** tipp **59** (in total we have now 60 sections)

→ **right click**

_Check Abb. 29 + Abb. 30_

![Bildschirmfoto 2025-03-12 um 17.27.33.png](/wiki-files/620625925/bildschirmfoto-2025-03-12-um-17-27-33.png)![Bildschirmfoto 2025-03-12 um 17.27.23.png](/wiki-files/620625925/bildschirmfoto-2025-03-12-um-17-27-23.png)

Now we have to do the same on the inside.

→ put the mouse inside the center of the object.

→ press **CTRL+R** tipp **59** (in total we have now 60 sections)

→ **right click**

_(Abb.31)_

![Bildschirmfoto 2025-03-13 um 13.16.12.png](/wiki-files/620625925/bildschirmfoto-2025-03-13-um-13-16-12.png)

**CONGRATS** 🥳 Now we need to close se bottom.

→ MMB (middle mouse bottom) and roll the object around, to see at the bottom.

→ go into **Edit Mode** and choose **face select mode**

→ **double click** on the first row, press **SHIFT**, **double click** onto second row, **shift**, third row (not working? press **ALT**)

→ three rows are active

→ press **delete** → **Faces**

(Abb. 32)

![Bildschirmfoto 2025-03-13 um 13.27.03.png](/wiki-files/620625925/bildschirmfoto-2025-03-13-um-13-27-03.png)

→ **Edge Select Mode**

![Bildschirmfoto 2025-03-13 um 13.32.09.png](/wiki-files/620625925/bildschirmfoto-2025-03-13-um-13-32-09.png)

→ double click (or ALT+click) on the second Edge (orange edge → Abb. 32)

→ **Delete** → **Dissolve Edges**

_(Abb. 33)_

→ double click (or ALT+click) on the second edge _(orange edge → Abb. 33)_

![Bildschirmfoto 2025-03-13 um 13.33.29.png](/wiki-files/620625925/bildschirmfoto-2025-03-13-um-13-33-29.png)

→ press **F** to fill

→ double click (or ALT+click) on the first edge

→ press **F** to fill

_(Abb. 34)_

**WUHUUU!!! YOU CLOSED THAT S\*\*\*!!!**

![Bildschirmfoto 2025-03-13 um 13.41.51.png](/wiki-files/620625925/bildschirmfoto-2025-03-13-um-13-41-51.png)

→ press **MMB** and roll around to the inside.

→ activate the bottom (double click or ALT+click)

→ press **CTRL+B** to bevel (3 Segments)

→ move the mouse a little bit till the bigger section has the same size like the others. _(Abb. 35)_

-   (we made room for beveling at _Abb. 32_ 😉 )
    

**YEEEEESSS - We are ready to do the face stuff 😎**

![Bildschirmfoto 2025-03-13 um 13.55.48.png](/wiki-files/620625925/bildschirmfoto-2025-03-13-um-13-55-48.png)

→ change to **Object Mode**

![Bildschirmfoto 2025-03-13 um 13.59.52.png](/wiki-files/620625925/bildschirmfoto-2025-03-13-um-13-59-52.png)

→ Add → Lattice _(Abb. 36)_

→ go to the ‘**Add Object**’ Menu

-   Radius: **15cm**
    
-   Location **Z: 7.5cm**
    

(_Abb. 37)_

_It’s recommended to do a separate SAVE now - so you can change the following steps/settings whenever you want._

→ edit the **Lattice** settings - box on the right side  
\- Resolution **W 8**

![Bildschirmfoto 2025-03-13 um 14.05.02.png](/wiki-files/620625925/bildschirmfoto-2025-03-13-um-14-05-02.png)

→ Select the object (click)

→ go to **Modifiers** → **Add Modifier** → **Lattice**

![Bildschirmfoto 2025-03-13 um 14.28.29.png](/wiki-files/620625925/bildschirmfoto-2025-03-13-um-14-28-29.png)

→ double click on the Object ('circle') in your ‘Scene Collection' and give it a name. Maybe _‘flower pot’?_

→ click on ‘Object’ and select the Lattice by 'Object' (Abb. 40)

![Bildschirmfoto 2025-03-13 um 14.31.17.png](/wiki-files/620625925/bildschirmfoto-2025-03-13-um-14-31-17.png)

→ Select the ‘Lattice’ in your ‘Scene Collection’

→ go to **Edit Mode** TAB

→ and box select two rows (press SHIFT) like it’s shown in _Abb. 41 + 42_

![Bildschirmfoto 2025-03-13 um 14.37.54.png](/wiki-files/620625925/bildschirmfoto-2025-03-13-um-14-37-54.png)![Bildschirmfoto 2025-03-13 um 14.39.57.png](/wiki-files/620625925/bildschirmfoto-2025-03-13-um-14-39-57.png)

→ press **S** to scale + **SHIFT Z** (so it’s not scaling in z-direction)

![Bildschirmfoto 2025-03-13 um 14.44.05.png](/wiki-files/620625925/bildschirmfoto-2025-03-13-um-14-44-05.png)

**You are doing great 🤓**

→ box select the whole wave _(Abb. 44)_

→ press G+Z and pull it down _(Abb. 45)_

![Bildschirmfoto 2025-03-13 um 14.44.49.png](/wiki-files/620625925/bildschirmfoto-2025-03-13-um-14-44-49.png)![Bildschirmfoto 2025-03-13 um 14.46.38.png](/wiki-files/620625925/bildschirmfoto-2025-03-13-um-14-46-38.png)

→ box select the second row from the top (Abb. 46)

→ press **G+Z** and pull it down - make the same difference like between the bulbs

![Bildschirmfoto 2025-03-13 um 14.51.29.png](/wiki-files/620625925/bildschirmfoto-2025-03-13-um-14-51-29.png)

![KsgF.gif](/wiki-files/620625925/ksgf.gif)

If you want to print that awesome flower pot: Safe it as **obj.** and open it in Prusa Slicer 😎
