---
title: tes3lint
aliases: 
tags:
  - Conflicts
  - Perl
  - Command-line-tool
  - Modding-tool
description: 
---

![[maintenance-expand-article#^6fc39d|clean]]

## About

> [!infobox|n-th]
> 
> ## Article Title
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
> | **Links** | [Github (mlox)](https://github.com/mlox/mlox/tree/master/util/tes3lint)<br>[SourceForge](https://sourceforge.net/projects/mlox/files/tes3lint/) |
> | **Requirements** | [Perl](https://www.perl.org/get.html) |
> | **Author** | [John Moonsugar](https://github.com/john-moonsugar) |

**Tes3lint** is a command-line tool by John Moonsugar for checking plugins for potential problems.

In addition to detecting common problems which are cleaned automatically by other tools, including Moonsugar's other tool [[tes3cmd|Tes3cmd]], tes3lint's features include:

- Check for implicit dependency on Tribunal/Bloodmoon functions without having them as a master.
- Display duplicate/modified INFO records.
- Detect whether INFO records have had their IDs changed
- Find scripts that do not utilize `MenuMode`.
- Check whether Author/Description/Version fields are missing from plugin header.



## Usage

Like Moonsugar's other tool [[tes3cmd|Tes3cmd]], it is also written in Perl. However, unlike the former it requires that Perl itself is installed. Tes3lint is run via the command-line, but can also be run through [[wrye-mash|Wrye Mash Polemos Fork]] which features tes3lint support.

