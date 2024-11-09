const id = "Language Common/attributes.md";
						const collection = "docs";
						const slug = "language-common/attributes";
						const body = "\nAttributes are compile-time annotations on functions, types, global constants and variables. Similar to Java annotations, a decoration may also take arguments. A attribute can also represent a bundle of attributes.\n\n## Built in attributes\n\n### @adhoc \n\n*Used for: type parameterized generic modules*\n\nNormally a parameterized generic module needs to be defined before it is used like:\n```c3\nmodule my_lib(<Type>);\n\nstruct MyType\n{\n\t  Type value;\n}\n\nmodule my_code;\n\n// Definition here\ndef MyType(<int>) = MyTypeInt; \n\nfn void main()\n{\n    MyType(<int>) x;\n}\n```\n\nA type with `@adhoc` can be declared parameterized, without any warning being issued, for example:\n\n```c3\nmodule my_lib(<Type>);\n\nstruct MyType @adhoc\n{\n\t  Type value;\n}\n\nmodule my_code;\n\nfn void main()\n{\n    MyType(<int>) x;\n}\n```\n\n### @align(alignment) \n\n*Used for: struct, bitstructs, union, var, function*\n\nThis attribute sets the minimum alignment for a field or a variable, for example:\n\n```c3\nstruct Foo @align(32)\n{\n    int a;\n    int b @align(16);\n}\n```\n\n### @benchmark\n\n*Used for: function*\n\nMarks the function as a benchmark function. Will be added to the list of benchmark functions when the benchmarks are run,\notherwise the function will not be included in the compilation.\n\n### @bigendian\n\n*Used for: bitstruct*\n\nLays out the bits as if the data was stored in a big endian type, regardless of host system endianness.\n\n### @builtin\n\n*Used for: function, macro, global, const*\n\nAllows a macro, function, global or constant be used from another module without the module path prefixed.\nShould be used sparingly.\n\n### @callc\n\n*Used for: function*\n\nSets the call convention, which may be ignored if the convention is not supported on the target.\nValid arguments are `veccall`, `ccall`, `stdcall`.\n\n### @deprecated\n\n*Used for: types, function, macro, global, const, member*\n\nMarks the particular type, global, const or member as deprecated, making use trigger a warning.\n\n### @export\n\n*Used for: function, global, const, enum, union, struct, fault*\n\nMarks this declaration as an export, this ensures it is never removed and exposes it as public when linking.\nThe attribute takes an optional string value, which is the external name. This acts as if `@extern` had been\nadded with that name.\n\n### @extern\n\n*Used for: function, global, const, enum, union, struct, fault*\n\nSets the external (linkage) name of this declaration.\n\n### @finalizer\n\n*Used for: function*\n\nMake this function run at shutdown. See `@init` for the optional priority. Note that running a\nfinalizer is a \"best effort\" attempt by the OS. During abnormal termination it is not guaranteed to run.\n\nThe function must be a void function taking no arguments.\n\n### @if\n\n*Used for: all declarations*\n\nConditionally includes the declaration in the compilation. It takes a constant compile time value argument, if this\nvalue is `true` then the declaration is retained, on false it is removed.\n\n### @init\n\n*Used for: function*\n\nMake this function run at startup before main. It has an optional priority 1 - 65535, with lower\nbeing executed earlier. It is not recommended to use values less than 128 as they are generally\nreserved and using them may interfere with standard program initialization.\n\nThe function must be a void function taking no arguments.\n\n### @inline\n\n*Used for: function, call*\n\nDeclares a function to always be inlined or if placed on a call, that the call should be inlined.\n\n### @littleendian \n\n*Used for: bitstruct*\n\nLays out the bits as if the data was stored in a little endian type, regardless of host system endianness.\n\n### @local\n\n*Used for: any declaration*\n\nSets the visibility to \"local\", which means it's only visible in the current module section.\n\n### @maydiscard\n\n*Used for: function, macro*\n\nAllows the return value of the function or macro to be discarded even if it is an optional. Should be\nused sparingly.\n\n### @naked\n\n*Used for: function*\n\nThis attribute disables prologue / epilogue emission for the function.\n\n### @nodiscard\n\n*Used for: function, macro*\n\nThe return value may not be discarded.\n\n### @noinit\n\n*Used for: global, local variable*\n\nPrevents the compiler from zero initializing the variable.\n\n### @norecurse\n\n*Used for: import <module_name> @norecurse*\n\nImport the module but not sub-modules or parent-modules, see [Modules Section](/language-fundamentals/modules/#non-recursive-imports).\n\n### @noreturn\n\n*Used for: function*\n\nDeclares that the function will never return.\n\n### @nostrip\n\n*Used for: any declaration*\n\nThis causes the declaration never to be stripped from the executable, even if it's not used. This\nalso transitively applies to any dependencies the declaration might have.\n\n### @obfuscate\n\n*Used for: any declaration*\n\nRemoves any string values that would identify the declaration in some way. Mostly this is used\non faults and enums to remove the stored names.\n\n### @operator\n\n*Used for: method, macro method*\n\nThis attribute has arguments `[]` `[]=` `&[]` and `len` allowing [operator overloading](/generic-programming/operator-overloading/) for `[]` and `foreach`.\nBy implementing `[]` and `len`, `foreach` and `foreach_r` is enabled. In order to do `foreach` by reference,\n`&[]` must be implemented as well.\n\n### @overlap\n\n*Used for: bitstruct*\n\nAllows bitstruct fields to have overlapping bit ranges.\n\n### @packed\n\n*Used for: struct, union*\n\nCauses all members to be packed as if they had alignment 1. The alignment of the struct/union is set to 1.\nThis alignment can be overridden with `@align`.\n\n### @private\n\n*Used for: any declaration*\n\nSets the visibility to \"private\", which means it is visible in the same module, but not from other modules.\n\n### @pure\n\n*Used for: call*\n\nUsed to annotate a non pure function as \"pure\" when checking for conformance to `@pure` on \nfunctions.\n\n### @packed\n\n*Used for: struct, union, enum*\n\nIf used on a struct or enum: packs the type, including any components to minimum size. On an enum, it uses the smallest representation containing all its values.\n\n### @reflect\n\n*Used for: any declaration*\n\nAdds additional reflection information. Has no effect currently.\n\n### @section(name)\n\n*Used for: function, const, global*\n\nDeclares that a global variable or function should appear in a specific section.\n\n### @test\n\n*Used for: function*\n\nMarks the function as a test function. Will be added to the list of test functions when the tests are run,\notherwise the function will not be included in the compilation.\n\n### @unused\n\n*Used for: any declaration*\n\nMarks the declaration as possibly unused (but should not emit a warning).\n\n### @used\n\n*Used for: any declaration*\n\nMarks a parameter, value etc. as must being used.\n\n### @weak\n\n*Used for: function, const, global*\n\nEmits a weak symbol rather than a global.\n\n## User defined attributes\n\nUser defined attributes are intended for conditional application of built-in attributes.\n \n```c3\ndef @MyAttribute = { @noreturn @inline };\n\n// The following two are equivalent:\nfn void foo() @MyAttribute { ... }\nfn void foo() @noreturn @inline { ... }\n```\n\nA user defined attribute may also be completely empty:\n\n```\ndef @MyAttributeEmpty = {};\n```\n";
						const data = {title:"Attributes",description:"Attributes",editUrl:true,head:[],template:"doc",sidebar:{order:67,hidden:false,attrs:{}},pagefind:true,draft:false};
						const _internal = {
							type: 'content',
							filePath: "/home/josh/git/c3_tests/experimental-site-testing-only__local_changes/src/content/docs/Language Common/attributes.md",
							rawData: undefined,
						};

export { _internal, body, collection, data, id, slug };
