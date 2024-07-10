---
title: Data Files
aliases:
  - Data Files
---
The Construction Set works off of a primary file called a TES file. This is basically a database of all of the data for the world, including object data, dialogue, gameplay settings, object placements, AI settings, landscape, script commands, cells, etc. Basically everything that goes into the editor is stored in TES files. One giant database.

There are two types of TES files, masters (esm) and plug-ins (esp). A master file is autonomous. It relies on no information other than itself. A plug-in (esp) file relies on information from a Master TES file. *Plug-ins CANNOT refer to information in another plug-in. They can only refer to data from a master.* Plug-ins can refer to multiple master files.


Most TES files are changes to the main Morrowind.esm file (a master file). The files get loaded in order of their last modified date. Masters get loaded first, by date. Then plug-ins get loaded by date. Each file is a “layer” that gets added to the world. The player can turn off the ones they don’t like with the loader program, and these layers will be removed. This makes it impossible for a player created TES file to totally break someone’s game

Users of The Construction Set will have all of their changes placed in an esp file. They can then allow someone else to load this file and play with their changes. They can add anything to the game, provided the artwork is there to support it. 


The editor can have many esp files loaded at once, but only one of these is active. Active means that all of the user’s changes are being saved into the active TES file. 

Notes on Active files:
* You can only make a plug-in (esp) file *active*. You cannot save changes to a master file.
* The active file is always loaded last in the editor, regardless of its file date. This guarantees that all the info and changes in the active file can be viewed without being overwritten by another plug-in.
* If only an esm file is being loaded, an Active file does not have to be assigned.  Any changes made to the master file will be saved as a new esp file, which the user will have to name. This new file will become the active file.



##### See Also
[[data-files-example|Data Files Example]]
[[data-files-window|Data Files Window]]