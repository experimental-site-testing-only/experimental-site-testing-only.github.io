const id = "Previous Versions/v0_6_8/Generic Programming/generics.md";
						const collection = "docs";
						const slug = "previous-versions/v0_6_8/generic-programming/generics";
						const body = "\nGeneric modules are parameterized modules that allow functionality for arbitrary types.\n\nFor generic modules, the generic parameters follows the module name:\n\n\n\n```c3\n// TypeA, TypeB, TypeC are generic parameters.\nmodule vector(<TypeA, TypeB, TypeC>);\n```\n\nIt is also possible to parameterize by an `int` or `bool` constant, for example:\n```c3\n// module custom_type(<Type, VALUE>)  \nmodule custom_type(<float, 3>);\n```\n\n\nCode inside a generic module may use the generic parameters as if they were well-defined symbols:\n\n```c3\nmodule foo_test(<Type1, Type2>);\n\nstruct Foo \n{\n   Type1 a;\n}\n\nfn Type2 test(Type2 b, Foo* foo) \n{\n   return foo.a + b;\n}\n```\n\nIncluding a generic module works as usual:\n\n```c3\nimport foo_test;\n\ndef FooFloat = Foo(<float, double>);\ndef test_float = foo_test::test(<float, double>);\n\n...\n\nFooFloat f;\nFoo(<int, double>) g;\n\n...\n\ntest_float(1.0, &f);\nfoo_test::test(<int, double>)(1.0, &g);\n```\n\nJust like for macros, optional constraints may be added to improve compile errors:\n\n```c3\n<*\n @require $assignable(1, TypeB) && $assignable(1, TypeC)\n @require $assignable((TypeB)1, TypeA) && $assignable((TypeC)1, TypeA)\n*> \nmodule vector(<TypeA, TypeB, TypeC>);\n\n/* .. code  .. */\n```\n\n```c3\ndef testFunction = vector::testFunc(<Bar, float, int>);\n\n// This would give the error \n// --> Parameter(s) failed validation: \n//     @require \"$assignable((TypeB)1, TypeA) && $assignable((TypeC)1, TypeA)\" violated.\n```\n\n";
						const data = {title:"Generics",description:"Generics",editUrl:true,head:[],template:"doc",sidebar:{order:82,hidden:false,attrs:{}},pagefind:true,draft:false};
						const _internal = {
							type: 'content',
							filePath: "/home/josh/git/c3_tests/experimental-site-testing-only__local_changes/src/content/docs/Previous Versions/v0_6_8/Generic Programming/generics.md",
							rawData: undefined,
						};

export { _internal, body, collection, data, id, slug };
