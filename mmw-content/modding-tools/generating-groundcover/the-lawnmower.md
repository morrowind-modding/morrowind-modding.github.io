---
title: The Lawnmower
aliases:
  - The Lawnmower
  - Lawnmower
  - Weedwhacker
  - Grassclipper
  - Grassblocker
tags:
  - Lawnmower
  - Cleaning-Mods
  - Groundcover
  - Python
  - Tes3conv
description: A tool for cleaning groundcover mods of excess grass using Python scripts and Tes3conv.
parent: "[[modding-tools/generating-groundcover/index|Generating Groundcover]]"
related articles:
  - "[[lawnmower-tutorial|Lawnmower Groundcover Tutorial]]"
---

![[lawnmower-for-morrowind-banner.webp|sban]]

![[maintenance-expand-article#^6fc39d|clean]]

## About

> [!infobox|n-th]
> 
> ## The Lawnmower
> 
> ![[lawnmower-for-morrowind-logo.webp]]
> 
> ### Details
> 
> | Type | Name |
> | --- | --- |
> | **Links** | - [NexusMods](https://www.nexusmods.com/morrowind/mods/53034)<br>- [Github](https://github.com/acidzebra/lawnmower) |
> | **Requirements** | - [Python]()<br>- [[tes3conv\|Tes3conv]] |

**The Lawnmower** is a tool for cleaning [[guides/groundcover/index|groundcover]] mods of excess grass using Python scripts and Tes3conv.

> [!NOTE|clean no-t] %%outline of lawnmower tools%%
> The Lawnmower actually comprises four separate tools:
> 
> - **[[the-lawnmower#Lawnmower|'Lawnmower']]**: removes clipping and unwanted grass
> - **[[the-lawnmower#Weedwhacker|'Weedwhacker']]**: thins out grass
> - **[[the-lawnmower#Grassclipper|'Grassclipper']]**: fixes floating grass
> - **[[the-lawnmower#Grassblocker|'Grassblocker']]**: makes your mod autoclean-compatible

^2eccab

## Lawnmower

`lawnmower.py` will take an input esp/esm file, a grass mod, and an output file as commandline arguments. It will compare them and if there is any clipping detected between the grass and objects in the mod, it will move the grass out of sight.

Moved grass references have their coordinates set to `Z: 0`, `X: 0`, `Z: -20,000`.

**Usage:**
```
python lawnmower.py "Morrowind.esm" "AesAdGrass_AC.esp" "AesAdGrass_AC_out.esp"
```

## Weedwhacker

`weedwhacker.py` takes a groundcover mod, an output plugin and a number between 1-99 as its arguments. It will reduce the grass references in the output plugin as a percentage according to the number chosen.

**Usage:**
```
python weedwhacker.py "mygrassmod.esp" "mygrassmod_out.esp" 50
```

## Grassclipper

`grassclipper.py` takes two groundcover mods as input, comparing both for matching cells and overwriting the cells of mod A with those of mod B, then saving the combined output. 

**Grassclipper** is mainly intended for mod makers to speed up the process of creating groundcover patches after generating grass with [[mesh-gen|Mesh Generator]].

**Usage:**
```
python grassclipper.py "mygrassmod.esp" "mygrassmod_patch.esp" "mygrassmod_combined.esp"
```

> [!Warning]
> In order to work correctly, both groundcover mods must be generated using the same `.ini` configuration from Mesh Generator.

## Grassblocker

**Grassblocker**, rather than being a script, is a method of creating custom 'auto-clean' plugins that can improve the accuracy of `lawnmower.py`.

> [!caption|right wm-sm]
> ![[lawnmower-grassblocker-meshes-in-balmora.webp|wm-sm]]
> Grassblocker meshes in Balmora

This is achieved by utilizing the `grassblocker_` meshes included with Lawnmower:

- `grassblocker_small.nif`
- `grassblocker_medium.nif`
- `grassblocker_large.nif`
- `grassblocker_xl.nif`
- `grassblocker_xxl.nif`

These invisible marker meshes will appear in the Construction Set, but not in-game, and will be detected by `lawnmower.py` like any other reference when checking for grass which clips through other objects.

## Troubleshooting

**Linux**
> "This tool almost works on linux. I had to replace `tes3conv.exe` with `tes3conv` (which is in my $PATH) and remove the check that checks for the file present in the directory"
> \- DorsaiDonal, [Nexus mod page comments](https://www.nexusmods.com/morrowind/mods/53034?tab=posts), 29 November 2023, 10:42AM