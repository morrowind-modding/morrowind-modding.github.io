---
tags:
  - mlox
description: Creating your own build of mlox
title: Building Mlox
aliases:
  - Building Mlox
---

>[!abstract]- Pages contained within this folder 
>
>This article is part of a series on [[modding-tools/sorting-plugin-load-order/mlox/index|mlox]]
> 
>* [[contributing-to-mlox-rules|Contributing to Mlox Rules]] -- How to contribute to the rule-base of mlox 
>* [[tutorial-how-to-add-rules-to-the-mlox-rules-repository]]
>* [[mlox-rule-guidelines|Mlox Rule Guidelines]] -- Guidelines for Editors of the mlox rule-base
>* [[building-mlox|Building Mlox]] -- Creating your own build of mlox
>* [[mlox-history|Mlox History]] -- A brief history of the development of mlox 

## Building mlox as an exe

Many Windows users do not have python installed, and do not want to install python just to use mlox.
Therefore, we use utilities to convert mlox into a portable executable (.exe) file that can be used on almost any windows system.

### Using PyInstaller:

Building an executable on Windows with PyInstaller is pretty easy, with one possible gotcha.
Before installation, please follow the "Running mlox from source" instructions to make sure you can run `mlox.py` directly.

Run these commands to build mlox.exe:
```
pip3 install pyinstaller
pyinstaller mlox.spec
```