---
title: Groundcover
aliases:
  - Groundcover
tags:
  - Groundcover
  - Lawnmower
  - Mesh-Gen
  - Groundcoverify
  - Grass
description: Creating and managing animated grass for MGE-XE and OpenMW
---
## Creating and managing animated grass for MGE-XE and OpenMW

Both [[MGE-XE]] and [[OpenMW]] support animated, instanced grass called **groundcover**. 

Groundcover allows the rendering of hundreds of grass meshes per cell at low performance cost. In addition, these meshes are animated to simulate blowing in the wind ('grass-swaying') and will deform as if pushed aside when colliding with the player ('grass-stomping'). To achieve this, mods adding groundcover must be handled differently from regular plugins.

Whilst each game engine differs in their exact handling of groundcover, the same general principles above apply in both.

## To Do

> [!maintenance] 
> 
> ![[picture-of-divayth-fyr.png|left wtiny]]
> 
> > [!maintenance|clean nbrd]
> > 
> > **"Say. That's an interesting Dwemer piece you have there. What can you tell me about it?**
> > 
> > It is requested that this article, or a section of this article, be expanded.

^6fc39d

- Contrary to popular belief, groundcover plugins can ESM files in both MGE-XE[^1] and OpenMW[^2], and other groundcover plugins can depend on and modify these masters just like regular plugins and master files.
- Best documentation on how MGE-XE groundcover works ironically comes from OpenMW devs.[^3]

[^1]: [Hrnchamd, 'Morrowind Modding Community' Discord server, 2024-08-16](https://discord.com/channels/210394599246659585/842003950723137536/1273642430876352553)
[^2]: [S3ctor, 'OpenMW' Discord server, 2024-08-16](https://discord.com/channels/260439894298460160/262662689489158145/1273661141146406963)
[^3]: [forum.openmw.org, 'Animated Grass: MGE research', akortunov, 2018-03-22](https://forum.openmw.org/viewtopic.php?t=5049)