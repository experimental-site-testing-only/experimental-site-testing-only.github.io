import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML, s as spreadAttributes } from './astro/server_DFSFkPP8.mjs';
import { g as getImage } from './_astro_assets_vwwZhGgV.mjs';
import 'clsx';

const Astro__Z12QOxj = new Proxy({"src":"/_astro/windows_setup.B7_7i2iH.png","width":1030,"height":594,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/home/josh/git/c3_tests/experimental-site-testing-only__local_changes/src/content/docs/Getting Started/windows_setup.png";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/home/josh/git/c3_tests/experimental-site-testing-only__local_changes/src/content/docs/Getting Started/windows_setup.png");
							return target[name];
						}
					});

const images = async function(html) {
					const imageSources = {};
					{
											const regex = new RegExp('__ASTRO_IMAGE_="([^"]*' + "\\./windows_setup\\.png" + '[^"]*)"', 'g');
											let match;
											let occurrenceCounter = 0;
											while ((match = regex.exec(html)) !== null) {
													const matchKey = "./windows_setup.png" + '_' + occurrenceCounter;
													const imageProps = JSON.parse(match[1].replace(/&#x22;/g, '"'));
													const { src, ...props } = imageProps;
													
													imageSources[matchKey] = await getImage({src: Astro__Z12QOxj, ...props});
													occurrenceCounter++;
											}
									}
					return imageSources;
			};

			async function updateImageReferences(html) {
				return images(html).then((imageSources) => {
						return html.replaceAll(/__ASTRO_IMAGE_="([^"]+)"/gm, (full, imagePath) => {
								const decodedImagePath = JSON.parse(imagePath.replace(/&#x22;/g, '"'));
		
								// Use the 'index' property for each image occurrence
								const srcKey = decodedImagePath.src + '_' + decodedImagePath.index;
		
								if (imageSources[srcKey].srcSet && imageSources[srcKey].srcSet.values.length > 0) {
										imageSources[srcKey].attributes.srcset = imageSources[srcKey].srcSet.attribute;
								}
		
								const { index, ...attributesWithoutIndex } = imageSources[srcKey].attributes;
		
								return spreadAttributes({
										src: imageSources[srcKey].src,
										...attributesWithoutIndex,
								});
						});
				});
		}
		

		// NOTE: This causes a top-level await to appear in the user's code, which can break very easily due to a Rollup
	  // bug and certain adapters not supporting it correctly. See: https://github.com/rollup/rollup/issues/4708
	  // Tread carefully!
			const html = await updateImageReferences("<h1 id=\"prebuilt-binaries\">Prebuilt binaries</h1>\n<ul>\n<li><a href=\"#installing-on-windows\">Installing on Windows</a></li>\n<li><a href=\"#installing-on-mac-arm64\">Installing on Mac Arm64</a></li>\n<li><a href=\"#installing-on-ubuntu\">Installing on Ubuntu</a></li>\n<li><a href=\"#installing-on-debian\">Installing on Debian</a></li>\n<li><a href=\"#installing-on-arch-linux\">Installing on Arch</a></li>\n</ul>\n<h2 id=\"installing-on-windows\">Installing on Windows</h2>\n<ol>\n<li><a href=\"https://github.com/c3lang/c3c/releases/download/latest/c3-windows.zip\">Download the C3 compiler</a>. Or the <a href=\"https://github.com/c3lang/c3c/releases/download/latest/c3-windows-debug.zip\">debug build</a></li>\n<li>Unzip it into a folder</li>\n<li>Either Visual Studio 17 or follow the next two steps.</li>\n<li>Run the <code dir=\"auto\">msvc_build_libraries.py</code> Python script which will download the necessary files to compile on Windows.</li>\n</ol>\n<aside aria-label=\"Running the Python script\" class=\"starlight-aside starlight-aside--note\"><p class=\"starlight-aside__title\" aria-hidden=\"true\"><svg viewBox=\"0 0 24 24\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"starlight-aside__icon\"><path d=\"M12 11C11.7348 11 11.4804 11.1054 11.2929 11.2929C11.1054 11.4804 11 11.7348 11 12V16C11 16.2652 11.1054 16.5196 11.2929 16.7071C11.4804 16.8946 11.7348 17 12 17C12.2652 17 12.5196 16.8946 12.7071 16.7071C12.8946 16.5196 13 16.2652 13 16V12C13 11.7348 12.8946 11.4804 12.7071 11.2929C12.5196 11.1054 12.2652 11 12 11ZM12.38 7.08C12.1365 6.97998 11.8635 6.97998 11.62 7.08C11.4973 7.12759 11.3851 7.19896 11.29 7.29C11.2017 7.3872 11.1306 7.49882 11.08 7.62C11.024 7.73868 10.9966 7.86882 11 8C10.9992 8.13161 11.0245 8.26207 11.0742 8.38391C11.124 8.50574 11.1973 8.61656 11.29 8.71C11.3872 8.79833 11.4988 8.86936 11.62 8.92C11.7715 8.98224 11.936 9.00632 12.099 8.99011C12.2619 8.97391 12.4184 8.91792 12.5547 8.82707C12.691 8.73622 12.8029 8.61328 12.8805 8.46907C12.9582 8.32486 12.9992 8.16378 13 8C12.9963 7.73523 12.8927 7.48163 12.71 7.29C12.6149 7.19896 12.5028 7.12759 12.38 7.08ZM12 2C10.0222 2 8.08879 2.58649 6.4443 3.6853C4.79981 4.78412 3.51809 6.3459 2.76121 8.17317C2.00433 10.0004 1.8063 12.0111 2.19215 13.9509C2.578 15.8907 3.53041 17.6725 4.92894 19.0711C6.32746 20.4696 8.10929 21.422 10.0491 21.8079C11.9889 22.1937 13.9996 21.9957 15.8268 21.2388C17.6541 20.4819 19.2159 19.2002 20.3147 17.5557C21.4135 15.9112 22 13.9778 22 12C22 10.6868 21.7413 9.38642 21.2388 8.17317C20.7363 6.95991 19.9997 5.85752 19.0711 4.92893C18.1425 4.00035 17.0401 3.26375 15.8268 2.7612C14.6136 2.25866 13.3132 2 12 2ZM12 20C10.4178 20 8.87104 19.5308 7.55544 18.6518C6.23985 17.7727 5.21447 16.5233 4.60897 15.0615C4.00347 13.5997 3.84504 11.9911 4.15372 10.4393C4.4624 8.88743 5.22433 7.46197 6.34315 6.34315C7.46197 5.22433 8.88743 4.4624 10.4393 4.15372C11.9911 3.84504 13.5997 4.00346 15.0615 4.60896C16.5233 5.21447 17.7727 6.23984 18.6518 7.55544C19.5308 8.87103 20 10.4177 20 12C20 14.1217 19.1572 16.1566 17.6569 17.6569C16.1566 19.1571 14.1217 20 12 20Z\"></path></svg>Running the Python script</p><section class=\"starlight-aside__content\"><p>If you don’t have Python installed, you can download it from <a href=\"https://www.python.org/downloads/\">the Python Website</a>.\nor get it from the <a href=\"https://www.microsoft.com/en-us/p/python-39/9p7qfqmjrfp7\">the Microsoft Store</a></p><p>Afterwards you can double click the <code dir=\"auto\">msvc_build_libraries.py</code> file and pick “python” from the list of programs in the “Select an app to open this .py file” window.\n<img __ASTRO_IMAGE_=\"{&#x22;src&#x22;:&#x22;./windows_setup.png&#x22;,&#x22;alt&#x22;:&#x22;Python&#x22;,&#x22;index&#x22;:0}\"></p></section></aside>\n<h3 id=\"optional-set-c3c-as-a-global-environment-variable\">Optional: set c3c as a global environment variable</h3>\n<ol start=\"5\">\n<li>copy the folder</li>\n<li>navigate to <code dir=\"auto\">C:\\Program Files</code></li>\n<li>paste the folder here</li>\n<li>navigate inside the folder you’ve pasted</li>\n<li>copy the path of the folder</li>\n<li>search for “edit the system environment variables” on your computer</li>\n<li>click on the “environment variables” button on the bottom right</li>\n<li>under “user variables” double click on “path”</li>\n<li>click on “new” and paste the path to the folder</li>\n<li>run <code dir=\"auto\">c3c</code> on anywhere in your computer!</li>\n</ol>\n<div class=\"expressive-code\"><link rel=\"stylesheet\" href=\"/_astro/ec.j8ofn.css\"><script type=\"module\" src=\"/_astro/ec.8zarh.js\"></script><figure class=\"frame is-terminal not-content\"><figcaption class=\"header\"><span class=\"title\"></span><span class=\"sr-only\">Terminal window</span></figcaption><pre data-language=\"bash\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#82AAFF;--1:#3C63B3\">c3c</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#ECC48D;--1:#3C63B3\">compile</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#ECC48D;--1:#3C63B3\">./hello.c3</span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"c3c compile ./hello.c3\"><div></div></button></div></figure></div>\n<h2 id=\"installing-on-mac-arm64\">Installing on Mac Arm64</h2>\n<ol>\n<li>Make sure you have XCode with command line tools installed.</li>\n<li><a href=\"https://github.com/c3lang/c3c/releases/download/latest/c3-macos.zip\">Download the zip file</a>\n(debug version <a href=\"https://github.com/c3lang/c3c/releases/download/latest/c3-macos-debug.zip\">here</a>)</li>\n<li>Unzip executable and standard lib.</li>\n<li>Run <code dir=\"auto\">./c3c</code>.</li>\n</ol>\n<h2 id=\"installing-on-ubuntu\">Installing on Ubuntu</h2>\n<ol>\n<li><a href=\"https://github.com/c3lang/c3c/releases/download/latest/c3-ubuntu-20.tar.gz\">Download tar file</a>\n(debug version <a href=\"https://github.com/c3lang/c3c/releases/download/latest/c3-ubuntu-20-debug.tar.gz\">here</a>)</li>\n<li>Unpack executable and standard lib.</li>\n<li>Run <code dir=\"auto\">./c3c</code>.</li>\n</ol>\n<h2 id=\"installing-on-debian\">Installing on Debian</h2>\n<ol>\n<li><a href=\"https://github.com/c3lang/c3c/releases/download/latest/c3-linux.tar.gz\">Download tar file</a>\n(debug version <a href=\"https://github.com/c3lang/c3c/releases/download/latest/c3-linux-debug.tar.gz\">here</a>)</li>\n<li>Unpack executable and standard lib.</li>\n<li>Run <code dir=\"auto\">./c3c</code>.</li>\n</ol>\n<h2 id=\"installing-on-arch-linux\">Installing on Arch Linux</h2>\n<p>There is an AUR package for the c3c compiler : <a href=\"https://aur.archlinux.org/packages/c3c-git\">c3c-git</a>.</p>\n<p>Due to some issues with the LLVM packaged for Arch Linux, the AUR package will download and use LLVM 16 from Ubuntu-23.04 to compile the c3c compiler.</p>\n<p>You can use your AUR package manager:</p>\n<div class=\"expressive-code\"><figure class=\"frame is-terminal not-content\"><figcaption class=\"header\"><span class=\"title\"></span><span class=\"sr-only\">Terminal window</span></figcaption><pre data-language=\"bash\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#82AAFF;--1:#3C63B3\">paru</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#82AAFF;--1:#3C63B3\">-S</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#ECC48D;--1:#3C63B3\">c3c-git</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#809191;--1:#616671\"># or yay -S c3c-git</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#809191;--1:#616671\"># or aura -A c3c-git</span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"paru -S c3c-git\"><div></div></button></div></figure></div>\n<p>Or clone it manually:</p>\n<div class=\"expressive-code\"><figure class=\"frame is-terminal not-content\"><figcaption class=\"header\"><span class=\"title\"></span><span class=\"sr-only\">Terminal window</span></figcaption><pre data-language=\"bash\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#82AAFF;--1:#3C63B3\">git</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#ECC48D;--1:#3C63B3\">clone</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#ECC48D;--1:#3C63B3\">https://aur.archlinux.org/c3c-git.git</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C5E478;--1:#3C63B3\">cd</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#ECC48D;--1:#3C63B3\">c3c-git</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#82AAFF;--1:#3C63B3\">makepkg</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#82AAFF;--1:#3C63B3\">-si</span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"git clone https://aur.archlinux.org/c3c-git.gitcd c3c-gitmakepkg -si\"><div></div></button></div></figure></div>");
	

				const frontmatter = {"title":"Install C3 Compiler Binary","description":"Installing C3 Compiler Binary","sidebar":{"order":20}};
				const file = "/home/josh/git/c3_tests/experimental-site-testing-only__local_changes/src/content/docs/Getting Started/prebuilt-binaries.md";
				const url = undefined;
				function rawContent() {
					return "\n\n# Prebuilt binaries\n- [Installing on Windows](#installing-on-windows)\n- [Installing on Mac Arm64](#installing-on-mac-arm64)\n- [Installing on Ubuntu](#installing-on-ubuntu)\n- [Installing on Debian](#installing-on-debian) \n- [Installing on Arch](#installing-on-arch-linux) \n\n## Installing on Windows\n1.  [Download the C3 compiler](https://github.com/c3lang/c3c/releases/download/latest/c3-windows.zip). Or the [debug build](https://github.com/c3lang/c3c/releases/download/latest/c3-windows-debug.zip)\n2. Unzip it into a folder\n3. Either Visual Studio 17 or follow the next two steps.\n4. Run the `msvc_build_libraries.py` Python script which will download the necessary files to compile on Windows.\n\n:::note[Running the Python script]\n\nIf you don't have Python installed, you can download it from [the Python Website](https://www.python.org/downloads/).\nor get it from the [the Microsoft Store](https://www.microsoft.com/en-us/p/python-39/9p7qfqmjrfp7)\n\nAfterwards you can double click the `msvc_build_libraries.py` file and pick \"python\" from the list of programs in the \"Select an app to open this .py file\" window.\n![Python](./windows_setup.png)\n\n:::\n\n### Optional: set c3c as a global environment variable\n\n5. copy the folder\n6. navigate to `C:\\Program Files`\n7. paste the folder here\n8. navigate inside the folder you've pasted\n9. copy the path of the folder\n10. search for \"edit the system environment variables\" on your computer\n11. click on the \"environment variables\" button on the bottom right\n12. under \"user variables\" double click on \"path\"\n13. click on \"new\" and paste the path to the folder\n14. run `c3c` on anywhere in your computer!\n```bash\nc3c compile ./hello.c3\n```\n\n## Installing on Mac Arm64\n1. Make sure you have XCode with command line tools installed.\n2. [Download the zip file](https://github.com/c3lang/c3c/releases/download/latest/c3-macos.zip)\n   (debug version [here](https://github.com/c3lang/c3c/releases/download/latest/c3-macos-debug.zip))\n3. Unzip executable and standard lib.\n4. Run `./c3c`.\n\n## Installing on Ubuntu\n1. [Download tar file](https://github.com/c3lang/c3c/releases/download/latest/c3-ubuntu-20.tar.gz)\n   (debug version [here](https://github.com/c3lang/c3c/releases/download/latest/c3-ubuntu-20-debug.tar.gz))\n2. Unpack executable and standard lib.\n3. Run `./c3c`.\n\n## Installing on Debian\n1. [Download tar file](https://github.com/c3lang/c3c/releases/download/latest/c3-linux.tar.gz)\n   (debug version [here](https://github.com/c3lang/c3c/releases/download/latest/c3-linux-debug.tar.gz))\n2. Unpack executable and standard lib.\n3. Run `./c3c`.\n\n## Installing on Arch Linux\nThere is an AUR package for the c3c compiler : [c3c-git](https://aur.archlinux.org/packages/c3c-git).\n\nDue to some issues with the LLVM packaged for Arch Linux, the AUR package will download and use LLVM 16 from Ubuntu-23.04 to compile the c3c compiler.\n\nYou can use your AUR package manager:\n```bash\nparu -S c3c-git\n# or yay -S c3c-git\n# or aura -A c3c-git\n```\n\nOr clone it manually:\n```bash\ngit clone https://aur.archlinux.org/c3c-git.git\ncd c3c-git\nmakepkg -si\n```\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":1,"slug":"prebuilt-binaries","text":"Prebuilt binaries"},{"depth":2,"slug":"installing-on-windows","text":"Installing on Windows"},{"depth":3,"slug":"optional-set-c3c-as-a-global-environment-variable","text":"Optional: set c3c as a global environment variable"},{"depth":2,"slug":"installing-on-mac-arm64","text":"Installing on Mac Arm64"},{"depth":2,"slug":"installing-on-ubuntu","text":"Installing on Ubuntu"},{"depth":2,"slug":"installing-on-debian","text":"Installing on Debian"},{"depth":2,"slug":"installing-on-arch-linux","text":"Installing on Arch Linux"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
