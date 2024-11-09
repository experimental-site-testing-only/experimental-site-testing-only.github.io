const id = "Getting Started/hello-world.md";
						const collection = "docs";
						const slug = "getting-started/hello-world";
						const body = "\n:::note[Not installed the C3 compiler yet?]\n[Download C3](/getting-started/prebuilt-binaries), available on Mac, Windows and Linux.\n:::\n\n## 👋 Hello world\nLet's start with the traditional first program, Hello World in C3:\n\n```c3\nimport std::io;\n\nfn void main()\n{\n    io::printn(\"Hello, World!\");\n}\n```\n\nThe [`import`](/language-fundamentals/modules/#importing-modules) statement imports other modules, and we want `printn` which\nis in `std::io`.\n\nNext we define a [function](/language-fundamentals/functions/) which starts with the `fn` keyword followed by the return type. We don't need to return anything, so return `void`. The function name `main` then follows, followed by the function's parameter list, which is empty.\n```c3\nfn void main() {}\n```\n\n:::note\nThe function named `main` is a bit special, as it is where the program starts, or the entry point of the program.\n\nFor Unix-like OSes there are a few different variants, for example we might declare it as `fn void main(String[] args)`. In that case the parameter \"args\" contains a [slice](/language-common/arrays/#slice) of strings, of the program's command line arguments, starting with the name of the program, itself.\n:::\n\n\n### 🔭 Function scope\n`{` and `}` signifies the start and end of the function respectively, \nwe call this the function's scope. Inside the function scope we have a single function \ncall to `printn` inside `std::io`. We use the last part of the path \"io\" in front of\nthe function to identify what module it belongs to.\n\n### 📏 Imports can use a shorthand\nWe could have used the original longer path: `std::io::printn`\nif we wanted, but we *can* shorten it to just the lowest level module like `io::printn`. This is the *convention* in C3 and is is known as \"path-shortening\", it avoids writing long import paths that can make code harder to read.\n\n```diff lang=\"cpp\"\n- std::io::printn(\"Hello, World!\");\n+ io::printn(\"Hello, World!\");\n\n```\n\nThe `io::printn` function takes a single argument and prints it, followed by a newline, then the function ends and the program terminates.\n\n\n## 🔧 Compiling the program\n\nLet's take the above program and put it in a file called `hello_world.c3`.\n\nWe can then compile it with:\n\n```bash \nc3c compile hello_world.c3\n```\n\nAnd run it:\n\n```bash\n./hello_world\n```\n\nIt should print `Hello, World!` and return back to the command line prompt. \nIf you are on Windows, you will have `hello_world.exe` instead. Call it in the same way.\n\n### 🏃 Compiling and running\n\nWhen we start out it can be useful to compile and then have the compiler start the\nprogram immediately. We can do that with `compile-run`:\n\n```bash {4}\n$ c3c compile-run hello_world.c3\n> Program linked to executable 'hello_world'.\n> Launching hello_world...\n> Hello, World\n```\n\nWant more options when compiling? [Check the c3c compiler build options](/build-your-project/build-commands/).\n### 🎉 Successfully working? \nCongratulations! You're now up and running with C3.\n\n### ❓ Need help?\nWe're happy to help on the [C3 Discord](https://discord.gg/qN76R87).\n";
						const data = {title:"Hello World",description:"Learn to write hello world",editUrl:true,head:[],template:"doc",sidebar:{order:30,hidden:false,attrs:{}},pagefind:true,draft:false};
						const _internal = {
							type: 'content',
							filePath: "/home/josh/git/c3_tests/experimental-site-testing-only__local_changes/src/content/docs/Getting Started/hello-world.md",
							rawData: undefined,
						};

export { _internal, body, collection, data, id, slug };
