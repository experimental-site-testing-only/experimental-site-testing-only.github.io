const id = "Language Overview/primer.md";
						const collection = "docs";
						const slug = "language-overview/primer";
						const body = "\n## Overview\nThis is intended for existing C programmers.\n\nThis primer is intended as a guide to how the C syntax –\nand in some cases C semantics – is different in C3. It is intended to help you take a piece of C code and understand\nhow it can be converted manually to C3.\n\n## Struct, Enum And Union Declarations\n\nDon't add a `;` after enum, struct and union declarations, and note the slightly\ndifferent syntax for declaring a named struct inside of a struct.\n\n```c\n// C\ntypedef struct\n{\n    int a;\n    struct\n    {\n        double x;\n    } bar;\n} Foo;\n\n// C3\nstruct Foo\n{\n    int a;\n    struct bar\n    {\n        double x;\n    }\n}\n```\n\nAlso, user defined types are used without a `struct`, `union` or `enum` keyword, as\nif the name was a C typedef.\n\n## Arrays\n\nArray sizes are written next to the type and arrays do not decay to pointers,\nyou need to do it manually:\n\n```c\n// C\nint x[2] = { 1, 2 };\nint *y = x;\n\n// C3\nint[2] x = { 1, 2 };\nint* y = &x;\n```\n\nYou will probably prefer slices to pointers when passing data around:\n\n```c\n// C\nint x[100] = ...;\nint y[30] = ...;\nint z[15] = ...;\nsort_my_array(x, 100);\nsort_my_array(y, 30);\n// Sort part of the array!\nsort_my_array(z + 1, 10);\n\n// C3\nint[100] x = ...;\nint[30] y = ...;\nsort_my_array(&x); // Implicit conversion from int[100]* -> int[]\nsort_my_array(&y); // Implicit conversion from int[30]* -> int[]\nsort_my_array(z[1..10]); // Inclusive ranges!\n```\n\nNote that declaring an array of inferred size will look different in C3:\n\n```c\n// C\nint x[] = { 1, 2, 3 }; // x is int[3]\n\n// C3\nint[*] x = { 1, 2, 3 }; // x is int[3]\n```\n\nArrays are trivially copyable:\n\n```c\n// C\nint x[3] = ...;\nint y[3];\nfor (int i = 0; i < 3; i++) y[i] = x[i];\n\n// C3\nint[3] x = ...;\nint[3] y = x;\n```\n\nFind out more about [arrays](/language-common/arrays/).\n\n## Undefined Behaviour\n\nC3 has less undefined behaviour, in particular integers are defined as using 2s\ncomplement and signed overflow is wrapping. Find out more about [undefined behaviour](/language-rules/undefined-behaviour/).\n\n## Functions\n\nFunctions are declared like C, but you need to put `fn` in front:\n\n```c\n// C:\nint foo(Foo *b, int x, void *z) { ... }\n\n// C3\nfn int foo(Foo* b, int x, void* z) { ... }\n```\n\nFind out more more about [functions](/language-fundamentals/functions/), including named arguments and default arguments.\n\n## Calling C Functions\n\nDeclare a function (or variable) with `extern` and it will be possible to\naccess it from C3:\n\n```c3\n// To access puts:\nextern fn int puts(char*);\n...\nputs(\"Hello world\");\n```\n\nNote that currently only the C standard library is automatically passed to the linker.\nIn order to link with other libraries, you need to explicitly tell\nthe compiler to link them.\n\nIf you want to use a different identifier inside of your C3 code compared to\nthe function or variable's external name, use the `@extern` attribute:\n\n```c3\nextern fn int _puts(char* message) @extern(\"puts\");\n...\n_puts(\"Hello world\"); // <- calls the puts function in libc\n```\n\n## Identifiers\n\nName standards are enforced:\n\n```c3\n// Starting with uppercase and followed somewhere by at least\n// one lower case is a user defined type:\nFoo x;\nM____y y;\n\n// Starting with lowercase is a variable or a function or a member name:\n\nx.myval = 1;\nint z = 123;\nfn void fooBar(int x) { ... }\n\n// Only upper case is a constant or an enum value:\n\nconst int FOOBAR = 123;\nenum Test\n{\n    STATE_A,\n    STATE_B\n}\n```\n\n## Variable Declaration\n\nMultiple declarations together with initialization isn't allowed in C3:\n\n```c\n// C\nint a, b = 4; // Not allowed in C3\n\n// C3\nint a;\nint b = 4;\n```\n\nIn C3, variables are always zero initialized, unless you explicitly opt out using `@noinit`:\n\n```c\n// C\nint a = 0;\nint b;\n\n// C3\nint a;\nint b @noinit;\n```\n\n## `typedef` and `#define` becomes `alias`\n\n`typedef` is replaced by `alias`:\n\n```c\n// C\ntypedef Foo* FooPtr;\n\n// C3\nalias FooPtr = Foo*;\n```\n\n`alias` also allows you to do things that C uses `#define` for:\n\n```c\n// C\n#define println puts\n#define my_excellent_string my_string\n\nchar *my_string = \"Party on\";\n...\nprintln(my_excellent_string);\n\n// C3\nalias println = puts;\nalias my_excellent_string = my_string;\n\nchar* my_string = \"Party on\";\n...\nprintln(my_excellent_string);\n```\n\nFind out more about [`alias`](/language-common/alias/).\n\n## Basic Types\n\nSeveral C types that would be variable sized are fixed size, and others changed names:\n\n```c\n// C\nint16_t a;\nint32_t b;\nint64_t c;\nuint64_t d;\nsize_t e;\nssize_t f;\nptrdiff_t g;\nintptr_t h;\n\n// C3\nshort a;    // Guaranteed 16 bits\nint b;      // Guaranteed 32 bits\nlong c;     // Guaranteed 64 bits\nulong d;    // Guaranteed 64 bits\nint128 e;   // Guaranteed 128 bits\nuint128 f;  // Guaranteed 128 bits\nusz g;      // Same as C size_t, depends on target\nisz h;      // Same as C ptrdiff_t\niptr i;     // Same as intptr_t depends on target\nuptr j;     // Same as uintptr_t depends on target\n```\n\nFind out more about [types](/language-overview/types/).\n\n## Modules And Import Instead Of `#include`\n\nDeclaring the module name is not mandatory, but if you leave it out the file name will be used\nas the module name. Imports are recursive.\n\n```c3\nmodule otherlib::foo;\n\nfn void test() { ... }\nstruct FooStruct { ... }\n\nmodule mylib::bar;\nimport otherlib;\nfn void myCheck()\n{\n    foo::test(); // foo prefix is mandatory.\n    mylib::foo::test(); // This also works;\n    FooStruct x; // But user defined types don't need the prefix.\n    otherlib::foo::FooStruct y; // But it is allowed.\n}\n```\n\n## Comments\n\nThe `/* */` comments are nesting\n\n```text\n/* This /* will all */ be commented out */\n```\n\nNote that doc contracts starting with `<*` and ending with `*>`, have special rules for parsing them, and are\n_not_ considered a regular comment. Find out more about [contracts](/language-common/contracts/).\n\n## Type Qualifiers\n\nQualifiers like `const` and `volatile` are removed, but `const` before a constant\nwill make it treated as a compile time constant. The constant does not need to be typed.\n\n```c3\nconst A = false;\n// Compile time\n$if A:\n  // This will not be compiled\n$else\n  // This will be compiled\n$endif\n```\n\n`volatile` is replaced by macros for volatile load and store.\n\n## `goto` Removed\n\n`goto` is removed, but there is labelled `break` and `continue` as well as `defer`\nto handle the cases when it is commonly used in C.\n\n```c\n// C\nFoo *foo = malloc(sizeof(Foo));\n\nif (tryFoo(foo)) goto FAIL;\nif (modifyFoo(foo)) goto FAIL;\n\nfree(foo);\nreturn true;\n\nFAIL:\nfree(foo);\nreturn false;\n```\n\n```c3\n// C3, direct translation:\ndo FAIL:\n{\n    Foo* foo = malloc(sizeof(Foo));\n\n    if (tryFoo(foo)) break FAIL;\n    if (modifyFoo(foo)) break FAIL;\n\n    free(foo);\n    return true;\n}\nfree(foo);\nreturn false;\n\n// C3, using defer:\nFoo* foo = malloc(Foo);\ndefer free(foo);\n\nif (tryFoo(foo)) return false;\nif (modifyFoo(foo)) return false;\n\nreturn true;\n```\n\n## Changes To `switch`\n\n- `case` statements automatically break.\n- Use `nextcase` to fallthrough to the next statement.\n- Empty `case` statements have implicit fallthrough.\n\nFor example:\n\n```c\n// C\nswitch (a)\n{\n    case 1:       // Implicit fall-through\n    case 2:\n        doOne();\n        break;    // Explicit break\n    case 3:\n        i = 0;    // Implicit fall-through\n    case 4:\n        doFour();\n        break;    // Explicit break\n    case 5:\n        doFive(); // Implicit fall-through\n    default:\n        return false;\n}\n\n// C3\nswitch (a)\n{\n    case 1:       // Empty case implicit fall-through\n    case 2:\n        doOne();  // Automatic break\n    case 3:\n        i = 0;\n        nextcase; // Explicit fall-through\n    case 4:\n        doFour(); // Automatic break\n    case 5:\n        doFive();\n        nextcase; // Explicit fall-through\n    default:\n        return false;\n}\n```\n\nWe can jump to an arbitrary switch-case label in C3:\n\n```c3\n// C\nswitch (a)\n{\n    case 1:\n        doOne();\n        goto LABEL3;\n    case 2:\n        doTwo();\n        break;\n    case 3:\n    LABEL3:\n        doThree();\n    default:\n        return false;\n}\n\n// C3\nswitch (a)\n{\n    case 1:\n        doOne();\n        nextcase 3;\n    case 2:\n        doTwo();\n    case 3:\n        doThree();\n        nextcase;\n    default:\n        return false;\n}\n```\n\n## Bitfields Are Replaced By Explicit Bitstructs\n\nA bitstruct has an explicit container type, and each field has an exact bit range.\n\n```c3\nbitstruct Foo : short\n{\n    int a : 0..2; // Exact bit ranges, bits 0-2\n    uint b : 3..6;\n    MyEnum c : 7..13;\n}\n```\n\nThere exists a simplified form for a bitstruct containing only booleans,\nit is the same except the ranges are left out:\n\n```c3\nstruct Flags : char\n{\n    bool has_hyperdrive;\n    bool has_tractorbeam;\n    bool has_plasmatorpedoes;\n}\n```\n\nFor more information see [the section on bitstructs](/language-overview/types//#bitstructs).\n\n## Other Changes\n\nThe following things are enhancements to C, that don't have an equivalent in C.\n\n- [Defer](/language-common/defer/)\n- [Methods](/language-fundamentals/functions/#methods)\n- [Optionals](/language-common/optionals-essential/#what-is-an-optional)\n- [Semantic macros](/generic-programming/macros/)\n- [Generic modules](/generic-programming/generics/)\n- [Contracts](/language-common/contracts/)\n- [Compile time evaluation](/generic-programming/compiletime/)\n- [Reflection](/generic-programming/reflection/)\n- [Operator overloading](/generic-programming/operator-overloading/)\n- [Macro methods](/generic-programming/macros/#macro-methods)\n- [Static initialize and finalize functions](/language-fundamentals/functions/#static-initializer-and-finalizers)\n- [Dynamic interfaces](/generic-programming/anyinterfaces/)\n\n**For the full list of all new features** see the [feature list](/faq/allfeatures/).\n\nFinally, the [FAQ](/faq/) answers many questions you might have as you start out.\n";
						const data = {title:"C3 For C Programmers",description:"A quick primer on C3 for C programmers",editUrl:true,head:[],template:"doc",sidebar:{order:36,hidden:false,attrs:{}},pagefind:true,draft:false};
						const _internal = {
							type: 'content',
							filePath: "/home/josh/git/c3_tests/experimental-site-testing-only__local_changes/src/content/docs/Language Overview/primer.md",
							rawData: undefined,
						};

export { _internal, body, collection, data, id, slug };
