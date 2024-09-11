---
tags:
  - Dialogue
  - Tutorial
  - Quest-Design
  - Construction-Set
  - MWScript
description: Create branching choices for dialogue in this intermediate-level tutorial
title: Branching Dialogue Tutorial
aliases:
  - Branching Dialogue Tutorial
---

_This page is an intermediate-level tutorial on creating branching choices for dialogue with NPCs._

See the Project Tamriel Wiki article [Writing and Diagloue Guides](https://wiki.project-tamriel.com/wiki/Writing_and_Dialogue_Guidelines#Dialogue_2)  %% replace with MMW article %% for an introduction to working with dialogue in Morrowind.

# Tutorial: 
>[!figure]
>
>![[example-of-branching-dialogue-in-morrowind.png]]
>_Morrowind dialogue uses a topic-based system rather than a dialogue tree system, but with a little bit of MWScript you can create branching dialogue trees as complex as you like*
* **Difficulty level:** Intermediate
* **Requirements:**
     * Morrowind, Tribunal and Bloodmoon
     * _This tutorial assumes you have a basic knowledge of [[guides/scripting/index|Scripting]]_

**Scenario:** 
*Duder the Dunmer wants to know whether you would like to discuss Kings or Cabbages - but you can only pick **one**. If only there was a way to create branching dialogue choices in Morrowind..?*

## Create a `dialPath` branch in dialogue:

The first thing we need is an NPC with a script with a local variable. This local variable will be used in dialogue:

>[!figure] Getting set up:
>![[npc-with-local-script-in-tes3cs.png]]
>For branching dialogue to work properly, an NPC needs to have a script attached with a local variable.
>
>>[!tip]
>>
>>Remember, shorts are `0` by default

Let’s set up the greeting on `dialPath == 0`

>[!figure]
>![[setting-dialpath-for-branching-dialogue-tes3cs.png]]
>Note that in the `result` we specify a `choice` function
>>[!example]- Example in-game:
>>
>>![[morrowind-branching-dialogue-tutorial-first-choice.png]]
>>*Well? What shall we talk about?*

## Nesting choices within a dialogue path

We can nest further branching choices within `dialPath 0`, depending on whether the player responds to choice `"Cabbages 1"` or `"Kings" 2`, using the `Choice` function.

### Choice 1:

For the first choice, we set the `dialPath` to `1` in the results:

>[!figure]
>![[nesting-dialpath-choices-in-tes3cs.png]]
>*Do you enjoy cabbages? It's a simple choice.*
>>[!example]- Example in-game:
>>
>>![[nested-branching-dialogue-choice-in-morrowind.png]]

To which a response can be made:

>[!figure]
>![[resetting-dialpath-in-tes3cs-dialogue.png]]
>If `Choice 2` is chosen, the NPC can be made to respond *"Neither do I."* As neither you nor the NPC wish to discuss cabbages any further... we can set the `dialPath` back to `0`.
>>[!example]- Example in-game:
>>
>>![[resetting-dialpath-to-zero-in-morrowind.png]]

### Choice 2:

For the second choice, we set `dialPath` to `2`:

>[!figure]
>![[second-branching-dialogue-choice-in-tes3cs.png]]
>>[!example] Example in-game: 
>>
>>![[second-nested-dialogue-choice-in-morrowind.png]] 
>>
>>In-game, the other choices are displayed:

---

You should now understand the fundamentals of creating branching dialogue. You can create dialogue trees as complex as you like within the confines of Morrowind's topic-based dialogue system.

>[!tip]
>Consider making a flow-chart to keep track of your branching dialogue.

---

### Credits:
- GrumblingVomit: Created the original tutorial
- MasssiveJuice: Edited and formatted the tutorial for Morrowind Modding Wiki