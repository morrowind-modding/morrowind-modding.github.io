> [!danger Do Not EVER Use]
> 
> Fixit is *extremely* dangerous. While its operation will be described here, it is not recommended to use it in any form. This includes the button which is bundled into certain versions of Wrye Mash. ***THIS WILL ALMOST CERTAINLY BURN SOMETHING TO THE GROUND.***

Fixit operates in four steps.

## Clean All Plugins
Tes3cmd assumes it is in your `Data Files` folder and cleans everything it can find that resembles an actual Morrowind mod, eg files ending in `ESP` or `ESM` (not case-sensitive). This includes the vanilla ESM files and anything that doesn't need to be cleaned, along with things that do. The results will be unpredictable, and bad, and you are on your own at this point.
## Synchronizes Plugin Headers To Masters
This is only relevant for Morrowind.exe users, but for them, this *can* be very handy. Morrowind.exe tracks the size in bytes of plugins which other ones depend on, and emits errors if the actual size in one plugin doesn't match what another says it will be.

So, for example, if you have one mod depending on TR, and a TR update has released since the mod was last updated, Morrowind.exe will yell at you about it every time you open the game. This step fixes that, but doesn't necessarily resolve any underlying issues with the update. For example, this error will be fixed, but if your mod depends on an NPC in TR_Data that no longer exists, tes3cmd can't help you here.

If you need this, do it yourself.

> [!example Sync]
> tes3cmd header --synchronize


## Generates A Patch For Merged Leveled Lists and More
No. For either MGE XE or OpenMW users, you can use Tes3Merge to create merged plugins. For OpenMW users, DeltaPlugin is usually preferred.

## Resets Dates on Vanilla Files
This is an error that you should only get once per install with Steam versions of Morrowind, but it's a nasty one. Morrowind.exe uses file modification dates to prioritize loading content files and assets. What this means for you is that you may install replacement assets and never see them in-game, because the dates of Morrowind.bsa and friends are later than the mod's versions, so the assets are overridden.

If you need this, do it yourself.

> [!example Reset Dates]
> tes3cmd resetdates



 ## External Links
[Tes3cmd Wiki - ResetDates](https://github.com/john-moonsugar/tes3cmd/wiki/tes3cmd-command-line-documentation#resetdates---_reset-dates-of-bethesda-data-files-to-original-settings)



