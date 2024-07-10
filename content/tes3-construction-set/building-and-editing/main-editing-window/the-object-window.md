---
title: The Object Window
aliases:
  - The Object Window
---
The Object Window is the window from which the database of objects can be viewed and edited. It is also the window from which objects are dropped into the world (such as adding a hut to a village). 

##### Opening the Object Window
The object window is opened by selecting View \ Object Window. It remains on screen until it is closed. It is a tabbed menu that allows you to view all object types, Characters, and creatures. Object types are tabs at the top. Clicking one opens the list of those objects in the database.

##### Placing and Item in the World
To place an object in the world, select it, and then drag and drop it into an open Render Window. You must drag from actual text, as trying to grab empty space will result in the object not being grabbed. The object will appear in the world at the point you let it go, and the Render Window will now be selected so you can place the object correctly.

##### The Object Count

Every object has a Count field. This is the number of references in the currently loaded game world to this object. Loading extra plug-ins will change this number if the object is also used in them. Keep in mind that including an object in a Leveled/Random list will only count once per list, not each time that list is referenced.

##### Object Use Information

To get information about how and where an object is used in the world, select it and press F1 to bring up the Use Report dialog. The bottom pane displays a list of the references to this object in the world. Double-click on an item in the list to go to that reference in the Render Window. The top pane displays a list of other objects that use this object in some way. This includes leveled lists which contain the item, Containers and actors who have the item in their inventory or spellbook, and even actors who have an AI Package related to this item. The Use Report dialog can also be opened by right-clicking on an item and selecting Info from the popup menu.

##### Editing Object Data

The object ID can be edited directly in here by clicking on the selected item (like renaming a Windows file). You can double-click the object to open a window showing all of its data. This is the most useful way of editing items such as scripts, art, etc. This window can also be opened by right-clicking on an item and selecting Edit from the popup menu.

##### Sorting Object Data

Each object type has certain data such as ID, type, name, health, etc. Clicking any of these field names will sort the list by that field. Clicking the field name again will sort by that field in the opposite direction (ascending or descending).

##### Adding an Object*

To add an item to the database, simply select the category you want with the tabs, and press the INSERT key. This will open a window containing the object data. This window can also be opened by right-clicking in the Object Window and selecting New from the popup menu.

**Deleting Objects from the Database**

Pressing delete will remove the selected item. If this object has been used in the world the deletion is confirmed. This can also be accomplished by right-clicking and selecting Delete from the popup menu.





