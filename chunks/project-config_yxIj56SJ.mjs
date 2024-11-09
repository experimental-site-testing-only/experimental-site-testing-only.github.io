const id = "Build Your Project/project-config.md";
						const collection = "docs";
						const slug = "build-your-project/project-config";
						const body = "# Customizing A Project\n\nThis is a description of the configuration options in `project.json`:\n\n\n```json5\n{\n  // Language version of C3.\n  \"langrev\": \"1\",\n  // Warnings used for all targets.\n  \"warnings\": [ \"no-unused\" ],\n  // Directories where C3 library files may be found.\n  \"dependency-search-paths\": [ \"lib\" ],\n  // Libraries to use for all targets.\n  \"dependencies\": [ ],\n  // Authors, optionally with email.\n  \"authors\": [ \"John Doe <john.doe@example.com>\" ],\n  // Version using semantic versioning.\n  \"version\": \"0.1.0\",\n  // Sources compiled for all targets.\n  \"sources\": [ \"src/**\" ],\n  // C sources if the project also compiles C sources\n  // relative to the project file.\n  // \"c-sources\": [ \"csource/**\" ],\n  // Include directories for C sources relative to the project file.\n  // \"c-include-dirs: [ \"csource/include\" ],\n  // Output location, relative to project file.\n  \"output\": \"../build\",\n  // Architecture and OS target.\n  // You can use 'c3c --list-targets' to list all valid targets,\n  // \"target\": \"windows-x64\",\n  // Current Target options:\n  //    android-aarch64 \n  //    elf-aarch64 elf-riscv32 elf-riscv64 elf-x86 elf-x64 elf-xtensa\n  //    mcu-x86 mingw-x64 netbsd-x86 netbsd-x64 openbsd-x86 openbsd-x64\n  //    freebsd-x86 freebsd-x64 ios-aarch64 \n  //    linux-aarch64 linux-riscv32 linux-riscv64 linux-x86 linux-x64 \n  //    macos-aarch64 macos-x64 \n  //    wasm32 wasm64 \n  //    windows-aarch64 windows-x64 \n  \"targets\": {\n    \"linux-x64\": {\n      // Executable or library.\n      \"type\": \"executable\",\n      // Additional libraries, sources\n      // and overrides of global settings here.\n    },\n  },\n  // Global settings.\n  // C compiler if the project also compiles C sources\n  // defaults to 'cc'.\n  \"cc\": \"cc\",\n  // CPU name, used for optimizations in the LLVM backend.\n  \"cpu\": \"generic\",\n  // Debug information, may be \"none\", \"full\" and \"line-tables\".\n  \"debug-info\": \"full\",\n  // FP math behaviour: \"strict\", \"relaxed\", \"fast\".\n  \"fp-math\": \"strict\",\n  // Link libc other default libraries.\n  \"link-libc\": true,\n  // Memory environment: \"normal\", \"small\", \"tiny\", \"none\".\n  \"memory-env\": \"normal\",\n  // Optimization: \"O0\", \"O1\", \"O2\", \"O3\", \"O4\", \"O5\", \"Os\", \"Oz\".\n  \"opt\": \"O0\",\n  // Code optimization level: \"none\", \"less\", \"more\", \"max\".\n  \"optlevel\": \"none\",\n  // Code size optimization: \"none\", \"small\", \"tiny\".\n  \"optsize\": \"none\",\n  // Relocation model: \"none\", \"pic\", \"PIC\", \"pie\", \"PIE\".\n  \"reloc\": \"none\",\n  // Trap on signed and unsigned integer wrapping for testing.\n  \"trap-on-wrap\": false,\n  // Turn safety (contracts, runtime bounds checking, null pointer checks etc).\n  \"safe\": true,\n  // Compile all modules together, enables more inlining.\n  \"single-module\": true,\n  // Use / don't use soft float, value is otherwise target default.\n  \"soft-float\": false,\n  // Strip unused code and globals from the output.\n  \"strip-unused\": true,\n  // The size of the symtab, which limits the amount\n  // of symbols that can be used. Should usually not be changed.\n  \"symtab\": 1048576,\n  // Use the system linker.\n  \"linker\": \"cc\",\n  // Include the standard library.\n  \"use-stdlib\": true,\n  // Set general level of x64 cpu: \"baseline\", \"ssse3\", \"sse4\", \"avx1\", \"avx2-v1\", \"avx2-v2\", \"avx512\", \"native\".\n  \"x86cpu\": \"native\",\n  // Set max type of vector use: \"none\", \"mmx\", \"sse\", \"avx\", \"avx512\", \"native\".\n  \"x86vec\": \"sse\",\n}\n```\n        \n\nBy default, an executable is assumed, but changing the type to `\"static-lib\"` or `\"dynamic-lib\"` \ncreates static library and dynamic library targets respectively.\n\n*This part will be updated, stay tuned* \n\n## Compilation options\n\nThe project file contains common settings at the top level, that can be overridden by each\ntarget, by simply assigning that particular key. So if the top level defines `target` to be `macos-x64`\nand the actual target defines it to be `windows-x64`, then the `windows-x64` will be used for compilation.\n\nSimilarly, compiler command line parameters can be used in turn to override the target setting.\n\n#### targets\n\nThe list of targets that can be built.\n\n#### dependencies\n\nList of C3 libraries (\".c3l\") to use when compiling the target.\n\n#### sources\n\nList of source files to compile and for tests which will run.\n\n#### cc\n\nC compiler to use for compiling C sources (if C sources are compiled together with C3 files).\n\n#### c-sources\n\nList of C sources to compile.\n\n#### version\n\n*Not handled yet*\n\nVersion for library, will also be provided as a compile time constant.\n\n#### authors\n\n*Not handled yet*\n\nList of authors to add for library compilation.\n\n#### langrev\n\n*Not handled yet*\n\nThe language revision to use. \n\n#### config\n\n*Not added yet*\n\nUnder the config you define external constants (\"key: value\") that will be included in compilation as if they were global macro constants.\n\n#### export\n\n*Not added yet*\n\nDefine the list of modules to be exported by a library. Not valid for executables.\n\n#### warnings\n\n*Not completely supported yet*\n\nList of warnings to enable during compilation.\n\n## Target options\n\n#### type\n\nThis mandatory option should be one of \"executable\", \"dynamic-lib\" and \"static-lib\".\n\n*More types will be added*\n\n## Using environment variables\n\n*Not supported yet*\n\nIn addition to constants any values starting with \"$\" will be assumed to be environment variables.\n\nFor example \"$HOME\" would on unix systems return the home directory. For strings that start with $ but *should not* be interpreted as an environment variable. For example, the string `\"\\$HOME\"` would be interpreted as the plain string \"$HOME\"";
						const data = {title:"Project Configuration",description:"Project Configuration",editUrl:true,head:[],template:"doc",sidebar:{order:241,hidden:false,attrs:{}},pagefind:true,draft:false};
						const _internal = {
							type: 'content',
							filePath: "/home/josh/git/c3_tests/experimental-site-testing-only__local_changes/src/content/docs/Build Your Project/project-config.md",
							rawData: undefined,
						};

export { _internal, body, collection, data, id, slug };