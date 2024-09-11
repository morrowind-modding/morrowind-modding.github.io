---
description: Three tutorials of increasing difficulty on creating ESP Replacers
tags:
  - Tutorial
  - Patches
  - Construction-Set
  - CSSE
  - Beginner
title: ESP-Replacer Patch Beginner Tutorial
aliases:
  - ESP-Replacer Patch Beginner Tutorial
---
*This page contains three tutorials of varying difficulty on how to create an ESP Replacer Patch:*

This page is part of a series of guides on [[guides/patches/index|Patches]]

See [[guides/patches/creating-a-patch-for-an-esp|Creating a Patch for an ESP]] for more information on what patches are and how they work.

# Tutorial 1:
>[!info] Scenario: 
>![[comparison-screenshot-of-two-conflicting-mods.png]] 
>**Scenario:**
>- `MMW_Patches_ESP-Replacer_1a.esp` adds a house to Caldera. 
>- `MMW_Patches_ESP-Replacer_1b.esp` adds a thatch tower to Caldera in the same place. 
>
>Follow the tutorial to create an ESP replacer for `Replacer_1a.esp` which solves the conflict:

>[!Abstract] Tutorial Requirements and Files
* **Difficulty level:** #Beginner
* **Requirements:**
     * Morrowind, Tribunal and Bloodmoon
     * [CSSE]()%%add link%%
* **Tutorial Files:**
     * `MMW_Patches_ESP-Replacer_1a.esp`
     * `MMW_Patches_ESP-Replacer_1b.esp`

![[mmw-patches-esp-replacer-v1.zip]]

## Step 1: Navigating to the Cell
1. Open the Construction Set ('CS'), open the Data Files window and double-click `Replacer_1a.esp` and `Replacer_1b.esp` to load them. Set `Replacer_1a.esp` as ‘Active’.
![[enabling-plugins-for-esp-replacer-tutorial.png]]
3. Click `show modified only` in the Cell View window. This will make it display only cells modified or added by the active plugin - in this case, `Replacer_1a.esp`
![[beginner-esp-replacer-tutorial-cell-view.png]]
1. In the Cell View window, under `Cell Name`, locate the cell `Caldera, -2,2` where our mod conflict is, and **double-click** it to bring you there in the Render Window.
2. `Show modified only` not only filters the list of cells modified by the active ESP: it also filters the list of references *in* that cell to only display references modified or added by the active ESP. Under `Object ID` in the right-hand panel in Cell View, **double-click** on `ex_nord_house_02`

## Step 2: Identifying the Conflict
![[screenshot-of-mod-conflict-in-tes3cs.png]]

We can clearly see some kind of conflict here. The house added by `Replacer_1a.esp` overlaps with the thatch tower (`ex_common_tower_thatch`) added by `Replacer_1b.esp`, covering up the door to the tower.

>[!warning]
>Before making *any*  changes, we need to differentiate between what references come from **`1a.esp`** and **`1b.esp`**, as **we can only make modifications to references from `1a.esp`**.
>
>There are two ways we can do this:

### Browse references with Cell View:
With `Show modified only` enabled, only references *added* or *modified* by `1a.esp` are displayed. We can double-click on each of these to locate them in the Render Window.
> [!example]- Click for more information: 
> 1. Double-click on `ex_nord_win_02`, the first reference in Cell View under `Object ID`. This will take you to the reference's location in the Render Window - However, in this case, it is obscured by other references (the thatch tower), so we need to move the camera around to find the selected reference.
> 2. To get a better view, left click on the top of the Render Window (the top bar that displays the cell name, `Caldera -2,2`). This allows to use the camera controls in the Render Window, without unselecting our `ex_nord_win_02` reference. Hold the `shift` key and move your mouse around to orbit the camera around and get your bearings - to locate the window you'll need to zoom in, either by scrolling with your mouse wheel, or holding the `V` key and moving your mouse forward.
>![[window-clipping-through-wall-mod-conflict.png]]
>3. Repeat this process for each reference from `Replacer_1a.esp`. Note however that this is a time-consuming approach if your active ESP contains many references in the cell.
>>[!tip] Tip: 
>> 
>>You can also do this by opening another session of the CS with only `MMW_Patches_ESP-Replacer_1b.esp` set to `active` and selecting Show Modified Only.

### Show Reference Data: 
Holding `ctrl + shift + R + clicking middle-mouse-button` on a selected reference brings up Reference Data, telling us which plugin is adding or modifying that reference.
> [!example]- Click for more information: 
>1. Left-click on `ex_common_house_addon`, the entrance to the thatch tower with the curved roof. While selected, press and hold `ctrl + shift + R + middle-mouse-button` to bring up the Reference Data window, which tells us beside `File:` that the reference originates from `MMW_Patches_ESP-Replacer_1b.esp`. 
>![[using-show-reference-data-in-tes3cs.png]]
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
>![[video-demonstrating-hiding-references-in-csse.webm]]
>Using the `Hide Selection` option from the `Q` Context Menu in CSSE, we can temporarily hide any references that are covering up the ones we want to move.

With these hidden, we can select the references we want to move from `Replacer_1a.esp`. Hold `ctrl` and left click each of the following references from `1a.esp`:
* Chimney -- `ex_nord_chimney_01`
* Windows -- `ex_nord_win_01` and `ex_nord_win_02`
* Doorframe -- `ex_nord_doorf_01`
* Door -- `ex_nord_door_01`
* Doormarker -- `DoorMarker`
* House -- `ex_nord_house_02`

![[typical-tes3-nord-house-reference-ids.png]]

>[!note]- Selecting multiple objects
>Using `ctrl + left click` allows you to select a select a series of references. This means we can move them together as a group without losing their arrangement - how they are placed relative to eachother.

It's best to have the house `ex_nord_house_02` selected *last*, because in CSSE the last reference selected is what the CS will base movement and rotation off when moving a group of objects in the Render Window.[^1] This is of particular importance when moving a group of objects arranged with gridsnap.

**If you have not selected the house last,** you can `ctrl + left click` to de-select it without de-selecting everything else, then `ctrl + left click` it again, making it now the last reference selected.

**With our group now selected, we can now move it to a position that does not conflict with `Replacer_1b.esp`:**

### Moving the house

We can move the house south along the Y-axis to a position where it no longer overlaps with the thatch tower, leaving a gap in-between the two buildings. This is the position we will be moving the house to for this tutorial: 

>[!figure] New location: 
> ![[mod-conflict-resolved-with-esp-replacer.png]]
> This is where we want to move the house.

See the video below for how the house was moved in the CS:

> [!example] Moving the house - Video:
> ![[moving-a-nord-house-in-tes3cs.webm]]
> 
> We can move the house south along the Y-axis and east along the X-axis
> 
>  > [!tip]- Tip: Moving references using the `X`, `Y` and `Z` hotkeys: 
> > 
> > Holding down either `X`, `Y` or `Z` while moving one or more references keeps the references fixed to that axis while moving.

>[!note]- Author's note - creative decisions: 
>
>Note that the building overlaps the `ex_drystonewall` meshes. This is an intentional creative decision to incorporate the existing environment. Caldera features many instances like this where the houses are built into the town walls (`ex_drystonewall` meshes), so I deemed this a vanilla-friendly approach.
>-- MasssiveJuice

With the house moved, the patch is nearly complete: all that is left to do is to make some touch-ups.

## Step 4: Final Touches

There are a few things we can do before publishing the mod:
- [[#Check for floaters and buried objects]]
- [[#Check the northmarkers of interior cells]]
- [[#Cleaning the mod]]
- [[#Naming the ESP]]

### Check for floaters and buried objects

Check around the house to ensure that no parts of it are now floating off the ground.

We can also check whether there are any references that completely covered up (or 'buried') by the house that could be either moved or deleted. Here are two examples:

>[!example]- Example 1: buried chokeweed 
>![[chokeweed-clipping-through-tes3-nord-house.png]] 
>After moving the house, it now covers up the stem of the chokeweed `flora_chokeweed_02` from `Morrowind.esm`. You can move the reference or delete it. 
>
>>[!warning] A note on cleaning dirty edits: 
>>
>>As the reference is in the cell `West Gash Region -1,2`, modifying the reference will add this cell to the list of modified cells, whereas before the only exterior cell that `MMW_Patches_ESP-Replacer_1a.esp` modified was `Caldera -2,2`.  
>>
>>Make note of this when cleaning the plugin later that the newly modified cell is *not* a dirty edit and should not be removed from the plugin.

>[!example]- Example 2: buried 'ex_drystonewall'
>![[drystonewall-clipping-through-tes3-nord-house.png]]
>
>Now completely buried by the house is an `ex_drystonewall_c_01` reference from `Morrowind.esm`. 
>
>>[!question]- Should we delete this reference? 
>>
>>*"There are a few ways we can do this, and the choice is yours"* 
>> 
>>1. On the one hand, it is unnecessarily adding to the reference count of the cell %%add link to page on optimizing reference counts%%, so we could delete this to help optimize the cell. 
>>2. On the other hand, if we go back to edit this patch again and move the house somewhere else, this could expose the gap in the drystonewall our deletion made. 
>>    - *This can be resolved by removing the* `deletion` *record from the ESP with another tool like Enchanted Editor, restoring the wall* 
>>
>>Ultimately it is up to you as the mod author how you choose to handle this. For the sake of the tutorial we will leave it as it is.

### Check the northmarkers of interior cells

`MMW_Patches_ESP-Replacer_1a.esp` also adds an interior cell for the house:
`MMW_Patchguide_01a_Int`. 
While moving the house, we moved the both the door and the `doormarker` to the house. Because we rotated these, the `northmarker` in the cell `MMW_Patchguide_01a_Int` needs to be updated.

For more information on northmarkers and how to orient them, see the Project Tamriel Wiki article [Interior Guidelines](https://wiki.project-tamriel.com/wiki/Interior_Guidelines#Northmarker)  %% replace PT wiki link with MMW article %%

### Cleaning the mod

Cleaning mods is an important step to ensure your mod functions correctly, as well as reducing the potential for mod conflicts. 

This tutorial will not cover how to clean mods, but information on this can be found in:
* [Content File Guidelines](https://wiki.project-tamriel.com/wiki/Content_File_Guidelines#Cleaning) on the Project Tamriel Wiki.
* [Tips: Cleaning Plugins With TES3CMD](https://modding-openmw.com/tips/cleaning-with-tes3cmd/) on Modding-OpenMW.com.

And information on two of the main 'low-level editor' tools used for mod cleaning: 
* [Tes3cmd](https://wiki.project-tamriel.com/wiki/Tes3cmd) info on the Project Tamriel Wiki.
* [Enchanted Editor](https://en.uesp.net/wiki/Morrowind_Mod:Enchanted_Editor) info on UESP.

That being said, here are some possible dirty edits you may make during the process of following this tutorial: 

>[!warning]- Dirty cell records: 
>The only cells contained in the final ESP replacer plugin should be: 
>1. `Caldera -2,2` -- exterior cell containing the the house.
>2. `MMW_Patchguide_01a_Int` -- the interior cell of the house.
>3. `West Gash Region -1,2` -- (*if you edited the chokeweed in* [[#Check for floaters and buried objects]])
>
>Any cells not contained in the list above likely contain dirty edits and should be removed.

>[!warning]- Dirty references within your cells: 
>Browse the modified references in the Cell Window to ensure only references you intentionally edited are displayed. Any erroneous edits should be removed with a low-level editor such as Enchanted Editor.
>- You may have accidentally edited references from `Replacer_1b.esp`, inadvertently adding the record to `Replacer_1a.esp`. These will not be cleaned automatically with the `tes3cmd` `clean` command, so need to be manually removed
>- Dirty edits to `Morrowind.esm` references can generally be automatically cleaned with the `tes3cmd` `clean` command
> 
>>[!example]
>>![[dirty-edit-via-undo-in-tes3cs.png]]
>> 
>>In this example, the tower from `Replacer_1b.esp` was moved, then undone with `ctrl+z`. 
>>A dirty reference will still be added to your active `Replacer_1a.esp` regardless, and will need to be removed with a low-level editor if the plugin is saved after the edit is made.

### Naming the ESP

With your ESP Replacer completed, consider whether the name will be identical to the 'original mod', or have a unique name to distinguish it. See [[guides/patches/creating-a-patch-for-an-esp#Conventions|Creating a Patch for an ESP]] for more information.

If a unique name is given for your ESP Replacer patch, consider adding `[conflict]` and `[order]` [mlox rules](https://github.com/DanaePlays/mlox-rules) to enable correct automated plugin sorting.


## Conclusion

Congratulations -- should now be able to create a basic ESP Replacer patch! The next two tutorials will cover creating patches for more complex mod conflict scenarios.

---

# Tutorial 2:

*Coming soon to a Morrowind Modding Wiki near you*


[^1]: In the vanilla CS it is the opposite: it uses the *first* object as a point of reference for movement and rotation when moving a group of multiple selected references.