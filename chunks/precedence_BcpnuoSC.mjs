import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_afRpe8AA.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>Precedence rules in C3 differs from C/C++. Here are all precedence levels in C3, listed from highest (1) to lowest (11):</p>\n<ol>\n<li><code dir=\"auto\">()</code>, <code dir=\"auto\">[]</code>, <code dir=\"auto\">.</code>, <code dir=\"auto\">!!</code> postfix <code dir=\"auto\">!</code>, <code dir=\"auto\">++</code> and <code dir=\"auto\">--</code></li>\n<li><code dir=\"auto\">@</code>, prefix <code dir=\"auto\">-</code>, <code dir=\"auto\">~</code>, prefix <code dir=\"auto\">*</code>, <code dir=\"auto\">&#x26;</code>, prefix <code dir=\"auto\">++</code> and <code dir=\"auto\">--</code></li>\n<li>infix <code dir=\"auto\">*</code>, <code dir=\"auto\">/</code>, <code dir=\"auto\">%</code></li>\n<li><code dir=\"auto\">&#x3C;&#x3C;</code>, <code dir=\"auto\">>></code></li>\n<li><code dir=\"auto\">^</code>, <code dir=\"auto\">|</code>, infix <code dir=\"auto\">&#x26;</code></li>\n<li><code dir=\"auto\">+</code>, infix <code dir=\"auto\">-</code>, <code dir=\"auto\">+++</code></li>\n<li><code dir=\"auto\">==</code>, <code dir=\"auto\">!=</code>, <code dir=\"auto\">>=</code>, <code dir=\"auto\">&#x3C;=</code>, <code dir=\"auto\">></code>, <code dir=\"auto\">&#x3C;</code></li>\n<li><code dir=\"auto\">&#x26;&#x26;</code>, <code dir=\"auto\">&#x26;&#x26;&#x26;</code></li>\n<li><code dir=\"auto\">||</code>, <code dir=\"auto\">|||</code></li>\n<li>ternary <code dir=\"auto\">?:</code> <code dir=\"auto\">??</code></li>\n<li><code dir=\"auto\">=</code>, <code dir=\"auto\">*=</code>, <code dir=\"auto\">/=</code>, <code dir=\"auto\">%=</code>, <code dir=\"auto\">+=</code>, <code dir=\"auto\">-=</code>, <code dir=\"auto\">&#x3C;&#x3C;=</code>, <code dir=\"auto\">>>=</code>, <code dir=\"auto\">&#x26;=</code>, <code dir=\"auto\">^=</code>, <code dir=\"auto\">|=</code></li>\n</ol>\n<p>The main difference is that bitwise operations and shift has higher precedence than addition/subtraction and multiplication/division in C3. Bitwise operations also have higher precedence than the relational operators. Also, there is no difference in precedence between <code dir=\"auto\">&#x26;&#x26;</code> and <code dir=\"auto\">||</code> or between the bitwise operators.</p>\n<p>Examples:</p>\n<div class=\"expressive-code\"><link rel=\"stylesheet\" href=\"/_astro/ec.j8ofn.css\"><script type=\"module\" src=\"/_astro/ec.8zarh.js\"></script><figure class=\"frame not-content\"><figcaption class=\"header\"></figcaption><pre data-language=\"c3\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#D6DEEB;--1:#403F53\">a </span><span style=\"--0:#C792EA;--1:#8D46B4\">+</span><span style=\"--0:#D6DEEB;--1:#403F53\"> b </span><span style=\"--0:#C792EA;--1:#8D46B4\">>></span><span style=\"--0:#D6DEEB;--1:#403F53\"> c </span><span style=\"--0:#C792EA;--1:#8D46B4\">+</span><span style=\"--0:#D6DEEB;--1:#403F53\"> d</span></div></div><div class=\"ec-line\"><div class=\"code\">\n</div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#D6DEEB;--1:#403F53\">(a </span><span style=\"--0:#C792EA;--1:#8D46B4\">+</span><span style=\"--0:#D6DEEB;--1:#403F53\"> b) </span><span style=\"--0:#C792EA;--1:#8D46B4\">>></span><span style=\"--0:#D6DEEB;--1:#403F53\"> (c </span><span style=\"--0:#C792EA;--1:#8D46B4\">+</span><span style=\"--0:#D6DEEB;--1:#403F53\"> d)</span><span style=\"--0:#809191;--1:#5E6578\"> // C (+ - are evaluated before >>)</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#D6DEEB;--1:#403F53\">a </span><span style=\"--0:#C792EA;--1:#8D46B4\">+</span><span style=\"--0:#D6DEEB;--1:#403F53\"> (b </span><span style=\"--0:#C792EA;--1:#8D46B4\">>></span><span style=\"--0:#D6DEEB;--1:#403F53\"> c) </span><span style=\"--0:#C792EA;--1:#8D46B4\">+</span><span style=\"--0:#D6DEEB;--1:#403F53\"> d</span><span style=\"--0:#809191;--1:#5E6578\">   // C3 (>> is evaluated before + -)</span></div></div><div class=\"ec-line\"><div class=\"code\">\n</div></div><div class=\"ec-line\"><div class=\"code\">\n</div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#D6DEEB;--1:#403F53\">a </span><span style=\"--0:#C792EA;--1:#8D46B4\">&#x26;</span><span style=\"--0:#D6DEEB;--1:#403F53\"> b </span><span style=\"--0:#C792EA;--1:#8D46B4\">==</span><span style=\"--0:#D6DEEB;--1:#403F53\"> c</span></div></div><div class=\"ec-line\"><div class=\"code\">\n</div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#D6DEEB;--1:#403F53\">a </span><span style=\"--0:#C792EA;--1:#8D46B4\">&#x26;</span><span style=\"--0:#D6DEEB;--1:#403F53\"> (b </span><span style=\"--0:#C792EA;--1:#8D46B4\">==</span><span style=\"--0:#D6DEEB;--1:#403F53\"> c)</span><span style=\"--0:#809191;--1:#5E6578\">       // C  (bitwise operators are evaluated after relational)</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#D6DEEB;--1:#403F53\">(a </span><span style=\"--0:#C792EA;--1:#8D46B4\">&#x26;</span><span style=\"--0:#D6DEEB;--1:#403F53\"> b) </span><span style=\"--0:#C792EA;--1:#8D46B4\">==</span><span style=\"--0:#D6DEEB;--1:#403F53\"> c</span><span style=\"--0:#809191;--1:#5E6578\">       // C3 (bitwise operators are evaluated before relational)</span></div></div><div class=\"ec-line\"><div class=\"code\">\n</div></div><div class=\"ec-line\"><div class=\"code\">\n</div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#D6DEEB;--1:#403F53\">a </span><span style=\"--0:#C792EA;--1:#8D46B4\">></span><span style=\"--0:#D6DEEB;--1:#403F53\"> b </span><span style=\"--0:#C792EA;--1:#8D46B4\">==</span><span style=\"--0:#D6DEEB;--1:#403F53\"> c </span><span style=\"--0:#C792EA;--1:#8D46B4\">&#x3C;</span><span style=\"--0:#D6DEEB;--1:#403F53\"> d</span></div></div><div class=\"ec-line\"><div class=\"code\">\n</div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#D6DEEB;--1:#403F53\">(a </span><span style=\"--0:#C792EA;--1:#8D46B4\">></span><span style=\"--0:#D6DEEB;--1:#403F53\"> b) </span><span style=\"--0:#C792EA;--1:#8D46B4\">==</span><span style=\"--0:#D6DEEB;--1:#403F53\"> (c </span><span style=\"--0:#C792EA;--1:#8D46B4\">&#x3C;</span><span style=\"--0:#D6DEEB;--1:#403F53\"> d)</span><span style=\"--0:#809191;--1:#5E6578\"> // C  (&#x3C; > binds tighter than ==)</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#D6DEEB;--1:#403F53\">((a </span><span style=\"--0:#C792EA;--1:#8D46B4\">></span><span style=\"--0:#D6DEEB;--1:#403F53\"> b) </span><span style=\"--0:#C792EA;--1:#8D46B4\">==</span><span style=\"--0:#D6DEEB;--1:#403F53\"> c) </span><span style=\"--0:#C792EA;--1:#8D46B4\">&#x3C;</span><span style=\"--0:#D6DEEB;--1:#403F53\"> d</span><span style=\"--0:#809191;--1:#5E6578\"> // C3 Error, requires parenthesis!</span></div></div><div class=\"ec-line\"><div class=\"code\">\n</div></div><div class=\"ec-line\"><div class=\"code\">\n</div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#D6DEEB;--1:#403F53\">a </span><span style=\"--0:#C792EA;--1:#8D46B4\">|</span><span style=\"--0:#D6DEEB;--1:#403F53\"> b </span><span style=\"--0:#C792EA;--1:#8D46B4\">^</span><span style=\"--0:#D6DEEB;--1:#403F53\"> c </span><span style=\"--0:#C792EA;--1:#8D46B4\">&#x26;</span><span style=\"--0:#D6DEEB;--1:#403F53\"> d</span></div></div><div class=\"ec-line\"><div class=\"code\">\n</div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#D6DEEB;--1:#403F53\">a </span><span style=\"--0:#C792EA;--1:#8D46B4\">|</span><span style=\"--0:#D6DEEB;--1:#403F53\"> ((b </span><span style=\"--0:#C792EA;--1:#8D46B4\">^</span><span style=\"--0:#D6DEEB;--1:#403F53\"> c) </span><span style=\"--0:#C792EA;--1:#8D46B4\">&#x26;</span><span style=\"--0:#D6DEEB;--1:#403F53\"> d)</span><span style=\"--0:#809191;--1:#5E6578\">  // C  (All bitwise operators have different precedence)</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#D6DEEB;--1:#403F53\">((a </span><span style=\"--0:#C792EA;--1:#8D46B4\">|</span><span style=\"--0:#D6DEEB;--1:#403F53\"> b) </span><span style=\"--0:#C792EA;--1:#8D46B4\">^</span><span style=\"--0:#D6DEEB;--1:#403F53\"> c) </span><span style=\"--0:#C792EA;--1:#8D46B4\">&#x26;</span><span style=\"--0:#D6DEEB;--1:#403F53\"> d</span><span style=\"--0:#809191;--1:#5E6578\">  // C3 Error, requires parenthesis!</span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"a + b >> c + d(a + b) >> (c + d) // C (+ - are evaluated before >>)a + (b >> c) + d   // C3 (>> is evaluated before + -)a &#x26; b == ca &#x26; (b == c)       // C  (bitwise operators are evaluated after relational)(a &#x26; b) == c       // C3 (bitwise operators are evaluated before relational)a > b == c < d(a > b) == (c < d) // C  (< > binds tighter than ==)((a > b) == c) < d // C3 Error, requires parenthesis!a | b ^ c &#x26; da | ((b ^ c) &#x26; d)  // C  (All bitwise operators have different precedence)((a | b) ^ c) &#x26; d  // C3 Error, requires parenthesis!\"><div></div></button></div></figure></div>\n<p>The change in precedence of the bitwise operators corrects a long standing issue in the C specification. The change in precedence for shift operations goes towards making the precedence less surprising.</p>\n<p>Conflating the precedence of relational and equality operations, and all bitwise operations was motivated by simplification: few remember the exact internal differences in precedence between bitwise operators. Parenthesis are required for those conflated levels of precedence.</p>\n<p>Left-to-right offers a very simple model to think about the internal order of operations, and encourages use of explicit ordering, as best practice in C is to use parentheses anyway.</p>";

				const frontmatter = {"title":"Precedence","description":"Precedence","sidebar":{"order":211}};
				const file = "/home/josh/git/c3_tests/experimental-site-testing-only__local_changes/src/content/docs/Language Rules/precedence.md";
				const url = undefined;
				function rawContent() {
					return "\nPrecedence rules in C3 differs from C/C++. Here are all precedence levels in C3, listed from highest (1) to lowest (11):\n\n1. `()`, `[]`, `.`, `!!` postfix `!`, `++` and `--` \n2. `@`, prefix `-`, `~`, prefix `*`, `&`, prefix `++` and `--`\n3. infix `*`, `/`, `%`\n4. `<<`, `>>`\n5. `^`, `|`, infix `&`\n6. `+`, infix `-`, `+++`\n7. `==`, `!=`, `>=`, `<=`, `>`, `<`\n8. `&&`, `&&&`\n9. `||`, `|||`\n10. ternary `?:` `??`\n11. `=`, `*=`, `/=`, `%=`, `+=`, `-=`, `<<=`, `>>=`, `&=`, `^=`, `|=`\n\n\nThe main difference is that bitwise operations and shift has higher precedence than addition/subtraction and multiplication/division in C3. Bitwise operations also have higher precedence than the relational operators. Also, there is no difference in precedence between `&&` and `||` or between the bitwise operators.\n\nExamples:\n\n```c3\na + b >> c + d\n\n(a + b) >> (c + d) // C (+ - are evaluated before >>)\na + (b >> c) + d   // C3 (>> is evaluated before + -)\n\n\na & b == c\n\na & (b == c)       // C  (bitwise operators are evaluated after relational)\n(a & b) == c       // C3 (bitwise operators are evaluated before relational)\n\n\na > b == c < d\n\n(a > b) == (c < d) // C  (< > binds tighter than ==)\n((a > b) == c) < d // C3 Error, requires parenthesis!\n\n\na | b ^ c & d\n\na | ((b ^ c) & d)  // C  (All bitwise operators have different precedence)\n((a | b) ^ c) & d  // C3 Error, requires parenthesis!\n```\n\nThe change in precedence of the bitwise operators corrects a long standing issue in the C specification. The change in precedence for shift operations goes towards making the precedence less surprising.\n\nConflating the precedence of relational and equality operations, and all bitwise operations was motivated by simplification: few remember the exact internal differences in precedence between bitwise operators. Parenthesis are required for those conflated levels of precedence.\n\nLeft-to-right offers a very simple model to think about the internal order of operations, and encourages use of explicit ordering, as best practice in C is to use parentheses anyway.\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
