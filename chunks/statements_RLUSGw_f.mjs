const id = "Language Fundamentals/statements.md";
						const collection = "docs";
						const slug = "language-fundamentals/statements";
						const body = "\nStatements largely work like in C, but with some additions.\n\n\n## Expression blocks\n\nExpression blocks (delimited using `{| |}`) are compound statements that opens their own function scope.\nJumps cannot be done into or out of a function block, and `return` exits the block, rather than the function as a whole.\n\nThe function below prints `World!`\n\n```c3\nfn void test()\n{\n    int a = 0;\n    {|\n        if (!a) return;\n        io::printf(\"Hello \");\n        return;\n    |};\n    io::printf(\"World!\\n\");\n}\n```\n\nExpression blocks may also return values:\n\n```c3\nfn void test(int x)\n{\n    int a = {|\n        if (x > 0) return x * 2;\n        if (x == 0) return 100;\n        return -x;\n    |};            \n    io::printfn(\"The result was %d\", a);\n}\n```\n\n## Labelled break and continue\n\nLabelled `break` and `continue` lets you break out of an outer scope. Labels can be put on `if`, \n`switch`, `while` and `do` statements.\n\n```c3\nfn void test(int i)\n{\n    if FOO: (i > 0)\n    {\n        while (1)\n        {\n            io::printfn(\"%d\", i);\n            // Break out of the top if statement.\n            if (i++ > 10) break FOO;\n        }\n    }\n}\n```\n\n## Do-without-while\n\nDo-while statements can skip the ending `while`. In that case it acts as if the `while` was `while(0)`:\n\n```c3\ndo \n{\n    io::printn(\"FOO\");\n} while (0);\n\n// Equivalent to the above.\ndo \n{\n    io::printn(\"FOO\");\n};\n```\n## Nextcase and labelled nextcase\n\nThe `nextcase` statement is used in `switch` and `if-catch` to jump to the next statement:\n\n```c3\nswitch (i)\n{\n    case 1:\n        doSomething();\n        nextcase; // Jumps to case 2\n    case 2:\n        doSomethingElse();\n}\n```\n\nIt's also possible to use `nextcase` with an expression, to jump to an arbitrary case:\n\n```c3\nswitch (i)\n{\n    case 1:\n        doSomething();\n        nextcase 3; // Jump to case 3\n    case 2:\n        doSomethingElse();\n    case 3:\n        nextcase rand(); // Jump to random case\n    default:\n        io::printn(\"Ended\");\n}  \n```\n\nWhich can be used as structured `goto` when creating state machines.\n\n## Switch cases with runtime evaluation\n\nIt's possible to use `switch` as an enhanced if-else chain:\n\n```c3\nswitch (true)\n{\n    case x < 0:\n        xless();\n    case x > 0:\n        xgreater();\n    default:\n        xequals();\n}\n```\n\nThe above would be equivalent to writing:\n```c3\nif (c < 0)\n{\n    xless();\n}\nelse if (x > 0)\n{\n    xgreater();\n}\nelse\n{\n    xequals();\n}\n```\n\nNote that because of this, the first match is always picked. Consider:\n\n```c3\nswitch (true)\n{\n    case x > 0:\n        foo();\n    case x > 2:\n        bar();\n}\n```\n\nBecause of the evaluation order, only `foo()` will be invoked for x > 0, even when x is greater than 2.\n\nIt's also possible to omit the conditional after `switch`. In that case it is implicitly assumed to be same as\nwriting `(true)`\n\n```c3\nswitch\n{\n    case foo() > 0:\n        bar();\n    case test() == 1:\n        baz();\n}\n```";
						const data = {title:"Statements",description:"Statements",editUrl:true,head:[],template:"doc",sidebar:{order:43,hidden:false,attrs:{}},pagefind:true,draft:false};
						const _internal = {
							type: 'content',
							filePath: "/home/josh/git/c3_tests/experimental-site-testing-only__local_changes/src/content/docs/Language Fundamentals/statements.md",
							rawData: undefined,
						};

export { _internal, body, collection, data, id, slug };
