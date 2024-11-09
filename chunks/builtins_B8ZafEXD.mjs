import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_DFSFkPP8.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>The compiler offers builtin constants and functions. Some are only available on certain targets. All builtins use the <code dir=\"auto\">$$</code>\nname prefix.</p>\n<h2 id=\"builtin-constants\">Builtin constants</h2>\n<p>These constants are generated by the compiler and can safely be used by the user.</p>\n<h4 id=\"benchmark_names\">$$BENCHMARK_NAMES</h4>\n<p>An array of names of the benchmark functions.</p>\n<h4 id=\"benchmark_fns\">$$BENCHMARK_FNS</h4>\n<p>An array of addresses to the benchmark functions.</p>\n<h4 id=\"date\">$$DATE</h4>\n<p>The current date.</p>\n<h4 id=\"file\">$$FILE</h4>\n<p>The current file name.</p>\n<h4 id=\"filepath\">$$FILEPATH</h4>\n<p>The current file with path.</p>\n<h4 id=\"func\">$$FUNC</h4>\n<p>The current function name, will return \"<global>\" on the global level.</global></p>\n<h4 id=\"function\">$$FUNCTION</h4>\n<p>The current function as an expression.</p>\n<h4 id=\"line\">$$LINE</h4>\n<p>The current line as an integer.</p>\n<h4 id=\"line_raw\">$$LINE_RAW</h4>\n<p>Usually the same as $$LINE, but in case of a macro inclusion it returns the line in the macro rather than\nthe line where the macro was included.</p>\n<h4 id=\"module\">$$MODULE</h4>\n<p>The current module name.</p>\n<h4 id=\"time\">$$TIME</h4>\n<p>The current time.</p>\n<h2 id=\"compiler-builtin-functions\">Compiler builtin functions</h2>\n<p>The <code dir=\"auto\">$$</code> namespace defines <em>compiler builtin functions</em>.\nThese special functions are <strong>not guaranteed</strong> to exist on\nall platforms, and are ways to wrap compiler implemented, optimized implementations\nof some particular functionality. They are mainly intended for standard\nlibrary <em>internal</em> use. The standard library have macros\nthat wrap these builtins, so they should normally not be used on their own.</p>\n<h4 id=\"trap\">$$trap</h4>\n<p>Emits a trap instruction.</p>\n<h4 id=\"unreachable\">$$unreachable</h4>\n<p>Inserts an “unreachable” annotation.</p>\n<h4 id=\"stacktrace\">$$stacktrace</h4>\n<p>Returns the current “callstack” reference if available. OS and compiler dependent.</p>\n<h4 id=\"volatile_store\">$$volatile_store</h4>\n<p>Takes a variable and a value and stores the value as a volatile store.</p>\n<h4 id=\"volatile_load\">$$volatile_load</h4>\n<p>Takes a variable and returns the value using a volatile load.</p>\n<h4 id=\"memcpy\">$$memcpy</h4>\n<p>Builtin memcpy instruction.</p>\n<h4 id=\"memset\">$$memset</h4>\n<p>Builtin memset instruction.</p>\n<h4 id=\"prefetch\">$$prefetch</h4>\n<p>Prefetch a memory location.</p>\n<h4 id=\"sysclock\">$$sysclock</h4>\n<p>Access to the cycle counter register (or similar low latency clock) on supported\narchitectures (e.g. RDTSC on x86), otherwise $$sysclock will yield 0.</p>\n<h4 id=\"syscall\">$$syscall</h4>\n<p>Makes a syscall according to the platform convention on platforms where it is supported.</p>\n<h3 id=\"math-functions\">Math functions</h3>\n<p>Functions <code dir=\"auto\">$$ceil</code>, <code dir=\"auto\">$$trunc</code>, <code dir=\"auto\">$$sin</code>, <code dir=\"auto\">$$cos</code>, <code dir=\"auto\">$$log</code>, <code dir=\"auto\">$$log2</code>, <code dir=\"auto\">$$log10</code>, <code dir=\"auto\">$$rint</code>, <code dir=\"auto\">$$round</code>\n<code dir=\"auto\">$$sqrt</code>, <code dir=\"auto\">$$roundeven</code>, <code dir=\"auto\">$$floor</code>, <code dir=\"auto\">$$sqrt</code>, <code dir=\"auto\">$$pow</code>, <code dir=\"auto\">$$exp</code>, <code dir=\"auto\">$$fma</code> and <code dir=\"auto\">$$fabs</code>, <code dir=\"auto\">$$copysign</code>,\n<code dir=\"auto\">$$round</code>, <code dir=\"auto\">$$nearbyint</code>.</p>\n<p>Can be applied to float vectors or numbers. Returns the same type.</p>\n<p>Functions <code dir=\"auto\">$$min</code>, <code dir=\"auto\">$$abs</code> and <code dir=\"auto\">$$max</code> can be applied to any integer or float number or vector.</p>\n<p>Function $pow_int takes a float or floating vector + an integer and returns\nthe same type as the first parameter.</p>\n<p>Saturated addition, subtraction and left shift for integers and integer vectors:\n<code dir=\"auto\">$$sat_add</code>, <code dir=\"auto\">$$sat_shl</code>, <code dir=\"auto\">$$sat_sub</code>.</p>\n<h3 id=\"bit-functions\">Bit functions</h3>\n<h4 id=\"fshl-and-fshr\">$$fshl and $$fshr</h4>\n<p>Funnel shift left and right, takes either two integers or two integer vectors.</p>\n<h4 id=\"ctz-clz-bitreverse-bswap-popcount\">$$ctz, $$clz, $$bitreverse, $$bswap, $$popcount</h4>\n<p>Bit functions work on an integer or an integer vector.</p>\n<h3 id=\"vector-functions\">Vector functions</h3>\n<p><code dir=\"auto\">$$reduce_add</code>, <code dir=\"auto\">$$reduce_mul</code>, <code dir=\"auto\">$$reduce_and</code>, <code dir=\"auto\">$$reduce_or</code>, <code dir=\"auto\">$$reduce_xor</code> work on integer vectors.</p>\n<p><code dir=\"auto\">$$reduce_fadd</code>, <code dir=\"auto\">$$reduce_fmul</code> works on float vectors.</p>\n<p><code dir=\"auto\">$$reduce_max</code>, <code dir=\"auto\">$$reduce_min</code> works on any vector.</p>\n<p><code dir=\"auto\">$$reverse</code> reverses the values in any vector.</p>\n<p><code dir=\"auto\">$$shufflevector</code> rearranges the values of two vectors using a fixed mask into\na resulting vector.</p>";

				const frontmatter = {"title":"Builtins","description":"Builtins","sidebar":{"order":226}};
				const file = "/home/josh/git/c3_tests/experimental-site-testing-only__local_changes/src/content/docs/Misc Advanced/builtins.md";
				const url = undefined;
				function rawContent() {
					return "The compiler offers builtin constants and functions. Some are only available on certain targets. All builtins use the `$$`\nname prefix.\n\n## Builtin constants\n\nThese constants are generated by the compiler and can safely be used by the user.\n\n#### $$BENCHMARK_NAMES\nAn array of names of the benchmark functions.\n\n#### $$BENCHMARK_FNS\nAn array of addresses to the benchmark functions.\n\n#### $$DATE\nThe current date.\n\n#### $$FILE\nThe current file name.\n\n#### $$FILEPATH\nThe current file with path.\n\n#### $$FUNC\nThe current function name, will return \"<GLOBAL>\" on the global level.\n\n#### $$FUNCTION\nThe current function as an expression.\n\n#### $$LINE\nThe current line as an integer.\n\n#### $$LINE_RAW\nUsually the same as $$LINE, but in case of a macro inclusion it returns the line in the macro rather than\nthe line where the macro was included.\n\n#### $$MODULE\nThe current module name.\n\n#### $$TIME\nThe current time.\n\n\n## Compiler builtin functions\n\nThe `$$` namespace defines *compiler builtin functions*. \nThese special functions are __not guaranteed__ to exist on \nall platforms, and are ways to wrap compiler implemented, optimized implementations\nof some particular functionality. They are mainly intended for standard \nlibrary *internal* use. The standard library have macros \nthat wrap these builtins, so they should normally not be used on their own. \n\n#### $$trap\n\nEmits a trap instruction. \n\n#### $$unreachable\n\nInserts an \"unreachable\" annotation.\n\n#### $$stacktrace\n\nReturns the current \"callstack\" reference if available. OS and compiler dependent.\n\n#### $$volatile_store\n\nTakes a variable and a value and stores the value as a volatile store.\n\n#### $$volatile_load\n\nTakes a variable and returns the value using a volatile load.\n\n#### $$memcpy\n\nBuiltin memcpy instruction.\n\n#### $$memset\n\nBuiltin memset instruction.\n\n#### $$prefetch\n\nPrefetch a memory location.\n\n#### $$sysclock\n\nAccess to the cycle counter register (or similar low latency clock) on supported\narchitectures (e.g. RDTSC on x86), otherwise $$sysclock will yield 0.\n\n#### $$syscall\n\nMakes a syscall according to the platform convention on platforms where it is supported.\n\n### Math functions\n\nFunctions `$$ceil`, `$$trunc`, `$$sin`, `$$cos`, `$$log`, `$$log2`, `$$log10`, `$$rint`, `$$round`\n`$$sqrt`, `$$roundeven`, `$$floor`, `$$sqrt`, `$$pow`, `$$exp`, `$$fma` and `$$fabs`, `$$copysign`,\n`$$round`, `$$nearbyint`.\n\nCan be applied to float vectors or numbers. Returns the same type.\n\nFunctions `$$min`, `$$abs` and `$$max` can be applied to any integer or float number or vector.\n\nFunction $pow_int takes a float or floating vector + an integer and returns\nthe same type as the first parameter.\n\nSaturated addition, subtraction and left shift for integers and integer vectors:\n`$$sat_add`, `$$sat_shl`, `$$sat_sub`.\n\n### Bit functions\n\n#### $$fshl and $$fshr\n\nFunnel shift left and right, takes either two integers or two integer vectors.\n\n#### $$ctz, $$clz, $$bitreverse, $$bswap, $$popcount\n\nBit functions work on an integer or an integer vector.\n\n### Vector functions\n\n`$$reduce_add`, `$$reduce_mul`, `$$reduce_and`, `$$reduce_or`, `$$reduce_xor` work on integer vectors.\n\n`$$reduce_fadd`, `$$reduce_fmul` works on float vectors.\n\n`$$reduce_max`, `$$reduce_min` works on any vector.\n\n`$$reverse` reverses the values in any vector.\n\n`$$shufflevector` rearranges the values of two vectors using a fixed mask into\na resulting vector.\n\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"builtin-constants","text":"Builtin constants"},{"depth":4,"slug":"benchmark_names","text":"$$BENCHMARK_NAMES"},{"depth":4,"slug":"benchmark_fns","text":"$$BENCHMARK_FNS"},{"depth":4,"slug":"date","text":"$$DATE"},{"depth":4,"slug":"file","text":"$$FILE"},{"depth":4,"slug":"filepath","text":"$$FILEPATH"},{"depth":4,"slug":"func","text":"$$FUNC"},{"depth":4,"slug":"function","text":"$$FUNCTION"},{"depth":4,"slug":"line","text":"$$LINE"},{"depth":4,"slug":"line_raw","text":"$$LINE_RAW"},{"depth":4,"slug":"module","text":"$$MODULE"},{"depth":4,"slug":"time","text":"$$TIME"},{"depth":2,"slug":"compiler-builtin-functions","text":"Compiler builtin functions"},{"depth":4,"slug":"trap","text":"$$trap"},{"depth":4,"slug":"unreachable","text":"$$unreachable"},{"depth":4,"slug":"stacktrace","text":"$$stacktrace"},{"depth":4,"slug":"volatile_store","text":"$$volatile_store"},{"depth":4,"slug":"volatile_load","text":"$$volatile_load"},{"depth":4,"slug":"memcpy","text":"$$memcpy"},{"depth":4,"slug":"memset","text":"$$memset"},{"depth":4,"slug":"prefetch","text":"$$prefetch"},{"depth":4,"slug":"sysclock","text":"$$sysclock"},{"depth":4,"slug":"syscall","text":"$$syscall"},{"depth":3,"slug":"math-functions","text":"Math functions"},{"depth":3,"slug":"bit-functions","text":"Bit functions"},{"depth":4,"slug":"fshl-and-fshr","text":"$$fshl and $$fshr"},{"depth":4,"slug":"ctz-clz-bitreverse-bswap-popcount","text":"$$ctz, $$clz, $$bitreverse, $$bswap, $$popcount"},{"depth":3,"slug":"vector-functions","text":"Vector functions"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
