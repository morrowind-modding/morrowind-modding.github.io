---
description: In-depth guidelines on creating patches for ESP files
tags:
  - Guide
  - Patches
  - Construction-Set
title: Creating a Patch for an ESP
aliases:
  - Creating a Patch for an ESP
---
This page is a guideline on creating patches for ESP files, describing the different methods that can be used to create an ESP patch and providing links to step-by-step tutorials.

## Important Considerations: What an ESP Can and Cannot Do

Generally speaking, an ESP cannot modify instances from another ESP. There are ways to make them do so by forcing an ESP to depend on another ESP as its master, but they will only reliably work in OpenMW, and are prone to breaking if the ‘master’ ESP changes (which it will do if it is edited and saved in the Construction Set). It is important to understand these limitations when creating ESP patches.

For a thorough explanation, see the [Project Tamriel Wiki page: Content File Guidelines](https://wiki.project-tamriel.com/wiki/Content_File_Guidelines)

It is also important to note that many techniques used for creating patches for ESPs can be used in clever ways to make a mod compatible with one or more other mod ESPs from the outset, removing the need for a separate patch ESP.

***

## Types of Patches for ESPs
These can be separated into three categories:

### ESP Replacer Patch
Simple and effective, but has its own limitations.

### Additional ESP Patch
These use an additional ESP to make their changes and in most cases will need to load after the mods they are patching.
- Object Record Override
- Pathgrid Reset
- Landscape Fix
- ‘Invisible Mesh’ trick

### Other ESP Patches
- Utilizing Global Scripts - Built-in compatibility without the need for a separate patch
- [[tes3cmd|Tes3cmd]] BAT File

***

## ESP Replacer

Put simply, an ‘ESP replacer’ is an ESP that replaces the ESP of one mod [mod ‘A’], with changes made to it in order to make it compatible with another mod [mod ‘B’]. This is somewhat of a blunt tool to achieve compatibility, but it does the job. 

### Tutorials:

- [[guides/patches/esp-replacer-patch-beginner-tutorial|ESP-Replacer Patch Beginner Tutorial]]

### Pros:

- **Control**: By modifying the conflicting plugin directly, you have full control over how you make it compatible with your own - however, with BCOM this method should only be used for replacing your own mod ESP, and not `Beautiful Cities of Morrowind.esp` or any of its modular optional ESPs.
- **Easy to make**: No ‘smoke and mirrors’ here. You won’t need to write any complex scripts (though you may need to edit the mod’s scripts, e.g., if a script places NPCs in a specific location and you have modified the layout of that location)

### Cons:

Maintenance: how tedious will it be to update the ESP replacer?

- _If replacing the conflicting mod:_ If the conflicting mod is updated often and your mod replaces it, you’ll need to keep updating your replacer each time the original is updated
- _If replacing your own mod:_ If you make further updates to your mod, you will need to replicate these changes in your ESP replacer too, compounding your workload each time you want to add new content to your mod.

### Conventions:

- **Naming**: ESP replacers often take the same name as the mod they are replacing (e.g., Both the original mod and ESP replacer are called `UniqueModName.esp`). If installing mods directly in Data Files, users would overwrite the original ESP with the patch ESP; otherwise if using a mod manager or OpenMW’s native Data Directories, whichever mod folder/s that contain an ESP titled `UniqueModName.esp` is the one that will be utilised by the virtual Data Files. However, an ESP replacer does not need to have the same name as the original mod, and in fact giving the ESP replacer a unique name (e.g., `UniqueModName_MyModPatch.esp`) can make it easier to create more accurate load order rules for [[modding-tools/sorting-plugin-load-order/mlox/index|Mlox]]; a simple `[conflict]` Mlox rule can warn users if they have both the original ESP and the ESP replacer. However, inexperienced mod users may be more likely to load both ESPs by mistake if they don’t use Mlox and misread the mod instructions
- **Permissions**: Check the permissions and credits section on the conflicting mod’s Nexus Mods page to see if the mod author allows other users to edit their mod. They may stipulate that you need to seek their permission first, in which case you should make a reasonable effort to contact them before editing their mod. If they don’t allow others to edit their content at all, then your ESP replacer will need to be a replacer for your own mod ESP that works around the conflicting mod’s edits and you should not edit and re-package their ESP as an ESP replacer on your own mod page.

