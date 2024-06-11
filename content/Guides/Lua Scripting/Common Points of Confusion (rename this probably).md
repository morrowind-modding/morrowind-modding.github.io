
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

Here's a situation that comes up often: let's say you have a table that's used to store data, and you want to define a function whose behavior depends on the data stored in that table. We'll introduce this topic by way of example. This will tie into the previous topics on this page.

For concreteness, suppose we have a list of assignment grades, and we want to compute the final grade for the semester:
```lua
-- a table that stores a list of grades for each assignment, on a scale of 1-10.
-- stored as an array so we can use `#` to get the average
local assignment_grades = {10, 7, 9, 6}
```
We'll discuss three different ways this can be accomplished

#### Approach 1: Using a `local function`

The most straightforward solution is to define a new `local function`:
```lua
local function calculate_final_grade(grades)
	local sum = 0
	for _, grade in ipairs(grades) do
		sum = sum + grade
	end
	return sum / #grades -- return the average
end
```

One advantage of this approach is that it's the most straightforward, and the easiest to implement. However, a major downside is that there are no restrictions on the inputs accepted by this function, so it's not immediately clear what sorts of values this function accepts. However, this can be mitigated using descriptive comments and  LuaCATS annotations:
```lua
--- Accepts a list of grades, on a scale from 1-10, and returns the average.
---@param grades number[] list of grades, on a scale from 1-10.
---@return number final_grade
local function calculate_final_grade(grades)
	-- snip
end
```

#### Approach 2: Adding a `function` to `assignment_grades`

Here's a second option: we can store the function directly inside the `assignment_grades` table: 
```lua
function assignment_grades.calculate_final_grade(grades)
	local sum = 0
	for _, grade in ipairs(grades) do
		sum = sum + grade
	end
	return sum / #grades -- return the average
end
```
And we can now call this function by writing 
```lua
assignment_grades.calculate_final_grade(assignment_grades)
```
>[!note]- `ipairs`
>Since we're using `ipairs` in the definition of `calculate_final_grade`, we will only iterate over values in `grades` that have `integer` keys. So, adding `calculate_final_grade` to the `assignment_grades` table won't interfere with the behavior of the function when we call it on the `assignment_grades` table.

At first, it may not seem clear why this approach might at all be a good idea, but it's usefulness will become clear momentary.
Since it's so common to define functions that act on a table, Lua introduces a convenient shorthand syntax for it:

>[!note]+ Syntactical sugar: adding a method to a `table`.
> The following pieces of code are equivalent:
>```lua
>function my_tbl.my_func(self)
>	-- do stuff
>end
>```
>
>```lua
>-- using a colon ":" instead of a dot "." will automatically
>-- add a parameter named "self" to the function definition
>function my_tbl:my_func() 
>	-- do stuff
>end
>```
>In other words, using a colon `:` instead of a dot `.` will automatically add a parameter named `self` to the function definition.
>
> Similarly, the following two pieces of code are equivalent:
> ```lua
> my_tbl.my_func(my_tbl)
>```
>```lua
>my_tbl:my_func()
>```
> In other words, if `my_tbl` has a value called `my_func`, then you can write `my_tbl:my_func()` and Lua will pass `my_tbl` as the first argument to `my_tbl.my_func`.

>[!warning]+ Use `:` with care
> While the two abbreviations introduced with the `:` syntax may look similar, they do _very_ different things:
> - Using `:` when _defining_ a function means "add an additional argument to this function, and call that argument `self`". 
> 	- There are **no guarantees** made about what can be passed as the first argument to that function.
> - Using `:` when _calling_ a function means "call this function, and make sure the first parameter is this specific table".
> 	- There **is now a guarantee** on what will be passed as the first argument to that function.
> 
> Here's a brief example to illustrate this point:
> ```lua
> local my_tbl = {}
> function my_tbl:print()
> 	print(self)
> end
>  -- passes `5` as the first argument. 
>  -- i.e., calls `my_tbl.print` with `self == 5`
> my_tbl.print(5) --> OUTPUT: 5
>```
This may not seem like much of a problem now, but it can lead to confusing bugs when metatables get involved, as will be shown momentarily.

Anyways, going back to our example, we see that we can now write the grading function as 
```lua
function assignment_grades:calculate_final_grade()
	local sum = 0
	for _, grade in ipairs(self) do
		sum = sum + grade
	end
	-- return the average
	return sum / #self 
end
```
And we can call this function on `assignment_grades` by writing 
```lua
assignment_grades:calculate_final_grade()
```
This certainly looks a lot cleaner than the more cumbersome 
```lua
assignment_grades.calculate_final_grade(assignment_grades)`
```

Also, adding `calculate_final_grade` to the `assignment_grades` table is a nice way of saying that the final grade is "linked" with the grades we got during the semester. This association is not as clear when `calculate_final_grade` is a local function.

Here's one downside to this approach: since the `calculate_final_grade` function is _inside_ the `assignment_grades` table, it could interfere with other kinds of calculates we might want to do on `assignment_grades`. Here's an example: if we use `pairs` instead of `ipairs` when iterating and summing over `assignment_grades`, we'll get an error:
```lua
for _, grade in pairs(assignment_grades) do
	sum = sum + grade  --> ERROR
end
```
This is because `pairs` will iterate over all values in `assignent_grades`, so `grade` will eventually be the `calculate_final_grades` function. We can't add functions to numbers, so we get an error.

In other words, the `calculate_final_grade` function is now _too closely linked_ with `assignment_grades`: the function is now being treated as if it were a grade!

Here's an additional problem: what if we wanted to use the `calculate_final_grades` function on a different set of grades? if we wanted to use the `:` syntax, then we would have to add `calculate_final_grades` to every table that held a list of grades. And that doesn't seem like a great solution.

Oftentimes, we want an additional layer of separation. This leads to the following approach.

#### Approach 3: using the `__index` metamethod

We can solve the shortcomings of Approach 2 by using metatables. Consider the following:
```lua
-- The so-called "Platonic form" of a list of grades.
-- i.e., the structure shared by all lists of grades.
platonic_grades = {}
function platonic_grades:calculate_final_grade()
	local sum = 0
	for _, grade in ipairs(self) do
		sum = sum + grade
	end
	-- return the average
	return sum / #self 
end

-- create a metatable that says "look up missing values in the platonic form"
grades_meta = { __index = platonic_grades}

local assignment_grades = {10, 7, 9, 6}
-- give `assignment_grades` a metatable
setmetatable(assignment_grades, grades_meta)
```
This lets us do the following:
```lua
assignment_grades:calculate_final_grade() --> 8
```
How does this work? Let's walk through this step by step.
1. The function definition of `platonic_grades:calculate_final_grade()` translates to 
```lua
-- NOTE: self can be anything
function platonic_grades.calculate_final_grade(self)
```
2.  The line `assignment_grades:calculate_final_grade()` be translated into 
```lua
assignment_grades.calculate_final_grade(assignment_grades)
```
3. Lua will then try to find  `calculate_final_grade` inside the `assignment_grades` table.
4. `assignment_grades` has no key named `calculate_final_grade`, so the `__index` metamethod will trigger.
5. Since `platonic_grades` has a field named `calculate_final_grade`, that value (i.e. function) will be returned by the `__index` metamethod.
6. This will result in the following line of code being executed:
```lua
platonic_grades.calculate_final_grade(assignment_grades)
```

>[!warning]+ Use `:` with care (part 2)
> The previous example illustrates how the seemingly innocuous `:` syntax can lead to non-trivial behavior. 
>  - When defining the `platonic_grades.calculate_final_grade` function, we introduced a new parameter `self`, and there were no guarantees made about what could be passed in as a value for `self`. 
>  - Later on, we used some metatable trickery to call `platonic_grades.calculate_final_grade` with _another table_ given as the value for the `self` parameter. And the `:` syntax hid the fact that we were even doing this.
> 
> In summary, the `:`  syntax does help to make code more readable, but this readability comes at a cost: some important details are hidden. This can lead to some very confusing behavior if the `:` syntax is not properly understood. 

With the fear-mongering out of the way, let's get back to the example at hand. 

By using metatables, we're able to associate functions to specific tables, without interfering with the values stored by those tables. In particular, this approach results in no errors when using `pairs` on `assignment_grades`:
```lua
for _, grade in pairs(assignment_grades) do
	sum = sum + grade -- no error
end
```
This is because the `calculate_final_grade` function is no longer stored in `assignment_grades`, so that value isn't encountered when we iterate over the table using `pairs`.

Another advantage is that it's much easier to use the `calculate_final_grade` function on other lists of grades. Here's an example:
```lua
local project_grades = {3, 10, 9, 9, 5}
setmetatable(project_grades, grades_meta)
project_grades:calculate_final_grade() --> 7.2

local exam_grades = {7, 9, 8}
setmetatable(exam_grades, grades_meta)
exam_grades:calculate_final_grade() --> 8.0
```

##### TODO: add concluding sentence


It would be nice if we didn't always have to write the `setmetatable` code each time we got a new list of grades, since the metatable is really just a middleman between a particular list of grades and the general structure shared by all grades. This leads into the next section.


### Basics of Object Oriented Programming in Lua

Object Oriented Programming (OOP) is not directly supported in Lua, but metatables can be used to mimic certain parts of OOP programming.

In [[#Approach 3 using the `__index` metamethod]], we introduced the concept of using metatables and the `:` syntax to allow a table `tbl_A` to call a function defined in `tbl_B` in such a way that `tb_A` passed itself as a parameter to that function. By slightly changing our perspective, we can view this as a common OOP pattern: defining a class, adding methods to that class, and then calling those methods on instances of that class.

Let's analyze the example given in  [[#Approach 3 using the `__index` metamethod]] using this new perspective.

>[!example]- Example from  [[#Approach 3 using the `__index` metamethod]] (unchanged)
>Here's the previous example, in its original form.
>```lua
>-- The so-called "Platonic form" of a list of grades.
>-- i.e., the structure shared by all lists of grades.
>platonic_grades = {}
>function platonic_grades:calculate_final_grade()
>	local sum = 0
>	for _, grade in ipairs(self) do
>		sum = sum + grade
>	end
>	-- return the average
>	return sum / #self 
>end
>
>-- create a metatable that says "look up missing values in the platonic form"
>grades_meta = { __index = platonic_grades}
>
>local assignment_grades = {10, 7, 9, 6}
>-- give `assignment_grades` a metatable
>setmetatable(assignment_grades, grades_meta)
>```


>[!example]+ Example from  [[#Approach 3 using the `__index` metamethod]] (OOP Perspective)
> This illustrates how the previous example can be viewed from an OOP perspective.
>```lua
>-- A class in which each instance is a list of grades.
>local Grades_List = {}
>function Grades_List:calculate_final_grade()
>	local sum = 0
>	for _, grade in ipairs(self) do
>		sum = sum + grade
>	end
>	-- return the average
>	return sum / #self 
>end
>
>-- create a metatable that says "if an instance of Grades_List is missing a value, fetch the value stored in the Grades_List class."
>Grades_List_meta = { __index = Grades_List}
>
>local assignment_grades = {10, 7, 9, 6}
>-- make `assignment_grades` an instance of the `Grades_List` class
>setmetatable(assignment_grades, Grades_List_meta)
>```

When viewing this example from the OOP perspective, it seems odd to use `setmetatable` to construct a new object. Normally that would be done by using a `new` keyword. This motivates the following function definition:
```lua
function Grades_List.new(obj)
	obj = obj or {} -- if `obj` doesn't exist, make it an empty list
	-- make `obj` a proper instance of the class
	setmetatable(obj, Grades_List_meta)
	-- return the object
	return obj
end
```
We can now make new grades objects as follows:
```lua
local project_grades = Grades_List.new{3, 10, 9, 9, 5}
project_grades:calculate_final_grade() --> 7.2

local exam_grades = Grades_List.new{7, 9, 8}
exam_grades:calculate_final_grade() --> 8.0
```
This is a lot more readable than the previous approach of using `setmetatable`, and we no longer have to keep track of which metatable to use.

Abstracting this concept to any class, we can create new instances of a class as follows:
```lua
local Class = {}
-- make objects look up missing values in `Class`
local Class_meta = {__index = Class}
function Class.new(obj)
	obj = obj or {} -- if `obj` doesn't exist, make it an empty list
	-- make `obj` a proper instance of the class
	setmetatable(obj, Class_meta)
	-- return the object
	return obj
end
```
We can then define a method by simply writing
```lua
function Class:my_method(arg1, arg2) -- as many parameters as you want
	-- do stuff
end
```
Those methods can be called on an instance (named `obj` ) by typing
```lua
obj:my_method(val1, val2)
```
It's also possible to specify default values that an object should have. Writing
```lua
Class.a = 1
Class.b = 2
```
will enable the following behavior:
```lua
local obj1 = Class.new({a = 10})
local obj2 = Class.new()

obj1.a == 10 --> TRUE
obj1.b == 2 --> TRUE
obj2.a == 1 --> TRUE
```

This approach differs from the more commonly used approach to defining a `new` function:
>[!warning] Avoid using `:` in the definition of a `Class.new` function
> The most commonly used approach to defining a new function is:
> ```lua
>function OtherClass:new(obj)
>	obj = obj or {}
>	self.__index = self
>	setmetatable(obj, self)
>	return obj
>end
>```
>However, this is not recommended as it leads to some bizzare behavior that blurs the lines between classes and objects. This will be discussed in detail below.

The problem with the approach given in the warning block is that it blurs the lines between several different concepts, and can result in a great deal of confusion. To illustrate this, let's dissect what happens when `OtherClass:new(obj)` is called on an object `obj`.
1. `OtherClass:new(obj)` is called. This gets translated into Other`Class.new(OtherClass, obj)`. In other words, we call `OtherClass.new` with `self == OtherClass`.  
	- This is quite strange, since (in practice) every other method defined for `OtherClass` will have `self == some_object`, where `some_object` is an instance of `OtherClass`.
	- Even stranger is that we _also_ have an instance of `OtherClass`  in the function definition: `obj` _is_ an instance of `OtherClass`, but `self` _is not_ an instance of `OtherClass`.
2. `obj = obj or {}` makes sure `obj` is a table. This is fine.
3. `self.__index = self` gets translated into `OtherClass.__index = OtherClass`. (Remember, `self == OtherClass`.) In other words, we're now also treating `OtherClass` as a metatable.
4. `setmetatable(obj, self)` translates into `setmetatable(obj, OtherClass)`. This will result in the following behavior when trying to lookup a missing value in `obj`:
	- Lua will see that `obj` has a metatable. That metatable is `OtherClass`.
	- Since `OtherClass` has an `__index` metamethod, that metamethod will be called. (At this point, `OtherClass` is still only being viewed as a metatable of `obj`.)
	- Calling the `__index` metamethod will result in looking up the missing value inside `OtherClass`
	- If the value exists in `OtherClass`, then that value will be returned. Otherwise, we see if `OtherClass` has a metatable and continue this process.
		- **NOTE:** Even though `OtherClass` is a metatable and `OtherClass.__index = OtherClass`, it is still possible that `OtherClass` itself does not have a metatable.
5. `return obj` will return the object, and the journey is concluded.

There's a lot going on in that definition. It's secretly assigning `self = OtherClass`, and also turning `OtherClass` into a metatable.

Here's another weird side effect of the `:` syntax in `OtherClass:new`. Consider the following code:
```lua
OtherClass.a = 1
OtherClass.b = 2
OtherClass.c = 3

obj1 = OtherClass:new({a = 5})
obj2 = obj1:new({b = 6})
```
This results in the following:
```lua
obj1.a == 5 --> TRUE
obj1.b == 2 --> TRUE
obj1.c == 3 --> TRUE

obj2.a == 5 --> TRUE
obj2.b == 6 --> TRUE
obj2.c == 3 --> TRUE
```
What's going on here? The problem is that  `obj2 = obj1:new({b = 6})` gets translated to `OtherClass.new(obj1, {b = 6})`. So, the metatable for `obj2` is `obj1` instead of `OtherClass`. Here's what happens when we try to look up the following values in `obj2`:
- `obj2.a`:
	- First, Lua will try to find a key named `a` inside `obj2`.
	- No such key exists, but `obj2` has a metatable (namely, `obj1`) with an `__index` metamethod, so Lua searches for `a` inside `obj1`.
	- `obj1` does have a value (namely, `5`) associated to the key `a`, so `5` gets returned.
- `obj2.c`:
	- Lua looks for `c` inside `obj2`.
	- It can't find `c` inside `obj2`, so it searches in `obj1`.
	- It can't find `c` inside `obj1`, but `obj1` has a metatable (namely, `OtherClass`), and `OtherClass` does have a value associated to `c` (namely, `3`), so `3` gets returned.

Here's another way to look at what's going on behind the scenes: the `:` syntax in `OtherClass:new` makes each object both an instance of `OtherClass` _and a subclass_ of `OtherClass`.

At first glance, this may seem kind of nice since you can use `:new` to create objects _and_ subclasses. But unfortunately this does not play nicely with inheritance and other metamethods. Consider the following:

```lua
function OtherClass:__tostring()
	return "OtherClass"
end

local SubClass = OtherClass:new()

local obj1 = OtherClass:new()
local obj2 = SubClass:new()

print(tostring(obj1)) --> "OtherClass"
print(obj1:__tostring()) --> "OtherClass"

print(tostring(obj2)) --> "table 0x_____"
print(obj2:__tostring()) --> "OtherClass"

print(tostring(SubClass)) --> "OtherClass"
print(SubClass:__tostring()) --> "OtherClass"
```
Why doesn't the `__tostring` method work on `obj2`? Because there's no `__tostring` metamethod in the metatable of `obj2` (namely, in `SubClass`). But the `__index` lookup chain still lets us access the `__tostring` method by calling it directly.

This reveals a shortcoming of making a table equal to its own metatable: it blurs the lines between metamethods and ordinary methods. 
- `tostring(obj2)` will look for a definition of `__tostring` _as a metamethod_.
	- this **does not** invoke calls to `__index` metamethods
- `obj2:__tostring()` will look for a definition of `__tostring` _as an ordinary method_.
	- this **does** invoke calls to `__index` metamethods.


How do you make a subclass inherit the metamethods of its parent class? There is no built-in functionality that will accomplish this. If you want to do this, it may be best to use a third party OOP library.

# Importing other files
## `require` vs `include` vs `dofile`