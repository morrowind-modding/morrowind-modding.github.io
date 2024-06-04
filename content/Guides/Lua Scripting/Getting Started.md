
Lua is a very small and feature-light programming language. Compared to several other programming languages, there are very few built-in functionalities and data structures. This makes it much easier to pick up the language, but it can also lead to repetitive code and result in rebuilding the wheel several times.

Here are some things to keep in mind as you get started with Lua.
* The most comprehensive (freely available) Lua guide is the first edition of the [Programming in Lua (PIL)](https://www.lua.org/pil/contents.html) book. 
	* This should be considered the primary resource for learning all things Lua related, but it is not without it's faults:
	- PIL is designed for Lua 5.0, while MWSE and openmw both use modified versions of Lua 5.1. This means some sections of PIL are outdated, and that PIL doesn't cover all of the built-in Lua features you'll have at your disposal when developing Lua mods.
	- Some parts of the book can be rather terse and/or highly abstract.
	- The book does not contain very many examples.
- The majority of the functionality you will use when developing Lua mods will be native to either OpenMW or MWSE.
	- OpenMW-specific documentation can be found [here](https://openmw.readthedocs.io/en/stable/reference/lua-scripting/index.html).
		- A good place to start is \_\_\_\_\_\_.
	- MWSE-specific documentation can be found [here](https://mwse.github.io/MWSE/).
		- A good place to start is in the [Guides section](https://mwse.github.io/MWSE/guides/introduction/).
- The [Nexus Lua Dump](https://github.com/MWSE/morrowind-nexus-lua-dump) is a public repository that gathers together all Lua mods that have been published on www.nexusmods.com. It's a great resource for seeing how other mods implemented certain functionalities.
	- Both OpenMW and MWSE mods are included in this repository.
	- **NOTE**: This resource should only be be used for mod development. The repository contains _only_ the Lua portions of mods (i.e. it does not contain any ESPs), and may contain outdated versions of those mods. Do not use it as a replacement for downloading from www.nexusmods.com.
	- If you do not want your mods to be included in the repository, you can opt out by creating an issue on the GitHub page.

>[!tip] Tip: Using "find-in-file" functionality on the Nexus Lua Dump
>  If you clone the [Nexus Lua Dump](https://github.com/MWSE/morrowind-nexus-lua-dump) (or just download the zip and extract it), you can use the "find-in-files" functionality of VS Code (or other IDEs) to see how certain API functionalities are used in practice. For example, if you want to see how [`tes3.rayCast`](https://mwse.github.io/MWSE/apis/tes3/?h=raycas#tes3raytest) is used, you can search the Lua Dump for some code examples. 

