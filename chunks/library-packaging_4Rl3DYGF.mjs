const id = "Misc Advanced/library-packaging.md";
						const collection = "docs";
						const slug = "misc-advanced/library-packaging";
						const body = "\n*Note, the library system is in early alpha, everything below is subject to change*\n\nC3 allows convenient packaging of C3 source files optionally with  statically or dynamically linked libraries.\nTo use such a library, simply pass the path to the library directory and add the library you wish to link to.\nThe compiler will resolve any dependencies to other libraries and only compile those that are in use.\n\n## How it works\n\nA library may be used either packaged or unpacked. If unpacked, it is simply a directory with the `.c3l`\nsuffix, which contains all the necessary files, if packed, this is simply a compressed variant of \na directory with the same structure.\n\n### The specification\n\nIn the top of the library resides the `manifest.json` file which has the following structure:\n\n```json\n{\n  \"provides\" : \"my_lib\",\n  \"execs\" : [],\n  \"targets\" : {\n    \"macos-x64\" : {\n      \"linkflags\" : [],\n      \"dependencies\" : [],\n      \"linked-libs\" : [\"my_lib_static\", \"Cocoa.framework\", \"c\"]\n    },\n    \"windows-x64\" : {\n      \"linkflags\" : [\"/stack:65536\"],\n      \"dependencies\" : [\"ms_my_extra\"],\n      \"linked-libs\" : [\"my_lib_static\", \"kernel32\"],\n      \"execs\" : [],\n    }\n  }\n}\n```\n\nIn the example here, this library supports two targets: **macos-x64** and **windows-x64**. If \nwe tried to use it with any other target, the compiler would give an error.\n\nWe see that if we use the **windows-x64** target it will also load the **ms_my_extra** library. And\nwe also see that the linker would have a special argument on that platform.\n\nBoth targets expect `my_lib_static` to be available for linking. If this library provides this\nor dynamic library it will be in the target sub-directories, so it likely has the path \n`windows-x64/my_lib_static.lib` and `macos-z64/libmy_lib_static.a`.\n\n### Source code\n\nAside from the manifest, C3 will read any C and C3 files in the same directory as `manifest.json`\nas well as any files in the target subdirectory for the current target. For static libraries\ntypically a `.c3i` file (that is, a C3 file without any implementations) is provided, similar to\nhow .h files are used in C.\n\n### Additional actions\n\n`\"exec\"`, which is available both at the top level and per-target, lists the scripts which will be\ninvoked when a library is used. This requires running the compiler at **full trust level** using the \n`--trust=full` option.\n\n## How to – automatically – export libraries\n\n*This is not implemented yet, docs will materialize once it is finished*\n\n";
						const data = {title:"Library Packaging",description:"Library Packaging",editUrl:true,head:[],template:"doc",sidebar:{order:227,hidden:false,attrs:{}},pagefind:true,draft:false};
						const _internal = {
							type: 'content',
							filePath: "/home/josh/git/c3_tests/experimental-site-testing-only__local_changes/src/content/docs/Misc Advanced/library-packaging.md",
							rawData: undefined,
						};

export { _internal, body, collection, data, id, slug };
