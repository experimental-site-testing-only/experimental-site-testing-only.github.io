const id = "Language Fundamentals/expressions.md";
						const collection = "docs";
						const slug = "language-fundamentals/expressions";
						const body = "\nExpressions work like in C, with one exception: it is possible to take the address of a temporary. This uses the operator `&&` rather than `&`.\n\nConsequently, this is valid:\n```c3\nfn void test(int* x) { ... }\n\ntest(&&1);\n\n// In C:\n// int x = 1;\n// test(&x);\n```\n## Well-defined evaluation order\n\nExpressions have a well-defined evaluation order:\n\n1. Binary expressions are evaluated from left to right.\n2. Assignment occurs right to left, so `a = a++` would result in `a` being unchanged.\n3. Call arguments are evaluated in parameter order.\n\n## Compound literals\n\nC3 has C's compound literals, but unlike C's cast style syntax `(MyStruct) { 1, 2 }`, \nit uses C++ syntax: `MyStruct { 1, 2 }`.\n```c3\nstruct Foo\n{\n    int a;\n    double b;\n}\n\nfn void test1(Foo x) { ... }\n\n... \n\ntest1(Foo { 1, 2.0 });\n```\n\nArrays follow the same syntax:\n```c3\nfn void test2(int[3] x) { ... }\n\n...\n\ntest2(int[3] { 1, 2, 3 });\n```\n\nNote that when it's possible, inferring the type is allowed, so we have for the above examples:\n```c3\ntest1({ 1, 2.0 });\ntest2({ 1, 2, 3 });\n```\nOne may take the address of temporaries, using `&&` (rather than `&` for normal variables). This allows the following:\n\nPassing a [slice](/language-common/arrays/#slice)\n\n```c3\nfn void test(int[] y) { ... }\n\n// Using &&\ntest(&&int[3]{ 1, 2, 3 });\n\n// Explicitly slicing:\ntest(int[3]{ 1, 2, 3 }[..]);\n\n// Using a slice directly as a temporary:\ntest(int[]{ 1, 2, 3 });\n\n// Same as above but with inferred type:\ntest({ 1, 2, 3 });\n```\n\nPassing the pointer to an [array](/language-common/arrays)\n\n```c3\nfn void test1(int[3]* z) { ... }\nfn void test2(int* z) { ... }\n\ntest1(&&int[3]{ 1, 2, 3 });\ntest2(&&int[3]{ 1, 2, 3 });\n```\n\n## Constant expressions\n\nIn C3 all _constant expressions_ are guaranteed to be calculated at compile time. The following are considered constant expressions:\n\n1. The `null` literal.\n2. Boolean, floating point and integer literals.\n3. The result of arithmetics on constant expressions.\n4. Compile time variables (prefixed with `$`)\n5. Global constant variables with initializers that are constant expressions.\n6. The result of macros that does not generate code and only uses constant expressions.\n7. The result of a cast if the value is cast to a boolean, floating point or integer type and the value that is converted is a constant expression.\n8. String literals.\n9. Initializer lists containing constant values.\n\nSome things that are *not* constant expressions:\n\n1. Any pointer that isn't the `null` literal, even if it's derived from a constant expression.\n2. The result of a cast except for casts of constant expressions to a numeric type.\n3. Compound literals - even when values are constant expressions.\n\n## Including binary data\n\nThe `$embed(...)` function includes the contents of a file into the compilation as a\nconstant array of bytes:\n\n```c3\nchar[*] my_image = $embed(\"my_image.png\");\n```\n\nThe result of an embed work similar to a string literal and can implicitly convert to a `char*`, \n`void*`, `char[]`, `char[*]` and `String`.\n\n##### Limiting length\n\nIt's possible to limit the length of included with the optional second parameter.\n\n```c3\nchar[4] my_data = $embed(\"foo.txt\", 4);\n```\n\n##### Failure to load at compile time and defaults\n\nUsually it's a compile time error if the file can't be included, but sometimes it's useful to only optionally include it. \nIf this is desired, declare the left hand side an [Optional](/language-common/optionals-essential/#what-is-an-optional):\n\n```c3\nchar[]! my_image = $embed(\"my_image.png\");\n```\n\n`my_image` with be an optional `IoError.FILE_NOT_FOUND?` if the image is missing.\n\nThis also allows us to pass a [default value using `??`](/language-common/optionals-advanced/#return-a-default-value-if-optional-is-empty):\n```c3\nchar[] my_image = $embed(\"my_image.png\") ?? DEFAULT_IMAGE_DATA;\n```";
						const data = {title:"Expressions",description:"Expressions",editUrl:true,head:[],template:"doc",sidebar:{order:42,hidden:false,attrs:{}},pagefind:true,draft:false};
						const _internal = {
							type: 'content',
							filePath: "/home/josh/git/c3_tests/experimental-site-testing-only__local_changes/src/content/docs/Language Fundamentals/expressions.md",
							rawData: undefined,
						};

export { _internal, body, collection, data, id, slug };
