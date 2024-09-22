
One of tes3cmd's most basic functionalities is to read the contents of a plugin and see what exactly is in it. Tes3cmd is capable of dumping any [record type](https://en.uesp.net/wiki/Morrowind_Mod:Mod_File_Format) with varying degrees of readability. 

What this means for you, is that it's a great means to quickly get down and dirty in your entire load order, spot possible mod conflicts, and even extract parts of mods out to new plugins to make your own edits on top! Make sure you are familiar with the various record types mentioned on the [tes3cmd homepage](obsidian://open?vault=S3%20Vault&file=MWModWiki%2Fmmw-content%2Fmodding-tools%2Fmultipurpose-plugin-utilities%2Ftes3cmd%2Findex) before attempting to use dump. The article itself will mostly consist of usage examples and example outputs.

> [!example Basic Dump Syntax]
> tes3cmd dump $PLUGIN_NAME.esp


> [!tip Saving to File]
> When using dump, you can save the output to a new file on any platform by using the following: `> filename.txt`
> >[!example Save to file]
> >tes3cmd dump --type NPC --id ".\*caius.\*" \*.es[mM][pP] > caius.txt


# Arguments/Options

Dump has a few additional arguments you can supply when using it to change what records are displayed, and how they're displayed.

## External Links
[Dump Subcommand](https://github.com/john-moonsugar/tes3cmd/wiki/tes3cmd-command-line-documentation#dump---_dump-records-as-text-for-easy-study)

