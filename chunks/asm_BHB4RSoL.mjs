import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_afRpe8AA.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>C3 provides two ways to insert inline assembly: asm strings and asm blocks.</p>\n<h2 id=\"asm-strings\">Asm strings</h2>\n<p>This form takes a single compile time string and passes it directly to the underlying\nbackend without any changes.</p>\n<div class=\"expressive-code\"><link rel=\"stylesheet\" href=\"/_astro/ec.j8ofn.css\"><script type=\"module\" src=\"/_astro/ec.8zarh.js\"></script><figure class=\"frame not-content\"><figcaption class=\"header\"></figcaption><pre data-language=\"c3\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C792EA;--1:#8D46B4\">int</span><span style=\"--0:#D6DEEB;--1:#403F53\"> x </span><span style=\"--0:#C792EA;--1:#8D46B4\">=</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#F78C6C;--1:#AA0982\">0</span><span style=\"--0:#D6DEEB;--1:#403F53\">;</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C792EA;--1:#8D46B4\">asm</span><span style=\"--0:#D6DEEB;--1:#403F53\">(</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#9B504E\">nop</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#D6DEEB;--1:#403F53\">);</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C792EA;--1:#8D46B4\">int</span><span style=\"--0:#D6DEEB;--1:#403F53\"> y </span><span style=\"--0:#C792EA;--1:#8D46B4\">=</span><span style=\"--0:#D6DEEB;--1:#403F53\"> x;</span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"int x = 0;asm(&#x22;nop&#x22;);int y = x;\"><div></div></button></div></figure></div>\n<h2 id=\"asm-block\">Asm block</h2>\n<p>Asm blocks uses a common grammar for all types of processors. It assumes that\nall assembly statements can be reduced to the format:</p>\n<div class=\"expressive-code\"><figure class=\"frame not-content\"><figcaption class=\"header\"></figcaption><pre data-language=\"asm\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#D6DEEB;--1:#403F53\">instruction (arg (',' arg)*)?</span><span style=\"--0:#809191;--1:#616671\">;</span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"instruction (arg (&#x27;,&#x27; arg)*)?;\"><div></div></button></div></figure></div>\n<p>Where an arg is:</p>\n<ol>\n<li>An identifier, e.g. <code dir=\"auto\">FOO</code>, <code dir=\"auto\">x</code>.</li>\n<li>A numeric constant <code dir=\"auto\">1</code> <code dir=\"auto\">0xFF</code> etc.</li>\n<li>A register name (always lower case with a ’$’ prefix) e.g. <code dir=\"auto\">$eax</code> <code dir=\"auto\">$r7</code>.</li>\n<li>The address of a variable e.g. <code dir=\"auto\">&#x26;x</code>.</li>\n<li>An indirect address: <code dir=\"auto\">[addr]</code> or <code dir=\"auto\">[addr + index * &#x3C;const> + offset]</code>.</li>\n<li>Any expression inside of ”()” (will be evaluated before entering the <code dir=\"auto\">asm</code> block).</li>\n</ol>\n<p>An example:</p>\n<div class=\"expressive-code\"><figure class=\"frame not-content\"><figcaption class=\"header\"></figcaption><pre data-language=\"c3\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C792EA;--1:#8D46B4\">int</span><span style=\"--0:#D6DEEB;--1:#403F53\"> aa </span><span style=\"--0:#C792EA;--1:#8D46B4\">=</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#F78C6C;--1:#AA0982\">3</span><span style=\"--0:#D6DEEB;--1:#403F53\">;</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C792EA;--1:#8D46B4\">int</span><span style=\"--0:#D6DEEB;--1:#403F53\"> g;</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C792EA;--1:#8D46B4\">int*</span><span style=\"--0:#D6DEEB;--1:#403F53\"> gp </span><span style=\"--0:#C792EA;--1:#8D46B4\">=</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#C792EA;--1:#8D46B4\">&#x26;</span><span style=\"--0:#D6DEEB;--1:#403F53\">g;</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C792EA;--1:#8D46B4\">int*</span><span style=\"--0:#D6DEEB;--1:#403F53\"> xa </span><span style=\"--0:#C792EA;--1:#8D46B4\">=</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#C792EA;--1:#8D46B4\">&#x26;</span><span style=\"--0:#D6DEEB;--1:#403F53\">a;</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#D6DEEB;--1:#403F53\">usz asf </span><span style=\"--0:#C792EA;--1:#8D46B4\">=</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#F78C6C;--1:#AA0982\">1</span><span style=\"--0:#D6DEEB;--1:#403F53\">;</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C792EA;--1:#8D46B4\">asm</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#D6DEEB;--1:#403F53\">{</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#D6DEEB;--1:#403F53\">    </span></span><span style=\"--0:#D6DEEB;--1:#403F53\">movl x, </span><span style=\"--0:#F78C6C;--1:#AA0982\">4</span><span style=\"--0:#D6DEEB;--1:#403F53\">;</span><span style=\"--0:#809191;--1:#5E6578\">                  // Move 4 into the variable x</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#D6DEEB;--1:#403F53\">    </span></span><span style=\"--0:#D6DEEB;--1:#403F53\">movl [gp], x;</span><span style=\"--0:#809191;--1:#5E6578\">               // Move the value of x into the address in gp</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#D6DEEB;--1:#403F53\">    </span></span><span style=\"--0:#D6DEEB;--1:#403F53\">movl x, </span><span style=\"--0:#F78C6C;--1:#AA0982\">1</span><span style=\"--0:#D6DEEB;--1:#403F53\">;</span><span style=\"--0:#809191;--1:#5E6578\">                  // Move 1 into x</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#D6DEEB;--1:#403F53\">    </span></span><span style=\"--0:#D6DEEB;--1:#403F53\">movl [xa </span><span style=\"--0:#C792EA;--1:#8D46B4\">+</span><span style=\"--0:#D6DEEB;--1:#403F53\"> asf </span><span style=\"--0:#C792EA;--1:#8D46B4\">*</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#F78C6C;--1:#AA0982\">4</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#C792EA;--1:#8D46B4\">+</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#F78C6C;--1:#AA0982\">4</span><span style=\"--0:#D6DEEB;--1:#403F53\">], x;</span><span style=\"--0:#809191;--1:#5E6578\"> // Move x into the address at xa[asf + 1]</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#D6DEEB;--1:#403F53\">    </span></span><span style=\"--0:#D6DEEB;--1:#403F53\">movl $eax, (</span><span style=\"--0:#F78C6C;--1:#AA0982\">23</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#C792EA;--1:#8D46B4\">+</span><span style=\"--0:#D6DEEB;--1:#403F53\"> x);</span><span style=\"--0:#809191;--1:#5E6578\">        // Move 23 + x into EAX</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#D6DEEB;--1:#403F53\">    </span></span><span style=\"--0:#D6DEEB;--1:#403F53\">movl x, $eax;</span><span style=\"--0:#809191;--1:#5E6578\">               // Move EAX into x</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#D6DEEB;--1:#403F53\">    </span></span><span style=\"--0:#D6DEEB;--1:#403F53\">movq [</span><span style=\"--0:#C792EA;--1:#8D46B4\">&#x26;</span><span style=\"--0:#D6DEEB;--1:#403F53\">z], </span><span style=\"--0:#F78C6C;--1:#AA0982\">33</span><span style=\"--0:#D6DEEB;--1:#403F53\">;</span><span style=\"--0:#809191;--1:#5E6578\">              // Move 33 into the memory address of z</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#D6DEEB;--1:#403F53\">}</span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"int aa = 3;int g;int* gp = &#x26;g;int* xa = &#x26;a;usz asf = 1;asm{    movl x, 4;                  // Move 4 into the variable x    movl [gp], x;               // Move the value of x into the address in gp    movl x, 1;                  // Move 1 into x    movl [xa + asf * 4 + 4], x; // Move x into the address at xa[asf + 1]    movl $eax, (23 + x);        // Move 23 + x into EAX    movl x, $eax;               // Move EAX into x    movq [&#x26;z], 33;              // Move 33 into the memory address of z}\"><div></div></button></div></figure></div>\n<p>The asm block will infer register clobbers and in/out parameters.</p>\n<p><em>*Please note that the current state of inline asm is a <strong>work in progress</strong>,\nonly a subset of x86, aarch64 and riscv instructions are available, other platforms\nhave no support at all. It is likely that the grammar will be extended as more\narchitectures are supported. More instructions can be added as they are needed,\nso please file issues when you encounter missing instructions you need.</em></p>";

				const frontmatter = {"title":"Inline Assembly","description":"Inline Assembly","sidebar":{"order":232}};
				const file = "/home/josh/git/c3_tests/experimental-site-testing-only__local_changes/src/content/docs/Previous Versions/v0_6_8/Misc Advanced/asm.md";
				const url = undefined;
				function rawContent() {
					return "\nC3 provides two ways to insert inline assembly: asm strings and asm blocks. \n\n## Asm strings\n\nThis form takes a single compile time string and passes it directly to the underlying\nbackend without any changes.\n\n```c3\nint x = 0;\nasm(\"nop\");\nint y = x;\n```\n\n## Asm block\n\nAsm blocks uses a common grammar for all types of processors. It assumes that\nall assembly statements can be reduced to the format:\n\n```asm\ninstruction (arg (',' arg)*)?;\n```\n\nWhere an arg is:\n\n1. An identifier, e.g. `FOO`, `x`.\n2. A numeric constant `1` `0xFF` etc.\n3. A register name (always lower case with a '$' prefix) e.g. `$eax` `$r7`.\n4. The address of a variable e.g. `&x`.\n5. An indirect address: `[addr]` or `[addr + index * <const> + offset]`.\n6. Any expression inside of \"()\" (will be evaluated before entering the `asm` block).\n \nAn example:\n\n```c3\nint aa = 3;\nint g;\nint* gp = &g;\nint* xa = &a;\nusz asf = 1;\nasm\n{\n    movl x, 4;                  // Move 4 into the variable x\n    movl [gp], x;               // Move the value of x into the address in gp\n    movl x, 1;                  // Move 1 into x\n    movl [xa + asf * 4 + 4], x; // Move x into the address at xa[asf + 1]\n    movl $eax, (23 + x);        // Move 23 + x into EAX\n    movl x, $eax;               // Move EAX into x\n    movq [&z], 33;              // Move 33 into the memory address of z\n}\n```\nThe asm block will infer register clobbers and in/out parameters.\n\n*\\*Please note that the current state of inline asm is a __work in progress__,\nonly a subset of x86, aarch64 and riscv instructions are available, other platforms\nhave no support at all. It is likely that the grammar will be extended as more \narchitectures are supported. More instructions can be added as they are needed,\nso please file issues when you encounter missing instructions you need.*";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"asm-strings","text":"Asm strings"},{"depth":2,"slug":"asm-block","text":"Asm block"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
