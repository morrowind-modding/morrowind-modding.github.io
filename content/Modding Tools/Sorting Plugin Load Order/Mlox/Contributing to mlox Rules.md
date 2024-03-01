---
tags:
  - mlox
  - Github
  - Guides
description: How to contribute to the rule-base of mlox
---

>[!abstract]- Pages contained within this folder 
>
>This article is part of a series on [[Modding Tools/Sorting Plugin Load Order/Mlox/index|mlox]]
> 
>* [[Contributing to mlox Rules]] -- How to contribute to the rule-base of mlox 
>* [[Tutorial - How to Add Rules to the mlox-rules Repository]]
>* [[mlox Rule Guidelines]] -- Guidelines for Editors of the mlox rule-base
>* [[Building mlox]] -- Creating your own build of mlox
>* [[mlox History]] -- A brief history of the development of mlox 

# About

[[Modding Tools/Sorting Plugin Load Order/Mlox/index|mlox]] is currently the most powerful tool available for correctly sorting Morrowind plugin load orders, and notifying users of conflicts or available patches -- however, it is only as effective as the rules that it is given. Without current, regularly updated rules to keep up with new mod releases and updates, it is simply a neat piece of code and nothing else.  

>[!question]- Can anyone contribute to mlox? 
> 
>>[!success] Absolutely!
>> 
>> Anyone can contribute to mlox, and contributions are always welcome. 

Contributing to mlox is as simple as reading mod page descriptions, making edits to a text file, and having a rudimentary knowledge of using [Github](https://github.com/).

>[!warning]- Hold up - did you say "*Github*"? 
> 
>>[!success] Yes -- but don't be alarmed: 
>> 
>> It's easier than you think, and this guide will take you through each step to make it as easy as possible.

You'll find everything you need to know here: %% also add link to mlox-rules channel in MMC %%

# How to contribute: 

This guide will cover the following points:

- [[#Finding the Rules-Base]] 
- [[#Where to Start]] -- finding a rule that needs adding:
- [[#Learning the Rules]] -- the mlox cheat-sheet:
- [[#Checking your Work]] 
- [[#Contributing on Github]]



## Finding the Rules-Base

>[!figure] ![[Tools_mlox_contributing_1.png]]
> 
> The [mlox-rules](https://github.com/DanaePlays/mlox-rules) Github repository -- for most mlox contributors, the 'mlox_base' and 'mlox_user' txt files are the only two files they will ever need to interact with.

The rules-base of mlox is stored in the Github repository [DanaePlays/mlox-rules](https://github.com/DanaePlays/mlox-rules). This is where updates to the rules-base are made and where mlox downloads its rules from each time it updates. Github can be intimidating to newcomers -- However, you only really need to pay attention to two files on the repository: 

* `mlox_base.txt`
* `mlox_user.txt`

These two simple files are easy to edit and are organized around a simple set of rules. You do not need to be a programmer or coder, or even a modmaker, in order to understand and contribute to the rules-base. 

We'll cover [[#Contributing on Github]] last

## Where to Start:

Mod authors often advise[^1] on their mod's [NexusMods](https://www.nexusmods.com/morrowind) page or readme the following information:

* **Requirements** -- what other mods are required in order for the mod to work
* **Load order** -- whether the mod's plugin (ESP or ESM) need to load before or after any other plugins
* **Conflicts** -- what other mod plugins conflict with this mod and cannot be used alongside it
* **Patches** -- whether there any patches available for the mod, either packaged with the mod or downloaded separately

This information forms the basis of most mlox rules.

>[!question]- What other sources of information are used to inform mlox rules?
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
>> ![[Tools_mlox_contributing_NexusBug.png]]



## Learning the Rules: 

%% Explain mlox rules-base and %%

## Checking your Work

## Contributing on Github

[^1]: Including this information is good practice as a mod author. Mod authors can also contribute this information directly to mlox-rules by contributing to the Github repository.