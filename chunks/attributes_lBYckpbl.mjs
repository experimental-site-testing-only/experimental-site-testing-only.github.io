import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_afRpe8AA.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>Attributes are compile-time annotations on functions, types, global constants and variables. Similar to Java annotations, a decoration may also take arguments. A attribute can also represent a bundle of attributes.</p>\n<h2 id=\"built-in-attributes\">Built in attributes</h2>\n<h3 id=\"alignalignment\"><code dir=\"auto\">@align(alignment)</code></h3>\n<p><em>Used for: struct, bitstructs, union, var, function</em></p>\n<p>This attribute sets the minimum alignment for a field or a variable, for example:</p>\n<div class=\"expressive-code\"><link rel=\"stylesheet\" href=\"/_astro/ec.j8ofn.css\"><script type=\"module\" src=\"/_astro/ec.8zarh.js\"></script><figure class=\"frame not-content\"><figcaption class=\"header\"></figcaption><pre data-language=\"c3\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C792EA;--1:#8D46B4\">struct</span><span style=\"--0:#D6DEEB;--1:#403F53\"> Foo @align(32)</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#D6DEEB;--1:#403F53\">{</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">    </span><span style=\"--0:#C792EA;--1:#8D46B4\">int</span><span style=\"--0:#D6DEEB;--1:#403F53\"> a;</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">    </span><span style=\"--0:#C792EA;--1:#8D46B4\">int</span><span style=\"--0:#D6DEEB;--1:#403F53\"> b @</span><span style=\"--0:#82AAFF;--1:#3C63B3\">align</span><span style=\"--0:#D6DEEB;--1:#403F53\">(</span><span style=\"--0:#F78C6C;--1:#AA0982\">16</span><span style=\"--0:#D6DEEB;--1:#403F53\">);</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#D6DEEB;--1:#403F53\">}</span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"struct Foo @align(32){    int a;    int b @align(16);}\"><div></div></button></div></figure></div>\n<p>Note that following C behaviour, <code dir=\"auto\">@align</code> is only able to <em>increase</em>\nthe alignment. If setting a smaller alignment than default is\ndesired, then use <code dir=\"auto\">@packed</code> (which sets the alignment to 1 for all members)\nand then <code dir=\"auto\">@align</code>.</p>\n<h3 id=\"benchmark\"><code dir=\"auto\">@benchmark</code></h3>\n<p><em>Used for: function</em></p>\n<p>Marks the function as a benchmark function. Will be added to the list of benchmark functions when the benchmarks are run,\notherwise the function will not be included in the compilation.</p>\n<h3 id=\"bigendian\"><code dir=\"auto\">@bigendian</code></h3>\n<p><em>Used for: bitstruct</em></p>\n<p>Lays out the bits as if the data was stored in a big endian type, regardless of host system endianness.</p>\n<h3 id=\"builtin\"><code dir=\"auto\">@builtin</code></h3>\n<p><em>Used for: function, macro, global, const</em></p>\n<p>Allows a macro, function, global or constant be used from another module without the module path prefixed.\nShould be used sparingly.</p>\n<h3 id=\"callconv\"><code dir=\"auto\">@callconv</code></h3>\n<p><em>Used for: function</em></p>\n<p>Sets the calling convention, which may be ignored if the convention is not supported on the target.\nValid arguments are <code dir=\"auto\">veccall</code>, <code dir=\"auto\">cdecl</code>, <code dir=\"auto\">stdcall</code>.</p>\n<aside aria-label=\"Caution\" class=\"starlight-aside starlight-aside--caution\"><p class=\"starlight-aside__title\" aria-hidden=\"true\"><svg viewBox=\"0 0 24 24\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"starlight-aside__icon\"><path d=\"M12 16C11.8022 16 11.6089 16.0587 11.4444 16.1686C11.28 16.2784 11.1518 16.4346 11.0761 16.6173C11.0004 16.8001 10.9806 17.0011 11.0192 17.1951C11.0578 17.3891 11.153 17.5673 11.2929 17.7071C11.4327 17.847 11.6109 17.9422 11.8049 17.9808C11.9989 18.0194 12.2 17.9996 12.3827 17.9239C12.5654 17.8482 12.7216 17.72 12.8315 17.5556C12.9413 17.3911 13 17.1978 13 17C13 16.7348 12.8946 16.4805 12.7071 16.2929C12.5196 16.1054 12.2652 16 12 16ZM22.67 17.47L14.62 3.47003C14.3598 3.00354 13.9798 2.61498 13.5192 2.3445C13.0586 2.07401 12.5341 1.9314 12 1.9314C11.4659 1.9314 10.9414 2.07401 10.4808 2.3445C10.0202 2.61498 9.64019 3.00354 9.38 3.47003L1.38 17.47C1.11079 17.924 0.966141 18.441 0.960643 18.9688C0.955144 19.4966 1.089 20.0166 1.34868 20.4761C1.60837 20.9356 1.9847 21.3185 2.43968 21.5861C2.89466 21.8536 3.41218 21.9964 3.94 22H20.06C20.5921 22.0053 21.1159 21.8689 21.5779 21.6049C22.0399 21.341 22.4234 20.9589 22.689 20.4978C22.9546 20.0368 23.0928 19.5134 23.0895 18.9814C23.0862 18.4493 22.9414 17.9277 22.67 17.47ZM20.94 19.47C20.8523 19.626 20.7245 19.7556 20.5697 19.8453C20.4149 19.935 20.2389 19.9815 20.06 19.98H3.94C3.76111 19.9815 3.5851 19.935 3.43032 19.8453C3.27553 19.7556 3.14765 19.626 3.06 19.47C2.97223 19.318 2.92602 19.1456 2.92602 18.97C2.92602 18.7945 2.97223 18.622 3.06 18.47L11.06 4.47003C11.1439 4.30623 11.2714 4.16876 11.4284 4.07277C11.5855 3.97678 11.766 3.92599 11.95 3.92599C12.134 3.92599 12.3145 3.97678 12.4716 4.07277C12.6286 4.16876 12.7561 4.30623 12.84 4.47003L20.89 18.47C20.9892 18.6199 21.0462 18.7937 21.055 18.9732C21.0638 19.1527 21.0241 19.3312 20.94 19.49V19.47ZM12 8.00003C11.7348 8.00003 11.4804 8.10538 11.2929 8.29292C11.1054 8.48046 11 8.73481 11 9.00003V13C11 13.2652 11.1054 13.5196 11.2929 13.7071C11.4804 13.8947 11.7348 14 12 14C12.2652 14 12.5196 13.8947 12.7071 13.7071C12.8946 13.5196 13 13.2652 13 13V9.00003C13 8.73481 12.8946 8.48046 12.7071 8.29292C12.5196 8.10538 12.2652 8.00003 12 8.00003Z\"></path></svg>Caution</p><section class=\"starlight-aside__content\"><p>On Windows, many calls are tagged <code dir=\"auto\">stdcall</code> in the C\nheaders. However, this calling convention is only ever used on 32-bit Windows,\nand is a no-op on 64-bit Windows.</p></section></aside>\n<h3 id=\"compact\"><code dir=\"auto\">@compact</code></h3>\n<p><em>Used for: struct, union</em></p>\n<p>When placed on a struct or union, it allows the value to be compared\nusing <code dir=\"auto\">==</code> and <code dir=\"auto\">!=</code>. The restriction is that it may not have any\npadding, as if it had the <code dir=\"auto\">@nopadding</code> attribute.</p>\n<h3 id=\"const\"><code dir=\"auto\">@const</code></h3>\n<p><em>Used for: macro</em></p>\n<p>This attribute will ensure that the macro is always compile time\nfolded (to a constant). Otherwise, a compile time error will\nbe issued.</p>\n<h3 id=\"deprecated\"><code dir=\"auto\">@deprecated</code></h3>\n<p><em>Used for: types, function, macro, global, const, member</em></p>\n<p>Marks the particular type, global, const or member as deprecated, making use trigger a warning.</p>\n<h3 id=\"dynamic\"><code dir=\"auto\">@dynamic</code></h3>\n<p><em>Used for: methods</em></p>\n<p>Mark a method for dynamic invocation. This allows the method\nto be invoked through interfaces.</p>\n<h3 id=\"export\"><code dir=\"auto\">@export</code></h3>\n<p><em>Used for: function, global, const, enum, union, struct, faultdef</em></p>\n<p>Marks this declaration as an export, this ensures it is never removed and exposes it as public when linking.\nThe attribute takes an optional string value, which is the external name. This acts as if <code dir=\"auto\">@extern</code> had been\nadded with that name.</p>\n<h3 id=\"extern\"><code dir=\"auto\">@extern</code></h3>\n<p><em>Used for: function, global, const, enum, union, struct, faultdef</em></p>\n<p>Sets the external (linkage) name of this declaration.</p>\n<aside aria-label=\"Caution\" class=\"starlight-aside starlight-aside--caution\"><p class=\"starlight-aside__title\" aria-hidden=\"true\"><svg viewBox=\"0 0 24 24\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"starlight-aside__icon\"><path d=\"M12 16C11.8022 16 11.6089 16.0587 11.4444 16.1686C11.28 16.2784 11.1518 16.4346 11.0761 16.6173C11.0004 16.8001 10.9806 17.0011 11.0192 17.1951C11.0578 17.3891 11.153 17.5673 11.2929 17.7071C11.4327 17.847 11.6109 17.9422 11.8049 17.9808C11.9989 18.0194 12.2 17.9996 12.3827 17.9239C12.5654 17.8482 12.7216 17.72 12.8315 17.5556C12.9413 17.3911 13 17.1978 13 17C13 16.7348 12.8946 16.4805 12.7071 16.2929C12.5196 16.1054 12.2652 16 12 16ZM22.67 17.47L14.62 3.47003C14.3598 3.00354 13.9798 2.61498 13.5192 2.3445C13.0586 2.07401 12.5341 1.9314 12 1.9314C11.4659 1.9314 10.9414 2.07401 10.4808 2.3445C10.0202 2.61498 9.64019 3.00354 9.38 3.47003L1.38 17.47C1.11079 17.924 0.966141 18.441 0.960643 18.9688C0.955144 19.4966 1.089 20.0166 1.34868 20.4761C1.60837 20.9356 1.9847 21.3185 2.43968 21.5861C2.89466 21.8536 3.41218 21.9964 3.94 22H20.06C20.5921 22.0053 21.1159 21.8689 21.5779 21.6049C22.0399 21.341 22.4234 20.9589 22.689 20.4978C22.9546 20.0368 23.0928 19.5134 23.0895 18.9814C23.0862 18.4493 22.9414 17.9277 22.67 17.47ZM20.94 19.47C20.8523 19.626 20.7245 19.7556 20.5697 19.8453C20.4149 19.935 20.2389 19.9815 20.06 19.98H3.94C3.76111 19.9815 3.5851 19.935 3.43032 19.8453C3.27553 19.7556 3.14765 19.626 3.06 19.47C2.97223 19.318 2.92602 19.1456 2.92602 18.97C2.92602 18.7945 2.97223 18.622 3.06 18.47L11.06 4.47003C11.1439 4.30623 11.2714 4.16876 11.4284 4.07277C11.5855 3.97678 11.766 3.92599 11.95 3.92599C12.134 3.92599 12.3145 3.97678 12.4716 4.07277C12.6286 4.16876 12.7561 4.30623 12.84 4.47003L20.89 18.47C20.9892 18.6199 21.0462 18.7937 21.055 18.9732C21.0638 19.1527 21.0241 19.3312 20.94 19.49V19.47ZM12 8.00003C11.7348 8.00003 11.4804 8.10538 11.2929 8.29292C11.1054 8.48046 11 8.73481 11 9.00003V13C11 13.2652 11.1054 13.5196 11.2929 13.7071C11.4804 13.8947 11.7348 14 12 14C12.2652 14 12.5196 13.8947 12.7071 13.7071C12.8946 13.5196 13 13.2652 13 13V9.00003C13 8.73481 12.8946 8.48046 12.7071 8.29292C12.5196 8.10538 12.2652 8.00003 12 8.00003Z\"></path></svg>Caution</p><section class=\"starlight-aside__content\"><p>Do not confuse this with <a href=\"#export\"><code dir=\"auto\">@export</code></a>, which is required\nto export a function or global.</p></section></aside>\n<h3 id=\"finalizer\"><code dir=\"auto\">@finalizer</code></h3>\n<p><em>Used for: function</em></p>\n<p>Make this function run at shutdown. See <a href=\"#init\"><code dir=\"auto\">@init</code></a> for the optional priority. Note that running a\nfinalizer is a “best effort” attempt by the OS. During abnormal termination it is not guaranteed to run.</p>\n<p>The function must be a void function taking no arguments.</p>\n<h3 id=\"if\"><code dir=\"auto\">@if</code></h3>\n<p><em>Used for: all declarations</em></p>\n<p>Conditionally includes the declaration in the compilation. It takes a constant compile time value argument, if this\nvalue is <code dir=\"auto\">true</code> then the declaration is retained, on false it is removed.</p>\n<h3 id=\"init\"><code dir=\"auto\">@init</code></h3>\n<p><em>Used for: function</em></p>\n<p>Make this function run at startup before main. It has an optional priority 1 - 65535, with lower\nbeing executed earlier. It is not recommended to use values less than 128 as they are generally\nreserved and using them may interfere with standard program initialization.</p>\n<p>The function must be a void function taking no arguments.</p>\n<h3 id=\"inline\"><code dir=\"auto\">@inline</code></h3>\n<p><em>Used for: function, call</em></p>\n<p>Declares a function to always be inlined or if placed on a call, that the call should be inlined.</p>\n<h3 id=\"link\"><code dir=\"auto\">@link</code></h3>\n<p><em>Used for: module, function, macro, global, const</em></p>\n<p>Syntax for this attribute is <code dir=\"auto\">@link(cond, link1, link2, ...)</code>,\nwhere “link1” etc are strings names for libraries to implicitly\nlink to when this symbol is used.</p>\n<p>In the case of a module section, adding <code dir=\"auto\">@link</code> implicitly places the\nattribute on all of its symbols.</p>\n<h3 id=\"littleendian\"><code dir=\"auto\">@littleendian </code></h3>\n<p><em>Used for: bitstruct</em></p>\n<p>Lays out the bits as if the data was stored in a little endian type, regardless of host system endianness.</p>\n<h3 id=\"local\"><code dir=\"auto\">@local</code></h3>\n<p><em>Used for: any declaration</em></p>\n<p>Sets the visibility to “local”, which means it’s only visible in the current module section.</p>\n<h3 id=\"maydiscard\"><code dir=\"auto\">@maydiscard</code></h3>\n<p><em>Used for: function, macro</em></p>\n<p>Allows the return value of the function or macro to be discarded even if it is an optional. Should be\nused sparingly.</p>\n<h3 id=\"naked\"><code dir=\"auto\">@naked</code></h3>\n<p><em>Used for: function</em></p>\n<p>This attribute disables prologue / epilogue emission for the function.\nThe body of the function should be a text <code dir=\"auto\">asm</code> statement.</p>\n<h3 id=\"noalias\"><code dir=\"auto\">@noalias</code></h3>\n<p><em>Used for: function parameters</em></p>\n<p>This is similar to <code dir=\"auto\">restrict</code> in C. A parameter with <code dir=\"auto\">@noalias</code> should\nbe a pointer type, and the pointer is assumed not to alias to any other\npointer.</p>\n<h3 id=\"nodiscard\"><code dir=\"auto\">@nodiscard</code></h3>\n<p><em>Used for: function, macro</em></p>\n<p>The return value may not be discarded.</p>\n<h3 id=\"noinit\"><code dir=\"auto\">@noinit</code></h3>\n<p><em>Used for: global, local variable</em></p>\n<p>Prevents the compiler from zero initializing the variable.</p>\n<h3 id=\"noinline\"><code dir=\"auto\">@noinline</code></h3>\n<p><em>Used for: function, function call</em></p>\n<p>Prevents the compiler from inlining the function or a particular function call.</p>\n<h3 id=\"nopadding\"><code dir=\"auto\">@nopadding</code></h3>\n<p><em>Used for: struct, union</em></p>\n<p>Ensures that a struct of union has no padding, emits a\ncompile time error otherwise.</p>\n<h3 id=\"norecurse\"><code dir=\"auto\">@norecurse</code></h3>\n<p><em>Used for: import &#x3C;module_name> @norecurse</em></p>\n<p>Import the module but not sub-modules or parent-modules, see <a href=\"/language-fundamentals/modules/#non-recursive-imports\">Modules Section</a>.</p>\n<h3 id=\"noreturn\"><code dir=\"auto\">@noreturn</code></h3>\n<p><em>Used for: function, macro</em></p>\n<p>Declares that the function will never return.</p>\n<h3 id=\"nosanitize\"><code dir=\"auto\">@nosanitize</code></h3>\n<p><em>Used for: function</em></p>\n<p>This prevents sanitizers from being added to this function.</p>\n<h3 id=\"nostrip\"><code dir=\"auto\">@nostrip</code></h3>\n<p><em>Used for: any declaration</em></p>\n<p>This causes the declaration never to be stripped from the executable, even if it’s not used. This\nalso transitively applies to any dependencies the declaration might have.</p>\n<h3 id=\"obfuscate\"><code dir=\"auto\">@obfuscate</code></h3>\n<p><em>Used for: any declaration</em></p>\n<p>Removes any string values that would identify the declaration in some way. Mostly this is used\non faults and enums to remove the stored names.</p>\n<h3 id=\"operator\"><code dir=\"auto\">@operator</code></h3>\n<p><em>Used for: method, macro method</em></p>\n<p>This attribute has arguments <code dir=\"auto\">[]</code> <code dir=\"auto\">[]=</code> <code dir=\"auto\">&#x26;[]</code> and <code dir=\"auto\">len</code> allowing <a href=\"/generic-programming/operator-overloading/\">operator overloading</a> for <code dir=\"auto\">[]</code> and <code dir=\"auto\">foreach</code>.\nBy implementing <code dir=\"auto\">[]</code> and <code dir=\"auto\">len</code>, <code dir=\"auto\">foreach</code> and <code dir=\"auto\">foreach_r</code> is enabled. In order to do <code dir=\"auto\">foreach</code> by reference,\n<code dir=\"auto\">&#x26;[]</code> must be implemented as well.</p>\n<h3 id=\"optional\"><code dir=\"auto\">@optional</code></h3>\n<p><em>Used for: interface methods</em></p>\n<p>Placed on an interface method, this makes the method optional to\nimplement for types that implements the interface.</p>\n<p>See the <a href=\"/standard-library/stdlib_refcard#:~:text=interface%20Printable\"><code dir=\"auto\">Printable</code></a> interface for an example.</p>\n<h3 id=\"overlap\"><code dir=\"auto\">@overlap</code></h3>\n<p><em>Used for: bitstruct</em></p>\n<p>Allows bitstruct fields to have overlapping bit ranges.</p>\n<h3 id=\"packed\"><code dir=\"auto\">@packed</code></h3>\n<p><em>Used for: struct, union</em></p>\n<p>Causes all members to be packed as if they had alignment 1. The alignment of the struct/union is set to 1.\nThis alignment can be overridden with <a href=\"#alignalignment\"><code dir=\"auto\">@align</code></a>.</p>\n<h3 id=\"private\"><code dir=\"auto\">@private</code></h3>\n<p><em>Used for: any declaration</em></p>\n<p>Sets the visibility to “private”, which means it is visible in the same module, but not from other modules.</p>\n<h3 id=\"pure\"><code dir=\"auto\">@pure</code></h3>\n<p><em>Used for: call</em></p>\n<p>Used to annotate a non pure function as “pure” when checking for conformance to <code dir=\"auto\">@pure</code> on\nfunctions.</p>\n<h3 id=\"reflect\"><code dir=\"auto\">@reflect</code></h3>\n<p><em>Used for: any declaration</em></p>\n<p>Adds additional reflection information. Has no effect currently.</p>\n<h3 id=\"sectionname\"><code dir=\"auto\">@section(name)</code></h3>\n<p><em>Used for: function, const, global</em></p>\n<p>Declares that a global variable or function should appear in a specific section.</p>\n<h3 id=\"tagname-value\"><code dir=\"auto\">@tag(name, value)</code></h3>\n<p><em>Used for: function, macro, user defined type, struct/union/bitstruct member</em></p>\n<p>Adds a compile time tag to a type, function or member which can be retrieved\nat compile time using reflection: <code dir=\"auto\">.has_tagof</code> and <code dir=\"auto\">.tagof</code>.\nExample: <code dir=\"auto\">Foo.has_tagof(\"bar\")</code> will return true if <code dir=\"auto\">Foo</code> has a tag “bar”.\n<code dir=\"auto\">Foo.tagof(\"bar\")</code> will return the value associated with that tag.</p>\n<h3 id=\"test\"><code dir=\"auto\">@test</code></h3>\n<p><em>Used for: function</em></p>\n<p>Marks the function as a test function. Will be added to the list of test functions when the tests are run,\notherwise the function will not be included in the compilation.</p>\n<h3 id=\"unused\"><code dir=\"auto\">@unused</code></h3>\n<p><em>Used for: any declaration</em></p>\n<p>Marks the declaration as possibly unused (but should not emit a warning).</p>\n<h3 id=\"used\"><code dir=\"auto\">@used</code></h3>\n<p><em>Used for: any declaration</em></p>\n<p>Marks a parameter, value etc. as must being used.</p>\n<h3 id=\"wasm\"><code dir=\"auto\">@wasm </code></h3>\n<p><em>Used for: function, global, const</em></p>\n<p>This attribute may take 0, 1 or 2 arguments. With 0 or 1 arguments\nit behaves identical to <a href=\"#export\"><code dir=\"auto\">@export</code></a> if it is non-extern. For extern\nsymbols it behaves like <a href=\"#extern\"><code dir=\"auto\">@extern</code></a>.</p>\n<p>When used with 2 arguments, the first argument is the wasm module,\nand the second is the name. It can only be used for <code dir=\"auto\">extern</code> symbols.</p>\n<h3 id=\"winmain\"><code dir=\"auto\">@winmain</code></h3>\n<p><em>Used for: function</em></p>\n<p>This attribute is ignored on non-windows targets. On Windows,\nit will create a <code dir=\"auto\">WinMain</code> entry point that will which calls\nthe main function. This will give other options for the <code dir=\"auto\">main</code>\nargument, and is recommended for Windows GUI applications.</p>\n<p>It is only valid for the <code dir=\"auto\">main</code> function.</p>\n<h3 id=\"weak\"><code dir=\"auto\">@weak</code></h3>\n<p><em>Used for: function, const, global</em></p>\n<p>Emits a weak symbol rather than a global.</p>\n<h2 id=\"user-defined-attributes\">User defined attributes</h2>\n<p>User defined attributes are intended for conditional application of built-in attributes.</p>\n<div class=\"expressive-code\"><figure class=\"frame not-content\"><figcaption class=\"header\"></figcaption><pre data-language=\"c3\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#D6DEEB;--1:#403F53\">attrdef @MyAttribute </span><span style=\"--0:#C792EA;--1:#8D46B4\">=</span><span style=\"--0:#D6DEEB;--1:#403F53\"> { @noreturn @</span><span style=\"--0:#C792EA;--1:#8D46B4\">inline</span><span style=\"--0:#D6DEEB;--1:#403F53\"> };</span></div></div><div class=\"ec-line\"><div class=\"code\">\n</div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#809191;--1:#5E6578\">// The following two are equivalent:</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#D6DEEB;--1:#403F53\">fn </span><span style=\"--0:#C792EA;--1:#8D46B4\">void</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#82AAFF;--1:#3C63B3\">foo</span><span style=\"--0:#D6DEEB;--1:#403F53\">() @MyAttribute {</span><span style=\"--0:#809191;--1:#616671\"> /* */</span><span style=\"--0:#D6DEEB;--1:#403F53\"> }</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#D6DEEB;--1:#403F53\">fn </span><span style=\"--0:#C792EA;--1:#8D46B4\">void</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#82AAFF;--1:#3C63B3\">foo</span><span style=\"--0:#D6DEEB;--1:#403F53\">() @noreturn @</span><span style=\"--0:#C792EA;--1:#8D46B4\">inline</span><span style=\"--0:#D6DEEB;--1:#403F53\"> {</span><span style=\"--0:#809191;--1:#616671\"> /* */</span><span style=\"--0:#D6DEEB;--1:#403F53\"> }</span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"attrdef @MyAttribute = { @noreturn @inline };// The following two are equivalent:fn void foo() @MyAttribute { /* */ }fn void foo() @noreturn @inline { /* */ }\"><div></div></button></div></figure></div>\n<p>A user defined attribute may also be completely empty:</p>\n<div class=\"expressive-code\"><figure class=\"frame not-content\"><figcaption class=\"header\"></figcaption><pre data-language=\"c3\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#D6DEEB;--1:#403F53\">attrdef @MyAttributeEmpty </span><span style=\"--0:#C792EA;--1:#8D46B4\">=</span><span style=\"--0:#D6DEEB;--1:#403F53\"> {};</span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"attrdef @MyAttributeEmpty = {};\"><div></div></button></div></figure></div>";

				const frontmatter = {"title":"Attributes","description":"Attributes","sidebar":{"order":68}};
				const file = "/home/josh/git/c3_tests/experimental-site-testing-only__local_changes/src/content/docs/Language Common/attributes.md";
				const url = undefined;
				function rawContent() {
					return "\nAttributes are compile-time annotations on functions, types, global constants and variables. Similar to Java annotations, a decoration may also take arguments. A attribute can also represent a bundle of attributes.\n\n## Built in attributes\n\n### `@align(alignment)`\n\n*Used for: struct, bitstructs, union, var, function*\n\nThis attribute sets the minimum alignment for a field or a variable, for example:\n\n```c3\nstruct Foo @align(32)\n{\n    int a;\n    int b @align(16);\n}\n```\n\nNote that following C behaviour, `@align` is only able to *increase*\nthe alignment. If setting a smaller alignment than default is\ndesired, then use `@packed` (which sets the alignment to 1 for all members)\nand then `@align`.\n\n### `@benchmark`\n\n*Used for: function*\n\nMarks the function as a benchmark function. Will be added to the list of benchmark functions when the benchmarks are run,\notherwise the function will not be included in the compilation.\n\n### `@bigendian`\n\n*Used for: bitstruct*\n\nLays out the bits as if the data was stored in a big endian type, regardless of host system endianness.\n\n### `@builtin`\n\n*Used for: function, macro, global, const*\n\nAllows a macro, function, global or constant be used from another module without the module path prefixed.\nShould be used sparingly.\n\n### `@callconv`\n\n*Used for: function*\n\nSets the calling convention, which may be ignored if the convention is not supported on the target.\nValid arguments are `veccall`, `cdecl`, `stdcall`.\n\n:::caution\nOn Windows, many calls are tagged `stdcall` in the C\nheaders. However, this calling convention is only ever used on 32-bit Windows,\nand is a no-op on 64-bit Windows.\n:::\n\n### `@compact`\n\n*Used for: struct, union*\n\nWhen placed on a struct or union, it allows the value to be compared\nusing `==` and `!=`. The restriction is that it may not have any\npadding, as if it had the `@nopadding` attribute.\n\n### `@const`\n\n*Used for: macro*\n\nThis attribute will ensure that the macro is always compile time\nfolded (to a constant). Otherwise, a compile time error will\nbe issued.\n\n### `@deprecated`\n\n*Used for: types, function, macro, global, const, member*\n\nMarks the particular type, global, const or member as deprecated, making use trigger a warning.\n\n### `@dynamic`\n\n*Used for: methods*\n\nMark a method for dynamic invocation. This allows the method\nto be invoked through interfaces.\n\n### `@export`\n\n*Used for: function, global, const, enum, union, struct, faultdef*\n\nMarks this declaration as an export, this ensures it is never removed and exposes it as public when linking.\nThe attribute takes an optional string value, which is the external name. This acts as if `@extern` had been\nadded with that name.\n\n### `@extern`\n\n*Used for: function, global, const, enum, union, struct, faultdef*\n\nSets the external (linkage) name of this declaration.\n\n:::caution\nDo not confuse this with [`@export`](#export), which is required\nto export a function or global.\n:::\n\n### `@finalizer`\n\n*Used for: function*\n\nMake this function run at shutdown. See [`@init`](#init) for the optional priority. Note that running a\nfinalizer is a \"best effort\" attempt by the OS. During abnormal termination it is not guaranteed to run.\n\nThe function must be a void function taking no arguments.\n\n### `@if`\n\n*Used for: all declarations*\n\nConditionally includes the declaration in the compilation. It takes a constant compile time value argument, if this\nvalue is `true` then the declaration is retained, on false it is removed.\n\n### `@init`\n\n*Used for: function*\n\nMake this function run at startup before main. It has an optional priority 1 - 65535, with lower\nbeing executed earlier. It is not recommended to use values less than 128 as they are generally\nreserved and using them may interfere with standard program initialization.\n\nThe function must be a void function taking no arguments.\n\n### `@inline`\n\n*Used for: function, call*\n\nDeclares a function to always be inlined or if placed on a call, that the call should be inlined.\n\n### `@link`\n\n*Used for: module, function, macro, global, const*\n\nSyntax for this attribute is `@link(cond, link1, link2, ...)`,\nwhere \"link1\" etc are strings names for libraries to implicitly\nlink to when this symbol is used.\n\nIn the case of a module section, adding `@link` implicitly places the\nattribute on all of its symbols.\n\n### `@littleendian `\n\n*Used for: bitstruct*\n\nLays out the bits as if the data was stored in a little endian type, regardless of host system endianness.\n\n### `@local`\n\n*Used for: any declaration*\n\nSets the visibility to \"local\", which means it's only visible in the current module section.\n\n### `@maydiscard`\n\n*Used for: function, macro*\n\nAllows the return value of the function or macro to be discarded even if it is an optional. Should be\nused sparingly.\n\n### `@naked`\n\n*Used for: function*\n\nThis attribute disables prologue / epilogue emission for the function.\nThe body of the function should be a text `asm` statement.\n\n### `@noalias`\n\n*Used for: function parameters*\n\nThis is similar to `restrict` in C. A parameter with `@noalias` should\nbe a pointer type, and the pointer is assumed not to alias to any other\npointer.\n\n### `@nodiscard`\n\n*Used for: function, macro*\n\nThe return value may not be discarded.\n\n### `@noinit`\n\n*Used for: global, local variable*\n\nPrevents the compiler from zero initializing the variable.\n\n### `@noinline`\n\n*Used for: function, function call*\n\nPrevents the compiler from inlining the function or a particular function call.\n\n### `@nopadding`\n\n*Used for: struct, union*\n\nEnsures that a struct of union has no padding, emits a\ncompile time error otherwise.\n\n### `@norecurse`\n\n*Used for: import <module_name> @norecurse*\n\nImport the module but not sub-modules or parent-modules, see [Modules Section](/language-fundamentals/modules/#non-recursive-imports).\n\n### `@noreturn`\n\n*Used for: function, macro*\n\nDeclares that the function will never return.\n\n### `@nosanitize`\n\n*Used for: function*\n\nThis prevents sanitizers from being added to this function.\n\n### `@nostrip`\n\n*Used for: any declaration*\n\nThis causes the declaration never to be stripped from the executable, even if it's not used. This\nalso transitively applies to any dependencies the declaration might have.\n\n### `@obfuscate`\n\n*Used for: any declaration*\n\nRemoves any string values that would identify the declaration in some way. Mostly this is used\non faults and enums to remove the stored names.\n\n### `@operator`\n\n*Used for: method, macro method*\n\nThis attribute has arguments `[]` `[]=` `&[]` and `len` allowing [operator overloading](/generic-programming/operator-overloading/) for `[]` and `foreach`.\nBy implementing `[]` and `len`, `foreach` and `foreach_r` is enabled. In order to do `foreach` by reference,\n`&[]` must be implemented as well.\n\n### `@optional`\n\n*Used for: interface methods*\n\nPlaced on an interface method, this makes the method optional to\nimplement for types that implements the interface.\n\nSee the [`Printable`](/standard-library/stdlib_refcard#:~:text=interface%20Printable) interface for an example.\n\n### `@overlap`\n\n*Used for: bitstruct*\n\nAllows bitstruct fields to have overlapping bit ranges.\n\n### `@packed`\n\n*Used for: struct, union*\n\nCauses all members to be packed as if they had alignment 1. The alignment of the struct/union is set to 1.\nThis alignment can be overridden with [`@align`](#alignalignment).\n\n### `@private`\n\n*Used for: any declaration*\n\nSets the visibility to \"private\", which means it is visible in the same module, but not from other modules.\n\n### `@pure`\n\n*Used for: call*\n\nUsed to annotate a non pure function as \"pure\" when checking for conformance to `@pure` on\nfunctions.\n\n### `@reflect`\n\n*Used for: any declaration*\n\nAdds additional reflection information. Has no effect currently.\n\n### `@section(name)`\n\n*Used for: function, const, global*\n\nDeclares that a global variable or function should appear in a specific section.\n\n### `@tag(name, value)`\n\n*Used for: function, macro, user defined type, struct/union/bitstruct member*\n\nAdds a compile time tag to a type, function or member which can be retrieved\nat compile time using reflection: `.has_tagof` and `.tagof`.\nExample: `Foo.has_tagof(\"bar\")` will return true if `Foo` has a tag \"bar\".\n`Foo.tagof(\"bar\")` will return the value associated with that tag.\n\n### `@test`\n\n*Used for: function*\n\nMarks the function as a test function. Will be added to the list of test functions when the tests are run,\notherwise the function will not be included in the compilation.\n\n### `@unused`\n\n*Used for: any declaration*\n\nMarks the declaration as possibly unused (but should not emit a warning).\n\n### `@used`\n\n*Used for: any declaration*\n\nMarks a parameter, value etc. as must being used.\n\n### `@wasm `\n\n*Used for: function, global, const*\n\nThis attribute may take 0, 1 or 2 arguments. With 0 or 1 arguments\nit behaves identical to [`@export`](#export) if it is non-extern. For extern\nsymbols it behaves like [`@extern`](#extern).\n\nWhen used with 2 arguments, the first argument is the wasm module,\nand the second is the name. It can only be used for `extern` symbols.\n\n### `@winmain`\n\n*Used for: function*\n\nThis attribute is ignored on non-windows targets. On Windows,\nit will create a `WinMain` entry point that will which calls\nthe main function. This will give other options for the `main`\nargument, and is recommended for Windows GUI applications.\n\nIt is only valid for the `main` function.\n\n### `@weak`\n\n*Used for: function, const, global*\n\nEmits a weak symbol rather than a global.\n\n## User defined attributes\n\nUser defined attributes are intended for conditional application of built-in attributes.\n\n```c3\nattrdef @MyAttribute = { @noreturn @inline };\n\n// The following two are equivalent:\nfn void foo() @MyAttribute { /* */ }\nfn void foo() @noreturn @inline { /* */ }\n```\n\nA user defined attribute may also be completely empty:\n\n```c3\nattrdef @MyAttributeEmpty = {};\n```\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"built-in-attributes","text":"Built in attributes"},{"depth":3,"slug":"alignalignment","text":"@align(alignment)"},{"depth":3,"slug":"benchmark","text":"@benchmark"},{"depth":3,"slug":"bigendian","text":"@bigendian"},{"depth":3,"slug":"builtin","text":"@builtin"},{"depth":3,"slug":"callconv","text":"@callconv"},{"depth":3,"slug":"compact","text":"@compact"},{"depth":3,"slug":"const","text":"@const"},{"depth":3,"slug":"deprecated","text":"@deprecated"},{"depth":3,"slug":"dynamic","text":"@dynamic"},{"depth":3,"slug":"export","text":"@export"},{"depth":3,"slug":"extern","text":"@extern"},{"depth":3,"slug":"finalizer","text":"@finalizer"},{"depth":3,"slug":"if","text":"@if"},{"depth":3,"slug":"init","text":"@init"},{"depth":3,"slug":"inline","text":"@inline"},{"depth":3,"slug":"link","text":"@link"},{"depth":3,"slug":"littleendian","text":"@littleendian "},{"depth":3,"slug":"local","text":"@local"},{"depth":3,"slug":"maydiscard","text":"@maydiscard"},{"depth":3,"slug":"naked","text":"@naked"},{"depth":3,"slug":"noalias","text":"@noalias"},{"depth":3,"slug":"nodiscard","text":"@nodiscard"},{"depth":3,"slug":"noinit","text":"@noinit"},{"depth":3,"slug":"noinline","text":"@noinline"},{"depth":3,"slug":"nopadding","text":"@nopadding"},{"depth":3,"slug":"norecurse","text":"@norecurse"},{"depth":3,"slug":"noreturn","text":"@noreturn"},{"depth":3,"slug":"nosanitize","text":"@nosanitize"},{"depth":3,"slug":"nostrip","text":"@nostrip"},{"depth":3,"slug":"obfuscate","text":"@obfuscate"},{"depth":3,"slug":"operator","text":"@operator"},{"depth":3,"slug":"optional","text":"@optional"},{"depth":3,"slug":"overlap","text":"@overlap"},{"depth":3,"slug":"packed","text":"@packed"},{"depth":3,"slug":"private","text":"@private"},{"depth":3,"slug":"pure","text":"@pure"},{"depth":3,"slug":"reflect","text":"@reflect"},{"depth":3,"slug":"sectionname","text":"@section(name)"},{"depth":3,"slug":"tagname-value","text":"@tag(name, value)"},{"depth":3,"slug":"test","text":"@test"},{"depth":3,"slug":"unused","text":"@unused"},{"depth":3,"slug":"used","text":"@used"},{"depth":3,"slug":"wasm","text":"@wasm "},{"depth":3,"slug":"winmain","text":"@winmain"},{"depth":3,"slug":"weak","text":"@weak"},{"depth":2,"slug":"user-defined-attributes","text":"User defined attributes"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
