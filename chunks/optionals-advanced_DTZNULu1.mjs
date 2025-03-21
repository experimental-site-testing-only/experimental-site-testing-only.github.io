const id = "Language Common/optionals-advanced.md";
						const collection = "docs";
						const slug = "language-common/optionals-advanced";
						const body = "\n### Optionals are only defined in certain code\n✅ Variable declarations\n```c3\nint? example = unreliable_function();\n```\n✅ Function return signature\n```c3\nfn int? example() { /* ... */ }\n```\n\n## Handling an empty Optional\n\n### File reading example\n- If the file is present the Optional result will be the first 100 bytes of the file.\n- If the file is not present the Optional `Excuse` will be `io::FILE_NOT_FOUND`.\n\nTry running this code below with and without a file called `file_to_open.txt` in the same directory.\n\n```c3\nimport std::io;\n\n<*\n Function modifies 'buffer'\n Returns an Optional with a 'char[]' result\n OR an empty Optional with an Excuse\n*>\nfn char[]? read_file(String filename, char[] buffer)\n{\n    // Return Excuse if opening a file failed, using Rethrow `!`\n    File file = file::open(filename, \"r\")!;\n\n    // At scope exit, close the file.\n    // Discard the Excuse from file.close() with (void) cast\n    defer (void)file.close();\n\n    // Return Excuse if reading failed, using Rethrow `!`\n    file.read(buffer)!;\n    return buffer; // return a buffer result\n}\n\nfn void? test_read()\n{\n    char[] buffer = mem::new_array(char, 100);\n    defer free(buffer); // Free memory on scope exit\n\n    char[]? read_buffer = read_file(\"file_to_open.txt\", buffer);\n    // Catch the empty Optional and assign the Excuse\n    // to `excuse`\n    if (catch excuse = read_buffer)\n    {\n        io::printfn(\"Excuse found: %s\", excuse);\n        // Returning Excuse using the `?` suffix\n        return excuse?;\n    }\n\n    // `read_buffer` behaves like a normal variable here\n    // because the Optional being empty was handled by 'if (catch)'\n    // which automatically unwrapped 'read_buffer' at this point.\n    io::printfn(\"read_buffer: %s\", read_buffer);\n}\n\nfn void main()\n{\n    test_read()!!; // Panic on failure.\n}\n```\n\n### Return a default value if Optional is empty\nThe `??` operator allows us to return a default value if the Optional is empty.\n```c3\nimport std::io;\n\nfn void test_bad()\n{\n    int regular_value;\n    int? optional_value = function_may_error();\n\n    // An empty Optional found in optional_value\n    if (catch optional_value)\n    {\n        // Assign default result when empty.\n        regular_value = -1;\n    }\n\n    // A result was found in optional_value\n    if (try optional_value)\n    {\n        regular_value = optional_value;\n    }\n    io::printfn(\"The value was: %d\", regular_value);\n}\n\nfn void test_good()\n{\n    // Return '-1' when `foo_may_error()` is empty.\n    int regular_value = foo_may_error() ?? -1;\n\n    io::printfn(\"The value was: %d\", regular_value);\n}\n```\n\n#### Modifying the returned Excuse\n\nA common use of `??` is to catch an empty Optional and change\nthe `Excuse` to another more specific `Excuse`, which\nallows us to distinguish one failure from the other,\neven when they had the same `Excuse` originally.\n\n```c3\nimport std::io;\n\nfaultdef DOG_ATE_HOMEWORK, TEXTBOOK_ON_FIRE;\n\nfn int? test()\n{\n    return io::FILE_NOT_FOUND?;\n}\n\nfn void? examples()\n{\n    int? a = test(); // io::FILE_NOT_FOUND\n    int? b = test(); // io::FILE_NOT_FOUND\n\n    // We can tell these apart by default assigning our own unique\n    // Excuse. Our custom Excuse is assigned only if an\n    // empty Optional is returned.\n    int? c = test() ?? DOG_ATE_HOMEWORK?;\n    int? d = test() ?? TEXTBOOK_ON_FIRE?;\n\n    // If you want to immediately return with an Excuse,\n    // use the \"?\" and \"!\" operators together, see the code below:\n    int? e = test() ?? DOG_ATE_HOMEWORK?!;\n    int? f = test() ?? TEXTBOOK_ON_FIRE?!;\n}\n```\n\n### Force unwrapping expressions\n\nThe force [unwrap](/language-common/optionals-essential/#-unwrapping-an-optional) operator `!!` will\nmake the program panic and exit if the expression is an empty optional.\nThis is useful when the error should – in normal cases – not happen\nand you don't want to write any error handling for it.\nThat said, it should be used with great caution in production code.\n\n```c3\nfn void find_file_and_test()\n{\n    find_file()!!;\n\n    // Force unwrap '!!' is roughly equal to:\n    // if (catch find_file()) unreachable(\"Unexpected excuse\");\n}\n```\n\n### Find empty Optional without reading the Excuse\n\n```c3\nimport std::io;\nfn void test()\n{\n    int? optional_value = io::FILE_NOT_FOUND?;\n\n    // Find empty Optional, then handle inside scope\n    if (catch optional_value)\n    {\n        io::printn(\"Found empty Optional, the Excuse was not read\");\n    }\n}\n```\n\n### Find empty Optional and switch on Excuse\n\n`if (catch)` can be used with switch on the `Excuse` value:\n\n```c3\nfn void? test()\n{\n    if (catch excuse = optional_value)\n    {\n        switch (excuse)\n        {\n            case DOG_ATE_HOMEWORK:\n                io::printn(\"Dog ate your file\");\n            case io::FILE_NOT_FOUND:\n                io::printn(\"File not found\");\n            default:\n                io::printfn(\"Unexpected Excuse: %s\", excuse);\n                return excuse?;\n        }\n    }\n}\n```\n\n## Run code if the Optional has a result\nThis is a convenience method, the logical inverse of\n[`if (catch)`](/language-common/optionals-essential/#checking-if-an-optional-is-empty)\nand is helpful when you don't care about the empty branch of\nthe code or you wish to perform an early return.\n```c3\nfn void test()\n{\n    // 'optional_value' is a non-Optional variable inside the scope\n    if (try optional_value)\n    {\n        io::printfn(\"Result found: %s\", optional_value);\n    }\n\n    // The Optional result is assigned to 'unwrapped_value' inside the scope\n    if (try unwrapped_value = optional_value)\n    {\n        io::printfn(\"Result found: %s\", unwrapped_value);\n    }\n}\n```\n\nAnother example:\n\n```c3\nimport std::io;\n\n// Returns Optional result with `int` type or empty with an Excuse\nfn int? reliable_function()\n{\n    return 7; // Return a result\n}\n\nfn void main(String[] args)\n{\n    int? reliable_result = reliable_function();\n\n    // Unwrap the result from reliable_result\n    if (try reliable_result)\n    {\n        // reliable_result is unwrapped in this scope, can be used as normal\n        io::printfn(\"reliable_result: %s\", reliable_result);\n    }\n}\n```\nIt is possible to add conditions to an `if (try)` but they must be\njoined with `&&`. However you **cannot** use logical OR (`||`) conditions:\n```c3\nimport std::io;\n\n// Returns Optional with an 'int' result or empty with an Excuse\nfn int? reliable_function()\n{\n    return 7; // Return an Optional result\n}\n\nfn void main(String[] args)\n{\n    int? reliable_result1 = reliable_function();\n    int? reliable_result2 = reliable_function();\n\n    // Unwrap the result from reliable_result1 and reliable_result2\n    if (try reliable_result1 && try reliable_result2 && 5 > 2)\n    {\n        // `reliable_result1` is can be used as a normal variable here\n        io::printfn(\"reliable_result1: %s\", reliable_result1);\n\n        // `reliable_result2` is can be used as a normal variable here\n        io::printfn(\"reliable_result2: %s\", reliable_result2);\n    }\n\n    // ERROR cannot use logical OR `||`\n    // if (try reliable_result1 || try reliable_result2)\n    // {\n    //     io::printn(\"this can never happen);\n    // }\n}\n```\n\n## Shorthands to work with Optionals\n\n### Getting the Excuse\n\nRetrieving the `Excuse` with [`if (catch excuse = optional_value) {...}`](/language-common/optionals-essential/#checking-if-an-optional-is-empty)\nis not the only way to get the `Excuse` from an Optional, we can use the macro `@catch` instead.\nUnlike `if (catch)` this will never cause automatic [unwrapping](/language-common/optionals-essential/#-unwrapping-an-optional).\n\n```c3\nfn void main(String[] args)\n{\n    int? optional_value = io::FILE_NOT_FOUND?;\n\n    faultdef excuse = @catch(optional_value);\n    if (excuse)\n    {\n        io::printfn(\"Excuse found: %s\", excuse);\n    }\n}\n```\n\n### Checking if an Optional has a result without unwrapping\n\nThe `@ok` macro will return `true` if an Optional result is present and\n`false` if the Optional is empty.\nFunctionally this is equivalent to [`!@catch`](#getting-the-excuse), meaning no Excuse was found, for example:\n\n```c3\nfn void main(String[] args)\n{\n    int? optional_value = 7;\n\n    bool result_found = @ok(optional_value);\n    assert(result_found == !@catch(optional_value));\n}\n```\n\n## No void? variables\n\nThe `void?` type has no possible representation as a variable, and may\nonly be a function return type.\n\n:::note\nThe main function cannot return an optional.\n:::\n\nTo store the `Excuse` returned from a `void?` function without\n[`if (catch foo = optional_value)`](/language-common/optionals-essential/#checking-if-an-optional-is-empty),\nuse the [`@catch`](#getting-the-excuse) macro to convert the Optional to a `fault`:\n```c3\nfn void? test()\n{\n    return io::FILE_NOT_FOUND?;\n}\n\nfault excuse = @catch(test());\n```\n";
						const data = {title:"Advanced Error Handling",description:"Advanced Error Handling",editUrl:true,head:[],template:"doc",sidebar:{order:65,hidden:false,attrs:{}},pagefind:true,draft:false};
						const _internal = {
							type: 'content',
							filePath: "/home/josh/git/c3_tests/experimental-site-testing-only__local_changes/src/content/docs/Language Common/optionals-advanced.md",
							rawData: undefined,
						};

export { _internal, body, collection, data, id, slug };
