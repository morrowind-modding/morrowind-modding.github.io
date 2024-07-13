---
tags:
  - MMW-Development
description: A list of interesting Quartz websites that MMW could borrow ideas from
title: Quartz and Wiki Website Examples
aliases:
  - Quartz and Wiki Website Examples
---
## Quartz sites:

### [Topo Da Mente](https://www.pmcf.xyz/topo-da-mente/)

---
### [3D Artist's Handbook](https://sidney-eliot.github.io/3d-artists-handbook/)

---
### [Bianca's Digital Garden](https://garden.bianca.digital/)

---
### [Stories with Dice](https://storieswithdice.com/)

---
### [3fecta.party](https://3fecta.party/)

---
### [CS Notes](https://notes.yxy.ninja/)

---
### [Owlly Lab](https://www.mara-li.fr/)

**Why is it cool**
* They made a working hamburger menu on mobile for the Explorer
* Extensive customization of layout

---

### [Mage the Awakening Wiki](https://lakeinlove.github.io/Mage-The-Awakening/)

Just a pretty Quartz site with a simple but navigable layout. Some questionable design choices, such as choosing to make all bold words a different colour (making them easily confused with hyperlinks).

---

### [Daniel Hintz](https://dhintz137.github.io/quartz/)

**Key points of interest:**
- The [A Little About Me](https://dhintz137.github.io/quartz/About) page contains a clickable image gallery pane where each image has a caption. 
	- This is a custom-made component not supported out of the box by Quartz -- _check the CSS and JS_
- The [Metropolis-Hastings MCMC from Scratch ✨](https://dhintz137.github.io/quartz/MCMC_from_scratch) page contains:
	- Readable table design with [zebra stripes and highlight on-hover](https://www.w3schools.com/html/html_table_styling.asp)
	- Embeds [this interactive graph](https://chart-studio.plotly.com/~dhintz1/4/#/) directly in the page by using the HTML `<iframe>` tag 
		- Graph from [Plotly](https://plotly.com/graphing-libraries/). For the record, this tool is _amazing_, though likely only useful in fringe cases. See this [interactive 3D cube graph](https://chart-studio.plotly.com/~abidondo/18)


---

## Non-Quartz, Obsidian-Based Sites:

### [The Integral Guide to Well-Being](https://integralguide.com/About)

Published with [Obsidian Publish](https://obsidian.md/publish), it features a visually pleasing UI, including support for [Stacked Pages](https://help.obsidian.md/User+interface/Tabs#Stack+tab+groups) and folder icons.

---

## Wiki and Documentation Sites

A list of wiki and program documentation websites for inspiration, particularly those that are focused on:

1. Modding
2. Documentation for a program
3. Instructional wikis in general with tutorial and guide-based content

Most wikis avoid ['instructional and presumptuous language'](https://en.m.wikipedia.org/wiki/Wikipedia:Manual_of_Style#Instructional_and_presumptuous_language). This is suitable for the general reference, encyclopaedic content most wikis are focused on, (whether it be Wikipedia, or one of the numerous fandom wikis based around a fictional media franchise). However, whilst the Morrowind Modding Wiki strives to keep an impartial tone, it _is_ an instructional tool on how to create and manage mods.

### [Cyberpunk 2077 Modding](https://wiki.redmodding.org/cyberpunk-2077-modding/)

Created with Gitbook, this is the modding wiki for Cyberpunk 2077

### [Paradox Wikis](https://wikis.paradoxplaza.com/)

The home of [Paradox Interactive](https://www.paradoxinteractive.com/) game wikis. Most (if not all) wikis hosted on Paradox Wikis contain an extensive **Modding** section detailing how to create and manage mods for the game in question. 

### [Souls Modding](http://soulsmodding.wikidot.com/)

The 'Soulsborne Modding Wiki' is the home of modding knowledge of FromSoftware's ['Soulsborne'](https://en.m.wikipedia.org/wiki/Soulslike)' games.

The structure appears to be that of a general reference wiki, with tutorials separated into their own section and each tutorial attributed to a specific author.

### [Stardew Modding Wiki](https://stardewmodding.wiki.gg/wiki/Main_Page)

The modding wiki for 'Stardew Valley'.

### [Factorio Wiki](https://wiki.factorio.com/Modding)

The 'Factorio Wiki' has a substantial section on modding.

### [RimWorld Wiki](https://rimworldwiki.com/wiki/Main_Page)

This wiki has a modestly-sized modding section, but three articles are particularly noteworthy for their clear and concise layout.

- [Basic Melee Weapon](https://rimworldwiki.com/wiki/Modding_Tutorials/Basic_Melee_Weapon)
- [Basic Ranged Weapon](https://rimworldwiki.com/wiki/Modding_Tutorials/Basic_Ranged_Weapon)
- [Basic Plant](https://rimworldwiki.com/wiki/Modding_Tutorials/Basic_Plant)

They offer a clear model for how MMW tutorial articles could be structured. The section headings 'Goals', 'Recommended Reading' and 'Sample Repository' act as a clear preamble to prepare users to follow the tutorial. 

In addition, formatting the main tutorial content as a table is a bold choice - in the left column is the `code` the tutorial is based on, and in the right column is the author's annotations. To implement this in MMW presents CSS formatting challenges, but is doable. The first challenge is that a codeblock cannot be entered in a table in Markdown, only `inline code`. A simple workaround is to place the table in another note, then embed the note section as a block into the table