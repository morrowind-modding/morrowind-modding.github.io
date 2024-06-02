---
tags:
  - MMW-Development
description: Custom formatting features implemented for use in the Morrowind Modding Wiki
---
## About

This page is an outline of custom formatting features implemented for use in the Morrowind Modding Wiki. To use these in Obsidian, enable all `MMW_` CSS snippets in Obsidian's 'Appearance' settings so they render correctly in Obsidian.

### Formatting

#### [SIRvb's Image Adjustments](https://publish.obsidian.md/slrvb-docs/ITS+Theme/Image+Adjustments)

Image adjustments from SIRvb's Image Adjustments CSS snippet are incorporated into MMW. Some examples of how it can be used include:
- resizing images
- displaying images as a banner across the page or across a callout
- image-warp (using the CSS 'float' property), allowing text and other content to wrap around an image.

#### Keyboard-Styled Text

Text can be styled like the keys of a keyboard by wrapping text within `<kbd> </kbd>` HTML tags. For example, `<kbd>ctrl</kbd> + <kbd>alt</kbd> + <kbd>del</kbd>` gets rendered as <kbd>ctrl</kbd> + <kbd>alt</kbd> + <kbd>del</kbd>.

These should be used for any instance where programs' default hotkeys (ones which are not customizable, or are the default keybinding) are mentioned.

> [!tip]- Closing HTML tags
> 
> `<kbd>` is an HTML tag. It is used to surround an 'element' (in this case, a piece of text). As it is not self-closing, the second tag in a pair of closing tags needs a `forward slash` (<kbd>/</kbd>), for example: \<kbd\> \</kbd\>.

---

### Custom Callouts

In addition to the default [Obsidian Callouts](https://help.obsidian.md/Editing+and+formatting/Callouts), MMW also adds the following custom Callouts:

#### Callout Grid

This pair of left and right callouts can be inserted to create a two-column grid of callouts. To add more rows to the grid, simply add more pairs of callouts.

**Types:**
- `[!gridfloatleft]`
- `[!gridfloatright]`

Other callouts can be nested inside these.


#### Captions

> [!caption_right]
> 
> ![[PuzzleBoxOnly.png|wsmall]]
> 
> `[!caption_right]` callout

Three callouts for adding captions to images. The callout title is hidden and text size reduced, similar to how Wikipedia and other wikis format their article image captions.

**Types:**
- `[!caption_left]` - floats to the left of the page
- `[!caption_right]` - floats to the right of the page
- `[!caption]` - centered in the middle of the page

#### Infobox

A wiki-style infobox displayed in the top right of an article to summarize data from the article, such as requirements for a tutorial article.

> [!infobox]
> 
> ## Infobox
> 
> ![[PuzzleBoxOnly.png]]
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