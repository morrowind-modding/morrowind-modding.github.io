
# Overview

**Metatables** provide a way to extend the functionality of ordinary tables in Lua; their primary purpose is to allow you to define **metamethods**, which may intuitively be thought of as ways to control how certain operations are performed on a specific `table`. The most commonly used metamethod is the `__index` metamethod (discussed in detail below), which controls what happens after trying to index a table with a key that is not present in that table. Other commonly used metamethods include `__len`, which governs what happens when you use the `#` operator on a table, and  `__call`, which lets you call a table as if it were a function. Typically, a metatable will be a `table` of the form `table<string, fun(...): ...>`. You can set and retrieve metatables by using the `setmetatable` and `getmetatable` functions as follows:
```lua
local tbl = {}
local meta = {}
setmetatable(tbl, meta) -- Set the metatable of `tbl` to be `meta`

local m = getmetatable(tbl) -- retrieve the metatable of a table. Note that in this example, we have `m == meta`.
```


> [!note] Any `table` can be a metatable
>Strictly speaking, there is no difference between a _metatable_ and an _ordinary_ `table`: any `table` can act as a metatable to any other `table`.  Furthermore, you can use metatables to store things other than metamethods, so long as keys associated to those things don't clash with valid metamethod names.
> 
> The following code does not produce any errors (although it doesn't do anything useful either):
> ```lua
> setmetatable({ a = 1, b = 2}, {c = 3, d = 4})
> ```

You can think of a "metatable" as a way to provide a list of rules, that dictate what should happen whenever something tries to do certain things to a table. Let's continue with the above notation, where `tbl` is an "ordinary" `table` and `meta` is its metatable. Each `(key, value)` pair in `meta` takes the form `(name_of_action, response)`, where `name_of_action` is a string, and `response` is a function. Whenever your code tries to perform certain actions on `tbl`, it will check if `meta` has an entry that governs a `response` for that action. 


# In-depth Example: `__index` metamethod.

Let's work through an example to see how the various pieces fall into place. We will use the `__index` metamethod to control what a specific `table` does when we try to index a missing value from the table. We will use the following variables throughout this example.
```lua
local my_tbl = {a = 1, b = 2}
local meta = {}
setmetatable(my_tbl, meta)
```
(Note that you can update metamethods _after_ calling `setmetatable`.
)
The `__index` metamethod should be a `function` that takes two arguments:
```lua
---@param self table the table being accessed.
---@param key: string|int|any the key that we tried to access
---@return any value
function meta.__index(self, key)
end
```
(We haven't implemented any behavior yet, we'll do that later.)

Intuitively, the `__index` metamethod works as follows: whenever you try to retrive a value from `my_tbl`, by passing a specified `key`, (i.e. by writing `my_tbl[key]`), Lua will secretly be performing the following:
```lua
local value = my_tbl[key]
-- Tried to access a missing key!
if value == nil then
	-- Lets see if there's a metatable.
	local metatbl = getmetatable(my_tbl)
	if metatbl ~= nil and metatbl.__index then
		-- Metatable exists and it has an `__index` metamethod.
		-- Set `value` equal to whatever the metatable says it should be.
		value = metatbl.__index(my_tbl, key)
    end
end
```
(The actual behavior is a bit more complicated than this, but this description is fine for the moment.)

> [!warning]- `__index` is only called when the relevant key is missing from the table.
> As the above example makes clear, the `__index` metamethod **will not do anything** if you try to retrieve a `key` that actually exists in a table. Why is it like this? Who knows.

Let's say that for whatever reason we want to print a message whenever something tries to access a missing value from a table. We can do that as follows:
```lua
function meta.__index(self, key)
	print(string.format("tried to access missing key from a table: %q", key))
end
```
This will result in the following:
```lua
-- add some vaues t
my_tbl.a -- "a" is present in this table, so __index isn't called.
my_tbl.c -- "c" is NOT present, so the following gets printed: tried to access missing key from a table: "c"
```

What if we want missing values to be treated as if they were `0`? Then we could write
```lua
function meta.__index(self, key)
	-- Someone tried to access a value that didn't exist, let's just say it was 0.
	return 0
end
```
We now get the following:
```lua
my_tbl.a + my_tbl.b == 3 -- Both keys are present in the table, __index isn't called.
my_tbl.a + my_tbl[10] == 1 -- the key `10` is missing, so __index gets called and it returns 0
```

What if we instead want `my_tbl` to look up missing values in some other table?
Let's say we're writing some code that depends on config settings, and we have a table that stores default config settings, and another table that stores the users current config. To be precise:
```lua
local saved_config = {...} -- Stores user-specific settings.
local default_config = {...} -- Stores default settings.
```

If we added some new default settings since the user last used the mod, or if we provided a way to reset the saved config settings, then there could be keys in `default_config` that are not present in `saved_config`. It would be annoying to have check each time where a user-specific setting exists. Thankfully, we can use metatables to solve this problem:
```lua
local saved_config_meta = {}
-- In our setting, the first parameter will always be equal to `saved_config`.
-- We can ignore it because we're only interested in the contents of `default_config`
function saved_config_meta.__index(_, key)
	-- Remember that this will only be called whenever `key` is NOT present in `saved_config`. 
	-- So we don't need to perform any additional logic inside this function.
	return default_config[key]
end
setmetatable(saved_config, saved_config_meta)
```

In fact, this behavior is so common that Lua provides a built-in shortcut for implementing it. You can write

```lua
saved_config_meta.__index = default_config
```
instead of the more cumbersome
```lua
function saved_config_meta.__index(_, key)
	return default_config[key]
end
```


>[!warning]
> Writing `meta_tbl.__index = other_tbl` is **not** a shortcut for producing the function from the previous example; it will result in the `other_tbl` being stored as the value associated to the `__index` key.
> 
> This means that `__index` is the _only_ metamethod that can be either a `table` or a `function`.
