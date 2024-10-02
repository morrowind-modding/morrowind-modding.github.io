---
title: Create Character NIF
aliases:
  - Create Character NIF
tags:
  - NIF
  - Blender
  - Python
  - NPC
  - Modding-tool
description: 
---

![[maintenance-expand-article#^6fc39d|clean]]

## About

> [!infobox|n-th]
> 
> ## Create Character NIF
> 
> > [!caption|center wfull txt-s]
> > 
> > ![Greatness7's user avatar](https://avatars.githubusercontent.com/u/12927912?v=4)
> > 
> 
> ### Details
> 
> | Type | Name |
> | --- | --- |
> | **Links** | [Github](https://gist.github.com/Greatness7/3371f4e8a5112a8c8e4e270a4d2f5174) |
> | **Requirements** | - [Python](https://www.python.org/downloads/)<br>- [NumPy](https://numpy.org/) |
> | **Author** | [Greatness7](https://github.com/Greatness7) |

**Create Character NIF** is a Python script which takes [body part](https://tes3cs.pages.dev/objects/object-types/body-part) meshes and any equipment as its inputs, and outputs these into a single combined `NIF`.

Originally designed to work with [[blender|Blender]], this functionality was broken from Blender version 4.2.[^1] However, the `character.py` script can still be used independently of Blender through the [es3 library](https://github.com/Greatness7/io_scene_mw/tree/master/lib). As this library is part of the **io_scene_mw** Github repository, the `es3` folder must be extracted and placed within the same directory as `character.py`; furthermore, it requires installing NumPy (`pip install numpy`).[^2]



[^1]: [Greatness7, post to "mod-tools", Morrowind Modding Community Discord, September 20, 2024](https://discord.com/channels/210394599246659585/976440577044402217/1286468003873030298)
[^2]: [Greatness7, post to "mod-tools", Morrowind Modding Community Discord, July 26, 2023](https://discord.com/channels/210394599246659585/976440577044402217/1133477371597557872)