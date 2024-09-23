---
title: Groundcover
aliases:
  - Groundcover
tags:
  - Groundcover
  - LawnMower
  - Mesh-Gen
  - Groundcoverify
  - Grass
description: Creating and managing animated grass for MGE-XE and OpenMW
---

![[maintenance-underpopulated-category#^185a87|clean]]

## Creating and managing animated grass for MGE-XE and OpenMW

> [!infobox]
> 
> ## [[guides/groundcover/index|Groundcover]]
> 
> > [!caption|center wfull txt-s]
> > 
> > ![[screenshot-of-vurts-groundcover-gl.webp|center]]
> > _[Vurt's Groundcover](https://www.nexusmods.com/morrowind/mods/31051)_, the most downloaded and endorsed Morrowind groundcover mod on _Nexus Mods_.
> > [image source](https://staticdelivery.nexusmods.com/mods/100/images/31051-2-1320366552.jpg)
> 
> ### This article is part of a series on Groundcover
> 
> - [[modding-tools/generating-groundcover/index|Generating Groundcover]]
> - [[the-lawnmower|The LawnMower]]
> - [[mesh-gen|MeshGen]]
> - [[habasi|Habasi]]
> - [[groundcoverify|Groundcoverify]]
> - [[lawnmower-tutorial|Lawnmower Groundcover Tutorial]]

^groundcover-navbox

Both [[MGE-XE]] and [[OpenMW]] support animated, instanced grass called **groundcover**. 

Groundcover allows the rendering of hundreds of grass meshes per cell at low performance cost. In addition, these meshes are animated to simulate blowing in the wind ('grass-swaying') and will deform as if pushed aside when colliding with the player ('grass-stomping'). To achieve this, mods adding groundcover must be handled differently from regular plugins.

Whilst each game engine differs in their exact handling of groundcover, the same general principles above apply in both.

## To Do

![[maintenance-expand-article|clean]]

- Contrary to popular belief, groundcover plugins can ESM files in both MGE-XE[^1] and OpenMW[^2], and other groundcover plugins can depend on and modify these masters just like regular plugins and master files.
- Best documentation on how MGE-XE groundcover works ironically comes from OpenMW devs.[^3]

[^1]: [Hrnchamd, 'Morrowind Modding Community' Discord server, 2024-08-16](https://discord.com/channels/210394599246659585/842003950723137536/1273642430876352553)
[^2]: [S3ctor, 'OpenMW' Discord server, 2024-08-16](https://discord.com/channels/260439894298460160/262662689489158145/1273661141146406963)
[^3]: [forum.openmw.org, 'Animated Grass: MGE research', akortunov, 2018-03-22](https://forum.openmw.org/viewtopic.php?t=5049)