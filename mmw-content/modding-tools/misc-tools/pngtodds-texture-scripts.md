---
title: PNGtoDDSTextureScripts
aliases:
  - PNGtoDDSTextureScripts
tags:
  - Python
  - Textures
description: PNGtoDDSTextureScripts by StaticNation are a set of Python scripts for use with NVIDIA Texture Tools 3 when batch converting PNG textures to DDS.
---

![[maintenance-expand-article#^6fc39d|clean]]

## About

> [!infobox|n-th]
> 
> ## PNGtoDDSTextureScripts
> 
> > [!caption|center wfull txt-s]
> > 
> > ![[staticnation-nexus-mods-avatar.webp|center]]
> > [StaticNation's](https://next.nexusmods.com/profile/StaticNation/about-me) Nexus Mods avatar.
> > [(image source)](https://next.nexusmods.com/profile/StaticNation/about-me)
> 
> ### Details
> 
> | Type | Name |
> | --- | --- |
> | **Links** | [Github](https://github.com/staticnation/PNGtoDDSTextureScripts/tree/main) |
> | **Requirements** | - [Python](https://www.python.org/downloads/)<br>- [Pillow (PIL fork)](https://pillow.readthedocs.io/en/stable/)<br>- [[nvidia-texture-tools\|NVIDIA Texture Tools 3]] |
> | **Author** | [StaticNation](https://github.com/staticnation) |

**PNGtoDDSTextureScripts** by StaticNation are a set of Python scripts for use with [[nvidia-texture-tools|NVIDIA Texture Tools 3]] when batch converting PNG textures to DDS.

## Usage

See [[gigapixel-texture-upscale-tutorial|Gigapixel Texture-Upscaling Tutorial]].

this is used to detect the alpha channels and sorts out pngs with alphas and those without so they can be converted to BC1 and BC3 as needed
the convert_images.py script is not recursive so you have to run it on each folder 
there is a second script for normal maps etc which is recursive and converts everything to BC1 (convert_maps.py)
the batch files allow drag and drop of files

everything is set up to use a Kaiser filter for the mip maps as it gives really nice results and prevents things from seeming blurry from a distance in game in the batch files 
these are the CLI settings

```python
nvcompress -color -mipfilter kaiser -bc1 "%input%" "%output%"
```

```python
`nvcompress -color -mipfilter kaiser -bc3 "%input%" "%output%"`
```

the python scripts have lines with where you need to put in the paths, these are commented in the files

'convert_images.py' lines 26, 27, 57 and convert_maps.py lines 31, 34

use my scripts to convert to DDS because it allows me to set the mip map filters and color correction (the scripts apply the correct BC1 and BC3 DDS types with detection of if there is alpha channels in the png) while using CUDA to save on processing time[^1]

[^1]: [StaticNation, Discord, Morrowind Modding Community, October 12, 2024](https://discordapp.com/channels/210394599246659585/976440577044402217/1294416067653009480)