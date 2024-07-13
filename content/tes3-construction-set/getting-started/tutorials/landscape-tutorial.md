---
title: Landscape Tutorial
aliases:
  - Landscape Tutorial
---
You’ll probably want to read the tutorial on World Building first. Landscaping is one of the key ways you can use in the *Construction Set* to give an area a unique look. 

### Load your plugin file.

You’ll want to load your plugin first, “MyPlugin.esp” (see the World Building tutorial). When you load it, select it to be the “active” plugin. You can run the *Construction Set* with many plugins loaded, so you must set one to active. The active plugin is the one that all of your changes are being saved to.

![[setting-active-plugin-in-tes3cs.bmp]]

### Find an area to build on.

Landscape is infinite in *Morrowind*. It goes on forever. Most of it is underwater though. An infinite ocean surrounds the game area. You can add your own islands and continents there, or modify the landscape on the existing map. If you wish to edit the landscape that is already there, you’ll probably want to find a place that isn’t too close to any existing towns. For our demo, we’ll start with an area off the existing continent that is just water.

### Shape the landscape.

The landscape is a “height map” made up of vertices. You can pull these vertices up and down to shape the landscape.  You can only move them up and down because this keeps the massive amount of landscape data to a reasonable level for storage.

Click the landscape button on the toolbar to enter landscape editing mode. Your clicks in the render window will now move and select the landscape points, instead of world objects.

![[using-landscape-editor-in-tes3cs.bmp]]

A red circle shows how big of an area you will be pulling up and down. By changing the Radius and Falloff %, you choose how the vertices move as you select and move the mouse up and down. Start pulling the landscape up so it’s over the water. 

![[raising-landscape-above-water-in-tes3cs.bmp]]

By moving large sections of landscape up and then others down, you can sculpt the mesh like clay. Also try using the “smoothing” checkbox. This will allow you to smooth out areas to get rid of unwanted jaggedness that can occur from rapid height changes.

It is best to edit the heights in wireframe mode, but switch often to textured mode so you can see where the ocean height is hitting your area.

![[editing-landscape-with-wireframe-in-tes3cs.bmp]]

![[toggleing-wireframe-mode-in-tes3cs.bmp]]

### Texture the landscape.

Once you have a shape you like, you’ll want to texture it. Right clicking on the landscape paints it with your currently selected texture. Try to follow the shapes you have built. The landscape textures will automatically smooth into one another. If you get more than 2 textures hitting the same area, you’ll want to move some things around and try to get the texture match on the corner, as only 2 textures look perfect hitting the same spot. A landscape texture covers 4 landscape vertices, so you may also want to adjust the shape of the landscape when you see where the textures fall. 

![[applying-textures-to-landscape-in-tes3cs.bmp]]

### Place landscape foliage.

Dress your landscape up with trees, rocks, bushes and anything else you can think of. Leave landscape editing and drag objects in from the object window. The larger trees and rocks are under the “static” tab and the plants and bushes are under “containers” since they contain ingredients such as berries. Once you get a bunch in you like, use the copy and paste functions to move groups around quickly.

![[placing-objects-on-landscape-in-tes3cs.bmp]]

### Vertex Coloring

The finishing touch on landscape is vertex coloring. Go back into landscape editing mode and select “Edit colors”. Your mouse now becomes a paintbrush. You can select a color for right clicking and one for left clicking. Vertex painting can really enhance your area by adding darkened areas under trees and weathered areas around rocks.

![[vertex-coloring-a-landscape-in-tes3cs.bmp]]

### Place dungeon entrance and link it.

Now add an entrance into your dungeon we created in the World Building Tutorial. Drag in a door object from the object window. Double click the door and select the “Teleport” option and choose the Cell you want the door to go to, “My Cave of Death and Adventure” in this case. Do the same to the door in the dungeon, linking it to the outside. After you choose the Cell you want to go to, you’ll get to place a DoorMarker that shows the exact location the door goes to.

![[selecting-a-doormarker-in-tes3cs.bmp]]

### Save and test.

Now go to your new area in the game. Make sure the doors work correctly. You’ll probably see some areas in your landscape that need smoothing, or places where you could have used the texture placement better. You can also adjust some of the hills so they are too steep for the player to walk over. You should also think about vertex coloring a path to the dungeon entrance, or some kind of landmarks. You don’t want the player to miss your excellent creation.
