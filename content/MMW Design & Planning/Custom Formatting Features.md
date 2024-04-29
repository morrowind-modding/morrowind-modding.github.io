---
tags:
  - MMW-Development
description: Custom formatting features implemented for use in the Morrowind Modding Wiki
---
Custom formatting features implemented for use in the Morrowind Modding Wiki

## Formatting
### [SIRvb's Image Adjustments](https://publish.obsidian.md/slrvb-docs/ITS+Theme/Image+Adjustments)

Image adjustments from SIRvb's Image Adjustments CSS snippet are incorporated into MMW. Some examples of how it can be used include:
- resizing images
- displaying images as a banner across the page or across a callout
- image-warp (using the CSS 'float' property), allowing text and other content to wrap around an image.

## Custom Callouts

In addition to the default [Obsidian Callouts](https://help.obsidian.md/Editing+and+formatting/Callouts), MMW also adds the following custom Callouts:

### Callout Grid

This pair of left and right callouts can be inserted to create a two-column grid of callouts. To add more rows to the grid, simply add more pairs of callouts.

**Types:**
- `[!gridfloatleft]`
- `[!gridfloatright]`

Other callouts can be nested inside these.


### Captions

Three callouts for adding captions to images. The callout title is hidden and text size reduced, similar to how Wikipedia and other wikis format their article image captions.

**Types:**
- `[!caption_left]` - floats to the left of the page
- `[!caption_right]` - floats to the right of the page
- `[!caption]` - centered in the middle of the page

### Infobox

A wiki-style infobox displayed in the top right of an article to summarize data from the article, such as requirements for a tutorial article.

**Type:**
- `[!infobox]`