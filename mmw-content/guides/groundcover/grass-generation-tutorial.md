---
title: Grass Generation Tutorial
aliases:
tags:
  - Groundcover
  - Habasi
  - Tutorial
  - Grass
  - Tes3cmd
  - Tes3conv
  - MWSE
  - MGE-XE
description:
---
![[maintenance-expand-openmw|clean]]

## About

> [!infobox|n-th]
> 
> ## Grass Generation Tutorial
> 
> > [!caption|center wfull txt-s]
> > 
> > %%Insert Image%%
> > %%caption%%
> > %%[(image source)]()%%
> 
> ### Tutorial Info
> 
> | Type | Name |
> | --- | --- |
> | **Requirements** | - [[tes3conv\|Tes3conv]]<br>- [[habasi\|Habasi]]<br>- [[mesh-gen\|Morrowind Groundcover Generator]]<br>- [[the-lawnmower\|The LawnMower]]<br>- [[tes3cmd\|Tes3cmd]] |
> | **Tutorial Files** | [[grass.ini]] |
> 
> %% embed download link to tutorial files if applicable %%

### Goals

By the end of this tutorial, you should be able to:

1. Use [[habasi]] to make a merged esp of your whole load order
2. Use [[mesh-gen|Morrowind Groundcover Generator]] to generate a single [[guides/groundcover/index|grass]] plugin for all of Vvardenfell, Tamriel Rebuilt, and Project Cyrodiil
3. Use [[tes3conv]], [[the-lawnmower|Lawnmower]], and [[tes3cmd]] to automatically remove all clipping grass and cut down on file size

### Prerequisites

This tutorial expects that you using [[MGE-XE]] and [[mod-organizer-2|Mod Organizer 2]]. The end result can be used with [[OpenMW]], but this article will need to be updated with specific steps for anything that might be different. 

* If you have an [[OpenMW]] installation, you MUST rename or move the [[OpenMW]] folder in My Documents during this process, or [[the-lawnmower|Lawnmower]] will ignore the directory it's in and try mow a grass file in the [[OpenMW]] folder that doesn't exist.
* Ensure you have [Python](https://www.python.org/) 3.5 or later installed. You can find the latest Windows version [here](https://www.python.org/downloads/windows/).
* Download [[habasi]] and place the exe into your data files or override directory.
* Download [[tes3conv]] and place the exe into your data files or override directory.
* Download [[tes3cmd]] and place the exe into your data files or override directory.
* Download [[the-lawnmower|Lawnmower]] and place "lawnmower.py" and all three folders into your data files or override directory.
* Download [[mesh-gen|Morrowind Groundcover Generator]] and extract the folder itself (keep all the files in the folder) to your main Morrowind directory, where the main exe for the game is located. Afterwards, open the program dropdown in [[mod-organizer-2|Mod Organizer 2]] and click "Edit". Find the plus sign in the top left of the new window, then select "add from file". Navigate to the generator's exe and add it.
* Download [Aesthesia Groundcover](https://www.nexusmods.com/morrowind/mods/46377) and [Grass for Tamriel Rebuilt](https://www.nexusmods.com/morrowind/mods/54362) (download the Aesthesia version) and install them with [[mod-organizer-2|Mod Organizer 2]] as you would any other mod. Disable, rename, or delete all their esp files. You only need the textures and meshes from these mods.

---

## Step 1

Navigate to your data files or override directory and create a blank .bat file. Open it and add the following line to it:
```
habasi -OB --force-dial-type --ignore-important-errors
```
You may optionally add a second line with `timeout 10` or another number if you want it to pause for X number of seconds before closing. Name the .bat file whatever you wish. Afterwards, open the program dropdown in [[mod-organizer-2|Mod Organizer 2]] and click "Edit". Find the plus sign in the top left of the new window, then select "add from file". Navigate to where you created your .bat file and add it.

Run the .bat file through [[mod-organizer-2|Mod Organizer 2]] and you will now have an enormous merged plugin of your entire load order.

> [!warning]
> It is inadvisable to use a single merged plugin from [[habasi|Habasi]] for playing the game, as the plugin will almost certainly be filled with errors. This plugin is only intended to be used for reference for programs in the next steps.

---

## Step 2

Download this [[grass.ini]] and place it into your [[mesh-gen|Morrowind Groundcover Generator]] folder. You may rename it anything you want.

Use the ini file above with the merged plugin. Alternatively, you can add your entire load order, but since that won't be possible for the next step, it is quicker to select a single file. Click the button to generate the grass.

## Step 3

Navigate to your data files or override directory and create a blank .bat file. Open it and add the following line to it:
```
python3 lawnmower.py "MergedLoadOrder.esp" "Grass.esp" "Grass.esp"
tes3cmd delete --instance-match "Z\:-20000" Grass.esp
```
You may optionally add a second line with `timeout 10` or another number if you want it to pause for X number of seconds before closing. Name the .bat file whatever you wish. Afterwards, open the program dropdown in [[mod-organizer-2|Mod Organizer 2]] and click "Edit". Find the plus sign in the top left of the new window, then select "add from file". Navigate to where you created your .bat file and add it.

Run the .bat file through [[mod-organizer-2|Mod Organizer 2]]. The first line tells [[the-lawnmower|Lawnmower]] to "mow" the grass by reducing the amount of grass clipping through buildings and other statics. This will take 30 minutes to an hour or more depending on the speed of your CPU. Unlike what [[the-lawnmower|Lawnmower]] says in the command line, it's not actually deleting the grass, but moving it to the lowest Z-level. The second line tells [[tes3cmd]] to actually delete that grass.

## Conclusion

That's it! Now you can use the grass file as normal with MGE-XE, and can work with OpenMW as long as extra steps are taken. 

---

## Further Reading

- [[the-lawnmower|Lawnmower]]
- [[habasi|Habasi]]
- [[mesh-gen|Morrowind Groundcover Generator]]
