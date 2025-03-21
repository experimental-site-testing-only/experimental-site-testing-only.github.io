import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_afRpe8AA.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<h3 id=\"zero-init-by-default\">Zero init by default</h3>\n<p>Unlike C, C3 local variables are zero-initialized by default. To avoid zero initialization, you need to explicitly opt-out.</p>\n<div class=\"expressive-code\"><link rel=\"stylesheet\" href=\"/_astro/ec.j8ofn.css\"><script type=\"module\" src=\"/_astro/ec.8zarh.js\"></script><figure class=\"frame not-content\"><figcaption class=\"header\"></figcaption><pre data-language=\"c3\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C792EA;--1:#8D46B4\">int</span><span style=\"--0:#D6DEEB;--1:#403F53\"> x;</span><span style=\"--0:#809191;--1:#5E6578\">               // x = 0</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C792EA;--1:#8D46B4\">int</span><span style=\"--0:#D6DEEB;--1:#403F53\"> y @noinit;</span><span style=\"--0:#809191;--1:#5E6578\">       // y is explicitly undefined and must be assigned before use.</span></div></div><div class=\"ec-line\"><div class=\"code\">\n</div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#D6DEEB;--1:#403F53\">AStruct foo;</span><span style=\"--0:#809191;--1:#5E6578\">         // foo is implicitly zeroed</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#D6DEEB;--1:#403F53\">AStruct bar </span><span style=\"--0:#C792EA;--1:#8D46B4\">=</span><span style=\"--0:#D6DEEB;--1:#403F53\"> {};</span><span style=\"--0:#809191;--1:#5E6578\">    // bar is explicitly zeroed</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#D6DEEB;--1:#403F53\">AStruct baz @noinit;</span><span style=\"--0:#809191;--1:#5E6578\"> // baz is explicitly undefined</span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"int x;               // x = 0int y @noinit;       // y is explicitly undefined and must be assigned before use.AStruct foo;         // foo is implicitly zeroedAStruct bar = {};    // bar is explicitly zeroedAStruct baz @noinit; // baz is explicitly undefined\"><div></div></button></div></figure></div>\n<p>Using a variable that is explicitly undefined before will trap or be initialized to a\nspecific value when compiling “safe” and is undefined behaviour in “fast” builds.</p>";

				const frontmatter = {"title":"Variables","description":"Variables","sidebar":{"order":41}};
				const file = "/home/josh/git/c3_tests/experimental-site-testing-only__local_changes/src/content/docs/Language Fundamentals/variables.md";
				const url = undefined;
				function rawContent() {
					return "\n\n### Zero init by default\n\nUnlike C, C3 local variables are zero-initialized by default. To avoid zero initialization, you need to explicitly opt-out.\n\n```c3\nint x;               // x = 0\nint y @noinit;       // y is explicitly undefined and must be assigned before use.\n\nAStruct foo;         // foo is implicitly zeroed\nAStruct bar = {};    // bar is explicitly zeroed\nAStruct baz @noinit; // baz is explicitly undefined\n```\n\nUsing a variable that is explicitly undefined before will trap or be initialized to a \nspecific value when compiling \"safe\" and is undefined behaviour in \"fast\" builds.\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":3,"slug":"zero-init-by-default","text":"Zero init by default"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
