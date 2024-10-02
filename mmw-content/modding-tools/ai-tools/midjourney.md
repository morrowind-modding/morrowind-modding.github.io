---
title: Midjourney
aliases:
  - Midjourney
  - MidjourneyAI
tags:
  - Textures
  - Concept-Art
  - AI
  - Modding-tool
description: A subscription-based AI text-to-image generator.
---
## About

> [!infobox|n-th]
> 
> ## Midjourney
> 
> > [!caption|center wfull txt-s]
> > 
> > ![[midjourney-logo.png|center]]
> > 
> 
> ### Details
> 
> | Type | Name |
> | --- | --- |
> | **Links** | - [Official Site](https://www.midjourney.com/home)<br>- [Midjourney Documentation](https://docs.midjourney.com/) |
> | **Requirements** | Paid subscription |
> | **Author** | Midjourney Inc. |

**Midjourney** is an AI text-to-image generator, which can be ran via Discord commands or directly through the official site. Visit the [Midjourney website](https://docs.midjourney.com/) for in depth documentation on using the tool. This wiki page will focus on optimizing Midjourney's output for creating images for use in Morrowind.
## Writing Midjourney prompts for Morrowind
Something to keep in mind with Midjourney is that its creators have tuned it to try and make everything it creates "beautiful". This can sometimes work towards an end goal or against it. Counteracting the tuning generally comes down to prompt-crafting.

A powerful tool for prompting is using negative parameters with a prompt. These can help with pruning undesirable things from the generation process. Note that these frequently remove more factors than intended so it is generally recommended to prompt without the negatives first to see the contrast in how the AI is interpreting the prompt.

> [!Example]
> **Prompt 1 (no negative prompt):** `top view of a large blue chitinous object with fused plates making a round shape`
> ![[imageprompt-01.png]]
> In this image, the AI was seeing the word "plates" and "round shape" and associating that with dinnerplates and trying to merge that into a "chitinous dinnerplate object". Simply removing "plates" from the prompt is an option, but by recognizing certain features in the output, it's sometimes possible to add a negative prompt to fix an issue like this without compromising the rest of the prompt. After adding `--no ceramic`, the results came out much closer to what was desired.
> 
> **Prompt 2 (with negative prompt):** `top view of a large blue chitinous object with fused plates making a round shape --no ceramic`
> ![[imageprompt-02.png]]

So it's easy to see that adding and removing words from the prompt can have a significant impact on the results. Experimentation and an understanding of the visual associations with words is key in getting good results. 

Midjourney can be a powerful tool for modding Morrowind. But as with any generative AI, not every output will be "good". Sifting through the bad outputs, cutting good parts from multiple outputs, and using image editing skills can be used together to produce acceptable results.
### Textures
Something to bear in mind when trying to create textures which fit into the game is that many of the vanilla textures were created by editing photos and other source images. As such, they often include artifacts like baked lighting which modern techniques generally do not try to replicate. However, since AI often adds lighting to the images it generates, it can actually be viewed as a good thing if edited properly (i.e. reducing highlights as required).

One of the most useful tools that Midjourney has which many other AI tools lack is the `--tile` parameter. This parameter makes images tile in both the horizontal and vertical directions.

> [!Note]
> While powerful, the `--tile` parameter can have a significant influence on the appearance of a prompt. Like in the example above, it is a good practice to run the prompt without this parameter first to understand how it affects the output.
> 
> **Example:**
> **Prompt 1 (no tiling):** `flat gold metal texture background, retrofuturism architecture, art deco, top view, high resolution photography, insanely detailed in the style of photography. --ar 2:1`
> ![[imageprompt-04.png]]
> **Prompt 2 (with tiling):** `flat gold metal texture background, retrofuturism architecture, art deco, top view, high resolution photography, insanely detailed in the style of photography. --tile --ar 2:1`
> ![[imageprompt-03.png]]
> The first set of prompts are more random in nature but as soon as the `--tile` parameter is added, the AI tries to impose patterns onto the image. If this is undesirable, it may be possible to improve by adding negative prompts. If not, it may be better to drop the `--tile` parameter entirely if it is not necessary.

Another feature which can be useful for creating vanilla-style textures is the `/describe` command on the Discord version of Midjourney. While many vanilla textures are too low resolution for the AI to understand what they're meant to convey, AI upscaled textures can be used instead. The output from this command can be a good starting point with prompts; particularly for those who are new to prompting.

In addition to simply describing images, Midjourney can also use external images as general style references with the image prompting feature. This can be done by adding the URL(s) into the beginning of the prompt. The weight of the image(s) can be varied using the image weight parameter: `--iw <0-3>`. Midjourney won't use the image directly, but it will use the style of the image as a reference and try to match the style of its output.

> [!Example]
> Upscaled vanilla image on the left. AI-generated image using the vanilla image as a prompt: `"image-url" close up side view of a green glass pot --tile`
> 
> ![[image-prompting-example.png]]
> 
> Note that using low-resolution sources for image prompting frequently results in blurry output from Midjourney.
### Character Portraits
Midjourney does not support painting over a starting image directly, However, if a reference is available for the character, it does have a [Character Reference](https://docs.midjourney.com/docs/character-reference) feature which can be useful.

> [!Example]
> **Prompt 1 (artwork reference):** `the legionnaire is armed with a spear and fighting off a wolf --ar 16:9 --cref image-url`
> ![[cref-example-01.png]]
> **Prompt 2 (screenshot reference):** `the gray-skinned elf with a white goatee and top knot is sitting at his dinner table. red and black armor. in an ink and watercolor style on a white background. --cref image-url`
> ![[cref-example-02.png]]

As a final point on portraits, varying specific regions of an image can be used to keep portions of an image that work while tweaking others. This can be done after generating an image and selecting the "Vary (Region)" option.

> [!caption|wfull]
> ![[vary-region.png]]
> Image shows the "Vary (Region)" option in the Discord interface.

> [!Example]
> ![[example-vary-region.png]]
> **Steps:**
> 1. Generate an initial image to get some feature that's important.
> 2. Select the areas of the image to change.
> 3. *Optional: type in any desired changes to the prompt to tell the AI what to do in that space.*
> 4. Repeat for different parts of the composition as required.
### Concept Art
In addition to creating textures, Midjourney can be used to create conceptual images. The same prompting aspects discussed in the sections above apply here. In general, the output style of concept art isn't as critical since it's only intended to inspire, not fit into the game.

> [!Example]
> [OAAB_Data](https://www.nexusmods.com/morrowind/mods/49042) has used AI concepts. A recent example is the daedric furniture set where Midjourney was used to create images and the most interesting aspects of those images were used as inspiration to model the set.
> 
> **Concepts:**
> ![[oaab-dae-furniture-concepts.png]]
> **3D modeled assets in game:**
> ![[oaab-dae-furniture.png]]