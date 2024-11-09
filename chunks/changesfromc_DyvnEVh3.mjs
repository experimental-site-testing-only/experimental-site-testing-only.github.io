const id = "FAQ/changesfromc.md";
						const collection = "docs";
						const slug = "faq/changesfromc";
						const body = "\n\nAlthough C3 is trying to improve on C, this does not only mean addition of features, but also removal, or breaking changes:\n\n##### No mandatory header files\n\nThere is a C3 interchange header format for declaring interfaces of libraries, but it is only used for special applications.\n\n##### Removal of the old C macro system\n\nThe old C macro system is replaced by a new C3 macro system.\n\n##### Import and modules\n\nC3 uses module imports instead of header includes to link modules together.\n\n##### Member access using `.` even for pointers\n\nThe `->` operator is removed, access uses dot for both direct and pointer access. Note that this is just single access: to access a pointer of a pointer (e.g. `int**`) an explicit dereference would be needed.\n\n##### Different operator precedence\n\nNotably bit operations have higher precedence than +/-, making code like this: `a & b == c` evaluate like `(a & b) == c` instead of C's `a & (b == c)`. See the page about [precedence rules](/language-rules/precedence/).\n\n##### Removal of the const type qualifier\n\nThe const qualifier is only retained for actual constant variables. C3 uses a special type of [post condition](/language-common/contracts/) for functions to indicate that they do not alter in parameters.\n\n```c3\n<*\n This function ensures that foo is not changed in the function.\n @param [in] foo\n @param [out] bar\n*>\nfn void test(Foo* foo, Bar* bar)\n{\n    bar.y = foo.x;\n    // foo.x = foo.x + 1 - compile time error, can't write to 'in' param.\n    // int x = bar.y     - compile time error, can't read from an 'out' param.\n}\n```\n\n*Rationale: const correctness requires littering const across the code base. Although const is useful, it provides weaker guarantees that it appears.*\n\n##### Fixed arrays do not decay and have copy semantics\n\nC3 has three different array types. Variable arrays and slices decay to pointers, but fixed arrays are value objects and do not decay.\n\n```c3\nint[3] a = { 1, 2, 3 };\nint[4]* b = &a; // No conversion\nint* c = a; // ERROR\nint* d = &a; // Valid implicit conversion\nint* e = b; // Valid implicit conversion\nint[3] f = a; // Copy by value!\n```\n\n##### Removal of multiple declaration syntax with initialization\n\nOnly a single declaration with initialization is allowed per statement in C3:\n\n```c3\nint i, j = 1; // ERROR\nint a = 1;    // Ok\nint b, c;     // Ok\n```\n\nIn conditionals, a special form of multiple declarations are allowed but each must then provide its type:\n\n```c3\nfor (int i = 0, int j = 1; i < 10; i++, j++) { ... }\n```\n\n##### Integer promotions rules and safe signed-unsigned comparisons\n\nPromotion rules for integer types are different from C. \nC3 allows implicit widening only\nwhere there is only a single way to widen the expression. To explain the latter:\ntake the case of `long x = int_val_1 + int_val_2`. In C this would widen the result of the addition:\n`long x = (long)(int_val_1 + int_val_2)`, but there is another possible \nway to widen: `long x = (long)int_val_1 + (long)int_val_2`. so in this case, the widening\nis disallowed. However, `long x = int_val_1` is unambiguous, so C3 permits it just like C (read more on the [conversion page](/language-rules/conversion/). \n\nC3 also adds *safe signed-unsigned comparisons*: this means that comparing signed and unsigned values will always yield the correct result:\n\n```c3\n// The code below would print \"Hello C3!\" in C3 and \"Hello C!\" in C.\nint i = -1;\nuint j = 1;\nif (i < j)\n{\n    printf(\"Hello C3!\\n\");\n}\nelse\n{\n    printf(\"Hello C!\\n\");\n}\n```\n\n##### Goto removed\n\n`goto` is removed and replaced with labelled `break` and `continue` together with the `nextcase` statement that allows you to jump between cases in a `switch` statement.\n\n*Rationale: It is very difficult to make goto work well with defer and implicit unwrapping of optional results. It is not just making the compiler harder to write, but\nthe code is harder to understand as well. The replacements together with `defer` cover many if not all usages of `goto` in regular code.*\n\n##### Implicit break in switches\n\nEmpty `case` statements have implicit fall through in C3, otherwise the `nextcase` statement is needed\n`nextcase` can also be used to jump to any other case statement in the switch.\n\n```c3\nswitch (h)\n{\n    case 1:\n        a = 1;\n        nextcase; // Fall through\n    case 2:\n        b = 123;\n    case 3:\n        a = 2;\n        nextcase 2; // Jump to case 2\n    default:\n        a = 111;\n}\n```\n\n##### Locals variables are implicitly zeroed\n\nIn C global variables are implicitly zeroed out, but local variables aren't. \nIn C3 local variables are zeroed out by default, but may be *explicitly* undefined \n(using the `@noinit` attribute) if you wish to match the C behaviour.\n\n###### Rationale for this change \n- In the \"zero-is-initialization\" paradigm, zeroing variables, in particular structs, \nis very common. By offering zero initialization by default this **avoids a whole class of vulnerabilities**.\n- Another alternative that was considered for C3 was mandatory initialization,\nbut this adds a lot of extra boilerplate. \n- C3 also offers a way to opt out of zero-initialization, so the change comes at no performance loss.\n\n##### Compound literal syntax changed\n\n```c\n// C style:\ncall_foo((Foo) { 1, 2, 3 });\n\n// C++ style (1):\ncall_foo(Foo(1, 2, 3));\n\n// C++ style (2):\ncall_foo(Foo { 1, 2, 3 });\n\n// C3:\ncall_foo(Foo { 1, 2, 3 } );\n\n// C3 with inference:\ncall_foo({ 1, 2, 3 });\n```\n\n##### Bitfields replaced by bitstructs\n\nBitfields are replaced by bitstructs that have a well-defined encapsulating type, and \nan exact bit layout.\n\n```c\n// C\nstruct Foo\n{\n    int a : 3;\n    unsigned b : 4;\n    MyEnum c : 7;\n};\n\nstruct Flags\n{\n    bool has_hyperdrive : 1;\n    bool has_tractorbeam : 1;\n    bool has_plasmatorpedoes : 1;\n}    \n\n// C3\nbitstruct Foo : short\n{  \n    int a : 0..2;\n    uint b : 3..6;\n    MyEnum c : 7..13;\n}\n\n// Simple form, only allowed when all fields are bools.\nstruct Flags : char\n{\n    bool has_hyperdrive;\n    bool has_tractorbeam;\n    bool has_plasmatorpedoes;\n}\n```\n\n##### Evaluation order is well-defined\n\nEvaluation order is left-to-right, and in assignment expressions, assignment\nhappens after expression evaluation.\n\n##### Signed overflow is well-defined\n\nSigned integer overflow always wraps using 2s complement. It is never undefined behaviour.\n\n##### Octal removed\n\nThe old `0777` octal syntax is removed and replaced by a `0o` prefix, e.g. `0o777`. Strings do not support octal sequences aside\nfrom `'\\0'`.";
						const data = {title:"Changes From C",description:"Changes From C",editUrl:true,head:[],template:"doc",sidebar:{order:702,hidden:false,attrs:{}},pagefind:true,draft:false};
						const _internal = {
							type: 'content',
							filePath: "/home/josh/git/c3_tests/experimental-site-testing-only__local_changes/src/content/docs/FAQ/changesfromc.md",
							rawData: undefined,
						};

export { _internal, body, collection, data, id, slug };
