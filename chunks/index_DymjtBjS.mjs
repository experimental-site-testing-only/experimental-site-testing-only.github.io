const id = "FAQ/index.mdx";
						const collection = "docs";
						const slug = "faq";
						const body = "## Standard library\n\n**Q:** What are the most fundamental modules in the standard library?\n\n**A:** By default C3 will implicitly import anything in `std::core` into\nyour files. It contains string functions, allocators and conveniences for\ndoing type introspection. The latter is in particular useful when writing\ncontracts for macros:\n\n- `std::core::array` functions for working with arrays.\n- `std::core::builtin` contains functions that are to be used without a module\n  prefix, `unreachable()`, `bitcast()`, `@catch()` and `@ok()`\n  are especially important.\n- `std::core::cinterop` contains types which will match the C types on the platform.\n- `std::core::dstring` Has the dynamic string type.\n- `std::core::mem` contains `malloc` etc, as well as functions for atomic\n  and volatile load / store.\n- `std::core::string` has all string functionality, including conversions,\n  splitting and searching strings.\n\nAside from the `std::core` module, `std::collections` is important as it\nholds various containers. Of those the generic `List` type in `std::collections::list`\nand the `HashMap` in `std::collections::map` are very frequently used.\n\nIO is a must, and `std::io` contains `std::io::file` for working with files,\n`std::io::path` for working with paths. `std::io` itself contains\nfunctionality to writing to streams in various ways. Useful streams can\nbe found in the `stream` sub folder.\n\nAlso of interest could be `std::net` for sockets. `std::threads` for\nplatform independent threads, `std::time` for dates and timers, `libc` for\ninvoking libc functions. `std::os` for working with OS specific code and\n`std::math` for math functions and vector methods.\n\n\n**Q:** How do strings work?\n\n(see [Strings](/language-common/strings) for more info.)\n\n**A:** C3 defines a native string type `String`, which is a `typedef char[]`. Because\n`char[]` is essentially a pointer + length, some care has to be taken to\nensure that the pointer is properly managed.\n\nFor dynamic strings, or as a string builder, use `DString`. To get a String from\na DString you can either get a *view* using `str_view()` or make a copy using `copy_str()`.\nIn the former case, the String may become invalid if DString is then mutated.\n\n`ZString` is a zero terminated `typedef char*`. It is used to model zero-terminated\nstrings like in C. It is mostly useful interfacing with C.\n\n`WString` is a `Char16*`, useful on those platforms, like Win32, where this\nis the common unicode format. Like ZString, it is mostly useful when interfacing\nwith C.\n\n## Language features\n\n**Q:** How do I use slices?\n\n(see [Arrays/Slice](/language-common/arrays/#slice) for more info.)\n\n**A:** Slices are typically preferred in any situation where one in C would pass\na pointer + length. It is a struct containing a pointer + a length.\n\nGiven an array, pointer or another slice you use either `[start..end]`\nor `[start:len]` to create it:\n\n```c3\nint[100] a;\nint[] b = a[3..6]; // Or a[3:4]\nb[0] = 1;          // Same as a[3] = 1\n```\n\nYou can also just pass a pointer to an array:\n\n```c3\nb = &a; // Same as b = a[0..99];\n```\n\nThe start and/or end may be omitted:\n\n```c3\na[..6]; // a[0..6]\na[1..]; // a[1..99]\na[..];  // a[0..99];\n```\n\nIt is possible to use ranges to assign:\n\n```c3\na[1..2] = 5;         // Assign 5 to a[1] and a[2]\na[1..3] = a[11..13]; // Copy 11-13 to 1-3\n```\n\nIt is important to remember that the *lifetime* of a slice is the same\nas the lifetime of its underlying pointer:\n\n```c3\nfn int[] buggy_code()\n{\n    int[3] a;\n    int[] b = a[0..1];\n    return b; // returning a pointer to a!\n}\n```\n\n**Q:** How do I pass varargs to another function that takes varargs?\n\n**A:** Use the splat operator, `...`\n\n```c3\nfn void test(String format, args...)\n{\n\tio::printfn(format, ...args);\n}\n\nfn void main()\n{\n\ttest(\"Format: %s %d\", \"Foo\", 123);\n}\n```\n\n**Q:** What are vectors?\n\n(see [Vectors](/language-common/vectors) for more info.)\n\n**A:** Vectors are similar to arrays, but declared with `[< >]` rather than `[ ]`, the element type may also only\nbe of integer, float, bool or pointer types. Vectors are backed by SIMD types on supported platforms. Arithmetics\navailable on the element type is available on the vector and is done element wise:\n\n```c3\nint[<2>] pos = { 1, 3 };\nint[<2>] speed = { 5, 7 };\npos += speed;              // pos is now { 6, 10 }\n```\n\nSwizzling is also supported:\n\n```c3\nint[<3>] test = pos.yxx;    // test is now { 10, 6, 6 }\n```\n\nAny scalar value will be expanded to the vector size:\n\n```c3\n// Same as speed = speed * { 2, 2 }\nspeed = speed * 2;\n```\n\n## Memory management\n\n**Q:** How do I work with memory?\n\n**A:** There is `malloc`, `calloc` and `free` just like in C. The main difference is that these will invoke whatever\nthe current heap allocator is, which does not need to be the allocator provided by libc. You can get the current heap\nallocator using `allocator::heap()` and do allocations directly. There is also a temporary allocator.\n\nConvenience functions are available for allocating particular types: `mem::new(Type)` would allocate a single `Type`\non the heap and zero initialize it. `mem::alloc(Type)` does the same but without zero initialization.\n\nAlternatively, `mem::new` can take a second initializer argument:\n\n```c3\nFoo* f1 = malloc(Foo.sizeof);                   // No initialization\nFoo* f2 = calloc(Foo.sizeof);                   // Zero initialization\nFoo* f3 = mem::new(Foo);                        // Zero initialization\nFoo* f4 = mem::alloc(Foo);                      // No initialization\nFoo* f5 = mem::new(Foo, { 4, 10.0, .a = 123 }); // Initialized to argument\n```\n\nFor arrays `mem::new_array` and `mem::alloc_array` works in corresponding ways:\n\n```c3\nFoo* foos1 = malloc(Foo.sizeof * len);    // No initialization\nFoo* foos2 = calloc(Foo.sizeof * len);    // Zero initialization\nFoo[] foos3 = mem::new_array(Foo, len);   // Zero initialization\nFoo[] foos4 = mem::alloc_array(Foo, len); // No initialization\n```\n\nRegardless of how they are allocated, they can be freed using `free()`\n\n**Q:** How does the temporary allocator work?\n\n**A:** The temporary allocator is a kind of stack allocator. `tmalloc`, `tcalloc` and `trealloc` correspond to\n`malloc`, `calloc` and `realloc`. There is no `free`, as temporary allocations are free when pool of temporary\nobjects are released. You use the `@pool()` macro to create a temporary allocation scope. When execution exits\nthis scope, the temporary objects are all freed:\n\n```c3\n@pool()\n{\n    void* some_mem = tmalloc(128);\n    foo(some_mem);\n};\n// Temporary allocations are automatically freed here.\n```\n\nSimilar to the heap allocator, there is also `mem::tnew`, `mem::temp_alloc`, `mem::temp_array` and `mem::temp_alloc_array`,\nwhich all work like their heap counterparts.\n\n**Q:** How can I return a temporarily allocated object from inside a temporary allocation scope?\n\n**A:** You need to pass in a copy of the temp allocator *outside* of `@pool` and allocate explicitly\nusing that allocator. In addition, you need to pass this temp allocator to `@pool` to make the\nnew temp allocator aware of the external temp allocator:\n\n```c3\n// Store the temp allocator\nAllocator temp = allocator::temp();\n@pool(temp)\n{\n    // Note, 'allocator::temp() != temp' here!\n    void* some_mem = tmalloc(128);\n    // Allocate this on the external temp allocator\n    Foo* foo = allocator::new(temp, Foo);\n    foo.z = foo(some_mem);\n    // Now \"some_mem\" will be released,\n    // but the memory pointed to by \"foo\" is still valid.\n    return foo;\n};\n```\n\n## Interfacing with C code\n\n(see [C Interoperability](/language-common/cinterop) for more info.)\n\n**Q:** How do I call a C function from C3?\n\n**A:** Just copy the C function definition and prefix it with `extern` (and don't forget the `fn` as well).\n\nImagine for example that you have the function `double test(int a, void* b)`. To call it from C3 just declare\n`extern fn double test(CInt a, void* b)` in the C3 code.\n\n**Q:** My C function / global has a name that doesn't conform to the C3 name requirements, just `extern fn` doesn't\nwork.\n\n**A:** In this case you need to give the function a C3-compatible name and then use the `@extern` attribute to\nindicate its actual external name. For example, the function `int *ABC(void *x)` could be declared in the C3 code as\n`extern fn int* abc(void* x) @extern(\"ABC\")`.\n\nThere are many examples of this in the `std::os` modules.\n\n## Patterns\n\n**Q:** When do I put functionality in method and when is it a free function?\n\n**A:** In the C3 standard library, free functions are preferred unless the function is only acting on the particular\ntype. Some exceptions exist, but prefer things like `io::fprintf(file, \"Hello %s\", name)` over\n`file.fprintf(\"Hello %s\", name)`. The former also has the advantage that it's easier to extend to work with many\ntypes.\n\n**Q:** Are there any naming conventions in the standard library what one should know about?\n\n**A:** Yes. A function or method with `new` in the name will in general do one or more allocations and can take an\noptional allocator. A function or method with `temp` in the name will usually allocate using the temp allocator.\nThe method `free` will free all memory associated with a type. `destroy` is similar to `free` but also indicates\nthat other resources (such as file handles) are released. In some cases `close` is used instead of `destroy`.\n\nFunction and variable names use `snake_case` (all lower case with `_` separating words).\n\n**Q:** How do I create overloaded methods?\n\n**A:** This can be achieved with macro methods.\n\nImagine you have two methods:\n\n```c3\nfn void Obj.func1(&self, String... args) @private {} // varargs variant\nfn void Obj.func2(&self, Foo* pf) @private {} // Foo pointer variant\n```\n\nWe can now create a macro method on `Obj` which compiles to different calls depending on arguments:\n\n```c3\n// The macro must be vararg, since the functions take different amount of arguments\nmacro void Obj.func(&self, ...)\n{\n    // Does it have a single argument of type 'Foo*'?\n    $if $vacount == 1 &&& @typeis($vaarg[0], Foo*):\n        // If so, dispatch to func2\n        return self.func2($vaarg[0]);\n    $else\n        // Otherwise, dispatch all varargs to func1\n        return self.func1($vasplat);\n    $endif\n}\n```\n\nThe above would make it possible to use both `obj.func(\"Abc\", \"Def\")` and `obj.func(&my_foo)`.\n(The use of `&&&` is the same as `&&` except the right hand side is *lazily* evaluated,\nin this case, it only is checked if $vacount is `1`)\n\n## Platform support\n\n**Q:** How do I use WASM?\n\n**A:** Currently WASM support is really incomplete.\n\nYou can try this:\n\n`compile --reloc=none --target wasm32 -g0 --link-libc=no --no-entry mywasm.c3`\n\nUnless you are compiling with something that already runs initializers,\nyou will need to call the function `runtime::wasm_initialize()` early in your\nmain *or* call it externally (for example from JS) with the name `_initialize()`,\notherwise globals might not be set up properly.\n\nThis should yield an `out.wasm` file, but there is no CI running on the WASM code\nand no one is really using it yet, so the quality is low.\n\nWe do want WASM to be working really well, so if you're interested in\nwriting something in WASM - please reach out to the developer team and we'll\nhelp you get things working.\n\n\n\n**Q:** How do I conditionally compile based on compiler flags?\n\n**A:** You can pass *feature flags* on the command line using `-D SOME_FLAG` or using the `features` key\nin the project file.\n\nYou can then test for them using `$feature(FLAG_NAME)`:\n\n```c3\nint my_var @if($feature(USE_MY_VAR));\n\nfn int test()\n{\n    $if $feature(USE_MY_VAR):\n        return my_var;\n    $else\n        return 0;\n    $endif\n}\n```\n\n## Syntax & Language design\n\n**Q:** Why does C3 require that types start with upper case but functions with lower case?\n\n**A:** C grammar is ambiguous. Usually compilers implement the so-called lexer hack, but other methods\nexist as well, such as delayed parsing. It is also possible to make it unambiguous using infinite lookahead.\n\nHowever, all of those methods makes it much harder for tools to search the source code accurately. By making\nthe naming convention part of the grammar, C3 is straightforward to parse with a single token lookahead.\n\n**Q:** Why are there no closures and only non-capturing lambdas?\n\n**A:** With closures, life-time management of captured variables become important to track. This can become\narbitrarily complex, and without RAII or any other memory management technique it is fairly difficult to\nmake code safe. Non-capturing lambdas on the other hand are fairly safe.\n\n**Q:** Why is it called C3 and not something better?\n\n**A:** Naming a programming language isn't easy. Most programming languages have pretty bad names, and\nwhile C3 isn't the best, no real better alternative has come along.\n\n**Q:** Why are there no static methods?\n\n**A:** Static methods creates a tension between free functions in modules and functions namespaced by the type.\nJava for example, resolves this by not having free functions at all. C3 solves it by not having static methods (nor\nstatic variables). Consequently more functions becomes part of the module rather than the type.\n\n**Q:** Why do macros with trailing bodies require `;` at the end?\n\n```c3\n@test()\n{\n   // code\n}; // <- Why is this needed?\n```\n\n**A:** All macro calls, including those with a trailing body, are expressions, so it would be ambiguous\nto let them terminate a statement without a much more complicated grammar. An example:\n\n```c3\n// How can the parser determine that the\n// last `}` ends the expression? (And does it?)\nint a = @test() {} + @test() {}\n*b = 123;\n// In comparison, the grammar for this is easy:\nint a = @test() {} + @test() {};\n*b = 123;\n```\n\nC3 strives for a simple grammar, and so the trade-off having to use `;` was a fairly\nlow prices to pay for this feature.\n\n## Cross-compiling To Windows From Linux\n**Q:** How do I cross-compile my C3 program For Windows On Linux?\n\n**A:** With the C3 compiler you can specify which target you would like to cross-compile to.\nFor Windows the following target would be needed:\n\n`c3c compile main.c3 --target windows-x64`\n\n*You need the MSVC SDK Files, which includes the Windows SDK to be able to cross-compile to Windows.*\n\nTo get the MSVC SDK Files, head to your C3 directory and run the following command:\n\n`python3 msvc_build_libraries.py`\n\nRunning this command should generate a msvc_sdk directory in your main C3 directory.\n\nIf running this command returns an error, your Linux distribution is more than likely missing the requried packages needed for generating this msvc folder\n\nRun the following command depending on your distro:\n- **Ubuntu:** `sudo apt install msitools`\n- **Arch Linux:** `pacman -S msitools`\n- **Fedora:** `dnf install msitools`\n";
						const data = {title:"Frequently Asked Questions",description:"Frequently asked questions about C3",editUrl:true,head:[],template:"doc",sidebar:{order:700,hidden:false,attrs:{}},pagefind:true,draft:false};
						const _internal = {
							type: 'content',
							filePath: "/home/josh/git/c3_tests/experimental-site-testing-only__local_changes/src/content/docs/FAQ/index.mdx",
							rawData: undefined,
						};

export { _internal, body, collection, data, id, slug };
