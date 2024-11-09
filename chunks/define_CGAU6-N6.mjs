import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_DFSFkPP8.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<h1 id=\"the-def-statement\">The “def” statement</h1>\n<p>The <code dir=\"auto\">def</code> statement in C3 is intended for aliasing identifiers and types.</p>\n<h2 id=\"defining-a-type-alias\">Defining a type alias</h2>\n<p><code dir=\"auto\">def &#x3C;type alias> = &#x3C;type></code> creates a type alias. Type aliases need to follow the name convention of user defined types (i.e. capitalized\nnames with at least one lower case letter).</p>\n<div class=\"expressive-code\"><link rel=\"stylesheet\" href=\"/_astro/ec.j8ofn.css\"><script type=\"module\" src=\"/_astro/ec.8zarh.js\"></script><figure class=\"frame not-content\"><figcaption class=\"header\"></figcaption><pre data-language=\"c3\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#D6DEEB;--1:#403F53\">def CharPtr </span><span style=\"--0:#C792EA;--1:#8D46B4\">=</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#C792EA;--1:#8D46B4\">char*</span><span style=\"--0:#D6DEEB;--1:#403F53\">;</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#D6DEEB;--1:#403F53\">def Numbers </span><span style=\"--0:#C792EA;--1:#8D46B4\">=</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#C792EA;--1:#8D46B4\">int</span><span style=\"--0:#D6DEEB;--1:#403F53\">[</span><span style=\"--0:#F78C6C;--1:#AA0982\">10</span><span style=\"--0:#D6DEEB;--1:#403F53\">];</span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"def CharPtr = char*;def Numbers = int[10];\"><div></div></button></div></figure></div>\n<p>Function pointers <em>must</em> be aliased in C3. The syntax is somewhat different from C:</p>\n<div class=\"expressive-code\"><figure class=\"frame not-content\"><figcaption class=\"header\"></figcaption><pre data-language=\"c3\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#D6DEEB;--1:#403F53\">def Callback </span><span style=\"--0:#C792EA;--1:#8D46B4\">=</span><span style=\"--0:#D6DEEB;--1:#403F53\"> fn </span><span style=\"--0:#C792EA;--1:#8D46B4\">void</span><span style=\"--0:#D6DEEB;--1:#403F53\">(</span><span style=\"--0:#C792EA;--1:#8D46B4\">int</span><span style=\"--0:#D6DEEB;--1:#403F53\"> a, </span><span style=\"--0:#C792EA;--1:#8D46B4\">bool</span><span style=\"--0:#D6DEEB;--1:#403F53\"> b);</span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"def Callback = fn void(int a, bool b);\"><div></div></button></div></figure></div>\n<p>This defines an alias to function pointer type of a function that returns nothing and requires two arguments: an int and a bool. Here is a sample usage:</p>\n<div class=\"expressive-code\"><figure class=\"frame not-content\"><figcaption class=\"header\"></figcaption><pre data-language=\"c3\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#D6DEEB;--1:#403F53\">Callback cb </span><span style=\"--0:#C792EA;--1:#8D46B4\">=</span><span style=\"--0:#D6DEEB;--1:#403F53\"> my_callback;</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#82AAFF;--1:#3C63B3\">cb</span><span style=\"--0:#D6DEEB;--1:#403F53\">(</span><span style=\"--0:#F78C6C;--1:#AA0982\">10</span><span style=\"--0:#D6DEEB;--1:#403F53\">, </span><span style=\"--0:#82AAFF;--1:#3C63B3\">false</span><span style=\"--0:#D6DEEB;--1:#403F53\">);</span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"Callback cb = my_callback;cb(10, false);\"><div></div></button></div></figure></div>\n<h2 id=\"distinct-types\">Distinct types</h2>\n<p>Similar to <code dir=\"auto\">def</code> aliases are <code dir=\"auto\">distinct</code> which create distinct new types. Unlike type aliases,\nthey do not implicitly convert to or from any other type.\nLiterals will convert to the distinct types if they would convert to the underlying type.</p>\n<p>Because a distinct type is a standalone type, it can have its own methods, like any other user-defined type.</p>\n<div class=\"expressive-code\"><figure class=\"frame not-content\"><figcaption class=\"header\"></figcaption><pre data-language=\"c3\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#D6DEEB;--1:#403F53\">distinct Foo </span><span style=\"--0:#C792EA;--1:#8D46B4\">=</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#C792EA;--1:#8D46B4\">int</span><span style=\"--0:#D6DEEB;--1:#403F53\">;</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#D6DEEB;--1:#403F53\">Foo f </span><span style=\"--0:#C792EA;--1:#8D46B4\">=</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#F78C6C;--1:#AA0982\">0</span><span style=\"--0:#D6DEEB;--1:#403F53\">;</span><span style=\"--0:#809191;--1:#5E6578\"> // Valid since 0 converts to an int.</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#D6DEEB;--1:#403F53\">f </span><span style=\"--0:#C792EA;--1:#8D46B4\">=</span><span style=\"--0:#D6DEEB;--1:#403F53\"> f </span><span style=\"--0:#C792EA;--1:#8D46B4\">+</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#F78C6C;--1:#AA0982\">1</span><span style=\"--0:#D6DEEB;--1:#403F53\">;</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C792EA;--1:#8D46B4\">int</span><span style=\"--0:#D6DEEB;--1:#403F53\"> i </span><span style=\"--0:#C792EA;--1:#8D46B4\">=</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#F78C6C;--1:#AA0982\">1</span><span style=\"--0:#D6DEEB;--1:#403F53\">;</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#809191;--1:#5E6578\">// f = f + i Error!</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#D6DEEB;--1:#403F53\">f </span><span style=\"--0:#C792EA;--1:#8D46B4\">=</span><span style=\"--0:#D6DEEB;--1:#403F53\"> f </span><span style=\"--0:#C792EA;--1:#8D46B4\">+</span><span style=\"--0:#D6DEEB;--1:#403F53\"> (Foo)i;</span><span style=\"--0:#809191;--1:#5E6578\"> // Valid</span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"distinct Foo = int;Foo f = 0; // Valid since 0 converts to an int.f = f + 1;int i = 1;// f = f + i Error!f = f + (Foo)i; // Valid\"><div></div></button></div></figure></div>\n<h2 id=\"distinct-inline\">Distinct inline</h2>\n<p>When interacting with various APIs it is sometimes desirable for distinct types to implicitly convert <em>to</em>\nits base type, but not <em>from</em> that type.</p>\n<p>Behaviour here is analogous how structs may use <code dir=\"auto\">inline</code> to create struct subtypes.</p>\n<div class=\"expressive-code\"><figure class=\"frame not-content\"><figcaption class=\"header\"></figcaption><pre data-language=\"c3\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#D6DEEB;--1:#403F53\">distinct CString </span><span style=\"--0:#C792EA;--1:#8D46B4\">=</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#C792EA;--1:#8D46B4\">char*</span><span style=\"--0:#D6DEEB;--1:#403F53\">;</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#D6DEEB;--1:#403F53\">distinct ZString </span><span style=\"--0:#C792EA;--1:#8D46B4\">=</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#C792EA;--1:#8D46B4\">inline</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#C792EA;--1:#8D46B4\">char*</span><span style=\"--0:#D6DEEB;--1:#403F53\">;</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#D6DEEB;--1:#403F53\">...</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#D6DEEB;--1:#403F53\">CString abc </span><span style=\"--0:#C792EA;--1:#8D46B4\">=</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#9B504E\">abc</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#D6DEEB;--1:#403F53\">;</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#D6DEEB;--1:#403F53\">ZString def </span><span style=\"--0:#C792EA;--1:#8D46B4\">=</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#9B504E\">def</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#D6DEEB;--1:#403F53\">;</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#809191;--1:#5E6578\">// char* from_abc = abc; // Error!</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C792EA;--1:#8D46B4\">char*</span><span style=\"--0:#D6DEEB;--1:#403F53\"> from_def </span><span style=\"--0:#C792EA;--1:#8D46B4\">=</span><span style=\"--0:#D6DEEB;--1:#403F53\"> def;</span><span style=\"--0:#809191;--1:#5E6578\"> // Valid!</span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"distinct CString = char*;distinct ZString = inline char*;...CString abc = &#x22;abc&#x22;;ZString def = &#x22;def&#x22;;// char* from_abc = abc; // Error!char* from_def = def; // Valid!\"><div></div></button></div></figure></div>\n<h2 id=\"function-and-variable-aliases\">Function and variable aliases</h2>\n<p><code dir=\"auto\">def</code> can also be used to create aliases for functions and variables.</p>\n<p>The syntax is <code dir=\"auto\">def &#x3C;alias> = &#x3C;original identifier></code>.</p>\n<div class=\"expressive-code\"><figure class=\"frame not-content\"><figcaption class=\"header\"></figcaption><pre data-language=\"c3\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#D6DEEB;--1:#403F53\">fn </span><span style=\"--0:#C792EA;--1:#8D46B4\">void</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#82AAFF;--1:#3C63B3\">foo</span><span style=\"--0:#D6DEEB;--1:#403F53\">() { ... }</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C792EA;--1:#8D46B4\">int</span><span style=\"--0:#D6DEEB;--1:#403F53\"> foo_var;</span></div></div><div class=\"ec-line\"><div class=\"code\">\n</div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#D6DEEB;--1:#403F53\">def bar </span><span style=\"--0:#C792EA;--1:#8D46B4\">=</span><span style=\"--0:#D6DEEB;--1:#403F53\"> foo;</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#D6DEEB;--1:#403F53\">def bar_var </span><span style=\"--0:#C792EA;--1:#8D46B4\">=</span><span style=\"--0:#D6DEEB;--1:#403F53\"> foo_var;</span></div></div><div class=\"ec-line\"><div class=\"code\">\n</div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#D6DEEB;--1:#403F53\">fn </span><span style=\"--0:#C792EA;--1:#8D46B4\">void</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#82AAFF;--1:#3C63B3\">test</span><span style=\"--0:#D6DEEB;--1:#403F53\">()</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#D6DEEB;--1:#403F53\">{</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#809191;--1:#5E6578\">  </span></span><span style=\"--0:#809191;--1:#5E6578\">// These are the same:</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--0:#82AAFF;--1:#3C63B3\">foo</span><span style=\"--0:#D6DEEB;--1:#403F53\">();</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--0:#82AAFF;--1:#3C63B3\">bar</span><span style=\"--0:#D6DEEB;--1:#403F53\">();</span></div></div><div class=\"ec-line\"><div class=\"code\">\n</div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#809191;--1:#5E6578\">  </span></span><span style=\"--0:#809191;--1:#5E6578\">// These access the same variable:</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--0:#C792EA;--1:#8D46B4\">int</span><span style=\"--0:#D6DEEB;--1:#403F53\"> x </span><span style=\"--0:#C792EA;--1:#8D46B4\">=</span><span style=\"--0:#D6DEEB;--1:#403F53\"> foo_var;</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">  </span><span style=\"--0:#C792EA;--1:#8D46B4\">int</span><span style=\"--0:#D6DEEB;--1:#403F53\"> y </span><span style=\"--0:#C792EA;--1:#8D46B4\">=</span><span style=\"--0:#D6DEEB;--1:#403F53\"> bar_var;</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#D6DEEB;--1:#403F53\">}</span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"fn void foo() { ... }int foo_var;def bar = foo;def bar_var = foo_var;fn void test(){  // These are the same:  foo();  bar();  // These access the same variable:  int x = foo_var;  int y = bar_var;}\"><div></div></button></div></figure></div>\n<h2 id=\"using-def-to-create-generic-types-functions-and-variables\">Using <code dir=\"auto\">def</code> to create generic types, functions and variables</h2>\n<p>It is recommended to favour using def to create aliases for parameterized types, but it can also be used for parameterized functions and variables:</p>\n<div class=\"expressive-code\"><figure class=\"frame not-content\"><figcaption class=\"header\"></figcaption><pre data-language=\"c3\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#D6DEEB;--1:#403F53\">import generic_foo;</span></div></div><div class=\"ec-line\"><div class=\"code\">\n</div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#809191;--1:#5E6578\">// Parameterized function aliases</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#D6DEEB;--1:#403F53\">def int_foo_call </span><span style=\"--0:#C792EA;--1:#8D46B4\">=</span><span style=\"--0:#D6DEEB;--1:#403F53\"> generic_foo::</span><span style=\"--0:#82AAFF;--1:#3C63B3\">foo_call</span><span style=\"--0:#D6DEEB;--1:#403F53\">(</span><span style=\"--0:#C792EA;--1:#8D46B4\">&#x3C;int></span><span style=\"--0:#D6DEEB;--1:#403F53\">);</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#D6DEEB;--1:#403F53\">def double_foo_call </span><span style=\"--0:#C792EA;--1:#8D46B4\">=</span><span style=\"--0:#D6DEEB;--1:#403F53\"> generic_foo::</span><span style=\"--0:#82AAFF;--1:#3C63B3\">foo_call</span><span style=\"--0:#D6DEEB;--1:#403F53\">(</span><span style=\"--0:#C792EA;--1:#8D46B4\">&#x3C;double></span><span style=\"--0:#D6DEEB;--1:#403F53\">);</span></div></div><div class=\"ec-line\"><div class=\"code\">\n</div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#809191;--1:#5E6578\">// Parameterized type aliases</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#D6DEEB;--1:#403F53\">def IntFoo </span><span style=\"--0:#C792EA;--1:#8D46B4\">=</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#82AAFF;--1:#3C63B3\">Foo</span><span style=\"--0:#D6DEEB;--1:#403F53\">(</span><span style=\"--0:#C792EA;--1:#8D46B4\">&#x3C;int></span><span style=\"--0:#D6DEEB;--1:#403F53\">);</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#D6DEEB;--1:#403F53\">def DoubleFoo </span><span style=\"--0:#C792EA;--1:#8D46B4\">=</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#82AAFF;--1:#3C63B3\">Foo</span><span style=\"--0:#D6DEEB;--1:#403F53\">(</span><span style=\"--0:#C792EA;--1:#8D46B4\">&#x3C;double></span><span style=\"--0:#D6DEEB;--1:#403F53\">);</span></div></div><div class=\"ec-line\"><div class=\"code\">\n</div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#809191;--1:#5E6578\">// Parameterized global aliases</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#D6DEEB;--1:#403F53\">def int_max_foo </span><span style=\"--0:#C792EA;--1:#8D46B4\">=</span><span style=\"--0:#D6DEEB;--1:#403F53\"> generic_foo::</span><span style=\"--0:#82AAFF;--1:#3C63B3\">max_foo</span><span style=\"--0:#D6DEEB;--1:#403F53\">(</span><span style=\"--0:#C792EA;--1:#8D46B4\">&#x3C;int></span><span style=\"--0:#D6DEEB;--1:#403F53\">);</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#D6DEEB;--1:#403F53\">def double_max_foo </span><span style=\"--0:#C792EA;--1:#8D46B4\">=</span><span style=\"--0:#D6DEEB;--1:#403F53\"> generic_foo::</span><span style=\"--0:#82AAFF;--1:#3C63B3\">max_foo</span><span style=\"--0:#D6DEEB;--1:#403F53\">(</span><span style=\"--0:#C792EA;--1:#8D46B4\">&#x3C;double></span><span style=\"--0:#D6DEEB;--1:#403F53\">);</span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"import generic_foo;// Parameterized function aliasesdef int_foo_call = generic_foo::foo_call(<int>);def double_foo_call = generic_foo::foo_call(<double>);// Parameterized type aliasesdef IntFoo = Foo(<int>);def DoubleFoo = Foo(<double>);// Parameterized global aliasesdef int_max_foo = generic_foo::max_foo(<int>);def double_max_foo = generic_foo::max_foo(<double>);\"><div></div></button></div></figure></div>\n<p>For more information, see the chapter on <a href=\"/generic-programming/generics/\">generics</a>.</p>\n<h2 id=\"function-pointer-default-arguments-and-named-parameters\">Function pointer default arguments and named parameters</h2>\n<p>It is possible to attach default arguments to function pointer aliases. There is no requirement\nthat the function has the same default arguments. In fact, the function pointer may have\ndefault arguments where the function doesn’t have it and vice-versa. Calling the function\ndirectly will then use the function’s default arguments, and calling through the function pointer\nwill yield the function pointer alias’ default argument.</p>\n<p>Similarly, named parameter arguments follow the alias definition when calling through the\nfunction pointer:</p>\n<div class=\"expressive-code\"><figure class=\"frame not-content\"><figcaption class=\"header\"></figcaption><pre data-language=\"c3\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#D6DEEB;--1:#403F53\">def TestFn </span><span style=\"--0:#C792EA;--1:#8D46B4\">=</span><span style=\"--0:#D6DEEB;--1:#403F53\"> fn </span><span style=\"--0:#C792EA;--1:#8D46B4\">void</span><span style=\"--0:#D6DEEB;--1:#403F53\">(</span><span style=\"--0:#C792EA;--1:#8D46B4\">int</span><span style=\"--0:#D6DEEB;--1:#403F53\"> y </span><span style=\"--0:#C792EA;--1:#8D46B4\">=</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#F78C6C;--1:#AA0982\">123</span><span style=\"--0:#D6DEEB;--1:#403F53\">);</span></div></div><div class=\"ec-line\"><div class=\"code\">\n</div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#D6DEEB;--1:#403F53\">fn </span><span style=\"--0:#C792EA;--1:#8D46B4\">void</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#82AAFF;--1:#3C63B3\">test</span><span style=\"--0:#D6DEEB;--1:#403F53\">(</span><span style=\"--0:#C792EA;--1:#8D46B4\">int</span><span style=\"--0:#D6DEEB;--1:#403F53\"> x </span><span style=\"--0:#C792EA;--1:#8D46B4\">=</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#F78C6C;--1:#AA0982\">5</span><span style=\"--0:#D6DEEB;--1:#403F53\">)</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#D6DEEB;--1:#403F53\">{</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#D6DEEB;--1:#403F53\">    </span></span><span style=\"--0:#D6DEEB;--1:#403F53\">io::</span><span style=\"--0:#82AAFF;--1:#3C63B3\">printfn</span><span style=\"--0:#D6DEEB;--1:#403F53\">(</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#9B504E\">X = </span><span style=\"--0:#82AAFF;--1:#3C63B3\">%d</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#D6DEEB;--1:#403F53\">, x);</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#D6DEEB;--1:#403F53\">}</span></div></div><div class=\"ec-line\"><div class=\"code\">\n</div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#D6DEEB;--1:#403F53\">fn </span><span style=\"--0:#C792EA;--1:#8D46B4\">void</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#82AAFF;--1:#3C63B3\">main</span><span style=\"--0:#D6DEEB;--1:#403F53\">()</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#D6DEEB;--1:#403F53\">{</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#D6DEEB;--1:#403F53\">    </span></span><span style=\"--0:#D6DEEB;--1:#403F53\">TestFn test2 </span><span style=\"--0:#C792EA;--1:#8D46B4\">=</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#C792EA;--1:#8D46B4\">&#x26;</span><span style=\"--0:#D6DEEB;--1:#403F53\">test;</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">    </span><span style=\"--0:#82AAFF;--1:#3C63B3\">test</span><span style=\"--0:#D6DEEB;--1:#403F53\">();</span><span style=\"--0:#809191;--1:#5E6578\">         // Prints X = 5</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">    </span><span style=\"--0:#82AAFF;--1:#3C63B3\">test2</span><span style=\"--0:#D6DEEB;--1:#403F53\">();</span><span style=\"--0:#809191;--1:#5E6578\">        // Prints X = 123</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">    </span><span style=\"--0:#82AAFF;--1:#3C63B3\">test</span><span style=\"--0:#D6DEEB;--1:#403F53\">(x: </span><span style=\"--0:#F78C6C;--1:#AA0982\">3</span><span style=\"--0:#D6DEEB;--1:#403F53\">);</span><span style=\"--0:#809191;--1:#5E6578\">     // Prints X = 3</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">    </span><span style=\"--0:#82AAFF;--1:#3C63B3\">test2</span><span style=\"--0:#D6DEEB;--1:#403F53\">(y: </span><span style=\"--0:#F78C6C;--1:#AA0982\">4</span><span style=\"--0:#D6DEEB;--1:#403F53\">);</span><span style=\"--0:#809191;--1:#5E6578\">    // Prints X = 4</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#D6DEEB;--1:#403F53\">}</span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"def TestFn = fn void(int y = 123);fn void test(int x = 5){    io::printfn(&#x22;X = %d&#x22;, x);}fn void main(){    TestFn test2 = &#x26;test;    test();         // Prints X = 5    test2();        // Prints X = 123    test(x: 3);     // Prints X = 3    test2(y: 4);    // Prints X = 4}\"><div></div></button></div></figure></div>";

				const frontmatter = {"title":"Define","description":"The `def` statement","sidebar":{"order":61}};
				const file = "/home/josh/git/c3_tests/experimental-site-testing-only__local_changes/src/content/docs/Language Common/define.md";
				const url = undefined;
				function rawContent() {
					return "\n# The \"def\" statement\n\nThe `def` statement in C3 is intended for aliasing identifiers and types.\n\n## Defining a type alias\n\n`def <type alias> = <type>` creates a type alias. Type aliases need to follow the name convention of user defined types (i.e. capitalized\nnames with at least one lower case letter).\n\n```c3\ndef CharPtr = char*;\ndef Numbers = int[10];\n```\n\nFunction pointers _must_ be aliased in C3. The syntax is somewhat different from C:\n\n```c3\ndef Callback = fn void(int a, bool b);\n```\n\nThis defines an alias to function pointer type of a function that returns nothing and requires two arguments: an int and a bool. Here is a sample usage:\n\n```c3\nCallback cb = my_callback;\ncb(10, false);\n```\n\n## Distinct types\n\nSimilar to `def` aliases are `distinct` which create distinct new types. Unlike type aliases,\nthey do not implicitly convert to or from any other type.\nLiterals will convert to the distinct types if they would convert to the underlying type.\n\nBecause a distinct type is a standalone type, it can have its own methods, like any other user-defined type.\n\n```c3\ndistinct Foo = int;\nFoo f = 0; // Valid since 0 converts to an int.\nf = f + 1;\nint i = 1;\n// f = f + i Error!\nf = f + (Foo)i; // Valid\n```\n\n## Distinct inline\n\nWhen interacting with various APIs it is sometimes desirable for distinct types to implicitly convert *to* \nits base type, but not *from* that type.\n\nBehaviour here is analogous how structs may use `inline` to create struct subtypes.\n\n```c3\ndistinct CString = char*;\ndistinct ZString = inline char*;\n...\nCString abc = \"abc\";\nZString def = \"def\";\n// char* from_abc = abc; // Error!\nchar* from_def = def; // Valid!\n```\n\n## Function and variable aliases\n\n`def` can also be used to create aliases for functions and variables.\n\nThe syntax is `def <alias> = <original identifier>`.\n\n```c3\nfn void foo() { ... }\nint foo_var;\n\ndef bar = foo;\ndef bar_var = foo_var;\n\nfn void test() \n{\n  // These are the same:\n  foo();\n  bar();\n  \n  // These access the same variable:\n  int x = foo_var;\n  int y = bar_var;\n}  \n```\n\n## Using `def` to create generic types, functions and variables\n\nIt is recommended to favour using def to create aliases for parameterized types, but it can also be used for parameterized functions and variables:\n\n```c3\nimport generic_foo;\n\n// Parameterized function aliases\ndef int_foo_call = generic_foo::foo_call(<int>);\ndef double_foo_call = generic_foo::foo_call(<double>);\n\n// Parameterized type aliases\ndef IntFoo = Foo(<int>);\ndef DoubleFoo = Foo(<double>);\n\n// Parameterized global aliases\ndef int_max_foo = generic_foo::max_foo(<int>);\ndef double_max_foo = generic_foo::max_foo(<double>);\n```\n\nFor more information, see the chapter on [generics](/generic-programming/generics/).\n\n## Function pointer default arguments and named parameters\n\nIt is possible to attach default arguments to function pointer aliases. There is no requirement\nthat the function has the same default arguments. In fact, the function pointer may have \ndefault arguments where the function doesn't have it and vice-versa. Calling the function\ndirectly will then use the function's default arguments, and calling through the function pointer\nwill yield the function pointer alias' default argument.\n\nSimilarly, named parameter arguments follow the alias definition when calling through the \nfunction pointer:\n\n```c3\ndef TestFn = fn void(int y = 123);\n\nfn void test(int x = 5)\n{\n    io::printfn(\"X = %d\", x);\n}\n\nfn void main()\n{\n    TestFn test2 = &test;\n    test();         // Prints X = 5\n    test2();        // Prints X = 123\n    test(x: 3);     // Prints X = 3 \n    test2(y: 4);    // Prints X = 4\n}\n```\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":1,"slug":"the-def-statement","text":"The “def” statement"},{"depth":2,"slug":"defining-a-type-alias","text":"Defining a type alias"},{"depth":2,"slug":"distinct-types","text":"Distinct types"},{"depth":2,"slug":"distinct-inline","text":"Distinct inline"},{"depth":2,"slug":"function-and-variable-aliases","text":"Function and variable aliases"},{"depth":2,"slug":"using-def-to-create-generic-types-functions-and-variables","text":"Using def to create generic types, functions and variables"},{"depth":2,"slug":"function-pointer-default-arguments-and-named-parameters","text":"Function pointer default arguments and named parameters"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };