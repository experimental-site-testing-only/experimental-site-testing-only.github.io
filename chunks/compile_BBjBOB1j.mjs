const id = "Getting Started/compile.md";
						const collection = "docs";
						const slug = "getting-started/compile";
						const body = "\n:::note[Want To Download Pre-Built C3 Binaries?]\n[Download C3](/getting-started/prebuilt-binaries/), available on Mac, Windows and Linux.\n:::\n\nFor other platforms it should be possible to compile it on any platform LLVM can compile to. You will need `git` and `CMake` installed.\n\n## 1. Install LLVM\n\nSee LLVM the [LLVM documentation](https://llvm.org/docs/GettingStarted.html) on how to set up LLVM for development. \n- On MacOS, installing through Homebrew or MacPorts works fine.\n- Using apt-get on Linux should work fine as well. \n- For Windows you can download suitable pre-compiled LLVM binaries from https://github.com/c3lang/win-llvm\n\n## 2. Clone the C3 compiler source code from Github\n\nThis should be as simple as doing:\n\n```bash\ngit clone https://github.com/c3lang/c3c.git\n```\n\n... from the command line.\n\n## 3. Build the compiler\n\nCreate the build directory:\n\n```bash\nMyMachine:c3c$ mkdir build\nMyMachine:c3c$ cd build/\n```\n\nUse CMake to set up:\n\n```bash\nMyMachine:c3c/build$ cmake ../\n```\n\nBuild the compiler:\n\n```bash\nMyMachine:c3c/build$ make\n```\n\n## 4. Test it out\n\n```bash\nMyMachine:c3c/build$ ./c3c compile-run ../resources/testfragments/helloworld.c3\n```\n\n# Building via Docker\n\nYou can build `c3c` using either an Ubuntu 18.04 or 20.04 container:\n\n```bash\n./build-with-docker.sh 18\n```\n\nReplace `18` with `20` to build through Ubuntu 20.04.\n\nFor a release build specify:\n```bash\n./build-with-docker.sh 20 Release\n```\n\nA `c3c` executable will be found under `bin/`.\n\n# Building on Mac using Homebrew\n\n2. Install CMake: `brew install cmake`\n3. Install LLVM 17+: `brew install llvm`\n4. Clone the C3C github repository: `git clone https://github.com/c3lang/c3c.git`\n5. Enter the C3C directory `cd c3c`.\n6. Create a build directory `mkdir build`\n7. Change directory to the build directory `cd build`\n8. Set up CMake build for debug: `cmake ..`\n9. Build: `cmake --build .`\n\n\n# Building on Mac using MacPorts \n\n`c3c` may be built on Mac systems not supported by Homebrew\nusing the **[cmake][]**, **[llvm-17][]** and **[clang-17][]**\nports from **[MacPorts][]**.\n\n\n1. Install CMake: `sudo port install cmake`\n2. Install LLVM 17: `sudo port install llvm-17`\n3. Install clang 17: `sudo port install clang-17`\n4. Clone the C3C github repository: `git clone https://github.com/c3lang/c3c.git`\n5. Enter the C3C directory `cd c3c`.\n6. Create a build directory `mkdir build`\n7. Change directory to the build directory `cd build`\n8. ❗️Important before you run cmake❗️<br/>\n   Set **LLVM_DIR** to the directory with the llvm-17 macport .cmake files<br/>\n   `export LLVM_DIR=/opt/local/libexec/llvm-17/lib/cmake/llvm` \n9. Set up CMake build for debug: `cmake ..`\n10. Build: `cmake --build .`\n\n\nSee also discussion [#1701](https://github.com/c3lang/c3c/discussions/1701)\n\n[MacPorts]: https://ports.macports.org/\n[cmake]: https://ports.macports.org/port/cmake\n[llvm-17]: https://ports.macports.org/port/llvm-17\n[clang-17]: https://ports.macports.org/port/clang-17\n";
						const data = {title:"Build C3 From Source",description:"Build C3 From Source",editUrl:true,head:[],template:"doc",sidebar:{order:21,hidden:false,attrs:{}},pagefind:true,draft:false};
						const _internal = {
							type: 'content',
							filePath: "/home/josh/git/c3_tests/experimental-site-testing-only__local_changes/src/content/docs/Getting Started/compile.md",
							rawData: undefined,
						};

export { _internal, body, collection, data, id, slug };
