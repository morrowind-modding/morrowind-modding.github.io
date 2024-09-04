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
description: An MWSE tool for selecting a group of objects in-game and exporting these to a single mesh
---

![[maintenance-expand-article#^6fc39d|clean]]

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


## Usage

**Hotkey**: <kbd>Ctrl</kbd> + <kbd>Alt</kbd> + <kbd>E</kbd>
    
- Press the hotkey to spawn the sphere
- Increase/decrease the sphere's size using the mouse wheel 
- Press the hotkey again to export.

The mesh will be exported to the directory `Data Files/meshes/g7`.

### Usage within the Construction Set

Using [[CSSE|CSSE's]] ability to test plugins from within the Construction Set, Export Sphere can also be ran. Extract `mwse/mods/exportSphere/main.lua` to your Morrowind modding install's `Data Files` folder, or alternatively install it using a mod manager. **Note** that since the tool requires MWSE, it will only work while running vanilla Morrowind through the <abbr title="Construction Set">CS</abbr>, not OpenMW.