---
title: Upscaling Textures with Gigapixel AI
aliases:
  - Upscaling Textures with Gigapixel AI
  - Gigapixel Texture-Upscaling Tutorial
tags:
  - Gigapixel
  - Textures
  - Upscaling
description:
---

## About

> [!infobox|n-th]
> 
> ## Gigapixel Texture-Upscaling Tutorial
> 
> > [!caption|center wfull txt-s]
> > 
> > ![[gigapixel-7-logo.jpg|center]]
> > %%caption%%
> > [(image source)](https://cdn.prod.website-files.com/6005fac27a49a9cd477afb63/662078e2f9fb43094b64e271_opengraph-gigapixel.jpg)
> 
> ### Tutorial Info
> 
> | Type | Name |
> | --- | --- |
> | **Difficulty** | #advanced |
> | **Requirements** | - [[gigapixel\|Gigapixel]]<br>- [Python](https://www.python.org/downloads/)<br>- [Pillow (PIL fork)](https://pillow.readthedocs.io/en/stable/)<br>- [PNGtoDDSTextureScripts](https://github.com/staticnation/PNGtoDDSTextureScripts)<br>- A bulk file renaming utility (recommended)<br> - [XnConvert](https://www.xnview.com/en/xnconvert/)<br>- [[normalmap-generator\|NormalmapGenerator]] (optional)<br>- [[nvidia-texture-tools\|NVIDIA Texture Tools 3]] |
> | **Tutorial Files** | Any vanilla Morrowind textures will do |
> 
> %% embed download link to tutorial files if applicable %%

This step-by-step tutorial describes a workflow for upscaling textures with AI, through the use of [[gigapixel|Gigapixel AI]]. Other AI upscaling tools such as [[real-esrgan|ESRGAN]] can be used instead of Gigapixel, but the instructions here will assume usage of the latter.

### Goals

By the end of this tutorial, you should be able to:

1. Convert textures in bulk from TGA/DDS format to PNG, ready to be upscaled.
2. Upscale textures using Gigapixel 7
3. Optionally generate normal maps and specular maps using [[normalmap-generator|NormalmapGenerator]].
4. Convert the upscaled textures back to the appropriate DDS format using [[nvidia-texture-tools|NVIDIA Texture Tools 3]] via Python batch scripts

### Prerequisites

The tools outlined here are required in order to follow this tutorial. Several of these have equivalent tools which could be used instead by experienced users. However, this tutorial will assume the user is using the tools described below.

#### Gigapixel 7

Gigapixel 7 (personal) is required. Theoretically the trial version will suffice, but any output textures processed by it will have a watermark applied to them. Gigapixel Pro will also work, but it is more than is necessary.

#### XnConvert

[XnConvert](https://www.xnview.com/en/xnconvert/) will be used to convert the original textures from DDS or TGA into DDS format in bulk. Equivalent batch image converters can be used instead. If only working on a handful of textures, even [[gimp|Gimp]] or [[photoshop|Photoshop]] will suffice, but these are generally not suitable for batch processing large amounts of images.

#### NVIDIA Texture Tools 3

[[nvidia-texture-tools|NTT3]] will be used for converting the Gigapixel-upscaled textures to the appropriate DDS format. NTT3 must be used, as opposed to [[nvidia-texture-tools|NVIDIA Texture Tools]], because PNGtoDDSTextureScripts utilizes NTT3's API.

#### Python + PIL

[Python](https://www.python.org/downloads/) is required in order to run the PNGtoDDSTextureScripts used for processing the textures through NTT3.

In addition, the scripts utilize [PIL](https://pillow.readthedocs.io/en/stable/), which can be installed via [pip](https://pypi.org/project/pip/).

#### PNGtoDDSTextureScripts

[[pngtodds-texture-scripts|These Python scripts]] will be used to convert the upscaled images in bulk to the appropriate DDS format, via NNT3's API. They can be downloaded from [Github](https://github.com/staticnation/PNGtoDDSTextureScripts/tree/main).

---

## Create a working directory

%% elaborate on goal 1 %%

---

## H2 (step 2)

%% elaborate on goal 2 %%

### H3 (elaborate on aspect of H2 step, or break it down into smaller sub-steps)

---

## H3 (step 3)

%% elaborate on goal 3 %%

%% further steps can be added as needed %%

---

## Further Reading

%% bullet point internal or external links to articles relevant to the tutorial %%

- %% link %%
- %% link %%
- %% link %%

---

