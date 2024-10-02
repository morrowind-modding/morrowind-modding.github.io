---
title: Waresifier
aliases:
  - Waresifier
tags:
  - Leveled-Items
  - Leveled-Lists
  - Modding-tool
description: A utility developed by Danae123 and Aurel300 which converts plugins to utilize leveled lists from Wares.
---


![[maintenance-expand-article#^6fc39d|clean]]

## About

> [!infobox|n-th]
> 
> ## Waresifier
> 
> > [!caption|center wfull txt-s]
> > 
> > ![[morrowind-waresifier-logo.webp|center]]
> > The logo of **Waresifier**.
> > ([image source](https://staticdelivery.nexusmods.com/mods/100/images/headers/51390_1653929292.jpg))
> 
> ### Details
> 
> | Type | Name |
> | --- | --- |
> | **Links** | [Waresifier](https://danaeplays.thenet.sk/waresifier/)<br>[Nexus Mods](https://www.nexusmods.com/morrowind/mods/51390) |
> | **Requirements** | [Wares Ultimate](https://www.nexusmods.com/morrowind/mods/52013) |
> | **Author** | [Danae123](https://www.nexusmods.com/morrowind/users/1233897), [Aurel300](https://github.com/Aurel300) |

**Waresifier** is a utility developed by Danae123 and Aurel300 which converts plugins to utilize [leveled lists](https://tes3cs.pages.dev/objects/object-types/leveled-item) from _[Wares](https://www.nexusmods.com/morrowind/mods/52013)_.

Waresifier looks for vanilla objects in a plugin and replaces them with leveled lists from _Wares_, based on any one or more of the following user options:

- **NPCs**: Replaces vanilla object entries in NPC inventories with _Wares_ leveled lists. This affects what clothing and weapons these NPCs will equip themselves with.
- **Containers**: Replaces vanilla object entries in containers with _Wares_ leveled lists.
- **Traders**: Adds an invisible chest to traders, populated with _Wares_ leveled lists.

Unlike the parent mod _Wares_, Waresifier does not add items to leveled lists; it only replaces objects with leveled lists from Wares. See [[guides/leveled-lists/creating-a-wares-aware-mod|Creating a 'Wares-Aware' Mod]] for how to add items to _Wares_ leveled lists.

## Usage

> [!caption|center wfull]
> 
> ![[waresifier-gui-explanation.webp|center]]
> 
> ([image source](https://staticdelivery.nexusmods.com/mods/100/images/51390/51390-1669572223-2117085591.png))

## External Links

- **Aurel300**, Github, ["hxmw"](https://github.com/Aurel300/hxmw/tree/master) - The library which Waresifier utilizes, written in haxe.