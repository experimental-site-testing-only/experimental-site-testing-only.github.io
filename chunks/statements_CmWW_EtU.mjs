import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_DFSFkPP8.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>Statements largely work like in C, but with some additions.</p>\n<h2 id=\"expression-blocks\">Expression blocks</h2>\n<p>Expression blocks (delimited using <code dir=\"auto\">{| |}</code>) are compound statements that opens their own function scope.\nJumps cannot be done into or out of a function block, and <code dir=\"auto\">return</code> exits the block, rather than the function as a whole.</p>\n<p>The function below prints <code dir=\"auto\">World!</code></p>\n<div class=\"expressive-code\"><link rel=\"stylesheet\" href=\"/_astro/ec.j8ofn.css\"><script type=\"module\" src=\"/_astro/ec.8zarh.js\"></script><figure class=\"frame not-content\"><figcaption class=\"header\"></figcaption><pre data-language=\"c3\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#D6DEEB;--1:#403F53\">fn </span><span style=\"--0:#C792EA;--1:#8D46B4\">void</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#82AAFF;--1:#3C63B3\">test</span><span style=\"--0:#D6DEEB;--1:#403F53\">()</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#D6DEEB;--1:#403F53\">{</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">    </span><span style=\"--0:#C792EA;--1:#8D46B4\">int</span><span style=\"--0:#D6DEEB;--1:#403F53\"> a </span><span style=\"--0:#C792EA;--1:#8D46B4\">=</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#F78C6C;--1:#AA0982\">0</span><span style=\"--0:#D6DEEB;--1:#403F53\">;</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#D6DEEB;--1:#403F53\">    </span></span><span style=\"--0:#D6DEEB;--1:#403F53\">{</span><span style=\"--0:#C792EA;--1:#8D46B4\">|</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">        </span><span style=\"--0:#C792EA;--1:#8D46B4\">if</span><span style=\"--0:#D6DEEB;--1:#403F53\"> (</span><span style=\"--0:#C792EA;--1:#8D46B4\">!</span><span style=\"--0:#D6DEEB;--1:#403F53\">a) </span><span style=\"--0:#C792EA;--1:#8D46B4\">return</span><span style=\"--0:#D6DEEB;--1:#403F53\">;</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#D6DEEB;--1:#403F53\">        </span></span><span style=\"--0:#D6DEEB;--1:#403F53\">io::</span><span style=\"--0:#82AAFF;--1:#3C63B3\">printf</span><span style=\"--0:#D6DEEB;--1:#403F53\">(</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#9B504E\">Hello </span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#D6DEEB;--1:#403F53\">);</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">        </span><span style=\"--0:#C792EA;--1:#8D46B4\">return</span><span style=\"--0:#D6DEEB;--1:#403F53\">;</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">    </span><span style=\"--0:#C792EA;--1:#8D46B4\">|</span><span style=\"--0:#D6DEEB;--1:#403F53\">};</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#D6DEEB;--1:#403F53\">    </span></span><span style=\"--0:#D6DEEB;--1:#403F53\">io::</span><span style=\"--0:#82AAFF;--1:#3C63B3\">printf</span><span style=\"--0:#D6DEEB;--1:#403F53\">(</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#9B504E\">World!</span><span style=\"--0:#F78C6C;--1:#AA0982\">\\n</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#D6DEEB;--1:#403F53\">);</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#D6DEEB;--1:#403F53\">}</span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"fn void test(){    int a = 0;    {|        if (!a) return;        io::printf(&#x22;Hello &#x22;);        return;    |};    io::printf(&#x22;World!\\n&#x22;);}\"><div></div></button></div></figure></div>\n<p>Expression blocks may also return values:</p>\n<div class=\"expressive-code\"><figure class=\"frame not-content\"><figcaption class=\"header\"></figcaption><pre data-language=\"c3\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#D6DEEB;--1:#403F53\">fn </span><span style=\"--0:#C792EA;--1:#8D46B4\">void</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#82AAFF;--1:#3C63B3\">test</span><span style=\"--0:#D6DEEB;--1:#403F53\">(</span><span style=\"--0:#C792EA;--1:#8D46B4\">int</span><span style=\"--0:#D6DEEB;--1:#403F53\"> x)</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#D6DEEB;--1:#403F53\">{</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">    </span><span style=\"--0:#C792EA;--1:#8D46B4\">int</span><span style=\"--0:#D6DEEB;--1:#403F53\"> a </span><span style=\"--0:#C792EA;--1:#8D46B4\">=</span><span style=\"--0:#D6DEEB;--1:#403F53\"> {</span><span style=\"--0:#C792EA;--1:#8D46B4\">|</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">        </span><span style=\"--0:#C792EA;--1:#8D46B4\">if</span><span style=\"--0:#D6DEEB;--1:#403F53\"> (x </span><span style=\"--0:#C792EA;--1:#8D46B4\">></span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#F78C6C;--1:#AA0982\">0</span><span style=\"--0:#D6DEEB;--1:#403F53\">) </span><span style=\"--0:#C792EA;--1:#8D46B4\">return</span><span style=\"--0:#D6DEEB;--1:#403F53\"> x </span><span style=\"--0:#C792EA;--1:#8D46B4\">*</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#F78C6C;--1:#AA0982\">2</span><span style=\"--0:#D6DEEB;--1:#403F53\">;</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">        </span><span style=\"--0:#C792EA;--1:#8D46B4\">if</span><span style=\"--0:#D6DEEB;--1:#403F53\"> (x </span><span style=\"--0:#C792EA;--1:#8D46B4\">==</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#F78C6C;--1:#AA0982\">0</span><span style=\"--0:#D6DEEB;--1:#403F53\">) </span><span style=\"--0:#C792EA;--1:#8D46B4\">return</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#F78C6C;--1:#AA0982\">100</span><span style=\"--0:#D6DEEB;--1:#403F53\">;</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">        </span><span style=\"--0:#C792EA;--1:#8D46B4\">return</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#C792EA;--1:#8D46B4\">-</span><span style=\"--0:#D6DEEB;--1:#403F53\">x;</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">    </span><span style=\"--0:#C792EA;--1:#8D46B4\">|</span><span style=\"--0:#D6DEEB;--1:#403F53\">};</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#D6DEEB;--1:#403F53\">    </span></span><span style=\"--0:#D6DEEB;--1:#403F53\">io::</span><span style=\"--0:#82AAFF;--1:#3C63B3\">printfn</span><span style=\"--0:#D6DEEB;--1:#403F53\">(</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#9B504E\">The result was </span><span style=\"--0:#82AAFF;--1:#3C63B3\">%d</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#D6DEEB;--1:#403F53\">, a);</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#D6DEEB;--1:#403F53\">}</span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"fn void test(int x){    int a = {|        if (x > 0) return x * 2;        if (x == 0) return 100;        return -x;    |};    io::printfn(&#x22;The result was %d&#x22;, a);}\"><div></div></button></div></figure></div>\n<h2 id=\"labelled-break-and-continue\">Labelled break and continue</h2>\n<p>Labelled <code dir=\"auto\">break</code> and <code dir=\"auto\">continue</code> lets you break out of an outer scope. Labels can be put on <code dir=\"auto\">if</code>,\n<code dir=\"auto\">switch</code>, <code dir=\"auto\">while</code> and <code dir=\"auto\">do</code> statements.</p>\n<div class=\"expressive-code\"><figure class=\"frame not-content\"><figcaption class=\"header\"></figcaption><pre data-language=\"c3\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#D6DEEB;--1:#403F53\">fn </span><span style=\"--0:#C792EA;--1:#8D46B4\">void</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#82AAFF;--1:#3C63B3\">test</span><span style=\"--0:#D6DEEB;--1:#403F53\">(</span><span style=\"--0:#C792EA;--1:#8D46B4\">int</span><span style=\"--0:#D6DEEB;--1:#403F53\"> i)</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#D6DEEB;--1:#403F53\">{</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">    </span><span style=\"--0:#C792EA;--1:#8D46B4\">if</span><span style=\"--0:#D6DEEB;--1:#403F53\"> FOO: (i </span><span style=\"--0:#C792EA;--1:#8D46B4\">></span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#F78C6C;--1:#AA0982\">0</span><span style=\"--0:#D6DEEB;--1:#403F53\">)</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#D6DEEB;--1:#403F53\">    </span></span><span style=\"--0:#D6DEEB;--1:#403F53\">{</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">        </span><span style=\"--0:#C792EA;--1:#8D46B4\">while</span><span style=\"--0:#D6DEEB;--1:#403F53\"> (</span><span style=\"--0:#F78C6C;--1:#AA0982\">1</span><span style=\"--0:#D6DEEB;--1:#403F53\">)</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#D6DEEB;--1:#403F53\">        </span></span><span style=\"--0:#D6DEEB;--1:#403F53\">{</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#D6DEEB;--1:#403F53\">            </span></span><span style=\"--0:#D6DEEB;--1:#403F53\">io::</span><span style=\"--0:#82AAFF;--1:#3C63B3\">printfn</span><span style=\"--0:#D6DEEB;--1:#403F53\">(</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#82AAFF;--1:#3C63B3\">%d</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#D6DEEB;--1:#403F53\">, i);</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#809191;--1:#5E6578\">            </span></span><span style=\"--0:#809191;--1:#5E6578\">// Break out of the top if statement.</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">            </span><span style=\"--0:#C792EA;--1:#8D46B4\">if</span><span style=\"--0:#D6DEEB;--1:#403F53\"> (i</span><span style=\"--0:#C792EA;--1:#8D46B4\">++</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#C792EA;--1:#8D46B4\">></span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#F78C6C;--1:#AA0982\">10</span><span style=\"--0:#D6DEEB;--1:#403F53\">) </span><span style=\"--0:#C792EA;--1:#8D46B4\">break</span><span style=\"--0:#D6DEEB;--1:#403F53\"> FOO;</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#D6DEEB;--1:#403F53\">        </span></span><span style=\"--0:#D6DEEB;--1:#403F53\">}</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#D6DEEB;--1:#403F53\">    </span></span><span style=\"--0:#D6DEEB;--1:#403F53\">}</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#D6DEEB;--1:#403F53\">}</span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"fn void test(int i){    if FOO: (i > 0)    {        while (1)        {            io::printfn(&#x22;%d&#x22;, i);            // Break out of the top if statement.            if (i++ > 10) break FOO;        }    }}\"><div></div></button></div></figure></div>\n<h2 id=\"do-without-while\">Do-without-while</h2>\n<p>Do-while statements can skip the ending <code dir=\"auto\">while</code>. In that case it acts as if the <code dir=\"auto\">while</code> was <code dir=\"auto\">while(0)</code>:</p>\n<div class=\"expressive-code\"><figure class=\"frame not-content\"><figcaption class=\"header\"></figcaption><pre data-language=\"c3\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C792EA;--1:#8D46B4\">do</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#D6DEEB;--1:#403F53\">{</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#D6DEEB;--1:#403F53\">    </span></span><span style=\"--0:#D6DEEB;--1:#403F53\">io::</span><span style=\"--0:#82AAFF;--1:#3C63B3\">printn</span><span style=\"--0:#D6DEEB;--1:#403F53\">(</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#9B504E\">FOO</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#D6DEEB;--1:#403F53\">);</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#D6DEEB;--1:#403F53\">} </span><span style=\"--0:#C792EA;--1:#8D46B4\">while</span><span style=\"--0:#D6DEEB;--1:#403F53\"> (</span><span style=\"--0:#F78C6C;--1:#AA0982\">0</span><span style=\"--0:#D6DEEB;--1:#403F53\">);</span></div></div><div class=\"ec-line\"><div class=\"code\">\n</div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#809191;--1:#5E6578\">// Equivalent to the above.</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C792EA;--1:#8D46B4\">do</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#D6DEEB;--1:#403F53\">{</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#D6DEEB;--1:#403F53\">    </span></span><span style=\"--0:#D6DEEB;--1:#403F53\">io::</span><span style=\"--0:#82AAFF;--1:#3C63B3\">printn</span><span style=\"--0:#D6DEEB;--1:#403F53\">(</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#9B504E\">FOO</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#D6DEEB;--1:#403F53\">);</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#D6DEEB;--1:#403F53\">};</span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"do{    io::printn(&#x22;FOO&#x22;);} while (0);// Equivalent to the above.do{    io::printn(&#x22;FOO&#x22;);};\"><div></div></button></div></figure></div>\n<h2 id=\"nextcase-and-labelled-nextcase\">Nextcase and labelled nextcase</h2>\n<p>The <code dir=\"auto\">nextcase</code> statement is used in <code dir=\"auto\">switch</code> and <code dir=\"auto\">if-catch</code> to jump to the next statement:</p>\n<div class=\"expressive-code\"><figure class=\"frame not-content\"><figcaption class=\"header\"></figcaption><pre data-language=\"c3\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C792EA;--1:#8D46B4\">switch</span><span style=\"--0:#D6DEEB;--1:#403F53\"> (i)</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#D6DEEB;--1:#403F53\">{</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">    </span><span style=\"--0:#C792EA;--1:#8D46B4\">case</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#F78C6C;--1:#AA0982\">1</span><span style=\"--0:#D6DEEB;--1:#403F53\">:</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">        </span><span style=\"--0:#82AAFF;--1:#3C63B3\">doSomething</span><span style=\"--0:#D6DEEB;--1:#403F53\">();</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#D6DEEB;--1:#403F53\">        </span></span><span style=\"--0:#D6DEEB;--1:#403F53\">nextcase;</span><span style=\"--0:#809191;--1:#5E6578\"> // Jumps to case 2</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">    </span><span style=\"--0:#C792EA;--1:#8D46B4\">case</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#F78C6C;--1:#AA0982\">2</span><span style=\"--0:#D6DEEB;--1:#403F53\">:</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">        </span><span style=\"--0:#82AAFF;--1:#3C63B3\">doSomethingElse</span><span style=\"--0:#D6DEEB;--1:#403F53\">();</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#D6DEEB;--1:#403F53\">}</span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"switch (i){    case 1:        doSomething();        nextcase; // Jumps to case 2    case 2:        doSomethingElse();}\"><div></div></button></div></figure></div>\n<p>It’s also possible to use <code dir=\"auto\">nextcase</code> with an expression, to jump to an arbitrary case:</p>\n<div class=\"expressive-code\"><figure class=\"frame not-content\"><figcaption class=\"header\"></figcaption><pre data-language=\"c3\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C792EA;--1:#8D46B4\">switch</span><span style=\"--0:#D6DEEB;--1:#403F53\"> (i)</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#D6DEEB;--1:#403F53\">{</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">    </span><span style=\"--0:#C792EA;--1:#8D46B4\">case</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#F78C6C;--1:#AA0982\">1</span><span style=\"--0:#D6DEEB;--1:#403F53\">:</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">        </span><span style=\"--0:#82AAFF;--1:#3C63B3\">doSomething</span><span style=\"--0:#D6DEEB;--1:#403F53\">();</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#D6DEEB;--1:#403F53\">        </span></span><span style=\"--0:#D6DEEB;--1:#403F53\">nextcase </span><span style=\"--0:#F78C6C;--1:#AA0982\">3</span><span style=\"--0:#D6DEEB;--1:#403F53\">;</span><span style=\"--0:#809191;--1:#5E6578\"> // Jump to case 3</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">    </span><span style=\"--0:#C792EA;--1:#8D46B4\">case</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#F78C6C;--1:#AA0982\">2</span><span style=\"--0:#D6DEEB;--1:#403F53\">:</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">        </span><span style=\"--0:#82AAFF;--1:#3C63B3\">doSomethingElse</span><span style=\"--0:#D6DEEB;--1:#403F53\">();</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">    </span><span style=\"--0:#C792EA;--1:#8D46B4\">case</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#F78C6C;--1:#AA0982\">3</span><span style=\"--0:#D6DEEB;--1:#403F53\">:</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#D6DEEB;--1:#403F53\">        </span></span><span style=\"--0:#D6DEEB;--1:#403F53\">nextcase </span><span style=\"--0:#82AAFF;--1:#3C63B3\">rand</span><span style=\"--0:#D6DEEB;--1:#403F53\">();</span><span style=\"--0:#809191;--1:#5E6578\"> // Jump to random case</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">    </span><span style=\"--0:#C792EA;--1:#8D46B4\">default</span><span style=\"--0:#D6DEEB;--1:#403F53\">:</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#D6DEEB;--1:#403F53\">        </span></span><span style=\"--0:#D6DEEB;--1:#403F53\">io::</span><span style=\"--0:#82AAFF;--1:#3C63B3\">printn</span><span style=\"--0:#D6DEEB;--1:#403F53\">(</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#9B504E\">Ended</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#D6DEEB;--1:#403F53\">);</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#D6DEEB;--1:#403F53\">}</span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"switch (i){    case 1:        doSomething();        nextcase 3; // Jump to case 3    case 2:        doSomethingElse();    case 3:        nextcase rand(); // Jump to random case    default:        io::printn(&#x22;Ended&#x22;);}\"><div></div></button></div></figure></div>\n<p>Which can be used as structured <code dir=\"auto\">goto</code> when creating state machines.</p>\n<h2 id=\"switch-cases-with-runtime-evaluation\">Switch cases with runtime evaluation</h2>\n<p>It’s possible to use <code dir=\"auto\">switch</code> as an enhanced if-else chain:</p>\n<div class=\"expressive-code\"><figure class=\"frame not-content\"><figcaption class=\"header\"></figcaption><pre data-language=\"c3\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C792EA;--1:#8D46B4\">switch</span><span style=\"--0:#D6DEEB;--1:#403F53\"> (</span><span style=\"--0:#82AAFF;--1:#3C63B3\">true</span><span style=\"--0:#D6DEEB;--1:#403F53\">)</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#D6DEEB;--1:#403F53\">{</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">    </span><span style=\"--0:#C792EA;--1:#8D46B4\">case</span><span style=\"--0:#D6DEEB;--1:#403F53\"> x </span><span style=\"--0:#C792EA;--1:#8D46B4\">&#x3C;</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#F78C6C;--1:#AA0982\">0</span><span style=\"--0:#D6DEEB;--1:#403F53\">:</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">        </span><span style=\"--0:#82AAFF;--1:#3C63B3\">xless</span><span style=\"--0:#D6DEEB;--1:#403F53\">();</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">    </span><span style=\"--0:#C792EA;--1:#8D46B4\">case</span><span style=\"--0:#D6DEEB;--1:#403F53\"> x </span><span style=\"--0:#C792EA;--1:#8D46B4\">></span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#F78C6C;--1:#AA0982\">0</span><span style=\"--0:#D6DEEB;--1:#403F53\">:</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">        </span><span style=\"--0:#82AAFF;--1:#3C63B3\">xgreater</span><span style=\"--0:#D6DEEB;--1:#403F53\">();</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">    </span><span style=\"--0:#C792EA;--1:#8D46B4\">default</span><span style=\"--0:#D6DEEB;--1:#403F53\">:</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">        </span><span style=\"--0:#82AAFF;--1:#3C63B3\">xequals</span><span style=\"--0:#D6DEEB;--1:#403F53\">();</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#D6DEEB;--1:#403F53\">}</span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"switch (true){    case x < 0:        xless();    case x > 0:        xgreater();    default:        xequals();}\"><div></div></button></div></figure></div>\n<p>The above would be equivalent to writing:</p>\n<div class=\"expressive-code\"><figure class=\"frame not-content\"><figcaption class=\"header\"></figcaption><pre data-language=\"c3\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C792EA;--1:#8D46B4\">if</span><span style=\"--0:#D6DEEB;--1:#403F53\"> (c </span><span style=\"--0:#C792EA;--1:#8D46B4\">&#x3C;</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#F78C6C;--1:#AA0982\">0</span><span style=\"--0:#D6DEEB;--1:#403F53\">)</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#D6DEEB;--1:#403F53\">{</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">    </span><span style=\"--0:#82AAFF;--1:#3C63B3\">xless</span><span style=\"--0:#D6DEEB;--1:#403F53\">();</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#D6DEEB;--1:#403F53\">}</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C792EA;--1:#8D46B4\">else</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#C792EA;--1:#8D46B4\">if</span><span style=\"--0:#D6DEEB;--1:#403F53\"> (x </span><span style=\"--0:#C792EA;--1:#8D46B4\">></span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#F78C6C;--1:#AA0982\">0</span><span style=\"--0:#D6DEEB;--1:#403F53\">)</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#D6DEEB;--1:#403F53\">{</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">    </span><span style=\"--0:#82AAFF;--1:#3C63B3\">xgreater</span><span style=\"--0:#D6DEEB;--1:#403F53\">();</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#D6DEEB;--1:#403F53\">}</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C792EA;--1:#8D46B4\">else</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#D6DEEB;--1:#403F53\">{</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">    </span><span style=\"--0:#82AAFF;--1:#3C63B3\">xequals</span><span style=\"--0:#D6DEEB;--1:#403F53\">();</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#D6DEEB;--1:#403F53\">}</span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"if (c < 0){    xless();}else if (x > 0){    xgreater();}else{    xequals();}\"><div></div></button></div></figure></div>\n<p>Note that because of this, the first match is always picked. Consider:</p>\n<div class=\"expressive-code\"><figure class=\"frame not-content\"><figcaption class=\"header\"></figcaption><pre data-language=\"c3\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C792EA;--1:#8D46B4\">switch</span><span style=\"--0:#D6DEEB;--1:#403F53\"> (</span><span style=\"--0:#82AAFF;--1:#3C63B3\">true</span><span style=\"--0:#D6DEEB;--1:#403F53\">)</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#D6DEEB;--1:#403F53\">{</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">    </span><span style=\"--0:#C792EA;--1:#8D46B4\">case</span><span style=\"--0:#D6DEEB;--1:#403F53\"> x </span><span style=\"--0:#C792EA;--1:#8D46B4\">></span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#F78C6C;--1:#AA0982\">0</span><span style=\"--0:#D6DEEB;--1:#403F53\">:</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">        </span><span style=\"--0:#82AAFF;--1:#3C63B3\">foo</span><span style=\"--0:#D6DEEB;--1:#403F53\">();</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">    </span><span style=\"--0:#C792EA;--1:#8D46B4\">case</span><span style=\"--0:#D6DEEB;--1:#403F53\"> x </span><span style=\"--0:#C792EA;--1:#8D46B4\">></span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#F78C6C;--1:#AA0982\">2</span><span style=\"--0:#D6DEEB;--1:#403F53\">:</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">        </span><span style=\"--0:#82AAFF;--1:#3C63B3\">bar</span><span style=\"--0:#D6DEEB;--1:#403F53\">();</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#D6DEEB;--1:#403F53\">}</span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"switch (true){    case x > 0:        foo();    case x > 2:        bar();}\"><div></div></button></div></figure></div>\n<p>Because of the evaluation order, only <code dir=\"auto\">foo()</code> will be invoked for x > 0, even when x is greater than 2.</p>\n<p>It’s also possible to omit the conditional after <code dir=\"auto\">switch</code>. In that case it is implicitly assumed to be same as\nwriting <code dir=\"auto\">(true)</code></p>\n<div class=\"expressive-code\"><figure class=\"frame not-content\"><figcaption class=\"header\"></figcaption><pre data-language=\"c3\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C792EA;--1:#8D46B4\">switch</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#D6DEEB;--1:#403F53\">{</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">    </span><span style=\"--0:#C792EA;--1:#8D46B4\">case</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#82AAFF;--1:#3C63B3\">foo</span><span style=\"--0:#D6DEEB;--1:#403F53\">() </span><span style=\"--0:#C792EA;--1:#8D46B4\">></span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#F78C6C;--1:#AA0982\">0</span><span style=\"--0:#D6DEEB;--1:#403F53\">:</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">        </span><span style=\"--0:#82AAFF;--1:#3C63B3\">bar</span><span style=\"--0:#D6DEEB;--1:#403F53\">();</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">    </span><span style=\"--0:#C792EA;--1:#8D46B4\">case</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#82AAFF;--1:#3C63B3\">test</span><span style=\"--0:#D6DEEB;--1:#403F53\">() </span><span style=\"--0:#C792EA;--1:#8D46B4\">==</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#F78C6C;--1:#AA0982\">1</span><span style=\"--0:#D6DEEB;--1:#403F53\">:</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">        </span><span style=\"--0:#82AAFF;--1:#3C63B3\">baz</span><span style=\"--0:#D6DEEB;--1:#403F53\">();</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#D6DEEB;--1:#403F53\">}</span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"switch{    case foo() > 0:        bar();    case test() == 1:        baz();}\"><div></div></button></div></figure></div>";

				const frontmatter = {"title":"Statements","description":"Statements","sidebar":{"order":43}};
				const file = "/home/josh/git/c3_tests/experimental-site-testing-only__local_changes/src/content/docs/Language Fundamentals/statements.md";
				const url = undefined;
				function rawContent() {
					return "\nStatements largely work like in C, but with some additions.\n\n\n## Expression blocks\n\nExpression blocks (delimited using `{| |}`) are compound statements that opens their own function scope.\nJumps cannot be done into or out of a function block, and `return` exits the block, rather than the function as a whole.\n\nThe function below prints `World!`\n\n```c3\nfn void test()\n{\n    int a = 0;\n    {|\n        if (!a) return;\n        io::printf(\"Hello \");\n        return;\n    |};\n    io::printf(\"World!\\n\");\n}\n```\n\nExpression blocks may also return values:\n\n```c3\nfn void test(int x)\n{\n    int a = {|\n        if (x > 0) return x * 2;\n        if (x == 0) return 100;\n        return -x;\n    |};            \n    io::printfn(\"The result was %d\", a);\n}\n```\n\n## Labelled break and continue\n\nLabelled `break` and `continue` lets you break out of an outer scope. Labels can be put on `if`, \n`switch`, `while` and `do` statements.\n\n```c3\nfn void test(int i)\n{\n    if FOO: (i > 0)\n    {\n        while (1)\n        {\n            io::printfn(\"%d\", i);\n            // Break out of the top if statement.\n            if (i++ > 10) break FOO;\n        }\n    }\n}\n```\n\n## Do-without-while\n\nDo-while statements can skip the ending `while`. In that case it acts as if the `while` was `while(0)`:\n\n```c3\ndo \n{\n    io::printn(\"FOO\");\n} while (0);\n\n// Equivalent to the above.\ndo \n{\n    io::printn(\"FOO\");\n};\n```\n## Nextcase and labelled nextcase\n\nThe `nextcase` statement is used in `switch` and `if-catch` to jump to the next statement:\n\n```c3\nswitch (i)\n{\n    case 1:\n        doSomething();\n        nextcase; // Jumps to case 2\n    case 2:\n        doSomethingElse();\n}\n```\n\nIt's also possible to use `nextcase` with an expression, to jump to an arbitrary case:\n\n```c3\nswitch (i)\n{\n    case 1:\n        doSomething();\n        nextcase 3; // Jump to case 3\n    case 2:\n        doSomethingElse();\n    case 3:\n        nextcase rand(); // Jump to random case\n    default:\n        io::printn(\"Ended\");\n}  \n```\n\nWhich can be used as structured `goto` when creating state machines.\n\n## Switch cases with runtime evaluation\n\nIt's possible to use `switch` as an enhanced if-else chain:\n\n```c3\nswitch (true)\n{\n    case x < 0:\n        xless();\n    case x > 0:\n        xgreater();\n    default:\n        xequals();\n}\n```\n\nThe above would be equivalent to writing:\n```c3\nif (c < 0)\n{\n    xless();\n}\nelse if (x > 0)\n{\n    xgreater();\n}\nelse\n{\n    xequals();\n}\n```\n\nNote that because of this, the first match is always picked. Consider:\n\n```c3\nswitch (true)\n{\n    case x > 0:\n        foo();\n    case x > 2:\n        bar();\n}\n```\n\nBecause of the evaluation order, only `foo()` will be invoked for x > 0, even when x is greater than 2.\n\nIt's also possible to omit the conditional after `switch`. In that case it is implicitly assumed to be same as\nwriting `(true)`\n\n```c3\nswitch\n{\n    case foo() > 0:\n        bar();\n    case test() == 1:\n        baz();\n}\n```";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"expression-blocks","text":"Expression blocks"},{"depth":2,"slug":"labelled-break-and-continue","text":"Labelled break and continue"},{"depth":2,"slug":"do-without-while","text":"Do-without-while"},{"depth":2,"slug":"nextcase-and-labelled-nextcase","text":"Nextcase and labelled nextcase"},{"depth":2,"slug":"switch-cases-with-runtime-evaluation","text":"Switch cases with runtime evaluation"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };