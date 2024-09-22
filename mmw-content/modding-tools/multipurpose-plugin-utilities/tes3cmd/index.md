---
title: Tes3cmd
aliases:
  - Tes3cmd
tags:
  - Tes3cmd
  - Cleaning-Mods
  - Dirty-Edits
  - Perl
  - Command-line-tool
description: A command-line tool for analysing, modifying and cleaning TES3 plugins.
---

![[maintenance-expand-article#^6fc39d|clean]]

## About

> [!infobox|n-th]
> 
> ## Tes3cmd
> 
> > [!caption|wfull center txt-s]
> > 
> > ![[screenshot-of-tes3cmd-cleaning-a-plugin.png|center]]
> > Tes3cmd cleaning a plugin of duplicate records.
> 
> ### Details
> 
> | Type | Name |
> | --- | --- |
> | **Links** | [Github](https://github.com/john-moonsugar/tes3cmd/blob/master/tes3cmd) |
> | **Requirements** | none |
> | **Author** | John Moonsugar |

**Tes3cmd** is a multi-purpose command-line tool written in Perl for analyzing, modifying and cleaning TES3 plugins. For details on its usage, check the pages for each respective subcommand.


> [!warning Record Types]
> 
> Before making use of tes3cmd, you may wish to familiarize yourself with the various [types of records](https://en.uesp.net/wiki/Morrowind_Mod:Mod_File_Format), or objects, you'll find inside a TES3 plugin. This information is crucial to effective use of the tool. 

> [!info Regex]
> 
> Tes3cmd uses perl [regular expressions](https://perldoc.perl.org/perlre) as part of its syntax. Regular expressions, or regex, are extremely powerful, and equally scary. 
> Be aware that `.*` means to match any number of occurrences of any character, so `caius.*` finds anything starting with `caius`, and `.*caius` finds anything ending with `caius`. This will be sufficient for most, if not all use cases.

> [!warning OpenMW]
> 
> Using tes3cmd in an OpenMW setup (without MO2) is somewhat different than an MGE XE one. The following documentation will assume all plugins are located within the `Data Files` folder of your Morrowind installation for ease of use. For the same reason, modders and players on OpenMW are recommended to use DeltaPlugin instead.

 
## External Links

- **Danae's Journal**, ["Good Modding Practice: Checking Mods"](https://danaeplays.thenet.sk/good-modding-practice/)
- **Notes for Modmakers**, ["Tes3cmd"](https://morrowind-nif.github.io/Notes_RU/tes3cmd.htm?ms=CyAAAAAAEAAAAAAAABAAAAAAAAAAAEABEAgYQA%3D%3D&st=MA%3D%3D&sct=MA%3D%3D&mw=MzIw) #Language/Russian 