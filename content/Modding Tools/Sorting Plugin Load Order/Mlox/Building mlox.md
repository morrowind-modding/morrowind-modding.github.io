---
tags: mlox
description: Creating your own build of mlox
---

>[!abstract]- Pages contained within this folder 
>
>This article is part of a series on [[Modding Tools/Sorting Plugin Load Order/Mlox/index|mlox]]
> 
>* [[Using mlox]] -- How to use mlox to sort your load order
>* [[mlox Rule Guidelines]] -- Guidelines for Editors of the mlox rule-base
>* [[Building mlox]] -- Creating your own build of mlox
>* [[mlox history]] -- A brief history of the development of mlox 

# Building mlox as an exe

Many Windows users do not have python installed, and do not want to install python just to use mlox.
Therefore, we use utilities to convert mlox into a portable executable (.exe) file that can be used on almost any windows system.

## Using PyInstaller:

Building an executable on Windows with PyInstaller is pretty easy, with one possible gotcha.
Before installation, please follow the "Running mlox from source" instructions to make sure you can run `mlox.py` directly.

Run these commands to build mlox.exe:
```
pip3 install pyinstaller
pyinstaller mlox.spec
```