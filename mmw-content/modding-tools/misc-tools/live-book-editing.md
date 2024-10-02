---
title: Live Book Editing
aliases:
  - Live Book Editing
tags:
  - MWSE
  - Books
  - Modding-tool
description: An MWSE mod which enables edits made to books or scrolls in a text editor to be previewed live in-game.
---

![[maintenance-lacking-images#^12855b|clean]]

## About

> [!infobox|n-th]
> 
> ## Live Book Editing
> 
> > [!caption|center wfull txt-s]
> > 
> > ![[morrowind-live-book-editing-demo.webp|center]]
> > Animated demo of **Live Book Editing** from its Nexus Mods page.
> > [image source](https://staticdelivery.nexusmods.com/mods/100/images/53403/53403-1692731282-1508705601.gif)
> 
> ### Details
> 
> | Type | Name |
> | --- | --- |
> | **Links** | [NexusMods](https://www.nexusmods.com/morrowind/mods/53403)<br>[Github](https://github.com/C3pa/Morrowind-Live-Book-Editing) |
> | **Requirements** | [MWSE](https://www.nexusmods.com/morrowind/mods/45468) |
> | **Author** | [C3pa](https://next.nexusmods.com/profile/C3pa/about-me) |

**Live Book Editing** is an MWSE mod by C3pa which enables edits made to books or scrolls in a text editor to be previewed live in-game.

## Usage

Books and scrolls to be edited are loaded from `Data files\booktext.txt` and `Data files\scrolltext.txt` respectively. Upon saving either file, edits can be previewed in-game while Morrowind is running in the background, or after launching the game. There are several options for how to preview edits in-game:

### Previewing Edits

**Default Hotkeys**:

|   Action    |            Hotkey             |
| :---------: | :---------------------------: |
|  Opens book  | <kbd>Alt</kbd> + <kbd>O</kbd> |
| Opens scroll | <kbd>Alt</kbd> + <kbd>P</kbd> |

**MCM Configuration**:

This behavior can be altered through the mod's <abbr title="mod configuration menu">MCM</abbr> to place a persistent book or scroll in your inventory with which to preview book edits, instead of using the default hotkeys. The mod detects if the player does not have either item in their inventory and will automatically add it. Alternatively, this can be bound to a hotkey through the MCM.
