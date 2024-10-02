---
title: The LawnMower
aliases:
  - The LawnMower
  - Lawnmower
  - Weedwhacker
  - Grassclipper
  - Grassblocker
tags:
  - LawnMower
  - Cleaning-Mods
  - Groundcover
  - Python
  - Tes3conv
  - Modding-tool
description: A tool for cleaning groundcover mods of excess grass using Python scripts and Tes3conv.
parent: "[[modding-tools/generating-groundcover/index|Generating Groundcover]]"
related articles:
  - "[[lawnmower-tutorial|Lawnmower Groundcover Tutorial]]"
---

![[lawnmower-for-morrowind-logo-wide.webp|sban]]

## About

> [!infobox|n-th]
> 
> ## The LawnMower
> 
> > [!caption|center wfull txt-s]
> > 
> > ![[lawnmower-for-morrowind-logo.webp|center]]
> > 
> > [image source](https://staticdelivery.nexusmods.com/mods/100/images/headers/53034_1686132090.jpg)
> 
> ### Details
> 
> | Type | Name |
> | --- | --- |
> | **Links** | - [NexusMods](https://www.nexusmods.com/morrowind/mods/53034)<br>- [Github](https://github.com/acidzebra/lawnmower) |
> | **Requirements** | - [Python 3.5+](https://www.python.org/downloads/)<br>- [[tes3conv\|Tes3conv]] |
> | **Author** | [acidzebra](https://www.nexusmods.com/morrowind/users/5210688) |

![[guides/groundcover/index#^groundcover-navbox|clean right]]

**The LawnMower** is a tool for cleaning [[guides/groundcover/index|groundcover]] mods of excess grass using Python scripts and Tes3conv.

> [!NOTE|clean no-t] %%outline of lawnmower tools%%
> The LawnMower actually comprises four separate tools:
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

## Advanced Usage

![[maintenance-expand-article#^6fc39d|clean]]

### Run Lawnmower on Entire Load Order

Using [[habasi|Habasi]] and [[tes3cmd|Tes3cmd]], Lawnmower can be ran on one's entire load order with the help of a BAT script.

```
rem generate cut grass mods
FOR %%A IN ( grass_*.es? ) DO python lawnmower.py MergedLoadOrder2.esp "%%A" "_%%A" >> out.txt
 
rem delete grass at Z 20000
FOR %%A IN ( _grass_*.es? ) DO tes3cmd.exe delete --instance-match "Z\:\-20000" "%%A" >> out2.txt
```

- Credit: Abot
- Source: [Discord](https://discord.com/channels/210394599246659585/976440577044402217/1281183682295627788), [PasteBin](https://pastebin.com/iLV8MkKz)

## Troubleshooting

**Linux**
> "This tool almost works on linux. I had to replace `tes3conv.exe` with `tes3conv` (which is in my $PATH) and remove the check that checks for the file present in the directory"
> \- DorsaiDonal, [Nexus mod page comments](https://www.nexusmods.com/morrowind/mods/53034?tab=posts), 29 November 2023, 10:42AM