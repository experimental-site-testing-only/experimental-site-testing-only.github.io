import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_DFSFkPP8.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>C3 uses three distinct comment types:</p>\n<ol>\n<li>The normal <code dir=\"auto\">//</code> single line comment.</li>\n<li>The classic <code dir=\"auto\">/* ... */</code> multi-line C style comment, but unlike in C they are allowed to nest.</li>\n<li>Documentation comments <code dir=\"auto\">&#x3C;* ... *></code> the text within these comments will be parsed as documentation and optional <a href=\"/language-common/contracts/\">Contracts</a> on the following code.</li>\n</ol>\n<h2 id=\"doc-comments\">Doc Comments</h2>\n<p>Documentation comments start with <code dir=\"auto\">&#x3C;*</code> and must be terminated using <code dir=\"auto\">*></code>. Note that any number of <code dir=\"auto\">*</code> may follow <code dir=\"auto\">&#x3C;*</code> and any number of stars may preceed <code dir=\"auto\">*></code>. Any space and <code dir=\"auto\">*</code> in the beginning of each line will be ignored.</p>\n<p>For example:</p>\n<div class=\"expressive-code\"><link rel=\"stylesheet\" href=\"/_astro/ec.j8ofn.css\"><script type=\"module\" src=\"/_astro/ec.8zarh.js\"></script><figure class=\"frame not-content\"><figcaption class=\"header\"></figcaption><pre data-language=\"c3\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C792EA;--1:#8D46B4\">&#x3C;*</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#D6DEEB;--1:#403F53\"> </span></span><span style=\"--0:#D6DEEB;--1:#403F53\">Here are some docs.</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#D6DEEB;--1:#403F53\"> </span></span><span style=\"--0:#D6DEEB;--1:#403F53\">@param num_foo `The number of foos.`</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#D6DEEB;--1:#403F53\"> </span></span><span style=\"--0:#D6DEEB;--1:#403F53\">@required num_foo </span><span style=\"--0:#C792EA;--1:#8D46B4\">></span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#F78C6C;--1:#AA0982\">4</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#D6DEEB;--1:#403F53\"> </span></span><span style=\"--0:#D6DEEB;--1:#403F53\">@deprecated</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#D6DEEB;--1:#403F53\"> </span></span><span style=\"--0:#D6DEEB;--1:#403F53\">@mycustom </span><span style=\"--0:#F78C6C;--1:#AA0982\">2</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C792EA;--1:#8D46B4\">*></span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C792EA;--1:#8D46B4\">void</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#82AAFF;--1:#3C63B3\">bar</span><span style=\"--0:#D6DEEB;--1:#403F53\">(</span><span style=\"--0:#C792EA;--1:#8D46B4\">int</span><span style=\"--1:#403F53\"><span style=\"--0:#D6DEEB\"> </span><span style=\"--0:#D7DBE0\">num_foo</span><span style=\"--0:#D6DEEB\">)</span></span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#D6DEEB;--1:#403F53\">{</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#D6DEEB;--1:#403F53\">    </span></span><span style=\"--0:#D6DEEB;--1:#403F53\">io::</span><span style=\"--0:#82AAFF;--1:#3C63B3\">printfn</span><span style=\"--0:#D6DEEB;--1:#403F53\">(</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#82AAFF;--1:#3C63B3\">%d</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#D6DEEB;--1:#403F53\">, num_foo);</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#D6DEEB;--1:#403F53\">}</span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"<* Here are some docs. @param num_foo &#x60;The number of foos.&#x60; @required num_foo > 4 @deprecated @mycustom 2*>void bar(int num_foo){    io::printfn(&#x22;%d&#x22;, num_foo);}\"><div></div></button></div></figure></div>\n<h3 id=\"doc-comments-are-parsed\">Doc Comments Are Parsed</h3>\n<p>The following was extracted:</p>\n<ul>\n<li>The function description: <em>“Here are some docs.”</em></li>\n<li>The <code dir=\"auto\">num_foo</code> parameter has the description: <em>“The number of foos”</em>.</li>\n<li>A <a href=\"/language-common/contracts/\">Contract</a> annotation for the compiler: <code dir=\"auto\">@required num_foo > 4</code> which tells the compiler and a user of the function that a precondition is that <code dir=\"auto\">num_foo</code> must be greater than 4.</li>\n<li>A function <a href=\"/language-common/attributes/\">Attribute</a> marking it as <code dir=\"auto\">@deprecated</code>, which displays warnings.</li>\n<li>A custom function <a href=\"/language-common/attributes/\">Attribute</a> <code dir=\"auto\">@mycustom</code>. The compiler is free to silently ignore custom Attributes, they can be used to optionally emit warnings, but are otherwise ignored.</li>\n</ul>\n<h3 id=\"available-annotations\">Available annotations</h3>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n<table><thead><tr><th>Name</th><th align=\"right\">format</th></tr></thead><tbody><tr><td>@param</td><td align=\"right\"><code dir=\"auto\">@param &#x3C;param> &#x3C;description></code></td></tr><tr><td>@return</td><td align=\"right\"><code dir=\"auto\">@return &#x3C;description></code></td></tr><tr><td>@return!</td><td align=\"right\"><code dir=\"auto\">@return! &#x3C;fault1>, &#x3C;fault2>, ...</code></td></tr><tr><td>@deprecated</td><td align=\"right\"><code dir=\"auto\">@deprecated &#x3C;optional description></code></td></tr><tr><td>@require</td><td align=\"right\"><code dir=\"auto\">@require &#x3C;expr1>, &#x3C;expr2>, ...</code></td></tr><tr><td>@ensure</td><td align=\"right\"><code dir=\"auto\">@ensure &#x3C;expre1>, &#x3C;expr2>, ...</code></td></tr><tr><td>@pure</td><td align=\"right\"><code dir=\"auto\">@pure</code></td></tr></tbody></table>\n<p>See <a href=\"/language-common/contracts/\">Contracts</a> for information regarding <code dir=\"auto\">@require</code>, <code dir=\"auto\">@ensure</code>, <code dir=\"auto\">@const</code>, <code dir=\"auto\">@pure</code>, <code dir=\"auto\">@checked</code>.</p>";

				const frontmatter = {"title":"Comments & Documentation","description":"Comments & Documentation","sidebar":{"order":40}};
				const file = "/home/josh/git/c3_tests/experimental-site-testing-only__local_changes/src/content/docs/Language Fundamentals/comments.md";
				const url = undefined;
				function rawContent() {
					return "C3 uses three distinct comment types:\n\n1. The normal `//` single line comment.\n2. The classic `/* ... */` multi-line C style comment, but unlike in C they are allowed to nest.\n3. Documentation comments `<* ... *>` the text within these comments will be parsed as documentation and optional [Contracts](/language-common/contracts/) on the following code.\n\n## Doc Comments\n\nDocumentation comments start with `<*` and must be terminated using `*>`. Note that any number of `*` may follow `<*` and any number of stars may preceed `*>`. Any space and `*` in the beginning of each line will be ignored.\n\nFor example:\n\n```c3\n<*\n Here are some docs.\n @param num_foo `The number of foos.`\n @required num_foo > 4 \n @deprecated\n @mycustom 2\n*>\nvoid bar(int num_foo)\n{\n    io::printfn(\"%d\", num_foo);\n}\n```\n \n### Doc Comments Are Parsed\nThe following was extracted:\n- The function description: *\"Here are some docs.\"*\n- The `num_foo` parameter has the description: *\"The number of foos\"*.\n- A [Contract](/language-common/contracts/) annotation for the compiler: `@required num_foo > 4` which tells the compiler and a user of the function that a precondition is that `num_foo` must be greater than 4.\n- A function [Attribute](/language-common/attributes/) marking it as `@deprecated`, which displays warnings.\n- A custom function [Attribute](/language-common/attributes/) `@mycustom`. The compiler is free to silently ignore custom Attributes, they can be used to optionally emit warnings, but are otherwise ignored.\n\n### Available annotations\n\n| Name        |                               format |\n|-------------|-------------------------------------:|\n| @param      |       `@param <param> <description>` |\n| @return     |              `@return <description>` |\n| @return!    |   `@return! <fault1>, <fault2>, ...` |\n| @deprecated | `@deprecated <optional description>` |\n| @require    |     `@require <expr1>, <expr2>, ...` |\n| @ensure     |     `@ensure <expre1>, <expr2>, ...` |\n| @pure       |                              `@pure` |\n    \nSee [Contracts](/language-common/contracts/) for information regarding `@require`, `@ensure`, `@const`, `@pure`, `@checked`.\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"doc-comments","text":"Doc Comments"},{"depth":3,"slug":"doc-comments-are-parsed","text":"Doc Comments Are Parsed"},{"depth":3,"slug":"available-annotations","text":"Available annotations"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };