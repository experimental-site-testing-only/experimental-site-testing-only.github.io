const id = "Language Fundamentals/functions.md";
						const collection = "docs";
						const slug = "language-fundamentals/functions";
						const body = "\nC3 has both regular functions and member functions. Member functions are functions namespaced using type names, and allows invocations using the dot syntax.\n\n## Regular functions\n\nRegular functions are the same as C aside from the keyword `fn`, which is followed by the conventional C declaration of `<return type> <name>(<parameter list>)`.\n\n```c3\nfn void test(int times)\n{\n    for (int i = 0; i < times; i++)\n    {\n        io::printfn(\"Hello %d\", i);\n    }\n}\n```\n\n### Function arguments\n\nC3 allows use of default arguments as well as named arguments. Note that\nany unnamed arguments must appear before any named arguments.\n\n```c3\nfn int test_with_default(int foo = 1)\n{\n    return foo;\n}\n\nfn void test()\n{\n    test_with_default();\n    test_with_default(100);\n}\n```\n\nNamed arguments\n\n```c3\nfn void test_named(int times, double data)\n{\n    for (int i = 0; i < times; i++)\n    {\n        io::printf(\"Hello %d\\n\", i + data);\n    }\n}\n\nfn void test()\n{\n    // Named only\n    test_named(times: 1, data: 3.0);\n\n    // Unnamed only\n    test_named(3, 4.0);\n\n    // Mixing named and unnamed        \n    test_named(15, data: 3.141592);\n}\n```\n\nNamed arguments with defaults:\n\n```c3\nfn void test_named_default(int times = 1, double data = 3.0, bool dummy = false)\n{\n    for (int i = 0; i < times; i++)\n    {\n        io::printfn(\"Hello %f\", i + data);\n    }\n}\n\nfn void test()\n{\n    // Named only\n    test_named_default(times: 10, data: 3.5);\n\n    // Unnamed and named\n    test_named_default(3, dummy: false);\n\n    // Overwriting an unnamed argument with a named argument is an error:\n    // test_named_default(2, times: 3); ERROR!\n    \n    // Unnamed may not follow named arguments.\n    // test_named_default(times: 3, 4.0); ERROR!\n}\n```\n\n#### Varargs\n\nThere are four types of varargs: \n\n1. single typed\n2. explicitly typed any: pass non-any arguments as references\n3. implicitly typed any: arguments are implicitly converted to references (use with care)\n4. untyped C-style\n\nExamples:\n\n```c3\nfn void va_singletyped(int... args)\n{\n    /* args has type int[] */\n}\n\nfn void va_variants_explicit(any*... args)\n{\n    /* args has type any*[] */\n}\n\nfn void va_variants_implicit(args...)\n{\n    /* args has type any*[] */\n}\n\nextern fn void va_untyped(...); // only used for extern C functions\n\nfn void test()\n{\n    va_singletyped(1, 2, 3);\n    \n    int x = 1;\n    any* v = &x;\n    va_variants_explicit(&&1, &x, v); // pass references for non-any arguments\n    \n    va_variants_implicit(1, x, \"foo\"); // arguments are implicitly converted to anys\n    \n    va_untyped(1, x, \"foo\"); // extern C-function\n}\n```\n\nFor typed varargs, we can pass a slice instead of the individual arguments, by using the splat `...` operator for example:\n\n```c3\nfn void test_splat()\n{\n   int[] x = { 1, 2, 3 };\n   va_singletyped(...x);\n}   \n```\n### Splat\n\n- Splat `...` unknown size slice ONLY in a typed vaarg slot.\n\n```c3\nfn void va_singletyped(int... args) { \n    io::printfn(\"%s\", args); \n}\nfn void main() \n{\n    int[2] arr = {1, 2};\n    va_singletyped(...arr); // arr is splatting two arguments\n}\n```\n\n- Splat `...` any array anywhere\n\n```c3\nfn void foo(int a, int b, int c) \n{ \n    io::printfn(\"%s, %s, %s\", a, b, c); \n}\nfn void main() \n{\n    int[2] arr = {1, 2};\n    foo(...arr, 7); // arr is splatting two arguments\n}\n```\n\n\n- Splat `...` known size slices anywhere\n\n```c3\nfn void foo(int a, int b, int c) \n{ \n    io::printfn(\"%s, %s, %s\", a, b, c); \n}\nfn void main() \n{\n    int[5] arr = {1, 2, 3, 4, 5};\n    foo(...arr[:3]); // slice is splatting three arguments\n}\n```\n\n\n\n### Named arguments and varargs\n\nUsually, a parameter after varargs would never be assigned to:  \n\n```c3\nfn void testme(int a, double... x, double rate = 1.0) { /* ... */ }\n\nfn void test()\n{\n    // x is { 2.0, 5.0, 6.0 } rate would be 1.0\n    testme(3, 2.0, 5.0, 6.0); \n}\n```\n\nHowever, named arguments can be used to set this value:\n\n```c3\nfn void testme(int a, double... x, double rate = 1.0) { /* ... */ }\n\nfn void test()\n{\n    // x is { 2.0, 5.0 } rate would be 6.0\n    testme(3, 2.0, 5.0, .rate = 6.0);\n}\n```\n\n### Functions and Optional returns\n\nFunction return values may be *Optionals* – denoted by `<type>!` indicating that this \nfunction might either return an Optional with a result, or an Optional with an Excuse.\n\nFor example this function might return an Excuse of type `SomeError` or `OtherResult`.\n\n```c3\nfn double! test_error()\n{\n    double val = random_value();\n    if (val >= 0.2) return SomeError.BAD_JOSS_ERROR?;\n    if (val > 0.5) return OtherError.BAD_LUCK_ERROR?;\n    return val;\n}\n```\n\n*A function call* which is passed one or more *Optional* arguments will only execute \nif all Optional values contain a *result*, otherwise the first Excuse found is returned.\n\n```c3\nfn void test()\n{\n    // The following line is either prints a value less than 0.2\n    // or does not print at all:\n    io::printfn(\"%d\", test_error());\n    \n    // ?? sets a default value if an Excuse is found\n    double x = (test_error() + test_error()) ?? 100;  \n    \n    // This prints either a value less than 0.4 or 100:\n    io::printfn(\"%d\", x);\n}\n```\n\nThis allows us to chain functions:\n\n```c3\nfn void print_input_with_explicit_checks()\n{\n    String! line = io::readline();\n    if (try line)\n    {\n        // line is a regular \"string\" here.\n        int! val = line.to_int();\n        if (try val)\n        {\n            io::printfn(\"You typed the number %d\", val);\n            return;\n        }\n    }\n    io::printn(\"You didn't type an integer :/ \");\n}\n\nfn void print_input_with_chaining()\n{\n    if (try int val = io::readline().to_int())\n    {\n        io::printfn(\"You typed the number %d\", val);\n        return;\n    }\n    io::printn(\"You didn't type an integer :/ \");\n}\n```\n\n## Methods\n\nMethods look exactly like functions, but are prefixed with the type name and is (usually) \ninvoked using dot syntax:\n\n```c3\nstruct Point\n{\n    int x;\n    int y;\n}\n\nfn void Point.add(Point* p, int x) \n{\n    p.x += x;\n}\n\nfn void example() \n{\n    Point p = { 1, 2 };\n    \n    // with struct-functions\n    p.add(10);\n    \n    // Also callable as:\n    Point.add(&p, 10);\n}\n```\n\nThe target object may be passed by value or by pointer:\n\n```c3\nenum State\n{\n    STOPPED,\n    RUNNING\n}\n\nfn bool State.may_open(State state) \n{\n    switch (state)\n    {\n        case STOPPED: return true;\n        case RUNNING: return false;\n    }\n}\n```\n\n### Implicit first parameters\n\nBecause the type of the first argument is known, it may be left out. To indicate a pointer `&` is used.\n\n```c3\nfn int Foo.test(&self) { /* ... */ }\n// equivalent to\nfn int Foo.test(Foo* self) { /* ... */ }\nfn int Bar.test(self) { /* ... */ }\n// equivalent to\nfn int Bar.test(Bar self) { /* ... */ }\n```\n\nIt is customary to use `self` as the name of the first parameter, but it is not required.\n    \n### Restrictions on methods\n\n- Methods on a struct/union may not have the same name as a member.\n- Methods only works on distinct, struct, union and enum types.\n- When taking a function pointer of a method, use the full name.\n- Using subtypes, overlapping function names will be shadowed.\n\n## Contracts\n\nC3's error handling is not intended to use errors to signal invalid data or to check invariants and post conditions. Instead C3's approach is to add annotations to the function, that conditionally will be compiled into asserts.\n\nAs an example, the following code:\n\n```c3\n<*\n @param foo `the number of foos`\n @require foo > 0, foo < 1000\n @return `number of foos x 10`\n @ensure return < 10000, return > 0\n*>\nfn int test_foo(int foo)\n{\n    return foo * 10;\n}\n```\n\nWill in debug builds be compiled into something like this:\n\n```c3\nfn int test_foo(int foo)\n{\n    assert(foo > 0);\n    assert(foo < 1000);\n    int _return = foo * 10;\n    assert(_return < 10000);\n    assert(_return > 0);\n    return _return;\n}\n```\n\nThe compiler is allowed to use the contracts for optimizations. For example this:\n\n\n```c3\nfn int test_example(int bar)\n{\n    // The following is always invalid due to the `@ensure`\n    if (test_foo(bar) == 0) return -1;\n    return 1;\n}\n```\n\nMay be optimized to:\n\n```c3\nfn int test_example(int bar)\n{\n    return 1;\n}\n```\n\nIn this case the compiler can look at the post condition of `result > 0` to determine that `testFoo(foo) == 0` must always be false.\n\nLooking closely at this code, we not that nothing guarantees that `bar` is not violating the preconditions. In Safe builds this will usually be checked in runtime, but a sufficiently smart compiler will warn about the lack of checks on `bar`. Execution of code violating pre and post conditions has unspecified behaviour.\n\n## Short function declaration syntax\n\nFor very short functions, C3 offers a \"short declaration\" syntax using `=>`:\n\n```c3\n// Regular\nfn int square(int x)\n{\n    return x * x;\n}\n// Short\nfn int square_short(int x) => x * x;\n```\n\n## Lambdas\n\nIt's possible to create anonymous functions using the regular `fn` syntax. Anonymous \nfunctions are identical to regular functions and do not capture variables from the \nsurrounding scope:\n\n```c3\ndef IntTransform = fn int(int);\nfn void apply(int[] arr, IntTransform t)\n{\n    foreach (&i : arr) *i = t(*i);\n}\nfn void main()\n{\n    int[] x = { 1, 2, 5 };\n    // Short syntax with inference:\n    apply(x, fn (i) => i * i);\n    // Regular syntax without inference: \n    // apply(x, fn int(int i) { return i * i; });\n    // Prints [1, 4, 25]\n    io::printfn(\"%s\", x);        \n}\n```\n\n## Static initializer and finalizers\n\nIt is sometimes useful to run code at startup and shutdown. Static initializers and finalizers\nare regular functions annotated with `@init` and `@finalizer` that are run at startup and shutdown respectively:\n\n```c3\nfn void run_at_startup() @init\n{\n    // Run at startup\n    some_function.init(512);\n} \n\nfn void run_at_shutdown() @finalizer\n{\n    some_thing.shutdown();\n}\n```\n\nNote that invoking `@finalizer` is a best effort attempt by the OS and may not\nbe called during abnormal shutdown.\n\n### Changing priority of static initializers and finalizers\n\nIt is possible to provide an argument to the attributes to set the actual priority. It is recommended\nthat programs use a priority of 1024 or higher. The higher the value, the later it\nwill be called. The lowest priority is 65535.\n\n```c3\n// Print \"Hello World\" at startup.\n\nfn void start_world() @init(3000)\n{\n    io::printn(\"World\");\n}\nfn void start_hello() @init(2000)\n{\n    io::print(\"Hello \");\n}\n```\n";
						const data = {title:"Functions",description:"Functions",editUrl:true,head:[],template:"doc",sidebar:{order:45,hidden:false,attrs:{}},pagefind:true,draft:false};
						const _internal = {
							type: 'content',
							filePath: "/home/josh/git/c3_tests/experimental-site-testing-only__local_changes/src/content/docs/Language Fundamentals/functions.md",
							rawData: undefined,
						};

export { _internal, body, collection, data, id, slug };