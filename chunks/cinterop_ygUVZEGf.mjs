import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_DFSFkPP8.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>C3 is C ABI compatible. That means you can call C from C3, and call C3 from C without having to\ndo anything special. As a quick way to call C, you can simply declare the function as a\nC3 function but with <code dir=\"auto\">extern</code> in front of it. As long as the function is linked, it will work:</p>\n<div class=\"expressive-code\"><link rel=\"stylesheet\" href=\"/_astro/ec.j8ofn.css\"><script type=\"module\" src=\"/_astro/ec.8zarh.js\"></script><figure class=\"frame not-content\"><figcaption class=\"header\"></figcaption><pre data-language=\"c3\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C792EA;--1:#8D46B4\">extern</span><span style=\"--0:#D6DEEB;--1:#403F53\"> fn </span><span style=\"--0:#C792EA;--1:#8D46B4\">void</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#82AAFF;--1:#3C63B3\">puts</span><span style=\"--0:#D6DEEB;--1:#403F53\">(</span><span style=\"--0:#C792EA;--1:#8D46B4\">char*</span><span style=\"--0:#D6DEEB;--1:#403F53\">);</span><span style=\"--0:#809191;--1:#5E6578\"> // C \"puts\"</span></div></div><div class=\"ec-line\"><div class=\"code\">\n</div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#D6DEEB;--1:#403F53\">fn </span><span style=\"--0:#C792EA;--1:#8D46B4\">void</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#82AAFF;--1:#3C63B3\">main</span><span style=\"--0:#D6DEEB;--1:#403F53\">()</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#D6DEEB;--1:#403F53\">{</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#809191;--1:#5E6578\">    </span></span><span style=\"--0:#809191;--1:#5E6578\">// This will call the \"puts\"</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#809191;--1:#5E6578\">    </span></span><span style=\"--0:#809191;--1:#5E6578\">// function in the standard c lib.</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">    </span><span style=\"--0:#82AAFF;--1:#3C63B3\">puts</span><span style=\"--0:#D6DEEB;--1:#403F53\">(</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#9B504E\">Hello, world!</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#D6DEEB;--1:#403F53\">);</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#D6DEEB;--1:#403F53\">}</span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"extern fn void puts(char*); // C &#x22;puts&#x22;fn void main(){    // This will call the &#x22;puts&#x22;    // function in the standard c lib.    puts(&#x22;Hello, world!&#x22;);}\"><div></div></button></div></figure></div>\n<p>To use a different identifier inside of your C3 code compared to the function or variable’s external name, use the @extern attribute:</p>\n<div class=\"expressive-code\"><figure class=\"frame not-content\"><figcaption class=\"header\"></figcaption><pre data-language=\"c3\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C792EA;--1:#8D46B4\">extern</span><span style=\"--0:#D6DEEB;--1:#403F53\"> fn </span><span style=\"--0:#C792EA;--1:#8D46B4\">void</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#82AAFF;--1:#3C63B3\">foo_puts</span><span style=\"--0:#D6DEEB;--1:#403F53\">(</span><span style=\"--0:#C792EA;--1:#8D46B4\">char*</span><span style=\"--0:#D6DEEB;--1:#403F53\">) @</span><span style=\"--0:#C792EA;--1:#8D46B4\">extern</span><span style=\"--0:#D6DEEB;--1:#403F53\">(</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#9B504E\">puts</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#D6DEEB;--1:#403F53\">);</span><span style=\"--0:#809191;--1:#5E6578\"> // C \"puts\"</span></div></div><div class=\"ec-line\"><div class=\"code\">\n</div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#D6DEEB;--1:#403F53\">fn </span><span style=\"--0:#C792EA;--1:#8D46B4\">void</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#82AAFF;--1:#3C63B3\">main</span><span style=\"--0:#D6DEEB;--1:#403F53\">()</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#D6DEEB;--1:#403F53\">{</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">    </span><span style=\"--0:#82AAFF;--1:#3C63B3\">foo_puts</span><span style=\"--0:#D6DEEB;--1:#403F53\">(</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#9B504E\">Hello, world!</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#D6DEEB;--1:#403F53\">);</span><span style=\"--0:#809191;--1:#5E6578\"> // Still calls C \"puts\"</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#D6DEEB;--1:#403F53\">}</span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"extern fn void foo_puts(char*) @extern(&#x22;puts&#x22;); // C &#x22;puts&#x22;fn void main(){    foo_puts(&#x22;Hello, world!&#x22;); // Still calls C &#x22;puts&#x22;}\"><div></div></button></div></figure></div>\n<p>While C3 functions are available from C using their external name, it’s often useful to\ndefine an external name using <code dir=\"auto\">@extern</code> or <code dir=\"auto\">@export</code> with a name to match C usage.</p>\n<div class=\"expressive-code\"><figure class=\"frame not-content\"><figcaption class=\"header\"></figcaption><pre data-language=\"c3\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C792EA;--1:#8D46B4\">module</span><span style=\"--0:#D6DEEB;--1:#403F53\"> foo;</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#D6DEEB;--1:#403F53\">fn </span><span style=\"--0:#C792EA;--1:#8D46B4\">int</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#82AAFF;--1:#3C63B3\">square</span><span style=\"--0:#D6DEEB;--1:#403F53\">(</span><span style=\"--0:#C792EA;--1:#8D46B4\">int</span><span style=\"--0:#D6DEEB;--1:#403F53\"> x) @</span><span style=\"--0:#C792EA;--1:#8D46B4\">export</span><span style=\"--0:#809191;--1:#5E6578\"> // @export ensures external visibility</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#D6DEEB;--1:#403F53\">{</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">    </span><span style=\"--0:#C792EA;--1:#8D46B4\">return</span><span style=\"--0:#D6DEEB;--1:#403F53\"> x </span><span style=\"--0:#C792EA;--1:#8D46B4\">*</span><span style=\"--0:#D6DEEB;--1:#403F53\"> x;</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#D6DEEB;--1:#403F53\">}</span></div></div><div class=\"ec-line\"><div class=\"code\">\n</div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#D6DEEB;--1:#403F53\">fn </span><span style=\"--0:#C792EA;--1:#8D46B4\">int</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#82AAFF;--1:#3C63B3\">square2</span><span style=\"--0:#D6DEEB;--1:#403F53\">(</span><span style=\"--0:#C792EA;--1:#8D46B4\">int</span><span style=\"--0:#D6DEEB;--1:#403F53\"> x) @</span><span style=\"--0:#C792EA;--1:#8D46B4\">export</span><span style=\"--0:#D6DEEB;--1:#403F53\">(</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#9B504E\">square</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#D6DEEB;--1:#403F53\">)</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#D6DEEB;--1:#403F53\">{</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">    </span><span style=\"--0:#C792EA;--1:#8D46B4\">return</span><span style=\"--0:#D6DEEB;--1:#403F53\"> x </span><span style=\"--0:#C792EA;--1:#8D46B4\">*</span><span style=\"--0:#D6DEEB;--1:#403F53\"> x;</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#D6DEEB;--1:#403F53\">}</span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"module foo;fn int square(int x) @export // @export ensures external visibility{    return x * x;}fn int square2(int x) @export(&#x22;square&#x22;){    return x * x;}\"><div></div></button></div></figure></div>\n<p>Calling from C:</p>\n<div class=\"expressive-code\"><figure class=\"frame not-content\"><figcaption class=\"header\"></figcaption><pre data-language=\"c3\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C792EA;--1:#8D46B4\">extern</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#C792EA;--1:#8D46B4\">int</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#82AAFF;--1:#3C63B3\">square</span><span style=\"--0:#D6DEEB;--1:#403F53\">(</span><span style=\"--0:#C792EA;--1:#8D46B4\">int</span><span style=\"--0:#D6DEEB;--1:#403F53\">);</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C792EA;--1:#8D46B4\">int</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#82AAFF;--1:#3C63B3\">foo_square</span><span style=\"--0:#D6DEEB;--1:#403F53\">(</span><span style=\"--0:#C792EA;--1:#8D46B4\">int</span><span style=\"--0:#D6DEEB;--1:#403F53\">) </span><span style=\"--0:#82AAFF;--1:#3C63B3\">__attribute__</span><span style=\"--0:#D6DEEB;--1:#403F53\"> ((weak, </span><span style=\"--0:#82AAFF;--1:#3C63B3\">alias</span><span style=\"--0:#D6DEEB;--1:#403F53\"> (</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#9B504E\">foo.square</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#D6DEEB;--1:#403F53\">)));</span></div></div><div class=\"ec-line\"><div class=\"code\">\n</div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C792EA;--1:#8D46B4\">void</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#82AAFF;--1:#3C63B3\">test</span><span style=\"--0:#D6DEEB;--1:#403F53\">()</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#D6DEEB;--1:#403F53\">{</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#809191;--1:#5E6578\">    </span></span><span style=\"--0:#809191;--1:#5E6578\">// This would call square2</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">    </span><span style=\"--0:#82AAFF;--1:#3C63B3\">printf</span><span style=\"--0:#D6DEEB;--1:#403F53\">(</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#82AAFF;--1:#3C63B3\">%d</span><span style=\"--0:#F78C6C;--1:#AA0982\">\\n</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#D6DEEB;--1:#403F53\">, </span><span style=\"--0:#82AAFF;--1:#3C63B3\">square</span><span style=\"--0:#D6DEEB;--1:#403F53\">(</span><span style=\"--0:#F78C6C;--1:#AA0982\">11</span><span style=\"--0:#D6DEEB;--1:#403F53\">));</span></div></div><div class=\"ec-line\"><div class=\"code\">\n</div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#809191;--1:#5E6578\">    </span></span><span style=\"--0:#809191;--1:#5E6578\">// This would call square</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">    </span><span style=\"--0:#82AAFF;--1:#3C63B3\">printf</span><span style=\"--0:#D6DEEB;--1:#403F53\">(</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#82AAFF;--1:#3C63B3\">%d</span><span style=\"--0:#F78C6C;--1:#AA0982\">\\n</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#D6DEEB;--1:#403F53\">, </span><span style=\"--0:#82AAFF;--1:#3C63B3\">foo_square</span><span style=\"--0:#D6DEEB;--1:#403F53\">(</span><span style=\"--0:#F78C6C;--1:#AA0982\">11</span><span style=\"--0:#D6DEEB;--1:#403F53\">));</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#D6DEEB;--1:#403F53\">}</span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"extern int square(int);int foo_square(int) __attribute__ ((weak, alias (&#x22;foo.square&#x22;)));void test(){    // This would call square2    printf(&#x22;%d\\n&#x22;, square(11));    // This would call square    printf(&#x22;%d\\n&#x22;, foo_square(11));}\"><div></div></button></div></figure></div>\n<h2 id=\"linking-static-and-dynamic-libraries\">Linking static and dynamic libraries</h2>\n<p>If you have a library <code dir=\"auto\">foo.a</code> or <code dir=\"auto\">foo.so</code> or <code dir=\"auto\">foo.obj</code> (depending on type and OS), just add\n<code dir=\"auto\">-l foo</code> on the command line, or in the project file add it to the <code dir=\"auto\">linked-libraries</code> value, e.g.\n<code dir=\"auto\">\"linked-libraries\" = [\"foo\"]</code>.</p>\n<p>To add library search paths, use <code dir=\"auto\">-L &#x3C;directory></code> from the command line and <code dir=\"auto\">linker-search-paths</code>\nthe project file (e.g. <code dir=\"auto\">\"linker-search-paths\" = [\"../mylibs/\", \"/extra-libs/\"]</code>)</p>\n<h3 id=\"gotchas\">Gotchas</h3>\n<ul>\n<li>Bitstructs will be seen as its backing type, when used from C.</li>\n<li>C bit fields must be manually converted to a C3 bitstruct with the correct layout for each target platform.</li>\n<li>C assumes the enum size is <code dir=\"auto\">CInt</code></li>\n<li>C3 uses fixed integer sizes, this means that <code dir=\"auto\">int</code> and <code dir=\"auto\">CInt</code> does not <em>need</em> to be the same though in practice on 32/64 bit machines, <code dir=\"auto\">long</code> is usually the <em>only</em> type that differs in size between C and C3.</li>\n<li>Atomic types are not supported by C3.\n<ul>\n<li>In C3 there are generic Atomic types instead.</li>\n</ul>\n</li>\n<li>There are no <code dir=\"auto\">volatile</code> and <code dir=\"auto\">const</code> <strong>qualifiers</strong> like in C.\n<ul>\n<li>C3 has <a href=\"/language-fundamentals/naming/#global-constants\">global constants</a> declared with <code dir=\"auto\">const</code>.</li>\n<li>Instead of the <code dir=\"auto\">volatile</code> type qualifier, there are standard library macros <code dir=\"auto\">@volatile_load</code> and <code dir=\"auto\">@volatile_store</code>.</li>\n</ul>\n</li>\n<li>Passing arrays by value like in C3 must be represented as passing a struct containing the array.</li>\n<li>In C3, fixed arrays do <em>not</em> decay into pointers like in C.\n<ul>\n<li>When defining a C function that has an array argument, replace the array type with a pointer. E.g. <code dir=\"auto\">void test(int[] a)</code> should become\n<code dir=\"auto\">extern fn void test(int* a)</code>. If the function has a sized array, like <code dir=\"auto\">void test2(int[4] b)</code>\nreplace it with a pointer to a sized array: <code dir=\"auto\">extern fn void test2(int[4]* b);</code></li>\n<li>Note that a pointer to an array is always implicitly convertable to a pointer to the first element For example, <code dir=\"auto\">int[4]*</code> may be implicitly converted to <code dir=\"auto\">int*</code>.</li>\n</ul>\n</li>\n<li>The C3 names of functions are name-spaced with the module by default when using <code dir=\"auto\">@export</code>, so when\nexporting a function with <code dir=\"auto\">@export</code> that is to be used from C, specify an explicit external name. E.g. <code dir=\"auto\">fn void myfunc() @export(\"myfunc\") { ... }</code>.</li>\n</ul>";

				const frontmatter = {"title":"C Interoperability","description":"C Interoperability","sidebar":{"order":68}};
				const file = "/home/josh/git/c3_tests/experimental-site-testing-only__local_changes/src/content/docs/Language Common/cinterop.md";
				const url = undefined;
				function rawContent() {
					return "\nC3 is C ABI compatible. That means you can call C from C3, and call C3 from C without having to\ndo anything special. As a quick way to call C, you can simply declare the function as a \nC3 function but with `extern` in front of it. As long as the function is linked, it will work:\n\n```c3\nextern fn void puts(char*); // C \"puts\"\n\nfn void main()\n{\n    // This will call the \"puts\"\n    // function in the standard c lib.\n    puts(\"Hello, world!\"); \n}\n```\n\nTo use a different identifier inside of your C3 code compared to the function or variable’s external name, use the @extern attribute:\n\n```c3\nextern fn void foo_puts(char*) @extern(\"puts\"); // C \"puts\"\n\nfn void main()\n{\n    foo_puts(\"Hello, world!\"); // Still calls C \"puts\"\n}\n```\n\nWhile C3 functions are available from C using their external name, it's often useful to\ndefine an external name using `@extern` or `@export` with a name to match C usage.\n\n```c3\nmodule foo;\nfn int square(int x) @export // @export ensures external visibility\n{\n    return x * x;\n}\n\nfn int square2(int x) @export(\"square\")\n{\n    return x * x;\n}\n```\n\nCalling from C:\n\n```c3\nextern int square(int);\nint foo_square(int) __attribute__ ((weak, alias (\"foo.square\")));\n\nvoid test()\n{\n    // This would call square2\n    printf(\"%d\\n\", square(11));\n\n    // This would call square\n    printf(\"%d\\n\", foo_square(11));\n}\n```\n\n## Linking static and dynamic libraries\n\nIf you have a library `foo.a` or `foo.so` or `foo.obj` (depending on type and OS), just add\n`-l foo` on the command line, or in the project file add it to the `linked-libraries` value, e.g.\n`\"linked-libraries\" = [\"foo\"]`.\n\nTo add library search paths, use `-L <directory>` from the command line and `linker-search-paths`\nthe project file (e.g. `\"linker-search-paths\" = [\"../mylibs/\", \"/extra-libs/\"]`)\n\n### Gotchas\n\n- Bitstructs will be seen as its backing type, when used from C. \n- C bit fields must be manually converted to a C3 bitstruct with the correct layout for each target platform.\n- C assumes the enum size is `CInt`\n- C3 uses fixed integer sizes, this means that `int` and `CInt` does not *need* to be the same though in practice on 32/64 bit machines, `long` is usually the *only* type that differs in size between C and C3.\n- Atomic types are not supported by C3.\n    - In C3 there are generic Atomic types instead.\n- There are no `volatile` and `const` **qualifiers** like in C. \n    - C3 has [global constants](/language-fundamentals/naming/#global-constants) declared with `const`. \n    - Instead of the `volatile` type qualifier, there are standard library macros `@volatile_load` and `@volatile_store`.\n- Passing arrays by value like in C3 must be represented as passing a struct containing the array.\n- In C3, fixed arrays do *not* decay into pointers like in C. \n    - When defining a C function that has an array argument, replace the array type with a pointer. E.g. `void test(int[] a)` should become\n     `extern fn void test(int* a)`. If the function has a sized array, like `void test2(int[4] b)`\n     replace it with a pointer to a sized array: `extern fn void test2(int[4]* b);`      \n    - Note that a pointer to an array is always implicitly convertable to a pointer to the first element For example, `int[4]*` may be implicitly converted to `int*`.\n- The C3 names of functions are name-spaced with the module by default when using `@export`, so when\n exporting a function with `@export` that is to be used from C, specify an explicit external name. E.g. `fn void myfunc() @export(\"myfunc\") { ... }`.";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"linking-static-and-dynamic-libraries","text":"Linking static and dynamic libraries"},{"depth":3,"slug":"gotchas","text":"Gotchas"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
