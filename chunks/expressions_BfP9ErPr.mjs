import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_afRpe8AA.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>Expressions work like in C, with one exception: it is possible to take the address of a temporary. This uses the operator <code dir=\"auto\">&#x26;&#x26;</code> rather than <code dir=\"auto\">&#x26;</code>.</p>\n<p>Consequently, this is valid:</p>\n<div class=\"expressive-code\"><link rel=\"stylesheet\" href=\"/_astro/ec.j8ofn.css\"><script type=\"module\" src=\"/_astro/ec.8zarh.js\"></script><figure class=\"frame not-content\"><figcaption class=\"header\"></figcaption><pre data-language=\"c3\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#D6DEEB;--1:#403F53\">fn </span><span style=\"--0:#C792EA;--1:#8D46B4\">void</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#82AAFF;--1:#3C63B3\">test</span><span style=\"--0:#D6DEEB;--1:#403F53\">(</span><span style=\"--0:#C792EA;--1:#8D46B4\">int*</span><span style=\"--0:#D6DEEB;--1:#403F53\"> x) { ... }</span></div></div><div class=\"ec-line\"><div class=\"code\">\n</div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#82AAFF;--1:#3C63B3\">test</span><span style=\"--0:#D6DEEB;--1:#403F53\">(</span><span style=\"--0:#C792EA;--1:#8D46B4\">&#x26;&#x26;</span><span style=\"--0:#F78C6C;--1:#AA0982\">1</span><span style=\"--0:#D6DEEB;--1:#403F53\">);</span></div></div><div class=\"ec-line\"><div class=\"code\">\n</div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#809191;--1:#5E6578\">// In C:</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#809191;--1:#5E6578\">// int x = 1;</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#809191;--1:#5E6578\">// test(&#x26;x);</span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"fn void test(int* x) { ... }test(&#x26;&#x26;1);// In C:// int x = 1;// test(&#x26;x);\"><div></div></button></div></figure></div>\n<p>A pointer created with <code dir=\"auto\">&#x26;&#x26;</code> is only valid until the end of the\ncurrent function. In other words, you should never return the\npointer created by <code dir=\"auto\">&#x26;&#x26;</code> from a function as it will never be safe\nto use.</p>\n<h2 id=\"well-defined-evaluation-order\">Well-defined evaluation order</h2>\n<p>Expressions have a well-defined evaluation order:</p>\n<ol>\n<li>Binary expressions are evaluated from left to right.</li>\n<li>Assignment occurs right to left, so <code dir=\"auto\">a = a++</code> would result in <code dir=\"auto\">a</code> being unchanged.</li>\n<li>Call arguments are evaluated in parameter order.</li>\n</ol>\n<h2 id=\"compound-literals\">Compound literals</h2>\n<p>C3 has C’s compound literals:</p>\n<div class=\"expressive-code\"><figure class=\"frame not-content\"><figcaption class=\"header\"></figcaption><pre data-language=\"c3\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C792EA;--1:#8D46B4\">struct</span><span style=\"--0:#D6DEEB;--1:#403F53\"> Foo</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#D6DEEB;--1:#403F53\">{</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">    </span><span style=\"--0:#C792EA;--1:#8D46B4\">int</span><span style=\"--0:#D6DEEB;--1:#403F53\"> a;</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">    </span><span style=\"--0:#C792EA;--1:#8D46B4\">double</span><span style=\"--0:#D6DEEB;--1:#403F53\"> b;</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#D6DEEB;--1:#403F53\">}</span></div></div><div class=\"ec-line\"><div class=\"code\">\n</div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#D6DEEB;--1:#403F53\">fn </span><span style=\"--0:#C792EA;--1:#8D46B4\">void</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#82AAFF;--1:#3C63B3\">test1</span><span style=\"--0:#D6DEEB;--1:#403F53\">(Foo x) { ... }</span></div></div><div class=\"ec-line\"><div class=\"code\">\n</div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#D6DEEB;--1:#403F53\">...</span></div></div><div class=\"ec-line\"><div class=\"code\">\n</div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#82AAFF;--1:#3C63B3\">test1</span><span style=\"--0:#D6DEEB;--1:#403F53\">((Foo){ </span><span style=\"--0:#F78C6C;--1:#AA0982\">1</span><span style=\"--0:#D6DEEB;--1:#403F53\">, </span><span style=\"--0:#F78C6C;--1:#AA0982\">2.0</span><span style=\"--0:#D6DEEB;--1:#403F53\"> });</span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"struct Foo{    int a;    double b;}fn void test1(Foo x) { ... }...test1((Foo){ 1, 2.0 });\"><div></div></button></div></figure></div>\n<p>Arrays follow the same syntax:</p>\n<div class=\"expressive-code\"><figure class=\"frame not-content\"><figcaption class=\"header\"></figcaption><pre data-language=\"c3\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#D6DEEB;--1:#403F53\">fn </span><span style=\"--0:#C792EA;--1:#8D46B4\">void</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#82AAFF;--1:#3C63B3\">test2</span><span style=\"--0:#D6DEEB;--1:#403F53\">(</span><span style=\"--0:#C792EA;--1:#8D46B4\">int</span><span style=\"--0:#D6DEEB;--1:#403F53\">[</span><span style=\"--0:#F78C6C;--1:#AA0982\">3</span><span style=\"--0:#D6DEEB;--1:#403F53\">] x) { ... }</span></div></div><div class=\"ec-line\"><div class=\"code\">\n</div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#D6DEEB;--1:#403F53\">...</span></div></div><div class=\"ec-line\"><div class=\"code\">\n</div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#82AAFF;--1:#3C63B3\">test2</span><span style=\"--0:#D6DEEB;--1:#403F53\">((</span><span style=\"--0:#C792EA;--1:#8D46B4\">int</span><span style=\"--0:#D6DEEB;--1:#403F53\">[</span><span style=\"--0:#F78C6C;--1:#AA0982\">3</span><span style=\"--0:#D6DEEB;--1:#403F53\">]){ </span><span style=\"--0:#F78C6C;--1:#AA0982\">1</span><span style=\"--0:#D6DEEB;--1:#403F53\">, </span><span style=\"--0:#F78C6C;--1:#AA0982\">2</span><span style=\"--0:#D6DEEB;--1:#403F53\">, </span><span style=\"--0:#F78C6C;--1:#AA0982\">3</span><span style=\"--0:#D6DEEB;--1:#403F53\"> });</span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"fn void test2(int[3] x) { ... }...test2((int[3]){ 1, 2, 3 });\"><div></div></button></div></figure></div>\n<p>Note that when it’s possible, inferring the type is allowed and preferred, so we have for the above examples:</p>\n<div class=\"expressive-code\"><figure class=\"frame not-content\"><figcaption class=\"header\"></figcaption><pre data-language=\"c3\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#82AAFF;--1:#3C63B3\">test1</span><span style=\"--0:#D6DEEB;--1:#403F53\">({ </span><span style=\"--0:#F78C6C;--1:#AA0982\">1</span><span style=\"--0:#D6DEEB;--1:#403F53\">, </span><span style=\"--0:#F78C6C;--1:#AA0982\">2.0</span><span style=\"--0:#D6DEEB;--1:#403F53\"> });</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#82AAFF;--1:#3C63B3\">test2</span><span style=\"--0:#D6DEEB;--1:#403F53\">({ </span><span style=\"--0:#F78C6C;--1:#AA0982\">1</span><span style=\"--0:#D6DEEB;--1:#403F53\">, </span><span style=\"--0:#F78C6C;--1:#AA0982\">2</span><span style=\"--0:#D6DEEB;--1:#403F53\">, </span><span style=\"--0:#F78C6C;--1:#AA0982\">3</span><span style=\"--0:#D6DEEB;--1:#403F53\"> });</span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"test1({ 1, 2.0 });test2({ 1, 2, 3 });\"><div></div></button></div></figure></div>\n<p>One may take the address of temporaries, using <code dir=\"auto\">&#x26;&#x26;</code> (rather than <code dir=\"auto\">&#x26;</code> for normal variables). This allows the following:</p>\n<p>Passing a <a href=\"/language-common/arrays/#slice\">slice</a></p>\n<div class=\"expressive-code\"><figure class=\"frame not-content\"><figcaption class=\"header\"></figcaption><pre data-language=\"c3\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#D6DEEB;--1:#403F53\">fn </span><span style=\"--0:#C792EA;--1:#8D46B4\">void</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#82AAFF;--1:#3C63B3\">test</span><span style=\"--0:#D6DEEB;--1:#403F53\">(</span><span style=\"--0:#C792EA;--1:#8D46B4\">int</span><span style=\"--0:#D6DEEB;--1:#403F53\">[] y) { ... }</span></div></div><div class=\"ec-line\"><div class=\"code\">\n</div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#809191;--1:#5E6578\">// Using &#x26;&#x26;</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#82AAFF;--1:#3C63B3\">test</span><span style=\"--0:#D6DEEB;--1:#403F53\">(</span><span style=\"--0:#C792EA;--1:#8D46B4\">&#x26;&#x26;</span><span style=\"--0:#D6DEEB;--1:#403F53\">(</span><span style=\"--0:#C792EA;--1:#8D46B4\">int</span><span style=\"--0:#D6DEEB;--1:#403F53\">[</span><span style=\"--0:#F78C6C;--1:#AA0982\">3</span><span style=\"--0:#D6DEEB;--1:#403F53\">]){ </span><span style=\"--0:#F78C6C;--1:#AA0982\">1</span><span style=\"--0:#D6DEEB;--1:#403F53\">, </span><span style=\"--0:#F78C6C;--1:#AA0982\">2</span><span style=\"--0:#D6DEEB;--1:#403F53\">, </span><span style=\"--0:#F78C6C;--1:#AA0982\">3</span><span style=\"--0:#D6DEEB;--1:#403F53\"> });</span></div></div><div class=\"ec-line\"><div class=\"code\">\n</div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#809191;--1:#5E6578\">// Explicitly slicing:</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#82AAFF;--1:#3C63B3\">test</span><span style=\"--0:#D6DEEB;--1:#403F53\">(((</span><span style=\"--0:#C792EA;--1:#8D46B4\">int</span><span style=\"--0:#D6DEEB;--1:#403F53\">[</span><span style=\"--0:#F78C6C;--1:#AA0982\">3</span><span style=\"--0:#D6DEEB;--1:#403F53\">]){ </span><span style=\"--0:#F78C6C;--1:#AA0982\">1</span><span style=\"--0:#D6DEEB;--1:#403F53\">, </span><span style=\"--0:#F78C6C;--1:#AA0982\">2</span><span style=\"--0:#D6DEEB;--1:#403F53\">, </span><span style=\"--0:#F78C6C;--1:#AA0982\">3</span><span style=\"--0:#D6DEEB;--1:#403F53\"> })[..]);</span></div></div><div class=\"ec-line\"><div class=\"code\">\n</div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#809191;--1:#5E6578\">// Using a slice directly as a temporary:</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#82AAFF;--1:#3C63B3\">test</span><span style=\"--0:#D6DEEB;--1:#403F53\">((</span><span style=\"--0:#C792EA;--1:#8D46B4\">int</span><span style=\"--0:#D6DEEB;--1:#403F53\">[]){ </span><span style=\"--0:#F78C6C;--1:#AA0982\">1</span><span style=\"--0:#D6DEEB;--1:#403F53\">, </span><span style=\"--0:#F78C6C;--1:#AA0982\">2</span><span style=\"--0:#D6DEEB;--1:#403F53\">, </span><span style=\"--0:#F78C6C;--1:#AA0982\">3</span><span style=\"--0:#D6DEEB;--1:#403F53\"> });</span></div></div><div class=\"ec-line\"><div class=\"code\">\n</div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#809191;--1:#5E6578\">// Same as above but with inferred type:</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#82AAFF;--1:#3C63B3\">test</span><span style=\"--0:#D6DEEB;--1:#403F53\">({ </span><span style=\"--0:#F78C6C;--1:#AA0982\">1</span><span style=\"--0:#D6DEEB;--1:#403F53\">, </span><span style=\"--0:#F78C6C;--1:#AA0982\">2</span><span style=\"--0:#D6DEEB;--1:#403F53\">, </span><span style=\"--0:#F78C6C;--1:#AA0982\">3</span><span style=\"--0:#D6DEEB;--1:#403F53\"> });</span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"fn void test(int[] y) { ... }// Using &#x26;&#x26;test(&#x26;&#x26;(int[3]){ 1, 2, 3 });// Explicitly slicing:test(((int[3]){ 1, 2, 3 })[..]);// Using a slice directly as a temporary:test((int[]){ 1, 2, 3 });// Same as above but with inferred type:test({ 1, 2, 3 });\"><div></div></button></div></figure></div>\n<p>Passing the pointer to an <a href=\"/language-common/arrays\">array</a></p>\n<div class=\"expressive-code\"><figure class=\"frame not-content\"><figcaption class=\"header\"></figcaption><pre data-language=\"c3\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#D6DEEB;--1:#403F53\">fn </span><span style=\"--0:#C792EA;--1:#8D46B4\">void</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#82AAFF;--1:#3C63B3\">test1</span><span style=\"--0:#D6DEEB;--1:#403F53\">(</span><span style=\"--0:#C792EA;--1:#8D46B4\">int</span><span style=\"--0:#D6DEEB;--1:#403F53\">[</span><span style=\"--0:#F78C6C;--1:#AA0982\">3</span><span style=\"--0:#D6DEEB;--1:#403F53\">]</span><span style=\"--0:#C792EA;--1:#8D46B4\">*</span><span style=\"--0:#D6DEEB;--1:#403F53\"> z) { ... }</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#D6DEEB;--1:#403F53\">fn </span><span style=\"--0:#C792EA;--1:#8D46B4\">void</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#82AAFF;--1:#3C63B3\">test2</span><span style=\"--0:#D6DEEB;--1:#403F53\">(</span><span style=\"--0:#C792EA;--1:#8D46B4\">int*</span><span style=\"--0:#D6DEEB;--1:#403F53\"> z) { ... }</span></div></div><div class=\"ec-line\"><div class=\"code\">\n</div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#82AAFF;--1:#3C63B3\">test1</span><span style=\"--0:#D6DEEB;--1:#403F53\">(</span><span style=\"--0:#C792EA;--1:#8D46B4\">&#x26;&#x26;</span><span style=\"--0:#D6DEEB;--1:#403F53\">(</span><span style=\"--0:#C792EA;--1:#8D46B4\">int</span><span style=\"--0:#D6DEEB;--1:#403F53\">[</span><span style=\"--0:#F78C6C;--1:#AA0982\">3</span><span style=\"--0:#D6DEEB;--1:#403F53\">]){ </span><span style=\"--0:#F78C6C;--1:#AA0982\">1</span><span style=\"--0:#D6DEEB;--1:#403F53\">, </span><span style=\"--0:#F78C6C;--1:#AA0982\">2</span><span style=\"--0:#D6DEEB;--1:#403F53\">, </span><span style=\"--0:#F78C6C;--1:#AA0982\">3</span><span style=\"--0:#D6DEEB;--1:#403F53\"> });</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#82AAFF;--1:#3C63B3\">test2</span><span style=\"--0:#D6DEEB;--1:#403F53\">(</span><span style=\"--0:#C792EA;--1:#8D46B4\">&#x26;&#x26;</span><span style=\"--0:#D6DEEB;--1:#403F53\">(</span><span style=\"--0:#C792EA;--1:#8D46B4\">int</span><span style=\"--0:#D6DEEB;--1:#403F53\">[</span><span style=\"--0:#F78C6C;--1:#AA0982\">3</span><span style=\"--0:#D6DEEB;--1:#403F53\">]){ </span><span style=\"--0:#F78C6C;--1:#AA0982\">1</span><span style=\"--0:#D6DEEB;--1:#403F53\">, </span><span style=\"--0:#F78C6C;--1:#AA0982\">2</span><span style=\"--0:#D6DEEB;--1:#403F53\">, </span><span style=\"--0:#F78C6C;--1:#AA0982\">3</span><span style=\"--0:#D6DEEB;--1:#403F53\"> });</span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"fn void test1(int[3]* z) { ... }fn void test2(int* z) { ... }test1(&#x26;&#x26;(int[3]){ 1, 2, 3 });test2(&#x26;&#x26;(int[3]){ 1, 2, 3 });\"><div></div></button></div></figure></div>\n<h2 id=\"constant-expressions\">Constant expressions</h2>\n<p>In C3 all <em>constant expressions</em> are guaranteed to be calculated at compile time. The following are considered constant expressions:</p>\n<ol>\n<li>The <code dir=\"auto\">null</code> literal.</li>\n<li>Boolean, floating point and integer literals.</li>\n<li>The result of arithmetics on constant expressions.</li>\n<li>Compile time variables (prefixed with <code dir=\"auto\">$</code>)</li>\n<li>Global constant variables with initializers that are constant expressions.</li>\n<li>The result of macros that does not generate code and only uses constant expressions.</li>\n<li>The result of a cast if the value is cast to a boolean, floating point or integer type and the value that is converted is a constant expression.</li>\n<li>String literals.</li>\n<li>Initializer lists containing constant values.</li>\n</ol>\n<p>Some things that are <em>not</em> constant expressions:</p>\n<ol>\n<li>Any pointer that isn’t the <code dir=\"auto\">null</code> literal, even if it’s derived from a constant expression.</li>\n<li>The result of a cast except for casts of constant expressions to a numeric type.</li>\n<li>Compound literals - even when values are constant expressions.</li>\n</ol>\n<h2 id=\"including-binary-data\">Including binary data</h2>\n<p>The <code dir=\"auto\">$embed(...)</code> function includes the contents of a file into the compilation as a\nconstant array of bytes:</p>\n<div class=\"expressive-code\"><figure class=\"frame not-content\"><figcaption class=\"header\"></figcaption><pre data-language=\"c3\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C792EA;--1:#8D46B4\">char</span><span style=\"--0:#D6DEEB;--1:#403F53\">[</span><span style=\"--0:#C792EA;--1:#8D46B4\">*</span><span style=\"--0:#D6DEEB;--1:#403F53\">] my_image </span><span style=\"--0:#C792EA;--1:#8D46B4\">=</span><span style=\"--0:#D6DEEB;--1:#403F53\"> $</span><span style=\"--0:#82AAFF;--1:#3C63B3\">embed</span><span style=\"--0:#D6DEEB;--1:#403F53\">(</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#9B504E\">my_image.png</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#D6DEEB;--1:#403F53\">);</span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"char[*] my_image = $embed(&#x22;my_image.png&#x22;);\"><div></div></button></div></figure></div>\n<p>The result of an embed work similar to a string literal and can implicitly convert to a <code dir=\"auto\">char*</code>,\n<code dir=\"auto\">void*</code>, <code dir=\"auto\">char[]</code>, <code dir=\"auto\">char[*]</code> and <code dir=\"auto\">String</code>.</p>\n<h5 id=\"limiting-length\">Limiting length</h5>\n<p>It’s possible to limit the length of included with the optional second parameter.</p>\n<div class=\"expressive-code\"><figure class=\"frame not-content\"><figcaption class=\"header\"></figcaption><pre data-language=\"c3\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C792EA;--1:#8D46B4\">char</span><span style=\"--0:#D6DEEB;--1:#403F53\">[</span><span style=\"--0:#F78C6C;--1:#AA0982\">4</span><span style=\"--0:#D6DEEB;--1:#403F53\">] my_data </span><span style=\"--0:#C792EA;--1:#8D46B4\">=</span><span style=\"--0:#D6DEEB;--1:#403F53\"> $</span><span style=\"--0:#82AAFF;--1:#3C63B3\">embed</span><span style=\"--0:#D6DEEB;--1:#403F53\">(</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#9B504E\">foo.txt</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#D6DEEB;--1:#403F53\">, </span><span style=\"--0:#F78C6C;--1:#AA0982\">4</span><span style=\"--0:#D6DEEB;--1:#403F53\">);</span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"char[4] my_data = $embed(&#x22;foo.txt&#x22;, 4);\"><div></div></button></div></figure></div>\n<h5 id=\"failure-to-load-at-compile-time-and-defaults\">Failure to load at compile time and defaults</h5>\n<p>Usually it’s a compile time error if the file can’t be included, but sometimes it’s useful to only optionally include it.\nIf this is desired, declare the left hand side an <a href=\"/language-common/optionals-essential/#what-is-an-optional\">Optional</a>:</p>\n<div class=\"expressive-code\"><figure class=\"frame not-content\"><figcaption class=\"header\"></figcaption><pre data-language=\"c3\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C792EA;--1:#8D46B4\">char</span><span style=\"--0:#D6DEEB;--1:#403F53\">[]</span><span style=\"--0:#C792EA;--1:#8D46B4\">?</span><span style=\"--0:#D6DEEB;--1:#403F53\"> my_image </span><span style=\"--0:#C792EA;--1:#8D46B4\">=</span><span style=\"--0:#D6DEEB;--1:#403F53\"> $</span><span style=\"--0:#82AAFF;--1:#3C63B3\">embed</span><span style=\"--0:#D6DEEB;--1:#403F53\">(</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#9B504E\">my_image.png</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#D6DEEB;--1:#403F53\">);</span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"char[]? my_image = $embed(&#x22;my_image.png&#x22;);\"><div></div></button></div></figure></div>\n<p><code dir=\"auto\">my_image</code> with be an optional <code dir=\"auto\">io::FILE_NOT_FOUND?</code> if the image is missing.</p>\n<p>This also allows us to pass a <a href=\"/language-common/optionals-advanced/#return-a-default-value-if-optional-is-empty\">default value using <code dir=\"auto\">??</code></a>:</p>\n<div class=\"expressive-code\"><figure class=\"frame not-content\"><figcaption class=\"header\"></figcaption><pre data-language=\"c3\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C792EA;--1:#8D46B4\">char</span><span style=\"--0:#D6DEEB;--1:#403F53\">[] my_image </span><span style=\"--0:#C792EA;--1:#8D46B4\">=</span><span style=\"--0:#D6DEEB;--1:#403F53\"> $</span><span style=\"--0:#82AAFF;--1:#3C63B3\">embed</span><span style=\"--0:#D6DEEB;--1:#403F53\">(</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#9B504E\">my_image.png</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#D6DEEB;--1:#403F53\">) </span><span style=\"--0:#C792EA;--1:#8D46B4\">??</span><span style=\"--0:#D6DEEB;--1:#403F53\"> DEFAULT_IMAGE_DATA;</span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"char[] my_image = $embed(&#x22;my_image.png&#x22;) ?? DEFAULT_IMAGE_DATA;\"><div></div></button></div></figure></div>";

				const frontmatter = {"title":"Expressions","description":"Expressions","sidebar":{"order":42}};
				const file = "/home/josh/git/c3_tests/experimental-site-testing-only__local_changes/src/content/docs/Language Fundamentals/expressions.md";
				const url = undefined;
				function rawContent() {
					return "\nExpressions work like in C, with one exception: it is possible to take the address of a temporary. This uses the operator `&&` rather than `&`.\n\nConsequently, this is valid:\n```c3\nfn void test(int* x) { ... }\n\ntest(&&1);\n\n// In C:\n// int x = 1;\n// test(&x);\n```\n\nA pointer created with `&&` is only valid until the end of the\ncurrent function. In other words, you should never return the\npointer created by `&&` from a function as it will never be safe\nto use.\n\n## Well-defined evaluation order\n\nExpressions have a well-defined evaluation order:\n\n1. Binary expressions are evaluated from left to right.\n2. Assignment occurs right to left, so `a = a++` would result in `a` being unchanged.\n3. Call arguments are evaluated in parameter order.\n\n## Compound literals\n\nC3 has C's compound literals:\n\n```c3\nstruct Foo\n{\n    int a;\n    double b;\n}\n\nfn void test1(Foo x) { ... }\n\n...\n\ntest1((Foo){ 1, 2.0 });\n```\n\nArrays follow the same syntax:\n```c3\nfn void test2(int[3] x) { ... }\n\n...\n\ntest2((int[3]){ 1, 2, 3 });\n```\n\nNote that when it's possible, inferring the type is allowed and preferred, so we have for the above examples:\n```c3\ntest1({ 1, 2.0 });\ntest2({ 1, 2, 3 });\n```\nOne may take the address of temporaries, using `&&` (rather than `&` for normal variables). This allows the following:\n\nPassing a [slice](/language-common/arrays/#slice)\n\n```c3\nfn void test(int[] y) { ... }\n\n// Using &&\ntest(&&(int[3]){ 1, 2, 3 });\n\n// Explicitly slicing:\ntest(((int[3]){ 1, 2, 3 })[..]);\n\n// Using a slice directly as a temporary:\ntest((int[]){ 1, 2, 3 });\n\n// Same as above but with inferred type:\ntest({ 1, 2, 3 });\n```\n\nPassing the pointer to an [array](/language-common/arrays)\n\n```c3\nfn void test1(int[3]* z) { ... }\nfn void test2(int* z) { ... }\n\ntest1(&&(int[3]){ 1, 2, 3 });\ntest2(&&(int[3]){ 1, 2, 3 });\n```\n\n## Constant expressions\n\nIn C3 all _constant expressions_ are guaranteed to be calculated at compile time. The following are considered constant expressions:\n\n1. The `null` literal.\n2. Boolean, floating point and integer literals.\n3. The result of arithmetics on constant expressions.\n4. Compile time variables (prefixed with `$`)\n5. Global constant variables with initializers that are constant expressions.\n6. The result of macros that does not generate code and only uses constant expressions.\n7. The result of a cast if the value is cast to a boolean, floating point or integer type and the value that is converted is a constant expression.\n8. String literals.\n9. Initializer lists containing constant values.\n\nSome things that are *not* constant expressions:\n\n1. Any pointer that isn't the `null` literal, even if it's derived from a constant expression.\n2. The result of a cast except for casts of constant expressions to a numeric type.\n3. Compound literals - even when values are constant expressions.\n\n## Including binary data\n\nThe `$embed(...)` function includes the contents of a file into the compilation as a\nconstant array of bytes:\n\n```c3\nchar[*] my_image = $embed(\"my_image.png\");\n```\n\nThe result of an embed work similar to a string literal and can implicitly convert to a `char*`,\n`void*`, `char[]`, `char[*]` and `String`.\n\n##### Limiting length\n\nIt's possible to limit the length of included with the optional second parameter.\n\n```c3\nchar[4] my_data = $embed(\"foo.txt\", 4);\n```\n\n##### Failure to load at compile time and defaults\n\nUsually it's a compile time error if the file can't be included, but sometimes it's useful to only optionally include it.\nIf this is desired, declare the left hand side an [Optional](/language-common/optionals-essential/#what-is-an-optional):\n\n```c3\nchar[]? my_image = $embed(\"my_image.png\");\n```\n\n`my_image` with be an optional `io::FILE_NOT_FOUND?` if the image is missing.\n\nThis also allows us to pass a [default value using `??`](/language-common/optionals-advanced/#return-a-default-value-if-optional-is-empty):\n```c3\nchar[] my_image = $embed(\"my_image.png\") ?? DEFAULT_IMAGE_DATA;\n```";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"well-defined-evaluation-order","text":"Well-defined evaluation order"},{"depth":2,"slug":"compound-literals","text":"Compound literals"},{"depth":2,"slug":"constant-expressions","text":"Constant expressions"},{"depth":2,"slug":"including-binary-data","text":"Including binary data"},{"depth":5,"slug":"limiting-length","text":"Limiting length"},{"depth":5,"slug":"failure-to-load-at-compile-time-and-defaults","text":"Failure to load at compile time and defaults"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
