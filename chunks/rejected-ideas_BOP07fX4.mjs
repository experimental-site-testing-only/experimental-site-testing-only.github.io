const id = "Previous Versions/v0_6_8/FAQ/rejected-ideas.md";
						const collection = "docs";
						const slug = "previous-versions/v0_6_8/faq/rejected-ideas";
						const body = "These are ideas that will not be implemented in C3 with rationale given.\n\n\n### Constructors and destructors\n\nA fundamental concept in C3 is that data is not \"active\". This is to say there is no code associated with the data implicitly unlike constructors and destructors in an object oriented language. Not having constructors / destructors prevents RAII-style resource handling, but also allows the code to assume the memory can be freely allocated and initialized as it sees fit, without causing any corruption or undefined behaviour.\n\nThere is a fundamental difference between active objects and inert data, each has its advantages and disadvantages. C3 follows the C model, which is that data is passive and does not enforce any behaviour. This has very deep implications on the semantics of the language and adding constructors and destructors would change the language greatly, requiring modification of many parts of the language altering.\n\nFor that reason constructors and destructors will not be considered for C3.\n\n### Unicode identifiers\n\nThe main argument for unicode identifiers is that \"it allows people to code in their own language\". However, there is no proof that this actually is used in practice. Furthermore there are practical issues, such as bidirectional text, characters with different code points that are rendered in an identical way etc.\n\nGiven the complexity and the lack of actual proven benefit, unicode identifiers will not happen for C3.";
						const data = {title:"Rejected Ideas",description:"Rejected Ideas",editUrl:true,head:[],template:"doc",sidebar:{order:703,hidden:false,attrs:{}},pagefind:true,draft:false};
						const _internal = {
							type: 'content',
							filePath: "/home/josh/git/c3_tests/experimental-site-testing-only__local_changes/src/content/docs/Previous Versions/v0_6_8/FAQ/rejected-ideas.md",
							rawData: undefined,
						};

export { _internal, body, collection, data, id, slug };
