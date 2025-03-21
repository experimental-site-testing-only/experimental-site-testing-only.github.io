const id = "Previous Versions/v0_6_8/Language Fundamentals/comments.md";
						const collection = "docs";
						const slug = "previous-versions/v0_6_8/language-fundamentals/comments";
						const body = "C3 uses three distinct comment types:\n\n1. The normal `//` single line comment.\n2. The classic `/* ... */` multi-line C style comment, but unlike in C they are allowed to nest.\n3. Documentation comments `<* ... *>` the text within these comments will be parsed as documentation and optional [Contracts](/language-common/contracts/) on the following code.\n\n## Doc contracts\n\nDocumentation contracts start with `<*` and must be terminated using `*>`.\nAny initial text up until the first `@`-directive on a new line will be interpreted as\nfree text documentation.\n\nFor example:\n\n```c3\n<*\n Here are some docs.\n @param num_foo `The number of foos.`\n @require num_foo > 4 \n @deprecated\n @mycustom 2\n*>\nvoid bar(int num_foo)\n{\n    io::printfn(\"%d\", num_foo);\n}\n```\n \n### Doc Contracts Are Parsed\nThe following was extracted:\n- The function description: *\"Here are some docs.\"*\n- The `num_foo` parameter has the description: *\"The number of foos\"*.\n- A [Contract](/language-common/contracts/) annotation for the compiler: `@require num_foo > 4` which tells the compiler and a user of the function that a precondition is that `num_foo` must be greater than 4.\n- A function [Attribute](/language-common/attributes/) marking it as `@deprecated`, which displays warnings.\n- A custom function [Attribute](/language-common/attributes/) `@mycustom`. The compiler is free to silently ignore custom Attributes, they can be used to optionally emit warnings, but are otherwise ignored.\n\n### Available annotations\n\n| Name          |                                              format |\n|---------------|----------------------------------------------------:|\n| `@param     ` |            `@param [<ref>] <param> [<description>]` |\n| `@return    ` |                             `@return <description>` |\n| `@return!   ` | `@return! <fault1>, <fault2>, ..., [<description>]` |\n| `@deprecated` |                       `@deprecated [<description>]` |\n| `@require   ` |   `@require <expr1>, <expr2>, ..., [<description>]` |\n| `@ensure    ` |   `@ensure <expre1>, <expr2>, ..., [<description>]` |\n| `@pure      ` |                                             `@pure` |\n    \nSee [Contracts](/language-common/contracts/) for information regarding `@require`, `@ensure`, `@const`, `@pure`, `@checked`.\n\n\\*`[<ref>]` is an optional mutability description e.g. `[&in]`\n\\*`[<description>]` denotes that a description is optional.\n";
						const data = {title:"Comments & Documentation",description:"Comments & Documentation",editUrl:true,head:[],template:"doc",sidebar:{order:40,hidden:false,attrs:{}},pagefind:true,draft:false};
						const _internal = {
							type: 'content',
							filePath: "/home/josh/git/c3_tests/experimental-site-testing-only__local_changes/src/content/docs/Previous Versions/v0_6_8/Language Fundamentals/comments.md",
							rawData: undefined,
						};

export { _internal, body, collection, data, id, slug };
