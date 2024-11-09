const id = "Generic Programming/anyinterfaces.md";
						const collection = "docs";
						const slug = "generic-programming/anyinterfaces";
						const body = "\n## Working with the type of `any` at runtime.\n\nThe `any` type is recommended for writing code that is polymorphic at runtime where macros are not appropriate.\nIt can be thought of as a typed `void*`.\n\nAn `any` can be created by assigning any pointer to it. You can then query the `any` type for the typeid of \nthe enclosed type (the type the pointer points to) using the `type` field.\n\nThis allows switching over the typeid, either using a normal switch:\n\n```c3\nswitch (my_any.type)\n{\n    case Foo.typeid:\n        ...\n    case Bar.typeid:\n        ...\n}\n```\n\nOr the special `any`-version of the switch:\n\n```c3\nswitch (my_any)\n{\n    case Foo:\n        // my_any can be used as if it was Foo* here\n    case Bar:\n        // my_any can be used as if it was Bar* here\n}\n```\n\nSometimes one needs to manually construct an any-pointer, which\nis typically done using the `any_make` function: `any_make(ptr, type)`\nwill create an `any` pointing to `ptr` and with typeid `type`.\n\nSince the runtime `typeid` is available, we can query for any runtime `typeid` property available\nat runtime, for example the size, e.g. `my_any.type.sizeof`. This allows us to do a lot of work\non with the enclosed data without knowing the details of its type.\n\nFor example, this would make a copy of the data and place it in the variable `any_copy`:\n```c3\nvoid* data = malloc(a.type.sizeof);\nmem::copy(data, a.ptr, a.type.sizeof);\nany any_copy = any_make(data, a.type);    \n```\n\n## Variable argument functions with implicit `any`\n\nRegular typed varargs are of a single type, e.g. `fn void abc(int x, double... args)`.\nIn order to take variable functions that are of multiple types, `any` may be used.\nThere are two variants:\n\n### Explicit `any` vararg functions\n\nThis type of function has a format like `fn void vaargfn(int x, any... args)`. Because only\npointers may be passed to an `any`, the arguments must explicitly be pointers (e.g. `vaargfn(2, &b, &&3.0)`).\n\nWhile explicit, this may be somewhat less user-friendly than implicit vararg functions:\n\n### Implicit `any` vararg functions\n\nThe implicit `any` vararg function has instead a format like `fn void vaanyfn(int x, args...)`.\nCalling this function will implicitly cause taking the pointer of the values (so for\nexample in the call `vaanyfn(2, b, 3.0)`, what is actually passed are `&b` and `&&3.0`).\n\nBecause this passes values implicitly by reference, care must be taken *not* to mutate any\nvalues passed in this manner. Doing so would very likely break user expectations.\n\n## Interfaces\n\nMost statically typed object-oriented languages implements extensibility using vtables. In C, and by extension\nC3, this is possible to emulate by passing around structs containing list of function pointers in addition to the data.\n\nWhile this is efficient and often the best solution, but it puts certain assumptions on the code and makes interfaces\nmore challenging to evolve over time.\n\nAs an alternative there are languages (such as Objective-C) which instead use message passing to dynamically typed\nobjects, where the availability of a certain functionality may be queried at runtime.\n\nC3 provides this latter functionality over the `any` type using *interfaces*.\n\n### Defining an interface\n\nThe first step is to define an interface:\n\n```c3\ninterface MyName\n{\n    fn String myname();\n}\n```\n\nWhile `myname` will behave as a method, we declare it without type. Note here that unlike normal methods we leave\nout the first \"self\", argument.\n\n### Implementing the interface\n\nTo declare that a type implements an interface, add it after the type name:\n\n```c3\nstruct Baz (MyName) \n{ \n    int x; \n}\n\n// Note how the first argument differs from the interface.\nfn String Baz.myname(Baz* self) @dynamic \n{ \n    return \"I am Baz!\"; \n}\n```\n\nIf a type declares an interface but does not implement its methods, then that is compile time error.\nA type may implement multiple interfaces, by placing them all inside of `()` e.g. `struct Foo (VeryOptional, MyName) { ... }`\n\nA limitation is that only user-defined types may declare they are implementing interfaces. To make existing types\nimplement interfaces is possible but does not provide compile time checks.\n\nOne of the interfaces available in the standard library is Printable, which contains `to_format` and `to_new_string`.\nIf we implemented it for our struct above it might look like this:\n\n```c3\nfn String Baz.to_new_string(Baz baz, Allocator allocator) @dynamic\n{\n    return string::printf(\"Baz(%d)\", baz.x, allocator: allocator);\n}\n```\n\n### \"@dynamic\" methods\n\nA method must be declared `@dynamic` to implement an interface, but a method may also be declared `@dynamic` *without*\nthe type declaring it implements a particular interface. For example, this allows us to write:\n\n```c3\n// This will make \"int\" satisfy the MyName interface\nfn String int.myname(int*) @dynamic\n{ \n    return \"I am int!\"; \n}\n```\n    \n`@dynamic` methods have their reference retained in the runtime code and can also be searched for at runtime and invoked\nfrom the `any` type.\n\n### Referring to an interface by pointer\n\nAn interface e.g. `MyName` is can be cast back and forth to `any`, but only types which \nimplement the interface completely may implicitly be cast to the interface.\n\nSo for example:\n\n```c3\nBob b = { 1 };\ndouble d = 0.5;\nint i = 3;\nMyName a = &b;          // Valid, Bob implements MyName.\n// MyName c = &d;       // Error, double does not implement MyName.\nMyName c = (MyName)&d;  // Would break at runtime as double doesn't implement MyName\n// MyName z = &i;       // Error, implicit conversion because int doesn't explicitly implement it.\nMyName* z = (MyName)&i; // Explicit conversion works and is safe at runtime if int implements \"myname\"    \n```\n\n### Calling dynamic methods\n\nMethods implementing interfaces are like normal methods, and if called directly, they are just normal function calls. The\ndifference is that they may be invoked through the interface:\n\n```c3\nfn void whoareyou(MyName a)\n{\n    io::printn(a.myname());\n}\n```\n\nIf we have an optional method we should first check that it is implemented:\n\n```c3\nfn void do_something(VeryOptional z)\n{\n    if (&z.do_something)\n    {\n        z.do_something(1, null);\n    }\n}\n```\n\nWe first query if the method exists on the value. If it does we actually run it.\n\nHere is another example, showing how the correct function will be called depending on type, checking\nfor methods on an `any`:\n\n```c3\nfn void whoareyou2(any a)\n{\n    // Query if the function exists\n    if (!&a.myname)\n    {\n        io::printn(\"I don't know who I am.\");\n        return;\n    }\n    // Dynamically call the function\n    io::printn(((MyName)a).myname());\n}\n\nfn void main()\n{\n    int i;\n    double d;\n    Bob bob;\n\n    any a = &i; \n    whoareyou2(a); // Prints \"I am int!\"\n    a = &d;\n    whoareyou2(a); // Prints \"I don't know who I am.\"\n    a = &bob;\n    whoareyou2(a); // Prints \"I am Bob!\"\n}\n```\n\n### Reflection invocation\n*This functionality is not yet implemented and may see syntax changes*\n\nIt is possible to retrieve any `@dynamic` function by name and invoke it:\n\n```c3\ndef VoidMethodFn = fn void(void*);\n\nfn void* int.test_something(&self) @dynamic\n{\n    io::printfn(\"Testing: %d\", *self);\n}\n\nfn void main()\n{\n    int z = 321;\n    any a = &z;\n    VoidMethodFn test_func = a.reflect(\"test_something\");\n    test_func(a); // Will print \"Testing: 321\"\n}\n```\n\nThis feature allows methods to be linked up at runtime.\n\n";
						const data = {title:"Interfaces and Any Type",description:"Interfaces and Any Type",editUrl:true,head:[],template:"doc",sidebar:{order:80,hidden:false,attrs:{}},pagefind:true,draft:false};
						const _internal = {
							type: 'content',
							filePath: "/home/josh/git/c3_tests/experimental-site-testing-only__local_changes/src/content/docs/Generic Programming/anyinterfaces.md",
							rawData: undefined,
						};

export { _internal, body, collection, data, id, slug };