---
tags:
  - MMW-Development
description: This is a list of Obsidian community plugins that could be integrated into the workflow of the wiki.
title: Obsidian Plugins for Consideration
aliases:
  - Obsidian Plugins for Consideration
---

This is a list of Obsidian community plugins that could be integrated into the workflow of the wiki. Preferably these should be plugins which are compatible as-is with Quartz. However, some plugins that are not currently compatible with Quartz will also be listed for consideration.

## [Linter](https://github.com/platers/obsidian-linter)

*"A linter will scan source code looking for errors, defects, stylistic issues, and questionable constructs."* 

This Obsidian plugin formats and styles your notes with a focus on configurability and extensibility. Rules can be toggled and configured in the settings. The main documentation on rules and other things are located on the [wiki](https://platers.github.io/obsidian-linter/).

>[!abstract] Use-case:
>
>Utilize automation to help maintain a consistent writing style and wiki format, reducing the workload of editors

>[!Success] Compatible with Quartz 
> 
>Untested, but most likely yes -- it is essentially an elaborate spellchecker, just for markdown and YAML formatting

>[!warning] Cons:
>
>Requires getting users to manually configure the plugin settings to match the wiki style guidelines. 
>
>This could be mitigated by providing a `data.json` file (which stores plugin settings otherwise configurable with the Obsidian settings GUI) which users would download and overwrite the default Linter `data.json` file with in `.obsidian\plugins\obsidian-linter`.

--- 

## [Footnote Shortcut](https://github.com/MichaBrugger/obsidian-footnotes)

Lightweight and does what it says: It adds two hotkeys to add either a numbered footnote or a named footnote.

>[!abstract] Use-case: 
> 
>Small quality of life addition, but very useful considering we are creating a wiki where citations will be used often.

>[!success] Compatible with Quartz 
> 
> Tested and already in use with no issues except for needing to disable `Enable Footnote Section Heading` - *MasssiveJuice*

>[!warning] Cons: 
> 
> The setting `Enable Footnote Section Heading` should be disabled, as Quartz seems to automatically parse footnotes and add a linebreak and `Footnotes` at the bottom of pages containing footnotes, like so:
> 
> ```
> --- 
> 
> # Footnotes 
> 
> 1. example footnote
> ```

--- 

## [Dataview](https://github.com/blacksmithgu/obsidian-dataview) 

Treat your Obsidian Vault as a database which you can query from. Provides a JavaScript API and pipeline-based query language for filtering, sorting, and extracting data from Markdown pages.

Dataview generates _data_ from your vault by pulling information from **Markdown frontmatter** and **Inline fields**. Once you've annotated documents and the like with metadata, you can then query it using any of Dataview's four query modes.

>[!abstract] Use-case:
>
>The first use that comes to my mind is having more options to create dynamic, automated contents lists than what Quartz natively does, which have the advantage that they can be placed anywhere. For example, a contents list of articles relating to a specific topic or series of articles. This would reduce the workload of editors needing to update any manual contents lists. 
> 
>However, it could be used in much more creative ways in future to filter and display information stored in the wiki. Ultimately the wiki will end up being a repository for a lot of data, and it could be useful to have a tool which can query this. 


> [!failure] Currently Incompatible with Quartz
> 
> Dataview is not natively supported by either Quartz or [Obsidian Publish](https://obsidian.md/publish).
>  
> A workaround exists, as described in the article [Using Dataview on Obsidian Publish](https://joschua.io/posts/2023/09/01/obsidian-publish-dataview/). Although it relates to Obsidian Publish, the same principles apply to Quartz too: 
> 
>>[!summary]- 
>>
>> - **Problem**: Quartz cannot parse and render standard Dataview queries.
>> - **Solution**: Dataview can output the results of a query as plain markdown. [Obsidian Templater](https://github.com/SilentVoid13/Templater) can write that markdown output to a `.md` note, and *that* note can then be embedded within other notes on your site
> 
> Quartz integration is possible using [obsidian-github-publisher](https://github.com/ObsidianPublisher/obsidian-github-publisher) by [Lisandra-dev](https://github.com/Lisandra-dev), but implementing this would be difficult for a collaborative project like MMW as it makes it more vulnerable to plugins updates breaking the site or disrupting workflow, and it would be *yet another* thing for potential contributors to have to learn.


> [!warning] Cons:
> 
> Quartz integration is possible, but convoluted. The rewards may not be worth the effort involved to get it running.

---

## [Shiki Highlighter](https://github.com/mProjectsCode/obsidian-shiki-plugin)

This plugin integrates [shiki](https://shiki.style/) via [Expressive Code](https://expressive-code.com/) into Obsidian, providing better syntax highlighting for over 100 languages.

Shiki is [used by Quartz for syntax highlighting](https://quartz.jzhao.xyz/features/syntax-highlighting) and adds a number of additional ways to style codeblocks.

> [!abstract] Use-Case:
> 
> Enables Shiki-style syntax highlighting in Obsidian, aligning its rendering of codeblocks with Quartz. This improves WYSIWYG.

> [!success] Compatible with Quartz
> 
> Quartz already uses Shiki, so this plugin would help align how codeblocks are rendered in Obsidian with how they are rendered in Quartz.

> [!warning] Cons
> 
> The plugin uses [Expressive Code](https://expressive-code.com/) for rendering, whereas Quartz uses [Rehype Pretty Code](https://rehype-pretty-code.netlify.app/).