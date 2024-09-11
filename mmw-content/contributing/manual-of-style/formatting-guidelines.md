---
tags:
  - Wiki/Manual-of-Style
  - MMW-Development
description: Guidelines for formatting Markdown text - Part of the Morrowind Modding Wiki Manual of Style
title: Formatting Guidelines
aliases:
  - Formatting Guidelines
---

## About

Guidelines for formatting Markdown text for the Morrowind Modding Wiki

---

![[contributing/manual-of-style/index#^3085e6|clean right]]

## Code

See [Obsidian 'Basic Editing Syntax'](https://help.obsidian.md/Editing+and+formatting/Basic+formatting+syntax#Code)

### Inline Code

In addition to denoting code, \``Inline code`\` can be used in the following ways:

- Directory paths, e.g., `C:\Games\OpenMWMods`
- _what else?_

Inline code should not be used to denote keyboard buttons, e.g., `ctrl`. Instead, use `<kbd>` HTML tags like so: `<kbd>ctrl</kbd>`, which is rendered as <kbd>ctrl</kbd>

### Code Blocks

Code blocks support [syntax highlighting](https://help.obsidian.md/Editing+and+formatting/Basic+formatting+syntax#Code+blocks) by defining code language after the first three backticks, e.g., 

````
```lua

```
````

#### Supported Languagss

Obsidian and Quartz support most coding languages for syntax highlighting. 

- [Obsidian supported languages (using Prism)](https://prismjs.com/#supported-languages)
- [Quartz supported languages (using Shiki)](https://shiki.style/languages)

MMW does not yet support MWScript syntax highlighting for Obsidian and Quartz.

### Quartz-Specific Features

Quartz uses Shiki for [Syntax Highlighting](https://quartz.jzhao.xyz/features/syntax-highlighting), which offers many features for styling of both codeblocks _and_ Inline code that are not present in base Obsidan.

These include:

- titles
- line highlighting and word highlighting 
- line numbers

As these features are not part of Obsidian, they will not be rendered there. However, The community plugin [Shiki Highlighter](https://github.com/mProjectsCode/obsidian-shiki-plugin) can be used to enable rendering of these.

---

## Emphasis

Adding emphasis to certain words or phrases helps to draw readers' attention to important details.

Emphasis can be added with either **bold** or **italicized** text. However, it should be used sparingly, as each emphasis added will lessen the effect of other emphases and detract from the appearance of the article.

Emphasis can also be added by the use of Callouts - see [[formatting-guidelines#Callouts]]



- **Bold** can be used to add emphasis only when it is intended as a **crucial warning** in the body text. However, warnings should generally be emphasized by adding a `> [!warning]` or `> [!danger]` callout instead.


> [!tip]- Practices to Avoid When Emphasizing
> 
> #### Do not do the following:
> 
> - Add emphasis with 'single' or "double" quotation marks
> - Use ALL CAPS for emphasis. 
> - Use _**double emphasis**_ by both holding and italicizing a word or phrase.
> - Do not overemphasize, as each emphasis added will lessen the effect of other emphases and detract from the appearance of the article

### Bold

- Use \*\***double Asterisks**\*\* instead of \_\___double underscores__\_\_ to define bold words/characters. This makes it easier to differentiate them from \__italic_\_ words/characters at a glance when editing
- Bold the article name the first time it appears in the page's introductory sentence. Any alternative names in the introductory sentence should also be bolded. (e.g. "**Mlox** is a tool for sorting plugin load order.")
- Bold the word or phrase being defined in bulleted or numeric lists.
- Do not use bold for general emphasis; use italics instead.

> [!example]-
> 
> ### Mlox
> 
> - **Sorting plugin load order** is the main use of Mlox.
> - **Mod conflicts** can be identified by mlox through the use of `[conflict]` rules.
> - **Requirements** can be stipulated by Mlox by way of `[requires]` rules to notify users if they are missing plugins required by others 

### Italics

- Use \__underscores_\_ instead of \**asterisks*\* to define italics. This makes it easier to differentiate them from \*\***bold**\*\* words/characters at a glance when editing.
- Italics should be used for the titles of books, games and non-MMW Morrowind modding guides (such as _Notes for Modmakers_) This includes the titles of _Elder Scrolls_ games and expansion packs, even when only the subtitle (e.g. _Oblivion_, _Skyrim_, _Online_) is written. The name of the series, _The Elder Scrolls_, should be italicized as well (even when shortened to just _Elder Scrolls_). Initialisms, most notably ESO, are not italicized.
- Italics can be used for general emphasis, but should be used sparingly.

> [!info]
> 
> By default, Obsidian uses \*asterisks\* to denote italics when using the `Toggle italic` hotkey[^1]. Instead, use <kbd>shift</kbd>+<kbd>_</kbd>, which automatically wraps a word in \_underscores\_

---

## Headers


Headers structure content to help readers navigate your article.

> [!abstract]+ Headers
> 
> ## `##` This is a main subject (h2)
> 
> ### `###` This subject has several important sub-subjects (h3)
> 
> #### `####` Sub-subjects can benefit from subheadings (h4)
> 
> ##### `#####` Example (h5)
> 
> ```lua title="codeblock title" 
> example code block
> ``` 

**Header 1** (H1) should never be used, as a webpage should only ever contain one H1 element - in Quartz, the article filename is the H1 element (i.e., **Formatting Guidelines**)

| Markdown           | HTML Header Tag Equivalent | Use                                       |
| ------------------ | -------------------------- | ----------------------------------------- |
| `#`                | `<h1>`                     | Unused, as Quartz uses the filename as h1 |
| `##`               | `<h2>`                     | Main section divider                      |
| `###` - `####`     | `<h3>` - `<h4>`            | For use in article subsections            |
| `#####` - `######` | `<h5>` - `<h6>`            | (use-case undetermined yet)               |

Header numbers should be arranged sequentially. 

- This improves readability by providing a logical structure
- Improves website SEO by making it easier for search engines to index the website's content

> [!example]- 
> 
> > [!success] Correct
> > 
> > ```
> > - H1
> > 	- H2
> > 		- H3
> > 			- H4
> > ```
> 
> > [!success] Correct
> > 
> > ```
> > - H1
> > 	- H2
> > 		- H3
> > 	- H2
> > 		- H3
> > 			- H4
> > 	- H2
> > ```
> 
> > [!failure] Incorrect
> > 
> > ```
> > - H1
> > 		- H3
> > 	- H2
> > 			- H4
> > ```

---

## Line-Wrapping

Do not 'hard-wrap' lines. This is unneeded in Obsidian which renders line-wrapping automatically according to window size, as does Quartz.

'Hard-wrapping' is intentionally adding a line-break after a certain amount of characters, e.g., after 80 characters.

---

## Links

Links are important for navigating content in the wiki.

\[\[Wikilinks\]\] are used for linking between different pages in the wiki, as well as for embedding content such as images.

> [!info]+ Internal Links
> 
> An 'internal link' is a link from one page in MMW to another page in MMW.
> 
> These should be rendered using `[[Wikilink]]` format as detailed on [Internal Links - Obsidian Help](https://help.obsidian.md/Linking+notes+and+files/Internal+links)

> [!info]+ External Links
> 
> Use Markdown to link to another site: 
> 
> ```
> [insert link display text](https://websiteurl.com)
> ```

### When to Use Links

This can be summarised with three principles:

- **Visual clarity**: Avoid cluttering links
- **Relevance**: Ensure links are relevant to the content of the article
- **First-come, first-served**: Only the first mentioned instance should contain a link

#### Visual Clarity

Creating too many links can distract the reader and make the article hard to read; some readers are likely to pause on each link to determine whether the link is of interest. 

Be sure that any link you add will help readers and be used by readers.

#### Relevancy

Ensure links to other pages are relevant to the article at hand. 

From UESP:

> _It makes little sense to link to an article about Orcs whenever you mention Orcish Armor. If anything, you'd want to link to a page describing the armor, not Orcs in general._
> – [UESP: Style Guide](https://en.m.uesp.net/wiki/UESPWiki:Style_Guide)

#### First-Come, First-Served

In each article, only the first mentioned instance of a link-worthy topic should contain the link. Additional mentions in the same article should not contain a link.

This helps to prevent cluttering links and breaking the flow of an article.

---

## Lists

Lists are particularly useful for guides and tutorials, which make up the majority of content on the wiki. Unnumbered lists or 'bullet points' help to organize and emphasize information quickly and effectively, while ordered lists (i.e., numbered lists) are useful for useful for step-by-step sections of tutorials.

### Unnumbered Lists

Use hyphens `-` for defining unnumbered lists and sub-lists, instead of asterisks `*`. This is to differentiate unnumbered lists from \*\***bold**\*\* words/characters.

### Ordered Lists

Obsidian and Quartz support ordered lists styled with Arabic numerals (1, 2, 3).

1. Use `1.` Rather than `1)` to denote an ordered list.
2. Obsidian and Quartz do not support ordered lists styled with letters or Roman numerals.

---

## Page Breaks

Use `---` to define a page break.

Page breaks should only be added at the end of an `##` H2 heading section, not after `###` H3 or more subheading sections.

> [!example]-
> 
>> [!success]+ Correct
>> 
>> ## H2 Heading
>> 
>> \[content\]
>> 
>> ### H3 Subheading
>> 
>> \[content\]
>> 
>> #### H4 Subheading
>>
>> \[content\]
>> 
>> ---
>> 
>> ## H2 Heading
> 
>> [!failure]+ Incorrect
>> 
>> ## H2 Heading
>> 
>> \[content\]
>> 
>> ---
>> 
>> ### H3 Subheading
>> 
>> \[content\]
>> 
>> ---
>> 
>> #### H4 Subheading
>>
>> \[content\]
>> 
>> ---
>> 
>> ## H2 Heading

---

## Quotes

To-do:
- "double quotes" vs 'single quotes'
- Escaping \[square\] brackets to avoid confusion with Markdown links

---

## Tables

Tables are easy to read; please use these whenever possible for listing data such as script functions (e.g., MWSE-Lua), modding tool commands (e.g., Tes3cmd commands), or in-game statistics.

> [!tip] Tip: Use 'Live Preview' Mode for Editing Tables
> 
> 'Live Preview' mode in Obsidian simplifies editing tables with a number of features:
> 
> - Add/delete column or row
> - Move row up/down, or column left/right
> - <kbd>shift</kbd>+<kbd>enter</kbd> automatically adds a `<br>` HTML tag to add a new line within a single table cell.
> 
> Additionally, editing tables in Live-Preview will proportionally space apart vertical bars (`|`) and hyphens (`-`) in the plaintext Markdown, improving readability in Source Mode or when viewing the Markdown in Github.

[^1]: Default hotkey to toggle italics is <kbd>shift</kbd>+<kbd>i</kbd>