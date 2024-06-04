
This page seeks to address common sources of confusion shared by developers new to the Lua language.


#### TODO: add introductory paragraph saying "some topics/syntax will not be introduced in the traditional manner, they will instead be introduced in a way that builds upon pre-existing knowledge, and then the common usage/syntax will be explained afterwards"
# Syntax

## Tables

### Fundamentals 

Tables may be thought of as a collection of `(key, value)` pairs.  
- Each key corresponds to a unique value, but not vice-versa: the same `value` can appear multiple times in a given `table`, but a `key` can only appear at most once. 
- If you want to retrieve a value associated with a given `key`, you may do so by writing `my_tbl[key]`.
- If you want to store a `value` with a given `key`, you may write `my_tbl[key] = value`.
>[!example]- Retrieving a value from a `table`
> Let's define a table as follows:
> ```lua
> local my_tbl = { ["a"] = 5, ["b"] = 7}
> ```
> (Here, `my_tbl` has two keys,  `"a"` and `"b"`, both of which are `string`s; its `(key, value)` pairs are `("a", 5), ("b", 7)`.)
> We can retrieve the value of `"a"` and store it into a variable named `my_var` by writing 
> ```lua
> local my_var = my_tbl["a"]
> ```

>[!example]- Storing a value in a `table`
> Let's continue with the previous example. If we want to add a key `"c"` with the value `9`, we can write
> Let's define a table as follows:
> ```lua
> my_tbl["c"] = 9
> ```

>[!tip]+ Shortcut for retrieving/storing values when the `key` is a `string`
> Since it's so common for the `key` of a `table` to be a `string`, Lua provides a convenient shortcut. Instead of `my_tbl["a"]`, it is possible to write `my_tbl.a`. 
> These two operations do _exactly_ the same thing. Accessing via  `.key` instead of `["key"]` is considered best-practice, and it makes code more readable. But it _only_ works for simple strings (i.e., strings that contain no spaces or special characters).

>[!note]+ Trying to access missing values in a `table`
>What happens if you write 
>```lua
>local my_var = my_tbl.e
>```
 where the key `"e"` is not present in `my_tbl`?
>In this case, `my_tbl.e` will evaluate to `nil`. (i.e., `my_var == nil`.)
>This means that the following code
>```lua
>my_tbl[key] == nil
>```
>will be `true` if `key` is in `my_tbl`, and `false` if `key` is not in `my_tbl`.

>[!note]- A `table` can be thought of as a function (in the mathematical sense)
>If you are familiar with mathematical functions, you may find it helpful to think of a `table` as a sort of function, that sends each `key` to its corresponding `value`. In mathematical terminology, the statement "the same `value` can appear multiple times in a given table" translates to "some functions are not one-to-one".
>The fact that you can still try to access keys that aren't present in a table can be roughly translated as saying "every possible value in Lua is in the domain of the table access function".

### Arrays as Tables

It is possible to use a `table` as an array (i.e. a list of numbers).
This is done via the syntax:
```lua
local my_arr = {"a", "b", 4}
```
Under-the-hood, the following code is the same as writing 
```lua
local my_arr = {[1] = "a", [2] = "b", [3] = 4}
```
In other words, the `(key, value)` pairs of `my_arr` are `(1, "a"), (2, "b"), (3, 4)`.

>[!note] Lua indexing starts at `1`
>In most programming languages, the first element in an array has index `0`. This is not the case in Lua, where the first element has index `1`.


## Tables can store any type of `value`

In Lua, it's very common for a `table` to store `table`s and `function`s.


### Storing a `function` inside a `table`

Consider the following code:
```lua
local  my_tbl = {}
my_tbl.add = function(a, b)
	return a + b
end
```
This adds a key named `"add"` into `my_tbl`. The value of this key is a `function`, that accepts two inputs, adds them together, and returns the result. 

Since storing functions in tables is so common, Lua provides the following shortcut: we can rewrite the above code block as 
```lua
local  my_tbl = {}
function my_tbl.add(a, b)
	return a + b
end
```

The above two definitions of `my_tbl.add` do _exactly_ the same thing.


>[!tip]+ Shortcut for adding a `function` into a `table`
>Since it is so common to store functions in table, Lua provides the following shortcut.
>We may define the `my_tbl.add` by writing:

#### TODO: shorten the following warning, or remove it from a warning block
>[!warning]+  This is not the case when defining a `local function`
>Just like you can define `my_tbl.add` by using `function my_tbl.add(a,b)` or `my_tbl.add = function(a,b)`, you can define a `local function` named `add` in one of two ways:
>```lua
>local function add(a, b)
>	return a + b
>end
>```
>and 
>```lua
>local add = function(a, b)
>	return a + b
>end
>```
>But unlike in the case of defining functions stored inside a `table`, these two approaches to defining the `add` function **are not interchangeable**. To see the problem, consider the following two definitions of the factorial function:
>```lua
>local function factorial(n)
> 	if n <= 1 then
> 		return 1
> 	else
> 		return n * factorial(n-1)
> 	end
>end
>local factorial2 = function(n)
> 	if n <= 1 then
> 		return 1
> 	else
> 		return n * factorial2(n-1)
> 	end
>end
>```
>Here's what happens when the two functions are evaluated:
>```lua
>print(factorial(4)) --> 24
>print(factorial2(4)) --> ERROR: attempt to call global 'factorial2' (a nil value)
>```
>Here's the problem: the definition of `factorial2` **does not** have access to the `factorial2` variable in the body of the function, whereas `factorial` **does** have access to the `factorial` variable in the body of the function. In other words, the `local function factorial` syntax will claim the `factorial` variable _before_ proceeding with the definition of this function, whereas the `local factorial2 = function` syntax will define the function and _then_ assign it to the local variable `factorial2`.
>
> In contrast, this problem does _not_ happen when assigning a function to a table. For example:
>```lua
>function my_tbl.factorial(n)
> 	if n <= 1 then
> 		return 1
> 	else
> 		return n * my_tbl.factorial(n-1)
> 	end
>end
>my_tbl.factorial2 = function(n)
> 	if n <= 1 then
> 		return 1
> 	else
> 		return n * my_tbl.factorial2(n-1)
> 	end
>end
>print(my_tbl.factorial(4)) --> 24
>print(my_tbl.factorial2(4)) --> 24
>```
> Why isn't this a problem when defining`my_tbl.factorial2`? That's because the function assigned to `my_tbl.factorial2` has access to `my_tbl` _before_ the function is defined, and each time `my_tbl.factorial2`  is called, it will access `my_tbl`  and then ask to retrieve the value associated to the  `factorial2` key. By the time `my_tbl.factorial2` is able to be called, it is already stored in `my_tbl`, so there's no problem when trying to access that key.



>[!warning]+ In Lua, a `function` is a value just like any other
> Unlike in most other programming languages, Lua will treat a `function` in the same way it treats any other value. This means that you can assign a `function` to a variable, pass it as a parameter to another `function`, and store it as a value in a `table`.
> 
>You can even use a `function` as a key in a table. For example, the following code is completely valid (but not recommended)
>```lua
>local tbl = {[function() return end] = "a"}
>```


### Adding methods to tables

OUTLINE:
- What if you want to add a function to a table that can access other values in that table?
	- functions are values just like any other, so you cant "tie" them to data like you can in other languaes
- solution: pass the `table` as the first parameter to the function
	- introducing: `:` syntax
		- clarify the difference between `:` in function _definition_ vs in function _usage_
			- definition: `function my_tbl:fun(arg1, arg2)` is a shortcut for `function my_tbl.fun(self, arg1, arg2)`, where `self` can be _anything_
			- usage: `my_tbl:fun(val1, val2)` is a shortcut for `my_tbl.fun(my_tbl, val1, val2)`. now `self` _has to be_ `my_tbl`.
			- probably put this distinction in as visible a place as possible
# Importing other files
## `require` vs `include` vs `dofile`