---
title: Using The Lawnmower to Trim Excess Groundcover
aliases:
  - Using The Lawnmower to Trim Excess Groundcover
  - Lawnmower Groundcover Tutorial
tags:
  - Groundcover
  - Lawnmower
  - Tutorials
  - Grass
  - Cleaning-Mods
description:
---
> [!caption|sban txt-s] mod page banner image
> ![[lawnmower-grassblocker-meshes-in-balmora.webp|banner center]]
> Grass blocker markers in Balmora

## About

> [!infobox|n-th]
> 
> ## Lawnmower Groundcover Tutorial
> 
> ![[lawnmower-for-morrowind-logo.webp|center]]
> 
> ### Tutorial Info
> 
> | Type | Name |
> | --- | --- |
> | **Requirements** | [The Lawnmower](https://www.nexusmods.com/morrowind/mods/53034)<br>[Tes3conv](https://github.com/Greatness7/tes3conv)<br>[Python 3.5 or later](https://www.python.org/) |
> | **Tutorial Files** | None |

This tutorial covers how to use [The Lawnmower](https://www.nexusmods.com/morrowind/mods/53034) tool to clean [[groundcover]] mods of excess grass - specifically, grass which clips through or is hidden under other objects.

The Lawnmower actually comprises four separate tools:

- **Lawnmower**: removes clipping and unwanted grass
- **Weedwhacker**: thins out grass
- **Grassclipper**: fixes floating grass
- **Grassblocker**: makes your mod autoclean-compatible

However, for the purposes of this tutorial we will only be focusing on the titular **Lawnmower**. 

### Goals

By the end of this tutorial, you should be able to:

1. Run `Lawnmower.py` Python script on a groundcover plugin
2. Compare a groundcover plugin against multiple mods ('chaining')
3. Understand how to use the 'autoclean' plugins to increase the accuracy of The Lawnmower
4. Clean the patched groundcover plugin

### Prerequisites

> [!Info|right wm-sm txt-s] Installing Python
> Whilst it may seem daunting, installation is unremarkable on most platforms.[^1] 
> 
> See Python [BeginnersGuide / Download](https://wiki.python.org/moin/BeginnersGuide/Download) for help.

In addition to downloading The Lawnmower, the tool also requires that you have [Tes3conv](https://github.com/Greatness7/tes3conv) and [Python](https://www.python.org/) installed.

Copy `tes3conv.exe` to your Morrowind `Data Files` folder, or install it using a mod manager.

Likewise, copy `Lawnmower.py` from The Lawnmower to `Data Files` or install it with a mod manager. 

## Getting Started

## Executing the Script

`python lawnmower.py Morrowind.esm Groundcover_mod.esp Groundcover_mod_out.esp`

## Cleaning

```perl tile="tes3cmd"
tes3cmd delete --instance-match "Z\:-20000" <path-to-plugin>
```

Run TESTool to clean empty cells.

[^1]: "Python for Beginners: Installing", Python.org, accessed August 24, 2024, https://www.python.org/about/gettingstarted/

## Troubleshooting

**Linux**
> "This tool almost works on linux. I had to replace `tes3conv.exe` with `tes3conv` (which is in my $PATH) and remove the check that checks for the file present in the directory"
> \- DorsaiDonal, [Nexus mod page comments](https://www.nexusmods.com/morrowind/mods/53034?tab=posts), 29 November 2023, 10:42AM