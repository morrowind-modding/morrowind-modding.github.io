How to Build Fake Exteriors Using Export Sphere

## Prerequisites:

1. The first thing you are going to want to do is make a copy of the exterior cell you want to turn into an interior. 
2. Make sure you have [G7’s Export Sphere ](https://www.nexusmods.com/morrowind/mods/52245?tab=files)installed. You can find it here: You will need MWSE. After it is installed, go to MWSE/mods/exportSphere, open the script, and comment out everything except for statics. If you try exporting things like animated activators, it will cause complications down the line.
3. [Blender](https://www.blender.org/download/)
4. [Greatness7's NIF plugin](https://github.com/Greatness7/io_scene_mw)
5. (Optional) [NifSkope]()
6. (Optional) [GIMP](https://www.gimp.org/downloads/)
7. (Optional) BSA Unpacking tool, such as [BSArch](https://www.nexusmods.com/fallout4/mods/63243)



Now we're ready to work! Go to the cell you want to copy and hit ctrl+shift+e. This will bring up the export sphere. You can scroll up on the mouse wheel to increase the size of the sphere. Since you will want the cell you are in (along with the 8 surrounding cells), scroll all the way up to 3000 units.

In Blender, import the nif file. You'll normally find it under `Meshes/g7`. Locate the building you are creating an exterior view for. Select everything that cannot be seen from the windows of your interior cell and delete it:
![[Pasted image 20240209141830.png]]



There are even more optimizations you can do, but this is a start. Next, find the exterior
portion of your interior and delete everything except the windows:

![[Pasted image 20240209141947.png]]


Since Morrowind buildings are often bigger on the inside, you will not be able to perfectly
match all of the windows most of the time. Export your nif (don’t close Blender if you can handle it), create a new static with it in the construction set, and move it into your interior. Do your best to match the windows:

![[Pasted image 20240209142010.png]]

Once you have roughly matched the windows, delete the windows in your nif back in Blender and re-export. Resist the urge to close and re-open the Construction Set to get the updates, as it will make replacing parts of the exterior nif with the matching statics more difficult.

You will need windows with transparent textures if Morrowind Interiors Project has not already created them. This is when you will need GIMP and NifSkope. You will also want to unpack your BSAs at this time so that you may access the assets. Open up the mesh in NifSkope and click the window if you don’t know what texture you need.

![[Pasted image 20240209142042.png]]

# Can we elaborate on this a bit?
Import the texture into GIMP. If your texture has parts that should not be transparent, you will need to select only the transparent parts and erase them to 50% or so. Otherwise, you can erase the entire texture to around 50% opacity:

![[Pasted image 20240209142339.png]]

After you export it, go back into NifSkope and select the texture you just exported. Lastly, right click on the NiTriShape for the window and go down to Node and select Add Property. You need to add a NiAlphaProperty:

![[Pasted image 20240209142406.png]]

Now you can go back into the Construction Set and replace the mesh with your new mesh.
If your mesh does not have a window built into it, there are a few extra steps. Write down the X, Y, Z location and rotation of both objects (window mesh and the mesh the window is cutting into). Import both meshes into Blender, and set their X, Y, Z position to their positions in the Construction Set divided by 100 (4416.123 to 44.16123, etc.). The Z rotation should be the same (sometimes you have to add/subtract 180 degrees), but for the Y rotation in Blender, you need to use the X rotation in the Construction Set (This is also sometimes off and needed to be mirrored). Other than the division by 100, this can be hit-or-miss. 

After some fiddling, you should be able to get both objects within Blender
as they were in the game:

![[Pasted image 20240209142420.png]]

Select the non-window mesh and do a Boolean with the window mesh. Sometimes you need to tweak the settings so that only what should be deleted is deleted, such as the Self Intersection checkbox:

![[Pasted image 20240209142437.png]]

After you apply the Boolean, make sure you 0 out the X,Y,Z position and rotation of the mesh:

![[Pasted image 20240209142647.png]]

Now you can export and add it to the Construction Set. You will also want to create a mesh for the part with the window on it and replace the mesh in game with the new mesh. You may also want to set the 3D scale to something like 1.01, as there can be a loss of precision in the conversion:

![[Pasted image 20240209142701.png]]

The next part is the most tedious part, and will often require going in and out of the game to
test. Various objects can cause collision issues, so you will need to move objects that cannot be seen out of the way. If they can be seen, you will need to get creative. For example, here is the front of Ghorak Manor in Caldera:

![[Pasted image 20240209142718.png]]

As can be seen, the door should be visible from the window:

![[Pasted image 20240209142734.png]]

However, the exterior nif will probably conflict with the interior. Here, the door was altered so that it can be seen from the window, but also not blocking the interior door:

![[Pasted image 20240209143425.png]]

It was also bent to prevent the player from looking out the window and back into the hallway. In another example, Shenk’s Shovel of Caldera has a window overlooking part of the building:

![[Pasted image 20240209143439.png]]

This section of building, however, would clip with the room it represents, so it needs to be removed in the exterior nif. Looking out the window, one can see into the room below, as the ceiling has no mesh on that side:

![[Pasted image 20240209143451.png]]

To fix this, I created a mesh using part of the roof mesh of one of the Nord houses. I then placed it below the window, but not so low that it clipped into the room below:

![[Pasted image 20240209143502.png]]

Now when one looks out of the window, this is what they see:

![[Pasted image 20240209143515.png]]

These are just two examples of the sorts of tweaks you may need to make. It’s all smoke-and-mirrors, but do your best to create the proper illusion for the mod users.

But wait, there’s more! The world nif is a solid object. If you use something like Glow in the
Dahrk, the windows out of your window will not change. What you will need to do is place a window over the nif, and then go back into Blender and delete the window. This helps you make sure the placement is perfect. 

Another approach is to select everything from the exterior cell and paste it into the
interior cell. Moving it all as one mass, try to line everything up with the export (use the smallest objects as a guide). Once everything overlaps, go into your export in blender and delete everything except for the land tiles. This should be done for every mesh, so that mesh replacers are taken into account. You will also want to place any activator and lights:

![[Pasted image 20240209143538.png]]

Now that everything has been placed, toggle collision and see what can’t be seen from the
window. If something is covered by a mountain or building, delete it from the nif.
Lastly, check the Behave Like Exterior box for the interior cell. The water level may now be
higher than needed. What you will want to do is place an activator in the interior that will use
SetWaterLevel on cellChanged == 1 to the water level you need. You may need to experiment to get
this just right. If OpenMW does not yet support interior weather, feel free to look at how Morrowind Interiors Project fakes interior weather: https://www.nexusmods.com/morrowind/mods/52237