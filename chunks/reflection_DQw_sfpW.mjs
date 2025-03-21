const id = "Previous Versions/v0_6_8/Generic Programming/reflection.md";
						const collection = "docs";
						const slug = "previous-versions/v0_6_8/generic-programming/reflection";
						const body = "\nC3 allows both compile time and runtime reflection.\n\nDuring compile time the type information may be directly used as compile time constants, the same data is then available dynamically at runtime.\n\n*Note that not all reflection is implemented in the compiler at this point in time.*\n\n## Compile time reflection\n\nDuring compile time there are a number of compile time fields that may be accessed directly.\n\n### Type properties\n\nIt is possible to access properties on the type itself:\n\n- `alignof`\n- `associated`\n- `elements`\n- `extnameof`\n- `inf`\n- `inner`\n- `kindof`\n- `len`\n- `max`\n- `membersof`\n- `min`\n- `nan`\n- `nameof`\n- `names`\n- `params`\n- `parentof`\n- `qnameof`\n- `returns`\n- `sizeof`\n- `typeid`\n- `values`\n\n#### `alignof`\n\nReturns the alignment in bytes needed for the type.\n\n```c3\nstruct Foo @align(8)\n{\n    int a;\n}\n\nuint a = Foo.alignof; // 8\n```\n\n#### `associated`\n\n*Only available for enums.*\nReturns an array containing the types of associated values if any.\n\n```c3\nenum Foo : int (double d, String s)\n{\n    BAR = { 1.0, \"normal\" },\n    BAZ = { 2.0, \"exceptional\" }\n}\nString s = Foo.associated[0].nameof; // \"double\"\n```\n\n#### `elements`\n\nReturns the element count of an enum or fault.\n\n```c3\nenum FooEnum\n{\n    BAR,\n    BAZ\n}\nint x = FooEnum.elements; // 2\n```\n\n#### `inf`\n\n*Only available for floating point types*\n\nReturns a representation of floating point \"infinity\".\n\n#### `inner`\n\nThis returns a typeid to an \"inner\" type. What this means is different for each type:\n\n- Array -> the array base type.\n- Bitstruct -> underlying base type.\n- Distinct -> the underlying type.\n- Enum -> underlying enum base type.\n- Pointer -> the type being pointed to.\n- Vector -> the vector base type.\n\nIt is not defined for other types.\n\n#### `kindof`\n\nReturns the underlying `TypeKind` as defined in std::core::types.\n\n```c3\nTypeKind kind = int.kindof; // TypeKind.SIGNED_INT\n```\n\n#### `len`\n\nReturns the length of the array.\n\n```c3\nusz len = int[4].len; // 4\n```\n\n#### `max`\n\nReturns the maximum value of the type (only valid for integer and float types).\n\n```c3\nushort max_ushort = ushort.max; // 65535\n```\n\n#### `membersof`\n\n*Only available for bitstruct, struct and union types.*\n\nReturns a *compile time* list containing the fields in a bitstruct, struct or union. The\nelements have the *compile time only* type of `member_ref`. \n\n*Note: As the list is an \"untyped\" list, you are limited to iterating and accessing it at \ncompile time.*\n\n```c3\nstruct Baz\n{\n    int x;\n    Foo* z;\n}\nString x = Baz.membersof[1].nameof; // \"z\"\n```\n\nA `member_ref` has properties `alignof`, `kindof`, `membersof`, `nameof`, `offsetof`, `sizeof` and `typeid`.\n\n#### `min`\n\nReturns the minimum value of the type (only valid for integer and float types).\n\n```c3\nichar min_ichar = ichar.min; // -128\n```\n\n#### `nameof`\n\nReturns the name of the type.\n\n#### `names`\n\nReturns a slice containing the names of an enum or fault.\n\n```c3\nenum FooEnum\n{\n    BAR,\n    BAZ\n}\nString[] x = FooEnum.names; // [\"BAR\", \"BAZ\"]\n```\n\n#### `paramsof`\n\n*Only available for function pointer types.*\nReturns a ReflectParam struct for all function pointer parameters.\n\n```c3\ndef TestFunc = fn int(int x, double f);\nString s = TestFunc.paramsof[1].name; // \"f\"\ntypeid t = TestFunc.paramsof[1].type; // double.typeid\n```\n\n#### `parentof`\n\n*Only available for bitstruct and struct types.*\nReturns the typeid of the parent type.\n\n```c3\nstruct Foo\n{\n    int a;\n}\n\nstruct Bar\n{\n    inline Foo f;\n}\n\nString x = Bar.parentof.nameof; // \"Foo\"\n```\n\n#### `returns`\n\n*Only available for function types.*\nReturns the typeid of the return type.\n\n```c3\ndef TestFunc = fn int(int, double);\nString s = TestFunc.returns.nameof; // \"int\"\n```\n\n#### `sizeof`\n\nReturns the size in bytes for the given type, like C `sizeof`.\n\n```c3\nusz x = Foo.sizeof;\n```\n\n#### `typeid`\n\nReturns the typeid for the given type. `def`s will return the typeid of the underlying type. The typeid size is the same as that of an `iptr`.\n\n```c3\ntypeid x = Foo.typeid;\n```\n\n#### `values`\n\nReturns a slice containing the values of an enum or fault.\n\n```c3\nenum FooEnum\n{\n    BAR,\n    BAZ\n}\nString x = FooEnum.values[1].nameof; // \"BAR\"\n```\n\n### Compile time functions\n\nThere are several built-in functions to inspect the code during compile time.\n\n- `$alignof`\n- `$defined`\n- `$eval`\n- `$evaltype`\n- `$extnameof`\n- `$nameof`\n- `$offsetof`\n- `$qnameof`\n- `$sizeof`\n- `$stringify`\n- `$typeof`\n\n#### `$alignof`\n\nReturns the alignment in bytes needed for the type or member.\n\n```c3\nmodule test::bar;\n\nstruct Foo\n{\n    int x;\n    char[] y;\n}\nint g = 123;\n\n$alignof(Foo.x); // => returns 4\n$alignof(Foo.y); // => returns 8 on 64 bit\n$alignof(Foo);   // => returns 8 on 64 bit\n$alignof(g);     // => returns 4\n```\n\n#### `$defined`\n\nReturns true if the expression inside is defined and all sub expressions are valid.\n\n```c3\n$defined(Foo.x);     // => returns true\n$defined(Foo.z);     // => returns false\nint[2] abc;\n$defined(abc.len);   // => returns true\n$defined(abc.len()); // => returns false\n$defined((int)abc);  // => returns false\n// $defined(abc.len() + 1)  would be an error\n```\n\n#### `$eval`\n\nConverts a compile time string with the corresponding variable:\n\n```c3\nint a = 123;         // => a is now 123\n$eval(\"a\") = 222;    // => a is now 222\n$eval(\"mymodule::fooFunc\")(a); // => same as mymodule::fooFunc(a)\n```\n\n`$eval` is limited to a single, optionally path prefixed, identifier.\nConsequently methods cannot be evaluated directly:\n\n```c3\nstruct Foo { ... }\nfn int Foo.test(Foo* f) { ... }\n\nfn void test()\n{\n    void* test1 = &$eval(\"test\"); // Works\n    void* test2 = &Foo.$eval(\"test\"); // Works\n    // void* test3 = &$eval(\"Foo.test\"); // Error\n}\n```\n\n#### `$evaltype`\n\nSimilar to `$eval` but for types:\n\n```c3\n$evaltype(\"float\") f = 12.0f;\n```\n\n#### `$extnameof`\n\nReturns the external name of a type, variable or function. The external name is\nthe one used by the linker.\n\n```c3\nfn void testfn(int x) { }\nString a = $extnameof(g); // => \"test.bar.g\";\nstring b = $extnameof(testfn); // => \"test.bar.testfn\"\n```\n\n#### `$nameof`\n\nReturns the name of a function or variable as a string without module prefixes.\n\n```c3\nfn void test() { }\nint g = 1;\n\nString a = $nameof(g); // => \"g\"\nString b = $nameof(test); // => \"test\"\n```\n\n#### `$offsetof`\n\nReturns the offset of a member in a struct.\n\n```c3\nFoo z;\n$offsetof(z.y); // => returns 8 on 64 bit, 4 on 32 bit\n```\n\n#### `$qnameof`\n\nReturns the same as `$nameof`, but with the full module name prepended.\n\n```c3\nmodule abc;\nfn void test() { }\nint g = 1;\n\nString a = $qnameof(g); // => \"abc::g\"\nString b = $qnameof(test); // => \"abc::test\"\n```\n\n#### `$sizeof`\n\nThis is used on a value to determine the allocation size needed. `$sizeof(a)` is equivalent\nto doing `$typeof(a).sizeof`. Note that this is only used on values and not on types.\n\n```c3\n$typeof(a)* x = allocate_bytes($sizeof(a));\n*x = a;\n```\n\n#### `$stringify`\n\nReturns the expression as a string. It has a special behaviour for macro expression parameters,\nwhere `$stringify(#foo)` will return the expression contained in `#foo` rather than simply return\n\"#foo\"\n\n#### `$typeof`\n\nReturns the type of an expression or variable as a type itself.\n\n```c3\nFoo f;\n$typeof(f) x = f;\n```\n";
						const data = {title:"Reflection",description:"Reflection",editUrl:true,head:[],template:"doc",sidebar:{order:85,hidden:false,attrs:{}},pagefind:true,draft:false};
						const _internal = {
							type: 'content',
							filePath: "/home/josh/git/c3_tests/experimental-site-testing-only__local_changes/src/content/docs/Previous Versions/v0_6_8/Generic Programming/reflection.md",
							rawData: undefined,
						};

export { _internal, body, collection, data, id, slug };
