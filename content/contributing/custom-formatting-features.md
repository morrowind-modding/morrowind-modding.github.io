---
tags:
  - MMW-Development
description: Custom formatting features implemented for use in the Morrowind Modding Wiki
title: Custom Formatting Features
aliases:
  - Custom Formatting Features
---
## About

This page is an outline of custom formatting features implemented for use in the Morrowind Modding Wiki. To use these in Obsidian, enable all `MMW_` CSS snippets in Obsidian's 'Appearance' settings so they render correctly in Obsidian.

## Formatting

### Image Adjustments

Image adjustments from [SIRvb's Image Adjustments](https://publish.obsidian.md/slrvb-docs/ITS+Theme/Image+Adjustments) CSS snippet are incorporated into MMW. Some examples of how it can be used include:
- resizing images
- displaying images as a banner across the page or across a callout
- image-warp (using the CSS 'float' property), allowing text and other content to wrap around an image.

### Keyboard-Styled Text

Text can be styled like the keys of a keyboard by wrapping text within `<kbd> </kbd>` HTML tags. For example, `<kbd>ctrl</kbd> + <kbd>alt</kbd> + <kbd>del</kbd>` gets rendered as <kbd>ctrl</kbd> + <kbd>alt</kbd> + <kbd>del</kbd>.

These should be used for any instance where programs' default hotkeys (ones which are not customizable, or are the default keybinding) are mentioned.

> [!tip]- Closing HTML tags
> 
> `<kbd>` is an HTML tag. It is used to surround an 'element' (in this case, a piece of text). As it is not self-closing, the second tag in a pair of tags needs a `forward slash` (<kbd>/</kbd>) to 'close' it. 
> 
> **Example**: \<kbd\> \</kbd\>.

---

## Callout Adjustments

MMW borrows a large number of [Callout Adjustments](https://publish.obsidian.md/slrvb-docs/ITS+Theme/Callout+Adjustments#Adjustments "SIRvb's ITS Theme") from SIRvb's 'ITS Theme' for Obsidian. These add much-needed flexibility for styling and positioning callouts.

**Syntax:**

```markdown title="basic syntax"
> [!callout-type|adjustment adjustment2]
```

```markdown title="examples"
> [!tip|right]

> [!warning|title-center]

> [!note|clean no-title embed]
```

### Callout Titles

|Abbr.|Full Title|Description|
|---|---|---|
|`no-t`|`no-title`|Hides callout title|
|`s-t`|`show-title`|Show callout title|
|`ttl-c`|`title-center`|Center callout title text|
|`no-i`|`no-icon`|Hide callout icon|
|`subt`|`subtitle`|Style words in italic (`* *`, `_ _`) as subtitles|

### Callout Text

|Abbr.|Full Title|Description|
|---|---|---|
|`txt-c`|`text-center`|Center callout text|
|`txt-r`|`txt-right`|Right align callout text|
|`txt-l`|`txt-left`|Left align callout text|
|`txt-s`|`text-small`|Shrink callout text size|

### Callout Styling

|Abbr.|Full Title|Description|
|---|---|---|
||`embed`|Remove callout padding to expand embed|
||`clean`|Remove callout Styling|
||`collapse`|Remove all padding and margins for ultra compact look|
|`nbrd`|`no-border`|Borderless callout|
||`clear`|Move any other floating elements near to under this callout|

### Callout Content Padding

|Attribute|Abbr|Callout Padding Sizing|
|---|---|:-:|
|`content-padding-small`|`c-p-sm`|6px|
|`content-padding-medium`|`c-p-med`|12px|
|`content-padding-large`|`c-p-lg`|24px|

### Callout Positioning

|Attribute|Description|
|---|---|
|`left`|Float callout to the left|
|`right`|Float callout to the right|
|`center`|Center the callout|

### Callout Sizing

Callouts can be resized using the keywords below.

The sizing is a percentage, relative to the callout's parent. Using `|wmed` as an example:

- if placed directly in the page body, it would take up 60% page-width.
- if nested within another callout, it would only take up 60% of the 'parent' callout's width.

Sizing can be made to use pixels instead of percentage by adding `|static`.

> [!column|flex 2] 
> 
> > [!note|clean no-t]
> > 
> > |Attributes|Callout Width `%`|Callout Width `px`|
> > |---|:-:|:-:|
> > |`wmicro`|10%|50px|
> > |`wtiny`|20%|100px|
> > |`wsmall`|30%|200px|
> > |`ws-med`|40%|300px|
> > |`wm-sm`|50%|400px|
> > |`wmed`|60%|500px|
> > |`wm-tl`|80%|600px|
> > |`wtall`|95%|700px|
> > |`wfull`|100%||
> > |`wfit`|Auto|Auto|
> 
> > [!note|clean no-t]
> > 
> > > [!note] Add `|static` for sizing with pixels
> > >
> > > Callout sizing uses percentages by default. `|static` switches to pixels to use static sizing.
> > 
> > > [!tip]
> > > 
> > > Callout sizing is the same as [[custom-formatting-features#SIRvb's Image Adjustments|SIRvb's Image Adjustments]]
 

---

## Custom Callouts

In addition to the default [Obsidian Callouts](https://help.obsidian.md/Editing+and+formatting/Callouts), MMW also adds the following custom Callouts:

### Column Callout

The `[!column]` callout lets you display content as a grid.

The callout itself is invisible but its contents get displayed as a grid, with each new line of the callout represents a new grid column. It works best when nesting other callouts within it. However, if you wish to write content in columns without callout styling for the nested callouts, you can add the [[custom-formatting-features#Callout Adjustments|Callout Adjustments]] metadata `clean no-title` to them.

By adding the `flex` metadata, grid columns will stack vertically on mobile.

> [!column|flex 3]
> 
> > [!warning] Use Nested Callouts
> > 
> > `[column]` is designed to have callouts nested within it.
> > 
> > To remove styling from nested callouts, add `clean no-title` to the metadata
> 
> > [!NOTE|clean no-t]
> > 
> > This callout has `clean no-title` metadata.
> > 
> > ```markdown title="syntax:"
> > > [!column]
> > >
> > > > [!note] title
> > > >
> > > > content
> > >
> > > > [!column] title
> > > >
> > > > content
> > ```
> 
> > [!caption]
> > 
> > ![[morrowind-modding-wiki-logo-without-text.png|wsmall]]
> > 
> > A caption callout nested in the grid.

### Captions

> [!caption|right]
> 
> ![[morrowind-modding-wiki-logo-without-text.png|wsmall]]
> 
> `[!caption|right]` callout

A borderless callout for adding captions to images. 

Use [[custom-formatting-features#Callout Positioning|Callout Positioning]] metadata to float these left or right for wiki-style article image captions

```markdown title="syntax"
> [!caption]
> 
> ![[image.png]]
> 
> Image caption.

```

<br>

### Infobox

A wiki-style infobox displayed in the top right of an article to summarize data from the article, such as requirements for a tutorial article.

> [!infobox]
> 
> ## Infobox
> 
> ![[morrowind-modding-wiki-logo-without-text.png]]
> 
> ### Table
> 
> | Type | Name |
> | --- | --- |
> | Row | Row |
> | Row | Row |

**Type:**
- `[!infobox]`

**Syntax:**

```
> [!infobox]
> 
> ## Article Title
> 
> ![[image]]
> 
> ### Table Heading
> 
> | Type | Name |
> | --- | --- |
> | Row | Row |
> | Row | Row |
```

---

## Hide Embed ('Transclusion') Styling

**Syntax:**

```
![[Embedded Note|attribute]]
![[intereting-note-title|clean]]
```

| Attribute | Description                        |
| --------- | ---------------------------------- |
| `clean`   | Removes border to hide embed style |

When embedding content from one note within another note, the default border styling can be hidden by adding '`|clean]]`' at the end of the wikilink, in order to make the embed appear seamlessly as a part of the page it is embedded in. ^4beb5b

This allows for [[redundancy]] within the wiki, wherein an important piece of data (such as a table or a contents list), which must appear on multiple pages, can be stored in just one note. When updates are made to the data, only the original note needs to be edited; all pages where that data has been embedded will be updated automatically. 

This is the same principle as [Wikipedia 'Templates'](https://en.wikipedia.org/wiki/Wikipedia:Templates). However, it has been renamed because ['Templates' in Obsidian serve a different function](https://help.obsidian.md/Plugins/Templates).

> [!example] This is a standard transclusion:
> ![[custom-formatting-features#^4beb5b]]

> [!example] This is a 'clean' transclusion:
> ![[custom-formatting-features#^4beb5b|clean]]