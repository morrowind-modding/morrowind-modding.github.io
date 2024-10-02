---
title: TES Bookmaker
aliases:
  - TES Bookmaker
tags:
  - Books
  - Language/Russian
  - Modding-tool
description: A simple text editor for creating Morrowind books, capable of converting plain text into Morrowind's bespoke HTML format and featuring a GUI with buttons for text-formatting.
---

![[maintenance-expand-article#^6fc39d|clean]]

## About

> [!infobox|n-th]
> 
> ## TES Bookmaker
> 
> > [!caption|center wfull txt-s]
> > 
> > ![[ajiras-flower-report-tes-bookmaker.png|center]]
> > [Ajira's Flower Report](https://en.uesp.net/wiki/Morrowind:Ajira%27s_Flower_Report) as rendered by **TES Bookmaker**
> > image source: Morrowind Modding Wiki
> 
> ### Details
> 
> | Type | Name |
> | --- | --- |
> | **Links** | **English version**:<br>- [Nexus Mods](https://www.nexusmods.com/morrowind/mods/55231)<br>- [Github](https://github.com/MasssiveJuice08/TES-Bookmaker-ENG)<br>**Russian version** (original):<br>- [FullRest](http://www.fullrest.ru/files/bookmaker) |
> | **Requirements** | none |
> | **Author** | - Дарин (Darin), _original author_.<br>- [MassiveJuice](https://www.nexusmods.com/morrowind/users/153862138), _English translation_. |

**TES Bookmaker** is a simple text editor for creating Morrowind books, capable of converting plain text into Morrowind's bespoke HTML format and featuring a <abbr title="graphical user interface">GUI</abbr> with buttons for text-formatting.

The original tool developed by Дарин (Darin) is in Russian, but an English language version by MassiveJuice is available.

## Usage

The editor works by applying Morrowind-specific HTML markup to plain text.

Plain text can be entered in the left-hand panel and, by pressing the green arrow, gets formatted with HTML in the right-hand panel. Further editing can be done in the right-hand panel by manually typing, or by using the UI buttons. These include:

- **New Line**: adds HTML `<BR>{:html}` tag to indicate a new line
- **Center Text**: adds HTML `<DIV ALIGN="CENTER">{:html}`.
- **Left-Align Text**: adds HTML `<DIV ALIGN="CENTER">{:html}`
- **Insert Image**: Pop-up to specify an image's source, width and height.
- **A**: Pop-up to specify font name, size and color.

Once finished, the marked-up text is ready to be entered into a [book object](https://tes3cs.pages.dev/objects/object-types/book) in the Construction Set.

## Alternative Tools

- [[bookgen|BookGen]]

## Related Tools

- [[live-book-editing|Live Book Editing]]: These two tools can be used in conjunction to quickly format and preview book text.

## External Links

- **Notes for Modmakers**, ["TES Bookmaker"](https://morrowind-nif.github.io/Notes_RU/tes_bookmaker.htm?ms=CyAAAAAAEAAAAAAAABAAAAAAAAAAAEABEAgYCA%3D%3D&st=MA%3D%3D&sct=MA%3D%3D&mw=MzIw) (Russian) 