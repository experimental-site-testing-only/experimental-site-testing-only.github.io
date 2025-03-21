import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_afRpe8AA.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<aside aria-label=\"Want To Download Pre-Built C3 Binaries?\" class=\"starlight-aside starlight-aside--note\"><p class=\"starlight-aside__title\" aria-hidden=\"true\"><svg viewBox=\"0 0 24 24\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"starlight-aside__icon\"><path d=\"M12 11C11.7348 11 11.4804 11.1054 11.2929 11.2929C11.1054 11.4804 11 11.7348 11 12V16C11 16.2652 11.1054 16.5196 11.2929 16.7071C11.4804 16.8946 11.7348 17 12 17C12.2652 17 12.5196 16.8946 12.7071 16.7071C12.8946 16.5196 13 16.2652 13 16V12C13 11.7348 12.8946 11.4804 12.7071 11.2929C12.5196 11.1054 12.2652 11 12 11ZM12.38 7.08C12.1365 6.97998 11.8635 6.97998 11.62 7.08C11.4973 7.12759 11.3851 7.19896 11.29 7.29C11.2017 7.3872 11.1306 7.49882 11.08 7.62C11.024 7.73868 10.9966 7.86882 11 8C10.9992 8.13161 11.0245 8.26207 11.0742 8.38391C11.124 8.50574 11.1973 8.61656 11.29 8.71C11.3872 8.79833 11.4988 8.86936 11.62 8.92C11.7715 8.98224 11.936 9.00632 12.099 8.99011C12.2619 8.97391 12.4184 8.91792 12.5547 8.82707C12.691 8.73622 12.8029 8.61328 12.8805 8.46907C12.9582 8.32486 12.9992 8.16378 13 8C12.9963 7.73523 12.8927 7.48163 12.71 7.29C12.6149 7.19896 12.5028 7.12759 12.38 7.08ZM12 2C10.0222 2 8.08879 2.58649 6.4443 3.6853C4.79981 4.78412 3.51809 6.3459 2.76121 8.17317C2.00433 10.0004 1.8063 12.0111 2.19215 13.9509C2.578 15.8907 3.53041 17.6725 4.92894 19.0711C6.32746 20.4696 8.10929 21.422 10.0491 21.8079C11.9889 22.1937 13.9996 21.9957 15.8268 21.2388C17.6541 20.4819 19.2159 19.2002 20.3147 17.5557C21.4135 15.9112 22 13.9778 22 12C22 10.6868 21.7413 9.38642 21.2388 8.17317C20.7363 6.95991 19.9997 5.85752 19.0711 4.92893C18.1425 4.00035 17.0401 3.26375 15.8268 2.7612C14.6136 2.25866 13.3132 2 12 2ZM12 20C10.4178 20 8.87104 19.5308 7.55544 18.6518C6.23985 17.7727 5.21447 16.5233 4.60897 15.0615C4.00347 13.5997 3.84504 11.9911 4.15372 10.4393C4.4624 8.88743 5.22433 7.46197 6.34315 6.34315C7.46197 5.22433 8.88743 4.4624 10.4393 4.15372C11.9911 3.84504 13.5997 4.00346 15.0615 4.60896C16.5233 5.21447 17.7727 6.23984 18.6518 7.55544C19.5308 8.87103 20 10.4177 20 12C20 14.1217 19.1572 16.1566 17.6569 17.6569C16.1566 19.1571 14.1217 20 12 20Z\"></path></svg>Want To Download Pre-Built C3 Binaries?</p><section class=\"starlight-aside__content\"><p><a href=\"/getting-started/prebuilt-binaries/\">Download C3</a>, available on Mac, Windows and Linux.</p></section></aside>\n<p>For other platforms it should be possible to compile it on any platform LLVM can compile to. You will need <code dir=\"auto\">git</code> and <code dir=\"auto\">CMake</code> installed.</p>\n<h2 id=\"1-install-llvm\">1. Install LLVM</h2>\n<p>See LLVM the <a href=\"https://llvm.org/docs/GettingStarted.html\">LLVM documentation</a> on how to set up LLVM for development.</p>\n<ul>\n<li>On MacOS, installing through Homebrew or MacPorts works fine.</li>\n<li>Using apt-get on Linux should work fine as well.</li>\n<li>For Windows you can download suitable pre-compiled LLVM binaries from <a href=\"https://github.com/c3lang/win-llvm\">https://github.com/c3lang/win-llvm</a></li>\n</ul>\n<h2 id=\"2-clone-the-c3-compiler-source-code-from-github\">2. Clone the C3 compiler source code from Github</h2>\n<p>This should be as simple as doing:</p>\n<div class=\"expressive-code\"><link rel=\"stylesheet\" href=\"/_astro/ec.j8ofn.css\"><script type=\"module\" src=\"/_astro/ec.8zarh.js\"></script><figure class=\"frame is-terminal not-content\"><figcaption class=\"header\"><span class=\"title\"></span><span class=\"sr-only\">Terminal window</span></figcaption><pre data-language=\"bash\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#82AAFF;--1:#3C63B3\">git</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#ECC48D;--1:#3C63B3\">clone</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#ECC48D;--1:#3C63B3\">https://github.com/c3lang/c3c.git</span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"git clone https://github.com/c3lang/c3c.git\"><div></div></button></div></figure></div>\n<p>… from the command line.</p>\n<h2 id=\"3-build-the-compiler\">3. Build the compiler</h2>\n<p>Create the build directory:</p>\n<div class=\"expressive-code\"><figure class=\"frame is-terminal not-content\"><figcaption class=\"header\"><span class=\"title\"></span><span class=\"sr-only\">Terminal window</span></figcaption><pre data-language=\"bash\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#82AAFF;--1:#3C63B3\">MyMachine:c3c$</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#ECC48D;--1:#3C63B3\">mkdir</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#ECC48D;--1:#3C63B3\">build</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#82AAFF;--1:#3C63B3\">MyMachine:c3c$</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#ECC48D;--1:#3C63B3\">cd</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#ECC48D;--1:#3C63B3\">build/</span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"MyMachine:c3c$ mkdir buildMyMachine:c3c$ cd build/\"><div></div></button></div></figure></div>\n<p>Use CMake to set up:</p>\n<div class=\"expressive-code\"><figure class=\"frame is-terminal not-content\"><figcaption class=\"header\"><span class=\"title\"></span><span class=\"sr-only\">Terminal window</span></figcaption><pre data-language=\"bash\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#82AAFF;--1:#3C63B3\">MyMachine:c3c/build$</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#ECC48D;--1:#3C63B3\">cmake</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#ECC48D;--1:#3C63B3\">../</span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"MyMachine:c3c/build$ cmake ../\"><div></div></button></div></figure></div>\n<p>Build the compiler:</p>\n<div class=\"expressive-code\"><figure class=\"frame is-terminal not-content\"><figcaption class=\"header\"><span class=\"title\"></span><span class=\"sr-only\">Terminal window</span></figcaption><pre data-language=\"bash\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#82AAFF;--1:#3C63B3\">MyMachine:c3c/build$</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#ECC48D;--1:#3C63B3\">make</span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"MyMachine:c3c/build$ make\"><div></div></button></div></figure></div>\n<h2 id=\"4-test-it-out\">4. Test it out</h2>\n<div class=\"expressive-code\"><figure class=\"frame is-terminal not-content\"><figcaption class=\"header\"><span class=\"title\"></span><span class=\"sr-only\">Terminal window</span></figcaption><pre data-language=\"bash\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#82AAFF;--1:#3C63B3\">MyMachine:c3c/build$</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#ECC48D;--1:#3C63B3\">./c3c</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#ECC48D;--1:#3C63B3\">compile-run</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#ECC48D;--1:#3C63B3\">../resources/testfragments/helloworld.c3</span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"MyMachine:c3c/build$ ./c3c compile-run ../resources/testfragments/helloworld.c3\"><div></div></button></div></figure></div>\n<h1 id=\"building-via-docker\">Building via Docker</h1>\n<p>You can build <code dir=\"auto\">c3c</code> using either an Ubuntu 18.04 or 20.04 container:</p>\n<div class=\"expressive-code\"><figure class=\"frame is-terminal not-content\"><figcaption class=\"header\"><span class=\"title\"></span><span class=\"sr-only\">Terminal window</span></figcaption><pre data-language=\"bash\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#82AAFF;--1:#3C63B3\">./build-with-docker.sh</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#F78C6C;--1:#AA0982\">18</span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"./build-with-docker.sh 18\"><div></div></button></div></figure></div>\n<p>Replace <code dir=\"auto\">18</code> with <code dir=\"auto\">20</code> to build through Ubuntu 20.04.</p>\n<p>For a release build specify:</p>\n<div class=\"expressive-code\"><figure class=\"frame is-terminal not-content\"><figcaption class=\"header\"><span class=\"title\"></span><span class=\"sr-only\">Terminal window</span></figcaption><pre data-language=\"bash\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#82AAFF;--1:#3C63B3\">./build-with-docker.sh</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#F78C6C;--1:#AA0982\">20</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#ECC48D;--1:#3C63B3\">Release</span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"./build-with-docker.sh 20 Release\"><div></div></button></div></figure></div>\n<p>A <code dir=\"auto\">c3c</code> executable will be found under <code dir=\"auto\">bin/</code>.</p>\n<h1 id=\"building-on-mac-using-homebrew\">Building on Mac using Homebrew</h1>\n<ol start=\"2\">\n<li>Install CMake: <code dir=\"auto\">brew install cmake</code></li>\n<li>Install LLVM 17+: <code dir=\"auto\">brew install llvm</code></li>\n<li>Clone the C3C github repository: <code dir=\"auto\">git clone https://github.com/c3lang/c3c.git</code></li>\n<li>Enter the C3C directory <code dir=\"auto\">cd c3c</code>.</li>\n<li>Create a build directory <code dir=\"auto\">mkdir build</code></li>\n<li>Change directory to the build directory <code dir=\"auto\">cd build</code></li>\n<li>Set up CMake build for debug: <code dir=\"auto\">cmake ..</code></li>\n<li>Build: <code dir=\"auto\">cmake --build .</code></li>\n</ol>\n<h1 id=\"building-on-mac-using-macports\">Building on Mac using MacPorts</h1>\n<p><code dir=\"auto\">c3c</code> may be built on Mac systems not supported by Homebrew\nusing the <strong><a href=\"https://ports.macports.org/port/cmake\">cmake</a></strong>, <strong><a href=\"https://ports.macports.org/port/llvm-17\">llvm-17</a></strong> and <strong><a href=\"https://ports.macports.org/port/clang-17\">clang-17</a></strong>\nports from <strong><a href=\"https://ports.macports.org/\">MacPorts</a></strong>.</p>\n<ol>\n<li>Install CMake: <code dir=\"auto\">sudo port install cmake</code></li>\n<li>Install LLVM 17: <code dir=\"auto\">sudo port install llvm-17</code></li>\n<li>Install clang 17: <code dir=\"auto\">sudo port install clang-17</code></li>\n<li>Clone the C3C github repository: <code dir=\"auto\">git clone https://github.com/c3lang/c3c.git</code></li>\n<li>Enter the C3C directory <code dir=\"auto\">cd c3c</code>.</li>\n<li>Create a build directory <code dir=\"auto\">mkdir build</code></li>\n<li>Change directory to the build directory <code dir=\"auto\">cd build</code></li>\n<li>❗️Important before you run cmake❗️<br>\nSet <strong>LLVM_DIR</strong> to the directory with the llvm-17 macport .cmake files<br>\n<code dir=\"auto\">export LLVM_DIR=/opt/local/libexec/llvm-17/lib/cmake/llvm</code></li>\n<li>Set up CMake build for debug: <code dir=\"auto\">cmake ..</code></li>\n<li>Build: <code dir=\"auto\">cmake --build .</code></li>\n</ol>\n<p>See also discussion <a href=\"https://github.com/c3lang/c3c/discussions/1701\">#1701</a></p>";

				const frontmatter = {"title":"Build C3 From Source","description":"Build C3 From Source","sidebar":{"order":21}};
				const file = "/home/josh/git/c3_tests/experimental-site-testing-only__local_changes/src/content/docs/Previous Versions/v0_6_8/Getting Started/compile.md";
				const url = undefined;
				function rawContent() {
					return "\n:::note[Want To Download Pre-Built C3 Binaries?]\n[Download C3](/getting-started/prebuilt-binaries/), available on Mac, Windows and Linux.\n:::\n\nFor other platforms it should be possible to compile it on any platform LLVM can compile to. You will need `git` and `CMake` installed.\n\n## 1. Install LLVM\n\nSee LLVM the [LLVM documentation](https://llvm.org/docs/GettingStarted.html) on how to set up LLVM for development. \n- On MacOS, installing through Homebrew or MacPorts works fine.\n- Using apt-get on Linux should work fine as well. \n- For Windows you can download suitable pre-compiled LLVM binaries from https://github.com/c3lang/win-llvm\n\n## 2. Clone the C3 compiler source code from Github\n\nThis should be as simple as doing:\n\n```bash\ngit clone https://github.com/c3lang/c3c.git\n```\n\n... from the command line.\n\n## 3. Build the compiler\n\nCreate the build directory:\n\n```bash\nMyMachine:c3c$ mkdir build\nMyMachine:c3c$ cd build/\n```\n\nUse CMake to set up:\n\n```bash\nMyMachine:c3c/build$ cmake ../\n```\n\nBuild the compiler:\n\n```bash\nMyMachine:c3c/build$ make\n```\n\n## 4. Test it out\n\n```bash\nMyMachine:c3c/build$ ./c3c compile-run ../resources/testfragments/helloworld.c3\n```\n\n# Building via Docker\n\nYou can build `c3c` using either an Ubuntu 18.04 or 20.04 container:\n\n```bash\n./build-with-docker.sh 18\n```\n\nReplace `18` with `20` to build through Ubuntu 20.04.\n\nFor a release build specify:\n```bash\n./build-with-docker.sh 20 Release\n```\n\nA `c3c` executable will be found under `bin/`.\n\n# Building on Mac using Homebrew\n\n2. Install CMake: `brew install cmake`\n3. Install LLVM 17+: `brew install llvm`\n4. Clone the C3C github repository: `git clone https://github.com/c3lang/c3c.git`\n5. Enter the C3C directory `cd c3c`.\n6. Create a build directory `mkdir build`\n7. Change directory to the build directory `cd build`\n8. Set up CMake build for debug: `cmake ..`\n9. Build: `cmake --build .`\n\n\n# Building on Mac using MacPorts \n\n`c3c` may be built on Mac systems not supported by Homebrew\nusing the **[cmake][]**, **[llvm-17][]** and **[clang-17][]**\nports from **[MacPorts][]**.\n\n\n1. Install CMake: `sudo port install cmake`\n2. Install LLVM 17: `sudo port install llvm-17`\n3. Install clang 17: `sudo port install clang-17`\n4. Clone the C3C github repository: `git clone https://github.com/c3lang/c3c.git`\n5. Enter the C3C directory `cd c3c`.\n6. Create a build directory `mkdir build`\n7. Change directory to the build directory `cd build`\n8. ❗️Important before you run cmake❗️<br/>\n   Set **LLVM_DIR** to the directory with the llvm-17 macport .cmake files<br/>\n   `export LLVM_DIR=/opt/local/libexec/llvm-17/lib/cmake/llvm` \n9. Set up CMake build for debug: `cmake ..`\n10. Build: `cmake --build .`\n\n\nSee also discussion [#1701](https://github.com/c3lang/c3c/discussions/1701)\n\n[MacPorts]: https://ports.macports.org/\n[cmake]: https://ports.macports.org/port/cmake\n[llvm-17]: https://ports.macports.org/port/llvm-17\n[clang-17]: https://ports.macports.org/port/clang-17\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"1-install-llvm","text":"1. Install LLVM"},{"depth":2,"slug":"2-clone-the-c3-compiler-source-code-from-github","text":"2. Clone the C3 compiler source code from Github"},{"depth":2,"slug":"3-build-the-compiler","text":"3. Build the compiler"},{"depth":2,"slug":"4-test-it-out","text":"4. Test it out"},{"depth":1,"slug":"building-via-docker","text":"Building via Docker"},{"depth":1,"slug":"building-on-mac-using-homebrew","text":"Building on Mac using Homebrew"},{"depth":1,"slug":"building-on-mac-using-macports","text":"Building on Mac using MacPorts"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
