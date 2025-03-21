import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_afRpe8AA.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<h2 id=\"contributions-welcome\">Contributions Welcome!</h2>\n<p>The C3 language is still in its <em>development</em> phase, which means\nfunctionality and specification are subject to change. That also means\nthat any contribution right now will have a big impact on the language.\nSo if you find the project interesting, here’s what you can do to help:</p>\n<h3 id=\"-discuss-the-language\">💬 Discuss The Language</h3>\n<ul>\n<li>Join us on <a href=\"https://discord.gg/qN76R87\">C3 Discord</a>.</li>\n</ul>\n<h3 id=\"-suggest-improvements\">💡 Suggest Improvements</h3>\n<ul>\n<li>Found a bug? <a href=\"https://github.com/c3lang/c3c/issues/new\">File an issue for C3 compiler</a></li>\n<li>Spotted a typo or broken link? <a href=\"https://github.com/c3lang/c3-web/issues/new\">File an issue for the website</a></li>\n</ul>\n<h3 id=\"-contribute\">💪 Contribute</h3>\n<p>Now the compiler is stable, what is needed now are the <em>non-essentials</em>, such as a docs generator, editor plugins, LSP etc.</p>\n<ul>\n<li><a href=\"https://github.com/c3lang/c3c/issues/1456\">A list of what’s needed is on Github</a>.</li>\n<li><a href=\"https://github.com/c3lang/c3c\">Help on the compiler</a>.</li>\n<li><a href=\"https://github.com/c3lang/c3-web\">Help on the docs</a>.</li>\n</ul>";

				const frontmatter = {"title":"Community & Contribute","description":"Info regarding the development of C3","sidebar":{"order":10}};
				const file = "/home/josh/git/c3_tests/experimental-site-testing-only__local_changes/src/content/docs/Get Involved/index.md";
				const url = undefined;
				function rawContent() {
					return "\n## Contributions Welcome!\n\nThe C3 language is still in its *development* phase, which means\nfunctionality and specification are subject to change. That also means\nthat any contribution right now will have a big impact on the language.\nSo if you find the project interesting, here’s what you can do to help:\n\n### 💬 Discuss The Language\n- Join us on [C3 Discord](https://discord.gg/qN76R87).\n\n### 💡 Suggest Improvements\n- Found a bug? [File an issue for C3 compiler](https://github.com/c3lang/c3c/issues/new)\n- Spotted a typo or broken link? [File an issue for the website](https://github.com/c3lang/c3-web/issues/new)\n\n### 💪 Contribute\n\nNow the compiler is stable, what is needed now are the *non-essentials*, such as a docs generator, editor plugins, LSP etc.\n\n- [A list of what's needed is on Github](https://github.com/c3lang/c3c/issues/1456).\n- [Help on the compiler](https://github.com/c3lang/c3c).\n- [Help on the docs](https://github.com/c3lang/c3-web).\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"contributions-welcome","text":"Contributions Welcome!"},{"depth":3,"slug":"-discuss-the-language","text":"💬 Discuss The Language"},{"depth":3,"slug":"-suggest-improvements","text":"💡 Suggest Improvements"},{"depth":3,"slug":"-contribute","text":"💪 Contribute"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
