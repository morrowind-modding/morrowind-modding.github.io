---
tags:
  - mlox
  - Github
  - Guide
description: Guidelines and tips on contributing to the rule-base of mlox
title: Contributing to Mlox Rules
aliases:
  - Contributing to Mlox Rules
---

>[!abstract]- Pages contained within this folder 
>
>This article is part of a series on [[modding-tools/sorting-plugin-load-order/mlox/index|mlox]]
> 
>* [[contributing-to-mlox-rules]] -- How to contribute to the rule-base of mlox 
>* [[tutorial-how-to-add-rules-to-the-mlox-rules-repository]]
>* [[mlox-rule-guidelines|Mlox Rule Guidelines]] -- Guidelines for Editors of the mlox rule-base
>* [[building-mlox|Building Mlox]] -- Creating your own build of mlox
>* [[mlox-history|Mlox History]] -- A brief history of the development of mlox 

## About

[[modding-tools/sorting-plugin-load-order/mlox/index|mlox]] is currently the most powerful tool available for correctly sorting Morrowind plugin load orders, and notifying users of conflicts or available patches -- however, it is only as effective as the rules that it is given. Without current, regularly updated rules to keep up with new mod releases and updates, it is simply a neat piece of code and nothing else.  

>[!question]- Can anyone contribute to mlox? 
> 
>>[!success] Absolutely!
>> 
>> Anyone can contribute to mlox, and contributions are always welcome. 

Contributing to mlox is as simple as reading mod page descriptions, making edits to a text file, and having a rudimentary knowledge of using [Github](https://github.com/).

>[!warning]- Hold up - did you say _"Github"?_ 
> 
>>[!success] Yes -- but don't be alarmed: 
>> 
>> It's easier than you think, and this guide will take you through each step to make it as easy as possible.

You'll find everything you need to get started here. %% also add link to mlox-rules channel in MMC %%

## How to contribute: 

This guide will cover the following points:

- [[#Where do contributions get made?]] 
- [[#How to Find Rules to Add]] 
- [[#Learning the Rules -- the mlox Cheat-Sheet]]
- [[#Checking your Work]] 
- [[#Contributing on Github]]

### Where do contributions get made?

![[mlox-rules-github-repository-navbar.png]]

The rules-base of mlox is stored in the Github repository [DanaePlays/mlox-rules](https://github.com/DanaePlays/mlox-rules). This is where updates to the rules are made -- each time mlox is run, it automatically downloads the latest rules from here.

The rules themselves are stored in two files:

* `mlox_base.txt` -- %%summarize%%
* `mlox_user.txt` -- %%summarize%%

These two simple files are easy to edit and are organized around a simple set of rules. You do not need to be a programmer or coder, or even a modmaker, in order to understand and contribute to the rules-base. 

>[!tip]- Tip for newcomers to Github:
>
> Github can be intimidating and unfamiliar to navigate at first. However, you only really need to pay attention to two files on this repository: `mlox_base.txt` and `mlox_user.txt` -- The rest you can ignore.
>
>![[mlox-rules-github-repository-important-files.png]]

In order to contribute rules on Github, you will need to create a fork of the repository -- We'll cover that in [[#Contributing on Github]]

### How to Find Rules to Add

Mod authors often advise[^1] on their mod's [NexusMods](https://www.nexusmods.com/morrowind) page or readme the following information:

* **Requirements** -- what other mods are required in order for the mod to work
* **Load order** -- whether the mod's plugin (ESP or ESM) need to load before or after any other plugins
* **Conflicts** -- what other mod plugins conflict with this mod and cannot be used alongside it
* **Patches** -- whether there any patches available for the mod, either packaged with the mod or downloaded separately

This information forms the basis of most mlox rules.

>[!question] What other sources of information are used to inform mlox rules?
> 
> Nexus mod page descriptions and mod readmes are the main source of information. However, other sources of information are also useful and accepted:
>  
>> [!example]- Contacting the mod author 
>> 
>> Oftentimes the mod author can be contacted on Nexus or on the Morrowind Modding Discord, and can provide further clarification on possible conflicts or load order requirements.
> 
>> [!example]- Your own research 
>>  
>> If you can identify, test and confirm a mod conflict or load order requirements that isn't already identified on the mod's Nexus page or readme, you can cite and contribute this information and contribute mlox rules based on them. 
>>
>> Before contributing the rules on Github, it is a good idea to verify your findings with the mod author and/or by posting them in the mlox-rules channel in the MMC discord.
>
>> [!example]- Nexus mod page bug reports and comments
>>  
>> Reviewing the comments sections and bug report tabs of Nexus mod pages is a useful source of information for identifying bugs, but care should be taken to verify any claims first before contributing. Oftentimes, reported 'bugs' can turn out to merely be user error, the result of installing mods incorrectly or misreading instructions. 
>> 
>> Nonetheless, these can be a useful starting point for any research you undertake. 
>>  
>> ![[mlox-tutorial-nexusmods-bug-report.png]] 



### Learning the Rules -- the mlox Cheat-Sheet 

The article [[mlox-rule-guidelines|Mlox Rule Guidelines]] is an essential reference for understanding and creating your own mlox rules. However, a great way to learn is by copying existing mlox rules and adapting them:

- For example, if you want to learn how to format an `[Order]` rule, use the 'find' function (`ctrl + f` in most text editors) to search for "`[order]`" and see how other instances of this rule have been formatted.

#### \[Order]

Specifies the order of plugins, from top to bottom, with the bottom being loaded last. 
 
![[example-of-a-mlox-order-rule.png]]
 
>[!example]- 
> 
> 
> 
 
>[!warning]- 
> 
> If two orderings conflict, the first one encountered wins. Order conflicts are called "cycles". 
> 
> Each order rule should only list a **maximum of two plugins**, as this gives mlox more flexibility in ordering and reduces the likelihood of cycles.
 
--- 
 
#### \[Requires] 
  
>[!tip]- 
> 
> 
 
--- 
 
#### \[Patch] 
  
>[!tip]- 
> 
> 
 
--- 
 
#### \[Conflict] 
 
>[!tip]- 
> 
> 
> 
 
#### \[Note] 
 
>[!tip]- 
> 
> 
> 


### Checking your Work

### Contributing on Github

[^1]: Including this information is good practice as a mod author. Mod authors can also contribute this information directly to mlox-rules by contributing to the Github repository.