---
title: Data Files Example
aliases:
  - Data Files Example
---
Here is an example of multiple data files and what happens, as they are loaded.

| File Name | Summary	 | Result |
| ---- | ---- | ---- |
| Morrowind.esm (Master) | The full game data. | Looks like shipped game. |
| Samurai.esm(Master) | Adds the samurai class to the game, which can be chosen by the player. | If player starts a new game, can now choose samurai. |
| Stormbringer.esp | Adds the magical sword Stormbringer to the game, locked behind an existing door in lower Vivec. | Adds the sword, changes the lock level on a door. |
| Lost Boys.esp | Small quest to find two NPCs in Vivec. Changes lock level on door, and adds key for the door. | Coincidentally changes the same door as “Stormbringer”, and adds a key to it. There are now 2 NPCs in the room with the sword. |
| Samurai Clan.esp | Adds several Samurai warriors to the hills in the north. | Adds the warriors provided the Class has already been added. This one relies on the master file Samurai.esm and Morrowind.esm |
| Min’elok Mines.esp | Adds a decent sized dungeon mine to the world, with monsters, items, and dialogue. This mine is built into one of the existing cave entrances, and the smaller cave pieces have been removed. | Existing mine pieces removed, new objects and now in the world there. |
| Mine of Monkeys.esp | Small mine built with modified race called ninja monkeys. | This (coincidentally) removes the same mine as Min’elok, and adds new pieces. But since it does not touch the objects placed from the previous one, this section of the world is very messed up, with both mines existing in the same space.  |

Overall it is vitally important that external creators document their important changes in the summary of their TES file.

##### See Also
[[data-files-window|Data Files Window]]
[[data-files|Data Files]]

