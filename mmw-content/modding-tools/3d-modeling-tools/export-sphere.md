---
title: Export Sphere
aliases:
  - Export Sphere
tags:
  - Export-Sphere
  - Blender
  - Modeling
  - MWSE
  - Interiors
  - Modding-tool
description: An MWSE tool for selecting a group of objects in-game and exporting these to a single mesh
---

## About

> [!infobox|n-th]
> 
> ## Export Sphere
> 
> > [!caption|wfull txt-s]
> > 
> > ![[export-sphere-in-game-screenshot.webp]]
> > In-game screenshot of Export Sphere.
> 
> ### Details
> 
> | Type | Name |
> | --- | --- |
> | **Links** | [Github](https://gist.github.com/Greatness7/f683d80c22ef60342d589992eff0a0d0)  |
> | **Requirements** | [MWSE](https://github.com/MWSE/MWSE/) |

**Export Sphere** is an MWSE tool for selecting a group of objects in-game and exporting these to a single mesh.

## Installation

- Download 'exportSphere.lua' from the [Github](https://gist.github.com/Greatness7/f683d80c22ef60342d589992eff0a0d0) Gist.
- Rename 'exportSphere.lua' to **'main.lua'**
- Place the file at `Data Files/mwse/mods/exportSphere/main.lua`. Create the folders if they do not exist.

## Usage

**Hotkey**: <kbd>Ctrl</kbd> + <kbd>Alt</kbd> + <kbd>E</kbd>
    
- Press the hotkey to spawn the sphere
- Increase/decrease the sphere's size using the mouse wheel 
- Press the hotkey again to export.

The mesh will be exported to the directory `Data Files/meshes/g7`.

### Usage within the Construction Set

Using [[CSSE|CSSE's]] ability to test plugins from within the Construction Set, Export Sphere can also be ran. Extract `mwse/mods/exportSphere/main.lua` to your Morrowind modding install's `Data Files` folder, or alternatively install it using a mod manager. **Note** that since the tool requires MWSE, it will only work while running vanilla Morrowind through the <abbr title="Construction Set">CS</abbr>, not OpenMW.

## Exporting an Entire Cell's Landscape

By running a Lua command through the console, Export Sphere can be leveraged to export the landscape of an entire cell. Note that this method will only export landscape, not meshes.[^1]

Doing so requires [UI Expansion](https://www.nexusmods.com/morrowind/mods/46071) by [NullCascade](https://next.nexusmods.com/profile/NullCascade/about-me) in order to enable Lua commands to be ran through the console. The following command can be ran while in an exterior cell[^2]:

```lua
tes3.game.worldLandscapeRoot:saveBinary(“Data Files/Meshes/export.nif”)
```



[^2]: [GrumblingVomit, "Morrowind Interiors Project Guide", Nexus Mods, January 31, 2023, 'MipInstructions.pdf'](https://www.nexusmods.com/morrowind/mods/52245?tab=files&file_id=1000034911)
[^1]: [Greatness7, post to "mod-tools", Morrowind Modding Community Discord, October 20, 2024](https://discord.com/channels/210394599246659585/976440577044402217/1297347694049886273)