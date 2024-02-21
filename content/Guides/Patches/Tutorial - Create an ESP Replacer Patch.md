---
description: Three tutorials of increasing difficulty on creating ESP Replacers
tags:
  - Tutorials
  - Patches
  - Construction-Set
  - CSSE
---
*This page contains three tutorials of varying difficulty on how to create an ESP Replacer Patch:*

See [[Creating a Patch for an ESP]] for more information on what patches are and how they work.

# Tutorial 1:
![[Patches_ESP-Replacer_1_Preview.png]]
* **Difficulty level:** Beginner
* **Requirements:**
     * Morrowind, Tribunal and Bloodmoon
     * [CSSE]()%%bad link%%
* **Tutorial Files:**
     * `MMW_Patches_ESP-Replacer_1a.esp`
     * `MMW_Patches_ESP-Replacer_1b.esp`
![[Assets/Guides/Patches/Tutorial - Create an ESP Replacer Patch/MMW_Patches_ESP-Replacer_1.0.zip]]


**Scenario:** `MMW_Patches_ESP-Replacer_1a.esp` adds a house to Caldera. `MMW_Patches_ESP-Replacer_1b.esp` adds a thatch tower to Caldera in the same place - follow the tutorial to create an ESP replacer for `Replacer_1a.esp` which solves the conflict:


## Step 1: Navigating to the Cell
1. Open the Construction Set ('CS'), open the Data Files window and double-click `Replacer_1a.esp` and `Replacer_1b.esp` to load them. Set `Replacer_1a.esp` as ‘Active’.
![[Patches_ESP-Replacer_1_DataFiles1.png]]
![[Patches_ESP-Replacer_1_DataFiles2.png]]
3. Click `show modified only` in the Cell View window. This will make it display only cells modified or added by the active plugin - in this case, `Replacer_1a.esp`
![[Patches_ESP-Replacer_Cell_Window.png]]
1. In the Cell View window, under `Cell Name`, locate the cell `Caldera, -2,2` where our mod conflict is, and **double-click** it to bring you there in the Render Window.
2. `Show modified only` not only filters the list of cells modified by the active ESP: it also filters the list of references *in* that cell to only display references modified or added by the active ESP. Under `Object ID` in the right-hand panel in Cell View, **double-click** on `ex_nord_house_02`

## Step 2: Identifying the Conflict
![[Patches_ESP-Replacer_1_Conflict.png]]

We can clearly see some kind of conflict here. The house added by `Replacer_1a.esp` overlaps with the thatch tower (`ex_common_tower_thatch`) added by `Replacer_1b.esp`, covering up the door to the tower.

>[!warning]

Before making *any*  changes, we need to differentiate between what references come from **`1a.esp`** and **`1b.esp`**, as **we can only make modifications to references from `1a.esp`**. 

There are two ways we can do this:

### Browse references with Cell View:
With `Show modified only` enabled, only references *added* or *modified* by `1a.esp` are displayed. We can double-click on each of these to locate them in the Render Window
> [!example]- 
> 1. Double-click on `ex_nord_win_02`, the first reference in Cell View under `Object ID`. This will take you to the reference's location in the Render Window - However, in this case, it is obscured by other references (the thatch tower), so we need to move the camera around to find the selected reference.
> 2. To get a better view, left click on the top of the Render Window (the top bar that displays the cell name, `Caldera -2,2`). This allows to use the camera controls in the Render Window, without unselecting our `ex_nord_win_02` reference. Hold the `shift` key and move your mouse around to orbit the camera around and get your bearings - to locate the window you'll need to zoom in, either by scrolling with your mouse wheel, or holding the `V` key and moving your mouse forward.
>![[Patches_ESP-Replacer_1_Conflict2.png]]
>3. Repeat this process for each reference from `Replacer_1a.esp`. Note however that this is a time-consuming approach if your active ESP contains many references in the cell.
>>[!tip] Tip: 
>> 
>>You can also do this by opening another session of the CS with only `MMW_Patches_ESP-Replacer_1b.esp` set to `active` and selecting Show Modified Only.

### Show Reference Data: 
Holding `ctrl + shift + R + clicking middle-mouse-button` on a selected reference brings up Reference Data, telling us which plugin is adding or modifying that reference.
> [!example]-
>1. Left-click on `ex_common_house_addon`, the entrance to the thatch tower with the curved roof. While selected, press and hold `ctrl + shift + R + middle-mouse-button` to bring up the Reference Data window, which tells us beside `File:` that the reference originates from `MMW_Patches_ESP-Replacer_1b.esp`. 
>![[Patches_ESP-Replacer_1_Conflict3.png]]
>1. Try this out with other references in the cell - they will either originate from `Morrowind.esm`, `MMW_Patches_ESP-Replacer_1a.esp` or `MMW_Patches_ESP-Replacer_1b.esp`. Be sure not to move any references as otherwise you will make [dirty references]() %%add link%%
>>For more information on [Show Reference Data]() %%add link%% see the wiki page

> [!tip] Tip: Hiding references in the Render Window:
> 
> You can temporarily hide references in the Render Window without editing them.
> 
> While having one or more references selected in the Render Window:
> -  press `Q` on your keyboard to bring up the `Context Menu`. 
> - Select `Hide Selection` to hide the reference. This can be reverted with `Restore Hidden References` in the `Context Menu`

## Step 3: Patching

We need to move the house and associated references added by `MMW_Patches_ESP-Replacer_1a.esp` so that they don't overlap with the tower from `Replacer_1b.esp`.

First, there are some steps we can take to prepare:

### Preparing to move the house

To make it easier to select what we'll be moving, we can use the `Hide Selection` option with CSSE to hide some references from `Replacer_1b.esp`. 

**Hide the following `Replacer_1b.esp` references:**
* Door -- `ex_nord_door_01`
* Doorframe -- `ex_nord_doorf_01`
* The tower entrance -- `ex_common_house_addon`
* The tower itself -- `ex_common_tower_thatch`

>[!figure]
>![[Patches_ESP-Replacer_1_CSSEHide.webm]]
>Using the `Hide Selection` option from the `Q` Context Menu in CSSE, we can temporarily hide any references that are covering up the ones we want to move.

With these hidden, we can select the references we want to move from `Replacer_1a.esp`. Hold `ctrl` and left click each of the following references from `1a.esp`:
* Chimney -- `ex_nord_chimney_01`
* Windows -- `ex_nord_win_01` and `ex_nord_win_02`
* Doorframe -- `ex_nord_doorf_01`
* Door -- `ex_nord_door_01`
* Doormarker -- `DoorMarker`
* House -- `ex_nord_house_02`

![[Patches_ESP-Replacer_1_Patching1.png]]

>[!note]- Selecting multiple objects
>Using `ctrl + left click` allows you to select a select a series of references. This means we can move them together as a group without losing their arrangement - how they are placed relative to eachother.

It's best to have the house `ex_nord_house_02` selected *last*, because in CSSE the last reference selected is what the CS will base movement and rotation off when moving a group of objects in the Render Window.[^1] This is of particular importance when moving a group of objects arranged with gridsnap.

**If you have not selected the house last,** you can `ctrl + left click` to de-select it without de-selecting everything else, then `ctrl + left click` it again, making it now the last reference selected.

**With our group now selected, we can now move it to a position that does not conflict with `Replacer_1b.esp`:**

### Moving the house

> [!figure] Moving the house:
> ![[Patches_ESP-Replacer_1_Move.webm]]
> We can move the house south along the Y axis and east along the X axis
>  > [!tip]- Tip: Moving references using the `X`, `Y` and `Z` hotkeys: 
> > 
> > Holding down either `X`, `Y` or `Z` while moving one or more references keeps the references fixed to that axis while moving.



---
# Footnotes

[^1]: In the vanilla CS it is the opposite: it uses the *first* object as a point of reference for movement and rotation when moving a group of multiple selected references.