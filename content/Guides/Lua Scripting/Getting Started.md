
Lua is a very small and feature-light programming language. Compared to several other programming languages, there are very few built-in functionalities and data structures. This makes it much easier to pick up the language, but it can also lead to repetitive code and result in rebuilding the wheel several times. This problem can be mitigated by using third-party libraries provided by MWSE/OpenMW, mod authors, and possibly other projects on GitHub.

## Type Annotations and LuaCATS

Lua does not come with any built-in functionality for annotating types. In larger projects, this can make it difficult to keep track of what tables store what data, and this can lead to errors. To circumvent this problem, [LuaCATS](https://luals.github.io/wiki/annotations/) offers a _VS Code_ plugin that allows for robust type annotation functionality.

>[!note]+ This guide will use LuaCATS annotation in code blocks.
> LuaCATS will primarily be used to specify the types of `local` variables, and document the arguments and return values of functions. 

A lot of the keywords and terminology in LuaCATS is fairly self-explanatory, but a quick overview will be provided in this section by way of examples.
>[!example]- Specify the types of keys and values in a `table`
> To say a variable, named `tbl`, is of type `table`, each of its keys is a `string`, and each of its values is a `number`, we may write
>```lua
>---@type table<string, number>
>local tbl = {}
>```

>[!example]- Specify that a `table` only holds certain keys.
> Let's say we're storing some data that represents a person, and we only wish to store their `name` and `age`. We can annotate this as follows:
>```lua
>---@type {name: string, age: integer}
>local person = {}
>```
>In general, the syntax is `{key1name: val1type, key2name: val2type, key3name, val3type, ...}`.

>[!example]- Annotate the arguments and return values of a `function`
> Consider the following code block:
>```lua
>---@param arg1 string
>---@param arg2 integer
>---@return boolean
>local function my_func(arg1, arg2)
>	return true
>end
>```
>The above annotations dictate the acceptable arguments to `my_func`, along with its expected return types: namely,
>- `my_func` accepts two parameters: `arg1`, and `arg2`.
>- `arg1` must be a `string`
>- `arg2` must be an `integer`.
>- `my_func` will return a `boolean` value.
## Useful Resources

Here are some things to keep in mind as you get started with Lua.
* The most comprehensive (freely available) Lua guide is the first edition of the [Programming in Lua (PIL)](https://www.lua.org/pil/contents.html) book. 
	* This should be considered the primary resource for learning all things Lua related, but it is not without it's faults.
	- PIL is designed for Lua 5.0, while MWSE and OpenMW both use modified versions of Lua 5.1. This means some sections of PIL are outdated, and that PIL doesn't cover all of the built-in Lua features you'll have at your disposal when developing Lua mods.
	- Some parts of the book can be rather terse and/or highly abstract.
	- The book does not contain very many examples.
- The majority of the functionality you will use when developing Lua mods will be native to either OpenMW or MWSE.
	- OpenMW-specific documentation can be found [here](https://openmw.readthedocs.io/en/stable/reference/lua-scripting/index.html).
		- A good place to start is the [Overview of Lua scripting](https://openmw.readthedocs.io/en/latest/reference/lua-scripting/overview.html) page.
	- MWSE-specific documentation can be found [here](https://mwse.github.io/MWSE/).
		- A good place to start is in the [Guides section](https://mwse.github.io/MWSE/guides/introduction/).
- The [Nexus Lua Dump](https://github.com/MWSE/morrowind-nexus-lua-dump) is a public repository that gathers together all Lua mods that have been published on www.nexusmods.com. It's a great resource for seeing how other mods implemented certain functionalities.
	- Both OpenMW and MWSE mods are included in this repository.
	- **NOTE**: This resource should only be be used for mod development. The repository contains _only_ the Lua portions of mods (i.e. it does not contain any ESPs), and may contain outdated versions of those mods. Do not use it as a replacement for downloading from www.nexusmods.com.
	- If you do not want your mods to be included in the repository, you can opt out by creating an issue on the GitHub page.

>[!tip] Tip: Using "find-in-file" functionality on the Nexus Lua Dump
>  If you clone the [Nexus Lua Dump](https://github.com/MWSE/morrowind-nexus-lua-dump) (or just download the zip and extract it), you can use the "find-in-files" functionality of VS Code (or other IDEs) to see how certain API functionalities are used in practice. For example, if you want to see how [`tes3.rayCast`](https://mwse.github.io/MWSE/apis/tes3/?h=raycas#tes3raytest) is used, you can search the Lua Dump for some code examples. 

