const id = "Language Fundamentals/variables.md";
						const collection = "docs";
						const slug = "language-fundamentals/variables";
						const body = "\n\n### Zero init by default\n\nUnlike C, C3 local variables are zero-initialized by default. To avoid zero initialization, you need to explicitly opt-out.\n\n```c3\nint x;               // x = 0\nint y @noinit;       // y is explicitly undefined and must be assigned before use.\n\nAStruct foo;         // foo is implicitly zeroed\nAStruct bar = {};    // bar is explicitly zeroed\nAStruct baz @noinit; // baz is explicitly undefined\n```\n\nUsing a variable that is explicitly undefined before will trap or be initialized to a \nspecific value when compiling \"safe\" and is undefined behaviour in \"fast\" builds.\n";
						const data = {title:"Variables",description:"Variables",editUrl:true,head:[],template:"doc",sidebar:{order:41,hidden:false,attrs:{}},pagefind:true,draft:false};
						const _internal = {
							type: 'content',
							filePath: "/home/josh/git/c3_tests/experimental-site-testing-only__local_changes/src/content/docs/Language Fundamentals/variables.md",
							rawData: undefined,
						};

export { _internal, body, collection, data, id, slug };
