---
title: Abot's Deleveler
aliases:
  - Abot's Deleveler
tags:
  - Leveled-Lists
  - Leveled-Creatures
  - Leveled-Items
  - Modding-tool
description: A utility for converting all Leveled Lists in a plugin to potentially spawn at level 1 through the use of Tes3cmd BAT and Perl scripts.
---

![[maintenance-expand-article#^6fc39d|clean]]

## About

> [!infobox|n-th]
> 
> ## Abot's Deleveler
> 
> > [!caption|center wfull txt-s]
> > 
> > %%insert image%%
> > 
> 
> ### Details
> 
> | Type | Name |
> | --- | --- |
> | **Links** | [Nexus Mods](https://www.nexusmods.com/morrowind/mods/45625) |
> | **Requirements** | [[tes3cmd\|Tes3cmd]] |
> | **Author** | [abot](https://next.nexusmods.com/profile/abot/about-me) (author), [OffworldDevil](https://next.nexusmods.com/profile/OffworldDevil/about-me) (publisher) |

**Abot's Deleveler** is a utility for converting all [[guides/leveled-lists/index|Leveled Lists]] in a plugin to potentially spawn at level 1 - so called 'deleveling' - through the use of [[tes3cmd|Tes3cmd]] BAT and Perl scripts.

The deleveling functionality has been adopted by at least one other tool, [[habasi|Habasi]], and as an MWSE mod with Operator Jack's Deleveler.[^2] The utility's usefulness is primarily to players who wish to increase the difficulty of Morrowind gameplay. However, one could use it as an auxiliary tool in the process of creating [[guides/patches/index|patches]] or reworks of existing mods.

## Usage

1. Double-click the `tes3cmd_multipatch.bat` file to generate a `multipatch.esp`, which merges the leveled lists of your active mods.
2. Double-click the `delev.bat` file to create a `delev.esp` from your active mod list. This should be loaded after the `multipatch.esp`.

## History

The utility was developed by Abot in 2018 as a personal request by OffWorldDevil (previously known as 'SpaceDevo'). OffWorldDevil later uploaded the utility to Nexus Mods.[^1]

## External Links

- **OperatorJack**, Nexus Mods, ["OperatorJack's Deleveler"](https://www.nexusmods.com/morrowind/mods/47897) - an MWSE implementation of a delveler.
- **alvazir**, Nexus Mods, ["Habasi - TES3 plugin merging and utility tool"](https://www.nexusmods.com/morrowind/mods/53002)

[^1]: [Abot (@.abot), "Yes. IIRC I made it as a personal request I don't remember if on discord ot \[sic\] old forums, it was about 2018. Then it has been uploaded on Nexus", Discord: Morrowind Modding Community, "mod-tools", September 5, 2024, accessed September 8, 2024](https://discord.com/channels/210394599246659585/976440577044402217/1281183682295627788)
[^2]: [OperatorJack, "OperatorJack's Deleveler", Nexus Mods, May 1, 2020](https://www.nexusmods.com/morrowind/mods/47897)