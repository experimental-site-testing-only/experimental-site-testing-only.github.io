import { F as Fragment, _ as __astro_tag_component__, l as createVNode } from './astro/server_DFSFkPP8.mjs';
import '@astrojs/internal-helpers/path';
import { $ as $$Image } from './_astro_assets_vwwZhGgV.mjs';
import 'clsx';

const frontmatter = {
  "title": "Standard Library",
  "description": "Standard Library",
  "sidebar": {
    "order": 128
  }
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "stdcorebuiltin",
    "text": "std::core::builtin"
  }, {
    "depth": 3,
    "slug": "void-panicchar-message-char-file-char-function-uint-line",
    "text": "void panic(char* message, char *file, char *function, uint line)"
  }, {
    "depth": 3,
    "slug": "void-swapa-b",
    "text": "void @swap(&a, &b)"
  }, {
    "depth": 3,
    "slug": "anycastany-v-type",
    "text": "anycast(any v, $Type)"
  }, {
    "depth": 3,
    "slug": "void-unreachablestring--unreachable-statement-reached",
    "text": "void unreachable($string = “Unreachable statement reached.”)"
  }, {
    "depth": 3,
    "slug": "bitcastvalue-type",
    "text": "bitcast(value, $Type)"
  }, {
    "depth": 3,
    "slug": "enum_by_nametype-enum_name",
    "text": "enum_by_name($Type, enum_name)"
  }, {
    "depth": 3,
    "slug": "void-scopevariable-body",
    "text": "void @scope(&variable; @body)"
  }, {
    "depth": 3,
    "slug": "less-greater-less_eq-greater_eq-equals",
    "text": "less, greater, less_eq, greater_eq, equals"
  }, {
    "depth": 3,
    "slug": "faults",
    "text": "Faults"
  }, {
    "depth": 2,
    "slug": "stdcoreenv",
    "text": "std::core::env"
  }, {
    "depth": 3,
    "slug": "constants",
    "text": "Constants"
  }, {
    "depth": 2,
    "slug": "stdcoremem",
    "text": "std::core::mem"
  }, {
    "depth": 3,
    "slug": "malloc-malloc_checked-malloc_aligned",
    "text": "malloc, malloc_checked, malloc_aligned"
  }, {
    "depth": 3,
    "slug": "newtype-initializer-new_alignedtype-initializer",
    "text": "new($Type, #initializer), new_aligned($Type, #initializer)"
  }, {
    "depth": 3,
    "slug": "alloctype-alloc_alignedtype",
    "text": "alloc($Type), alloc_aligned($Type)"
  }, {
    "depth": 3,
    "slug": "new_arraytype-usz-elements-new_array_alignedtype-usz-elements",
    "text": "new_array($Type, usz elements), new_array_aligned($Type, usz elements)"
  }, {
    "depth": 3,
    "slug": "alloc_arraytype-usz-elements-alloc_array_alignedtype-usz-elements",
    "text": "alloc_array($Type, usz elements), alloc_array_aligned($Type, usz elements)"
  }, {
    "depth": 3,
    "slug": "calloc-calloc_checked-calloc_aligned",
    "text": "calloc, calloc_checked, calloc_aligned"
  }, {
    "depth": 3,
    "slug": "relloc-relloc_checked-realloc_aligned",
    "text": "relloc, relloc_checked, realloc_aligned"
  }, {
    "depth": 3,
    "slug": "free-free_aligned",
    "text": "free, free_aligned"
  }, {
    "depth": 3,
    "slug": "scopedallocator-allocator-body",
    "text": "@scoped(Allocator* allocator; @body())"
  }, {
    "depth": 3,
    "slug": "tscoped-body",
    "text": "@tscoped(; @body())"
  }, {
    "depth": 3,
    "slug": "void-tmallocusz-size-usz-alignment--0",
    "text": "void* tmalloc(usz size, usz alignment = 0)"
  }, {
    "depth": 3,
    "slug": "void-tcallocusz-size-usz-alignment--0",
    "text": "void* tcalloc(usz size, usz alignment = 0)"
  }, {
    "depth": 3,
    "slug": "void-treallocvoid-ptr-usz-size-usz-alignment--0",
    "text": "void* trealloc(void* ptr, usz size, usz alignment = 0)"
  }, {
    "depth": 3,
    "slug": "temp_new-temp_alloc-temp_new_array-temp_alloc_array",
    "text": "temp_new, temp_alloc, temp_new_array, temp_alloc_array"
  }, {
    "depth": 3,
    "slug": "void-poolbody",
    "text": "void @pool(;@body)"
  }, {
    "depth": 3,
    "slug": "volatile_loadx",
    "text": "@volatile_load(&x)"
  }, {
    "depth": 3,
    "slug": "volatile_storex-y",
    "text": "@volatile_store(&x, y)"
  }, {
    "depth": 3,
    "slug": "usz-aligned_offsetusz-offset-usz-alignment",
    "text": "usz aligned_offset(usz offset, usz alignment)"
  }, {
    "depth": 3,
    "slug": "usz-aligned_pointervoid-ptr-usz-alignment",
    "text": "usz aligned_pointer(void* ptr, usz alignment)"
  }, {
    "depth": 3,
    "slug": "bool-ptr_is_alignedvoid-ptr-usz-alignment",
    "text": "bool ptr_is_aligned(void* ptr, usz alignment)"
  }, {
    "depth": 3,
    "slug": "void-copyvoid-dst-void-src-usz-len-usz-dst_align--0-usz-src_align--0-bool-is_volatile--false",
    "text": "void copy(void* dst, void* src, usz len, usz $dst_align = 0, usz $src_align = 0, bool $is_volatile = false)"
  }, {
    "depth": 3,
    "slug": "void-setvoid-dst-char-val-usz-len-usz-dst_align--0-bool-is_volatile--false",
    "text": "void set(void* dst, char val, usz len, usz $dst_align = 0, bool $is_volatile = false)"
  }, {
    "depth": 3,
    "slug": "void-clearvoid-dst-usz-len-usz-dst_align--0-bool-is_volatile--false",
    "text": "void clear(void* dst, usz len, usz $dst_align = 0, bool $is_volatile = false)"
  }, {
    "depth": 3,
    "slug": "clonevalue",
    "text": "@clone(&value)"
  }, {
    "depth": 3,
    "slug": "tclonevalue",
    "text": "@tclone(&value)"
  }, {
    "depth": 2,
    "slug": "stdcoretypes",
    "text": "std::core::types"
  }, {
    "depth": 3,
    "slug": "bool-is_comparabletype",
    "text": "bool is_comparable($Type)"
  }, {
    "depth": 3,
    "slug": "bool-is_equatable_valuevalue",
    "text": "bool is_equatable_value(value)"
  }, {
    "depth": 3,
    "slug": "bool-is_equatable_valuevalue-1",
    "text": "bool is_equatable_value(value)"
  }, {
    "depth": 3,
    "slug": "kind_is_inttypekind-kind",
    "text": "kind_is_int(TypeKind kind)"
  }, {
    "depth": 3,
    "slug": "any_to_intany-v-type",
    "text": "any_to_int(any* v, $Type)"
  }, {
    "depth": 2,
    "slug": "stdcorestrconv",
    "text": "std::core::str::conv"
  }, {
    "depth": 3,
    "slug": "usz-char32_to_utf8char32-c-char-output-usz-available",
    "text": "usz! char32_to_utf8(Char32 c, char* output, usz available)"
  }, {
    "depth": 3,
    "slug": "void-char32_to_utf16_unsafechar32-c-char16-output",
    "text": "void char32_to_utf16_unsafe(Char32 c, Char16** output)"
  }, {
    "depth": 2,
    "slug": "stdio",
    "text": "std::io"
  }, {
    "depth": 3,
    "slug": "string-readlinestream--iostdin-allocator-allocator--allocatorheap",
    "text": "String! readline(stream = io::stdin(), Allocator allocator = allocator::heap())"
  }, {
    "depth": 3,
    "slug": "string-treadlinestream--iostdin",
    "text": "String! treadline(stream = io::stdin())"
  }, {
    "depth": 3,
    "slug": "void-printx-void-printnx-",
    "text": "void print(x), void printn(x = \"\")"
  }, {
    "depth": 3,
    "slug": "void-eprintx-void-eprintnx",
    "text": "void eprint(x), void eprintn(x)"
  }, {
    "depth": 3,
    "slug": "usz-printfstring-format-args-maydiscard",
    "text": "usz! printf(String format, args…) @maydiscard"
  }, {
    "depth": 3,
    "slug": "char-bprintfchar-buffer-string-format-args-maydiscard",
    "text": "char[]! bprintf(char[] buffer, String format, args…) @maydiscard"
  }, {
    "depth": 3,
    "slug": "usz-fprintout-x-usz-fprintnout-x-",
    "text": "usz! fprint(out, x), usz! fprintn(out, x = \"\")"
  }, {
    "depth": 3,
    "slug": "usz-fprintfoutstream-out-string-format-args",
    "text": "usz! fprintf(OutStream out, String format, args…)"
  }, {
    "depth": 3,
    "slug": "void-putcharchar-c-inline",
    "text": "void putchar(char c) @inline"
  }, {
    "depth": 3,
    "slug": "usz-dstringappendfdstring-str-string-format-args-maydiscard",
    "text": "usz! DString.appendf(DString* str, String format, args…) @maydiscard"
  }, {
    "depth": 3,
    "slug": "file-stdout-file-stdin-file-stderr",
    "text": "File* stdout(), File* stdin(), File* stderr()"
  }, {
    "depth": 2,
    "slug": "stdiofile",
    "text": "std::io::file"
  }, {
    "depth": 3,
    "slug": "file-openstring-filename-string-mode",
    "text": "File! open(String filename, String mode)"
  }, {
    "depth": 3,
    "slug": "file-open_pathpath-path-string-mode",
    "text": "File! open_path(Path path, String mode)"
  }, {
    "depth": 3,
    "slug": "bool-is_filestring-path",
    "text": "bool is_file(String path)"
  }, {
    "depth": 3,
    "slug": "usz-get_sizestring-path",
    "text": "usz! get_size(String path)"
  }, {
    "depth": 3,
    "slug": "void-deletestring-filename",
    "text": "void! delete(String filename)"
  }, {
    "depth": 3,
    "slug": "void-filereopenself-string-filename-string-mode",
    "text": "void! File.reopen(&self, String filename, String mode)"
  }, {
    "depth": 3,
    "slug": "usz-fileseekself-isz-offset-seek-seek_mode--seekset",
    "text": "usz! File.seek(&self, isz offset, Seek seek_mode = Seek.SET)"
  }, {
    "depth": 3,
    "slug": "void-filewrite_byteself-char-c-dynamic",
    "text": "void! File.write_byte(&self, char c) @dynamic"
  }, {
    "depth": 3,
    "slug": "void-filecloseself-inline-dynamic",
    "text": "void! File.close(&self) @inline @dynamic"
  }, {
    "depth": 3,
    "slug": "bool-fileeofself-inline",
    "text": "bool File.eof(&self) @inline"
  }, {
    "depth": 3,
    "slug": "usz-filereadself-char-buffer",
    "text": "usz! File.read(&self, char[] buffer)"
  }, {
    "depth": 3,
    "slug": "usz-filewriteself-char-buffer",
    "text": "usz! File.write(&self, char[] buffer)"
  }, {
    "depth": 3,
    "slug": "char-fileread_byteself-dynamic",
    "text": "char! File.read_byte(&self) @dynamic"
  }, {
    "depth": 3,
    "slug": "char-load_bufferstring-filename-char-buffer",
    "text": "char[]! load_buffer(String filename, char[] buffer)"
  }, {
    "depth": 3,
    "slug": "char-load_newstring-filename-allocator-allocator--allocatorheap",
    "text": "char[]! load_new(String filename, Allocator allocator = allocator::heap())"
  }, {
    "depth": 3,
    "slug": "char-load_tempstring-filename",
    "text": "char[]! load_temp(String filename)"
  }, {
    "depth": 3,
    "slug": "void-fileflushself-dynamic",
    "text": "void! File.flush(&self) @dynamic"
  }, {
    "depth": 2,
    "slug": "stdcollectionslisttype",
    "text": "std::collections::list(<Type>)"
  }, {
    "depth": 3,
    "slug": "listpushlist-list-type-element-append",
    "text": "List.push(List *list, Type element), append(…)"
  }, {
    "depth": 3,
    "slug": "type-listpoplist-list",
    "text": "Type List.pop(List* list)"
  }, {
    "depth": 3,
    "slug": "type-listpop_firstlist-list",
    "text": "Type List.pop_first(List *list)"
  }, {
    "depth": 3,
    "slug": "void-listremove_atlist-list-usz-index",
    "text": "void List.remove_at(List *list, usz index)"
  }, {
    "depth": 3,
    "slug": "void-listinsert_atlist-list-usz-index-type-type",
    "text": "void List.insert_at(List *list, usz index, Type type)"
  }, {
    "depth": 3,
    "slug": "void-listpush_frontlist-list-type-type",
    "text": "void List.push_front(List *list, Type type)"
  }, {
    "depth": 3,
    "slug": "void-listremove_lastlist-list",
    "text": "void List.remove_last(List* list)"
  }, {
    "depth": 3,
    "slug": "void-listremove_firstlist-list",
    "text": "void List.remove_first(List *list)"
  }, {
    "depth": 3,
    "slug": "type-listfirstlist-list",
    "text": "Type* List.first(List* list)"
  }, {
    "depth": 3,
    "slug": "type-listlastlist-list",
    "text": "Type* List.last(List *list)"
  }, {
    "depth": 3,
    "slug": "listis_emptylist-list",
    "text": "List.is_empty(List *list)"
  }, {
    "depth": 3,
    "slug": "usz-listlenlist-list",
    "text": "usz List.len(List *list)"
  }, {
    "depth": 3,
    "slug": "type-listgetlist-list-usz-index",
    "text": "Type List.get(List *list, usz index)"
  }, {
    "depth": 3,
    "slug": "void-listfreelist-list",
    "text": "void List.free(List *list)"
  }, {
    "depth": 3,
    "slug": "void-listswaplist-list-usz-i-usz-j",
    "text": "void List.swap(List *list, usz i, usz j)"
  }];
}
const __usesAstroImage = true;
function _createMdxContent(props) {
  const {Fragment} = props.components || ({});
  if (!Fragment) _missingMdxReference("Fragment");
  return createVNode(Fragment, {
    "set:html": "<p>The standard library is currently in development, so frequent changes will occur. Note that all std::core modules and\nsub modules are implicitly imported.</p>\n<h2 id=\"stdcorebuiltin\">std::core::builtin</h2>\n<p>All functions and macros in this library can be used without path qualifiers.</p>\n<h3 id=\"void-panicchar-message-char-file-char-function-uint-line\">void panic(char* message, char *file, char *function, uint line)</h3>\n<p>Default function called when the asserts fails.</p>\n<h3 id=\"void-swapa-b\">void @swap(&#x26;a, &#x26;b)</h3>\n<p>Swap values in <code dir=\"auto\">a</code> and <code dir=\"auto\">b</code>.</p>\n<div class=\"expressive-code\"><link rel=\"stylesheet\" href=\"/_astro/ec.j8ofn.css\"><script type=\"module\" src=\"/_astro/ec.8zarh.js\"></script><figure class=\"frame not-content\"><figcaption class=\"header\"></figcaption><pre data-language=\"c\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C792EA;--1:#8D46B4\">int</span><span style=\"--0:#D6DEEB;--1:#403F53\"> a </span><span style=\"--0:#C792EA;--1:#8D46B4\">=</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#F78C6C;--1:#AA0982\">3</span><span style=\"--0:#D6DEEB;--1:#403F53\">;</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C792EA;--1:#8D46B4\">int</span><span style=\"--0:#D6DEEB;--1:#403F53\"> b </span><span style=\"--0:#C792EA;--1:#8D46B4\">=</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#F78C6C;--1:#AA0982\">5</span><span style=\"--0:#D6DEEB;--1:#403F53\">;</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#D6DEEB;--1:#403F53\">@</span><span style=\"--0:#82AAFF;--1:#3C63B3\">swap</span><span style=\"--0:#D6DEEB;--1:#403F53\">(a, b);</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#D6DEEB;--1:#403F53\">io::</span><span style=\"--0:#82AAFF;--1:#3C63B3\">printfn</span><span style=\"--0:#D6DEEB;--1:#403F53\">(</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#82AAFF;--1:#3C63B3\">%d</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#D6DEEB;--1:#403F53\">, a);</span><span style=\"--0:#809191;--1:#5E6578\"> // Prints 5</span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"int a = 3;int b = 5;@swap(a, b);io::printfn(&#x22;%d&#x22;, a); // Prints 5\"><div></div></button></div></figure></div>\n<h3 id=\"anycastany-v-type\">anycast(any v, $Type)</h3>\n<p>Optionally cast the value <code dir=\"auto\">v</code> to type <code dir=\"auto\">$Type*</code> on failure returns <code dir=\"auto\">CastResult.TYPE_MISMATCH</code>.</p>\n<div class=\"expressive-code\"><figure class=\"frame not-content\"><figcaption class=\"header\"></figcaption><pre data-language=\"c\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C792EA;--1:#8D46B4\">int</span><span style=\"--0:#D6DEEB;--1:#403F53\"> b;</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#D6DEEB;--1:#403F53\">any a </span><span style=\"--0:#C792EA;--1:#8D46B4\">=</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#7FDBCA;--1:#097174\">&#x26;</span><span style=\"--0:#D6DEEB;--1:#403F53\">b;</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C792EA;--1:#8D46B4\">float</span><span style=\"--0:#7FDBCA;--1:#097174\">*</span><span style=\"--0:#C792EA;--1:#8D46B4\">!</span><span style=\"--0:#D6DEEB;--1:#403F53\"> c </span><span style=\"--0:#C792EA;--1:#8D46B4\">=</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#82AAFF;--1:#3C63B3\">anycast</span><span style=\"--0:#D6DEEB;--1:#403F53\">(a, </span><span style=\"--0:#C792EA;--1:#8D46B4\">float</span><span style=\"--0:#D6DEEB;--1:#403F53\">);</span><span style=\"--0:#809191;--1:#5E6578\"> // Will return TYPE_MISMATCH</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C792EA;--1:#8D46B4\">int</span><span style=\"--0:#7FDBCA;--1:#097174\">*</span><span style=\"--0:#C792EA;--1:#8D46B4\">!</span><span style=\"--0:#D6DEEB;--1:#403F53\"> d </span><span style=\"--0:#C792EA;--1:#8D46B4\">=</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#82AAFF;--1:#3C63B3\">anycast</span><span style=\"--0:#D6DEEB;--1:#403F53\">(a, </span><span style=\"--0:#C792EA;--1:#8D46B4\">int</span><span style=\"--0:#D6DEEB;--1:#403F53\">);</span><span style=\"--0:#809191;--1:#5E6578\">     // Works!</span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"int b;any a = &#x26;b;float*! c = anycast(a, float); // Will return TYPE_MISMATCHint*! d = anycast(a, int);     // Works!\"><div></div></button></div></figure></div>\n<h3 id=\"void-unreachablestring--unreachable-statement-reached\">void unreachable($string = “Unreachable statement reached.”)</h3>\n<p>Mark a code path as unreachable.</p>\n<div class=\"expressive-code\"><figure class=\"frame not-content\"><figcaption class=\"header\"></figcaption><pre data-language=\"c\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C792EA;--1:#8D46B4\">switch</span><span style=\"--0:#D6DEEB;--1:#403F53\"> (x)</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#D6DEEB;--1:#403F53\">{</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">    </span><span style=\"--0:#C792EA;--1:#8D46B4\">case</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#F78C6C;--1:#AA0982\">0</span><span style=\"--0:#D6DEEB;--1:#403F53\">:</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">        </span><span style=\"--0:#82AAFF;--1:#3C63B3\">foo</span><span style=\"--0:#D6DEEB;--1:#403F53\">();</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">    </span><span style=\"--0:#C792EA;--1:#8D46B4\">case</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#F78C6C;--1:#AA0982\">1</span><span style=\"--0:#D6DEEB;--1:#403F53\">:</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">        </span><span style=\"--0:#82AAFF;--1:#3C63B3\">bar</span><span style=\"--0:#D6DEEB;--1:#403F53\">();</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">    </span><span style=\"--0:#C792EA;--1:#8D46B4\">default</span><span style=\"--0:#D6DEEB;--1:#403F53\">:</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">        </span><span style=\"--0:#809191;--1:#5E6578\">// Should never happen.</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">        </span><span style=\"--0:#82AAFF;--1:#3C63B3\">unreachable</span><span style=\"--0:#D6DEEB;--1:#403F53\">(</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#9B504E\">x should have been 0 or 1</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#D6DEEB;--1:#403F53\">);</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#D6DEEB;--1:#403F53\">}</span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"switch (x){    case 0:        foo();    case 1:        bar();    default:        // Should never happen.        unreachable(&#x22;x should have been 0 or 1&#x22;);}\"><div></div></button></div></figure></div>\n<p>On safe mode this will throw a runtime panic when reached. For release mode the\ncompiler will assume this case never happens.</p>\n<h3 id=\"bitcastvalue-type\">bitcast(value, $Type)</h3>\n<p>Do a bitcast of a value to <code dir=\"auto\">$Type</code>, requires that the types are of the same memory size.</p>\n<div class=\"expressive-code\"><figure class=\"frame not-content\"><figcaption class=\"header\"></figcaption><pre data-language=\"c\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C792EA;--1:#8D46B4\">float</span><span style=\"--0:#D6DEEB;--1:#403F53\"> x </span><span style=\"--0:#C792EA;--1:#8D46B4\">=</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#F78C6C;--1:#AA0982\">1.0</span><span style=\"--0:#D6DEEB;--1:#403F53\">;</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C792EA;--1:#8D46B4\">int</span><span style=\"--0:#D6DEEB;--1:#403F53\"> y </span><span style=\"--0:#C792EA;--1:#8D46B4\">=</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#82AAFF;--1:#3C63B3\">bitcast</span><span style=\"--0:#D6DEEB;--1:#403F53\">(x, </span><span style=\"--0:#C792EA;--1:#8D46B4\">int</span><span style=\"--0:#D6DEEB;--1:#403F53\">);</span><span style=\"--0:#809191;--1:#5E6578\"> // y = 0x3f800000</span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"float x = 1.0;int y = bitcast(x, int); // y = 0x3f800000\"><div></div></button></div></figure></div>\n<h3 id=\"enum_by_nametype-enum_name\">enum_by_name($Type, enum_name)</h3>\n<p>Optionally returns the enum value with the given name. <code dir=\"auto\">$Type</code> must be an enum. Returns <code dir=\"auto\">SearchResult.MISSING</code>\non failure.</p>\n<div class=\"expressive-code\"><figure class=\"frame not-content\"><figcaption class=\"header\"></figcaption><pre data-language=\"c\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C792EA;--1:#8D46B4\">enum</span><span style=\"--0:#D6DEEB;--1:#403F53\"> Foo { ABC, CDE, EFG }</span></div></div><div class=\"ec-line\"><div class=\"code\">\n</div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#D6DEEB;--1:#403F53\">fn </span><span style=\"--0:#C792EA;--1:#8D46B4\">void!</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#82AAFF;--1:#3C63B3\">test</span><span style=\"--0:#D6DEEB;--1:#403F53\">()</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#D6DEEB;--1:#403F53\">{</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#D6DEEB;--1:#403F53\">    </span></span><span style=\"--0:#D6DEEB;--1:#403F53\">Foo f </span><span style=\"--0:#C792EA;--1:#8D46B4\">=</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#82AAFF;--1:#3C63B3\">enum_by_name(Foo, </span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#9B504E\">CDE</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#82AAFF;--1:#3C63B3\">)</span><span style=\"--0:#C792EA;--1:#8D46B4\">!</span><span style=\"--0:#D6DEEB;--1:#403F53\">;</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">    </span><span style=\"--0:#809191;--1:#5E6578\">// same as Foo f = Foo.CDE;</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#D6DEEB;--1:#403F53\">}</span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"enum Foo { ABC, CDE, EFG }fn void! test(){    Foo f = enum_by_name(Foo, &#x22;CDE&#x22;)!;    // same as Foo f = Foo.CDE;}\"><div></div></button></div></figure></div>\n<h3 id=\"void-scopevariable-body\">void @scope(&#x26;variable; @body)</h3>\n<p>Scopes a variable:</p>\n<div class=\"expressive-code\"><figure class=\"frame not-content\"><figcaption class=\"header\"></figcaption><pre data-language=\"plaintext\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#d6deeb;--1:#403f53\">int a = 3;</span></div></div><div class=\"ec-line\"><div class=\"code\">\n</div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#d6deeb;--1:#403f53\">@scope(a)</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#d6deeb;--1:#403f53\">{</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#d6deeb;--1:#403f53\">    </span></span><span style=\"--0:#d6deeb;--1:#403f53\">a = 4;</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#d6deeb;--1:#403f53\">    </span></span><span style=\"--0:#d6deeb;--1:#403f53\">a++;</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#d6deeb;--1:#403f53\">};</span></div></div><div class=\"ec-line\"><div class=\"code\">\n</div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#d6deeb;--1:#403f53\">// Prints a = 3</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#d6deeb;--1:#403f53\">io::printfn(\"a = %d\", a, b);</span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"int a = 3;@scope(a){    a = 4;    a++;};// Prints a = 3io::printfn(&#x22;a = %d&#x22;, a, b);\"><div></div></button></div></figure></div>\n<h3 id=\"less-greater-less_eq-greater_eq-equals\">less, greater, less_eq, greater_eq, equals</h3>\n<p>All macros take two values and compare them. Any type implementing <code dir=\"auto\">Type.less</code>\nor <code dir=\"auto\">Type.compare_to</code> may be compared (or if the type implements <code dir=\"auto\">&#x3C;</code>). Types\nimplementing <code dir=\"auto\">Type.equals</code> may use <code dir=\"auto\">equals</code> even if neither <code dir=\"auto\">less</code> nor <code dir=\"auto\">compare_to</code>\nare implemented.</p>\n<h3 id=\"faults\">Faults</h3>\n<ul>\n<li><code dir=\"auto\">IteratorResult</code> returned when reaching the end of an iterator.</li>\n<li><code dir=\"auto\">SearchResult</code> used when a search fails.</li>\n<li><code dir=\"auto\">CastResult</code> when an anycast fails.</li>\n</ul>\n<h2 id=\"stdcoreenv\">std::core::env</h2>\n<h3 id=\"constants\">Constants</h3>\n<ul>\n<li><code dir=\"auto\">OS_TYPE</code> the OS type compiled for.</li>\n<li><code dir=\"auto\">COMPILER_OPT_LEVEL</code> the optimization level used.</li>\n<li><code dir=\"auto\">I128_SUPPORT</code> true if int128 support is available.</li>\n<li><code dir=\"auto\">COMPILER_SAFE_MODE</code> true if compiled with safety checks.</li>\n</ul>\n<h2 id=\"stdcoremem\">std::core::mem</h2>\n<h3 id=\"malloc-malloc_checked-malloc_aligned\">malloc, malloc_checked, malloc_aligned</h3>\n<p>Allocate the given number of bytes. <code dir=\"auto\">malloc</code> will panic on out of memory,\nwhereas <code dir=\"auto\">malloc_checked</code> and <code dir=\"auto\">malloc_aligned</code> returns an optional value.\n<code dir=\"auto\">malloc_aligned</code> adds an alignment, which must be a power of 2. Any pointer\nallocated using <code dir=\"auto\">malloc_aligned</code> must be freed using <code dir=\"auto\">free_aligned</code> rather\nthe normal <code dir=\"auto\">free</code> or memory corruption may result.</p>\n<div class=\"expressive-code\"><figure class=\"frame not-content\"><figcaption class=\"header\"></figcaption><pre data-language=\"c\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C792EA;--1:#8D46B4\">char</span><span style=\"--0:#7FDBCA;--1:#097174\">*</span><span style=\"--0:#D6DEEB;--1:#403F53\"> data </span><span style=\"--0:#C792EA;--1:#8D46B4\">=</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#82AAFF;--1:#3C63B3\">malloc</span><span style=\"--0:#D6DEEB;--1:#403F53\">(</span><span style=\"--0:#F78C6C;--1:#AA0982\">8</span><span style=\"--0:#D6DEEB;--1:#403F53\">);</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C792EA;--1:#8D46B4\">char</span><span style=\"--0:#7FDBCA;--1:#097174\">*</span><span style=\"--0:#C792EA;--1:#8D46B4\">!</span><span style=\"--0:#D6DEEB;--1:#403F53\"> data2 </span><span style=\"--0:#C792EA;--1:#8D46B4\">=</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#82AAFF;--1:#3C63B3\">malloc_checked</span><span style=\"--0:#D6DEEB;--1:#403F53\">(</span><span style=\"--0:#F78C6C;--1:#AA0982\">8</span><span style=\"--0:#D6DEEB;--1:#403F53\">);</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C792EA;--1:#8D46B4\">int</span><span style=\"--0:#D6DEEB;--1:#403F53\">[</span><span style=\"--0:#C792EA;--1:#8D46B4\">&#x3C;</span><span style=\"--0:#F78C6C;--1:#AA0982\">16</span><span style=\"--0:#C792EA;--1:#8D46B4\">></span><span style=\"--0:#D6DEEB;--1:#403F53\">]</span><span style=\"--0:#7FDBCA;--1:#097174\">*</span><span style=\"--0:#C792EA;--1:#8D46B4\">!</span><span style=\"--0:#D6DEEB;--1:#403F53\"> data3 </span><span style=\"--0:#C792EA;--1:#8D46B4\">=</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#82AAFF;--1:#3C63B3\">malloc_aligned</span><span style=\"--0:#D6DEEB;--1:#403F53\">(</span><span style=\"--0:#F78C6C;--1:#AA0982\">16</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#7FDBCA;--1:#097174\">*</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#C792EA;--1:#8D46B4\">int</span><span style=\"--0:#D6DEEB;--1:#403F53\">.</span><span style=\"--0:#7FDBCA;--1:#097174\">sizeof</span><span style=\"--0:#D6DEEB;--1:#403F53\">), </span><span style=\"--0:#F78C6C;--1:#AA0982\">128</span><span style=\"--0:#D6DEEB;--1:#403F53\">);</span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"char* data = malloc(8);char*! data2 = malloc_checked(8);int[<16>]*! data3 = malloc_aligned(16 * int.sizeof), 128);\"><div></div></button></div></figure></div>\n<h3 id=\"newtype-initializer-new_alignedtype-initializer\">new($Type, #initializer), new_aligned($Type, #initializer)</h3>\n<p>This allocates a single element of $Type, returning the pointer. An optional initializer may be added, which\nimmediately initializes the value to that of the initializer.</p>\n<p>If no initializer is provided, it is zero initialized. <code dir=\"auto\">new_aligned</code> works the same but for overaligned types, such allocations\nmust be freed using <code dir=\"auto\">free_aligned</code></p>\n<div class=\"expressive-code\"><figure class=\"frame not-content\"><figcaption class=\"header\"></figcaption><pre data-language=\"c3\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C792EA;--1:#8D46B4\">int*</span><span style=\"--0:#D6DEEB;--1:#403F53\"> a </span><span style=\"--0:#C792EA;--1:#8D46B4\">=</span><span style=\"--0:#D6DEEB;--1:#403F53\"> mem::</span><span style=\"--0:#7FDBCA;--1:#097174\">new</span><span style=\"--0:#D6DEEB;--1:#403F53\">(</span><span style=\"--0:#C792EA;--1:#8D46B4\">int</span><span style=\"--0:#D6DEEB;--1:#403F53\">);</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#D6DEEB;--1:#403F53\">Foo</span><span style=\"--0:#C792EA;--1:#8D46B4\">*</span><span style=\"--0:#D6DEEB;--1:#403F53\"> foo </span><span style=\"--0:#C792EA;--1:#8D46B4\">=</span><span style=\"--0:#D6DEEB;--1:#403F53\"> mem::</span><span style=\"--0:#7FDBCA;--1:#097174\">new</span><span style=\"--0:#D6DEEB;--1:#403F53\">(Foo, { </span><span style=\"--0:#F78C6C;--1:#AA0982\">1</span><span style=\"--0:#D6DEEB;--1:#403F53\">, </span><span style=\"--0:#F78C6C;--1:#AA0982\">2</span><span style=\"--0:#D6DEEB;--1:#403F53\"> });</span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"int* a = mem::new(int);Foo* foo = mem::new(Foo, { 1, 2 });\"><div></div></button></div></figure></div>\n<h3 id=\"alloctype-alloc_alignedtype\">alloc($Type), alloc_aligned($Type)</h3>\n<p>Allocates a single element of $Type, same as <code dir=\"auto\">new</code>, but without initializing the data.</p>\n<h3 id=\"new_arraytype-usz-elements-new_array_alignedtype-usz-elements\">new_array($Type, usz elements), new_array_aligned($Type, usz elements)</h3>\n<p>Allocates a slice of <code dir=\"auto\">elements</code> number of elements, returning\na slice of the given length. Elements are zero initialized. <code dir=\"auto\">new_array_aligned</code> is used for\ntypes that exceed standard alignment.</p>\n<div class=\"expressive-code\"><figure class=\"frame not-content\"><figcaption class=\"header\"></figcaption><pre data-language=\"c3\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C792EA;--1:#8D46B4\">int</span><span style=\"--0:#D6DEEB;--1:#403F53\">[] ints </span><span style=\"--0:#C792EA;--1:#8D46B4\">=</span><span style=\"--0:#D6DEEB;--1:#403F53\"> mem::</span><span style=\"--0:#82AAFF;--1:#3C63B3\">new_array</span><span style=\"--0:#D6DEEB;--1:#403F53\">(</span><span style=\"--0:#C792EA;--1:#8D46B4\">int</span><span style=\"--0:#D6DEEB;--1:#403F53\">, </span><span style=\"--0:#F78C6C;--1:#AA0982\">100</span><span style=\"--0:#D6DEEB;--1:#403F53\">);</span><span style=\"--0:#809191;--1:#5E6578\"> // Allocated int[100] on the heap, zero initialized.</span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"int[] ints = mem::new_array(int, 100); // Allocated int[100] on the heap, zero initialized.\"><div></div></button></div></figure></div>\n<h3 id=\"alloc_arraytype-usz-elements-alloc_array_alignedtype-usz-elements\">alloc_array($Type, usz elements), alloc_array_aligned($Type, usz elements)</h3>\n<p>Same as <code dir=\"auto\">new_array</code> but without initialization.</p>\n<h3 id=\"calloc-calloc_checked-calloc_aligned\">calloc, calloc_checked, calloc_aligned</h3>\n<p>Identical to the <code dir=\"auto\">malloc</code> variants, except the data is guaranteed to be zeroed out.</p>\n<h3 id=\"relloc-relloc_checked-realloc_aligned\">relloc, relloc_checked, realloc_aligned</h3>\n<p>Resizes memory allocated using <code dir=\"auto\">malloc</code> or <code dir=\"auto\">calloc</code>. Any extra data is\nguaranteed to be zeroed out. <code dir=\"auto\">realloc_aligned</code> can only be used with\npointers created using <code dir=\"auto\">calloc_aligned</code> or <code dir=\"auto\">alloc_aligned</code>.</p>\n<h3 id=\"free-free_aligned\">free, free_aligned</h3>\n<p>Frees memory allocated using <code dir=\"auto\">malloc</code> or <code dir=\"auto\">calloc</code>. Any memory allocated using “_aligned” variants\nmust be freed using <code dir=\"auto\">free_aligned</code>.</p>\n<h3 id=\"scopedallocator-allocator-body\">@scoped(Allocator* allocator; @body())</h3>\n<p>Swaps the current memory allocator for the duration of the call.</p>\n<div class=\"expressive-code\"><figure class=\"frame not-content\"><figcaption class=\"header\"></figcaption><pre data-language=\"c\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#D6DEEB;--1:#403F53\">DynamicArenaAllocator dynamic_arena;</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#D6DEEB;--1:#403F53\">dynamic_arena.</span><span style=\"--0:#82AAFF;--1:#3C63B3\">init</span><span style=\"--0:#D6DEEB;--1:#403F53\">(</span><span style=\"--0:#F78C6C;--1:#AA0982\">1024</span><span style=\"--0:#D6DEEB;--1:#403F53\">);</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#D6DEEB;--1:#403F53\">mem::@</span><span style=\"--0:#82AAFF;--1:#3C63B3\">scoped</span><span style=\"--0:#D6DEEB;--1:#403F53\">(</span><span style=\"--0:#7FDBCA;--1:#097174\">&#x26;</span><span style=\"--1:#403F53\"><span style=\"--0:#D7DBE0\">dynamic_arena</span><span style=\"--0:#D6DEEB\">)</span></span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#D6DEEB;--1:#403F53\">{</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">    </span><span style=\"--0:#809191;--1:#5E6578\">// This allocation uses the dynamic arena</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#D6DEEB;--1:#403F53\">    </span></span><span style=\"--0:#D6DEEB;--1:#403F53\">Foo</span><span style=\"--0:#7FDBCA;--1:#097174\">*</span><span style=\"--0:#D6DEEB;--1:#403F53\"> f </span><span style=\"--0:#C792EA;--1:#8D46B4\">=</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#82AAFF;--1:#3C63B3\">malloc(Foo)</span><span style=\"--0:#D6DEEB;--1:#403F53\">;</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#D6DEEB;--1:#403F53\">};</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#809191;--1:#5E6578\">// Release any dynamic arena memory.</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#D6DEEB;--1:#403F53\">dynamic_arena.</span><span style=\"--0:#82AAFF;--1:#3C63B3\">destroy</span><span style=\"--0:#D6DEEB;--1:#403F53\">();</span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"DynamicArenaAllocator dynamic_arena;dynamic_arena.init(1024);mem::@scoped(&#x26;dynamic_arena){    // This allocation uses the dynamic arena    Foo* f = malloc(Foo);};// Release any dynamic arena memory.dynamic_arena.destroy();\"><div></div></button></div></figure></div>\n<h3 id=\"tscoped-body\">@tscoped(; @body())</h3>\n<p>Same as @scoped, but uses the temporary allocator rather than any\narbitrary allocator.</p>\n<h3 id=\"void-tmallocusz-size-usz-alignment--0\">void* tmalloc(usz size, usz alignment = 0)</h3>\n<p>Allocates memory using the temporary allocator. Panic on failure. It has type\nvariants similar to <code dir=\"auto\">malloc</code>, so <code dir=\"auto\">tmalloc(Type)</code> would create a <code dir=\"auto\">Type*</code> using\nthe temporary allocator.</p>\n<h3 id=\"void-tcallocusz-size-usz-alignment--0\">void* tcalloc(usz size, usz alignment = 0)</h3>\n<p>Same as <code dir=\"auto\">tmalloc</code> but clears the memory.</p>\n<h3 id=\"void-treallocvoid-ptr-usz-size-usz-alignment--0\">void* trealloc(void* ptr, usz size, usz alignment = 0)</h3>\n<p><code dir=\"auto\">realloc</code> but on memory received using <code dir=\"auto\">tcalloc</code> or <code dir=\"auto\">tmalloc</code>.</p>\n<h3 id=\"temp_new-temp_alloc-temp_new_array-temp_alloc_array\">temp_new, temp_alloc, temp_new_array, temp_alloc_array</h3>\n<p>Same as the <code dir=\"auto\">new</code>, <code dir=\"auto\">alloc</code>, <code dir=\"auto\">new_array</code> and <code dir=\"auto\">alloc_array</code> respectively.</p>\n<h3 id=\"void-poolbody\">void @pool(;@body)</h3>\n<p>Opens a temporary memory scope.</p>\n<div class=\"expressive-code\"><figure class=\"frame not-content\"><figcaption class=\"header\"></figcaption><pre data-language=\"c3\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#D6DEEB;--1:#403F53\">@</span><span style=\"--0:#82AAFF;--1:#3C63B3\">pool</span><span style=\"--0:#D6DEEB;--1:#403F53\">()</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#D6DEEB;--1:#403F53\">{</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#809191;--1:#5E6578\">    </span></span><span style=\"--0:#809191;--1:#5E6578\">// This allocation uses the dynamic arena</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\"><span style=\"--0:#D6DEEB;--1:#403F53\">    </span></span><span style=\"--0:#D6DEEB;--1:#403F53\">Foo</span><span style=\"--0:#C792EA;--1:#8D46B4\">*</span><span style=\"--0:#D6DEEB;--1:#403F53\"> f </span><span style=\"--0:#C792EA;--1:#8D46B4\">=</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#82AAFF;--1:#3C63B3\">tmalloc</span><span style=\"--0:#D6DEEB;--1:#403F53\">(Foo);</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#D6DEEB;--1:#403F53\">};</span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"@pool(){    // This allocation uses the dynamic arena    Foo* f = tmalloc(Foo);};\"><div></div></button></div></figure></div>\n<h3 id=\"volatile_loadx\">@volatile_load(&#x26;x)</h3>\n<p>Returns the value in <code dir=\"auto\">x</code> using a volatile load.</p>\n<div class=\"expressive-code\"><figure class=\"frame not-content\"><figcaption class=\"header\"></figcaption><pre data-language=\"c3\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#809191;--1:#5E6578\">// Both loads will always happen:</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C792EA;--1:#8D46B4\">int</span><span style=\"--0:#D6DEEB;--1:#403F53\"> y </span><span style=\"--0:#C792EA;--1:#8D46B4\">=</span><span style=\"--0:#D6DEEB;--1:#403F53\"> @</span><span style=\"--0:#82AAFF;--1:#3C63B3\">volatile_load</span><span style=\"--0:#D6DEEB;--1:#403F53\">(my_global);</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#D6DEEB;--1:#403F53\">y </span><span style=\"--0:#C792EA;--1:#8D46B4\">=</span><span style=\"--0:#D6DEEB;--1:#403F53\"> @</span><span style=\"--0:#82AAFF;--1:#3C63B3\">volatile_load</span><span style=\"--0:#D6DEEB;--1:#403F53\">(my_global);</span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"// Both loads will always happen:int y = @volatile_load(my_global);y = @volatile_load(my_global);\"><div></div></button></div></figure></div>\n<h3 id=\"volatile_storex-y\">@volatile_store(&#x26;x, y)</h3>\n<p>Store the value <code dir=\"auto\">y</code> in <code dir=\"auto\">x</code> using a volatile store.</p>\n<div class=\"expressive-code\"><figure class=\"frame not-content\"><figcaption class=\"header\"></figcaption><pre data-language=\"c3\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#809191;--1:#5E6578\">// Both stores will always happen:</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#D6DEEB;--1:#403F53\">@</span><span style=\"--0:#82AAFF;--1:#3C63B3\">volatile_store</span><span style=\"--0:#D6DEEB;--1:#403F53\">(y, </span><span style=\"--0:#F78C6C;--1:#AA0982\">1</span><span style=\"--0:#D6DEEB;--1:#403F53\">);</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#D6DEEB;--1:#403F53\">@</span><span style=\"--0:#82AAFF;--1:#3C63B3\">volatile_store</span><span style=\"--0:#D6DEEB;--1:#403F53\">(y, </span><span style=\"--0:#F78C6C;--1:#AA0982\">1</span><span style=\"--0:#D6DEEB;--1:#403F53\">);</span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"// Both stores will always happen:@volatile_store(y, 1);@volatile_store(y, 1);\"><div></div></button></div></figure></div>\n<h3 id=\"usz-aligned_offsetusz-offset-usz-alignment\">usz aligned_offset(usz offset, usz alignment)</h3>\n<p>Returns an aligned size based on the current offset. The alignment\nmust be a power of two. E.g. <code dir=\"auto\">mem::aligned_offset(17, 8)</code> would return <code dir=\"auto\">24</code></p>\n<h3 id=\"usz-aligned_pointervoid-ptr-usz-alignment\">usz aligned_pointer(void* ptr, usz alignment)</h3>\n<p>Returns a pointer aligned to the given alignment, using <code dir=\"auto\">aligned_offset</code>.</p>\n<h3 id=\"bool-ptr_is_alignedvoid-ptr-usz-alignment\">bool ptr_is_aligned(void* ptr, usz alignment)</h3>\n<p>Return true if the pointer is aligned, false otherwise.</p>\n<h3 id=\"void-copyvoid-dst-void-src-usz-len-usz-dst_align--0-usz-src_align--0-bool-is_volatile--false\">void copy(void* dst, void* src, usz len, usz $dst_align = 0, usz $src_align = 0, bool $is_volatile = false)</h3>\n<p>Copies bytes from one pointer to another. It may optionally be set as volatile,\nin which case the copy may not be optimized away. Furthermore the source\nand destination alignment may be used.</p>\n<div class=\"expressive-code\"><figure class=\"frame not-content\"><figcaption class=\"header\"></figcaption><pre data-language=\"c3\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#D6DEEB;--1:#403F53\">Foo</span><span style=\"--0:#C792EA;--1:#8D46B4\">*</span><span style=\"--0:#D6DEEB;--1:#403F53\"> f </span><span style=\"--0:#C792EA;--1:#8D46B4\">=</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#82AAFF;--1:#3C63B3\">tmalloc</span><span style=\"--0:#D6DEEB;--1:#403F53\">(data_size);</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#D6DEEB;--1:#403F53\">mem::</span><span style=\"--0:#82AAFF;--1:#3C63B3\">copy</span><span style=\"--0:#D6DEEB;--1:#403F53\">(f, </span><span style=\"--0:#C5E478;--1:#3C63B3\">slice</span><span style=\"--0:#D6DEEB;--1:#403F53\">.</span><span style=\"--0:#7FDBCA;--1:#097174\">ptr</span><span style=\"--0:#D6DEEB;--1:#403F53\">, size);</span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"Foo* f = tmalloc(data_size);mem::copy(f, slice.ptr, size);\"><div></div></button></div></figure></div>\n<h3 id=\"void-setvoid-dst-char-val-usz-len-usz-dst_align--0-bool-is_volatile--false\">void set(void* dst, char val, usz len, usz $dst_align = 0, bool $is_volatile = false)</h3>\n<p>Sets bytes to a value. This operation may be aligned and/or volatile. See the <code dir=\"auto\">copy</code> method.</p>\n<h3 id=\"void-clearvoid-dst-usz-len-usz-dst_align--0-bool-is_volatile--false\">void clear(void* dst, usz len, usz $dst_align = 0, bool $is_volatile = false)</h3>\n<p>Sets bytes to zero. This operation may be aligned and/or volatile. See the <code dir=\"auto\">copy</code> method.</p>\n<h3 id=\"clonevalue\">@clone(&#x26;value)</h3>\n<p>Makes a shallow copy of a value using the regular allocator.</p>\n<div class=\"expressive-code\"><figure class=\"frame not-content\"><figcaption class=\"header\"></figcaption><pre data-language=\"c\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#D6DEEB;--1:#403F53\">Foo f </span><span style=\"--0:#C792EA;--1:#8D46B4\">=</span><span style=\"--0:#D6DEEB;--1:#403F53\"> ...</span></div></div><div class=\"ec-line\"><div class=\"code\">\n</div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C792EA;--1:#8D46B4\">return</span><span style=\"--0:#D6DEEB;--1:#403F53\"> @</span><span style=\"--0:#82AAFF;--1:#3C63B3\">clone</span><span style=\"--0:#D6DEEB;--1:#403F53\">(f);</span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"Foo f = ...return @clone(f);\"><div></div></button></div></figure></div>\n<h3 id=\"tclonevalue\">@tclone(&#x26;value)</h3>\n<p>Same as <code dir=\"auto\">@clone</code> but uses the temporary allocator.</p>\n<h2 id=\"stdcoretypes\">std::core::types</h2>\n<h3 id=\"bool-is_comparabletype\">bool is_comparable($Type)</h3>\n<p>Return true if the type can be used with comparison operators.</p>\n<h3 id=\"bool-is_equatable_valuevalue\">bool is_equatable_value(value)</h3>\n<p>Return <code dir=\"auto\">true</code> if the value can be compared using the <code dir=\"auto\">equals</code> macro.</p>\n<h3 id=\"bool-is_equatable_valuevalue-1\">bool is_equatable_value(value)</h3>\n<p>Return <code dir=\"auto\">true</code> if the value can be compared using the comparison macros.</p>\n<h3 id=\"kind_is_inttypekind-kind\">kind_is_int(TypeKind kind)</h3>\n<h3 id=\"any_to_intany-v-type\">any_to_int(any* v, $Type)</h3>\n<p>Returns an optional value of <code dir=\"auto\">$Type</code> if the any value losslessly\nmay be converted into the given type. Returns a <code dir=\"auto\">ConversionResult</code> otherwise.</p>\n<div class=\"expressive-code\"><figure class=\"frame not-content\"><figcaption class=\"header\"></figcaption><pre data-language=\"c\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#D6DEEB;--1:#403F53\">any</span><span style=\"--0:#7FDBCA;--1:#097174\">*</span><span style=\"--0:#D6DEEB;--1:#403F53\"> v </span><span style=\"--0:#C792EA;--1:#8D46B4\">=</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#C792EA;--1:#8D46B4\">&#x26;&#x26;</span><span style=\"--0:#F78C6C;--1:#AA0982\">128</span><span style=\"--0:#D6DEEB;--1:#403F53\">;</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#C792EA;--1:#8D46B4\">short</span><span style=\"--0:#D6DEEB;--1:#403F53\"> y </span><span style=\"--0:#C792EA;--1:#8D46B4\">=</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#82AAFF;--1:#3C63B3\">any_to_int</span><span style=\"--0:#D6DEEB;--1:#403F53\">(v, </span><span style=\"--0:#C792EA;--1:#8D46B4\">short</span><span style=\"--0:#D6DEEB;--1:#403F53\">)</span><span style=\"--0:#C792EA;--1:#8D46B4\">!!</span><span style=\"--0:#D6DEEB;--1:#403F53\">;</span><span style=\"--0:#809191;--1:#5E6578\"> // Works</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#D6DEEB;--1:#403F53\">ichar z </span><span style=\"--0:#C792EA;--1:#8D46B4\">=</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#82AAFF;--1:#3C63B3\">any_to_int</span><span style=\"--0:#D6DEEB;--1:#403F53\">(v, ichar)</span><span style=\"--0:#C792EA;--1:#8D46B4\">!!</span><span style=\"--0:#D6DEEB;--1:#403F53\">;</span><span style=\"--0:#809191;--1:#5E6578\"> // Panics VALUE_OUT_OF_RANGE</span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"any* v = &#x26;&#x26;128;short y = any_to_int(v, short)!!; // Worksichar z = any_to_int(v, ichar)!!; // Panics VALUE_OUT_OF_RANGE\"><div></div></button></div></figure></div>\n<h2 id=\"stdcorestrconv\">std::core::str::conv</h2>\n<h3 id=\"usz-char32_to_utf8char32-c-char-output-usz-available\">usz! char32_to_utf8(Char32 c, char* output, usz available)</h3>\n<p>Convert a UTF32 codepoint to an UTF8 buffer. <code dir=\"auto\">size</code> has the number of\nwritable bytes left. It returns the number of bytes used, or\n<code dir=\"auto\">UnicodeResult.CONVERSION_FAILED</code> if the buffer is too small.</p>\n<h3 id=\"void-char32_to_utf16_unsafechar32-c-char16-output\">void char32_to_utf16_unsafe(Char32 c, Char16** output)</h3>\n<p>Convert a UTF32 codepoint to an UTF16 buffer without bounds checking,\nmoving the output pointer 1 or 2 steps.</p>\n<h2 id=\"stdio\">std::io</h2>\n<h3 id=\"string-readlinestream--iostdin-allocator-allocator--allocatorheap\">String! readline(stream = io::stdin(), Allocator allocator = allocator::heap())</h3>\n<p>Read from a stream (default is stdin) to the next “\\n” or to the end of the stream, whatever comes first.</p>\n<p><code dir=\"auto\">\\r</code> will be filtered from the String.</p>\n<h3 id=\"string-treadlinestream--iostdin\">String! treadline(stream = io::stdin())</h3>\n<p>Same as <code dir=\"auto\">readline</code> but uses the temporary allocator.</p>\n<h3 id=\"void-printx-void-printnx-\">void print(x), void printn(x = \"\")</h3>\n<p>Print any value to stdout.</p>\n<p>The <code dir=\"auto\">printn</code> variant appends a newline.</p>\n<h3 id=\"void-eprintx-void-eprintnx\">void eprint(x), void eprintn(x)</h3>\n<p>Print any value to stderr.</p>\n<p>The <code dir=\"auto\">eprintn</code> variant appends a newline.</p>\n<h3 id=\"usz-printfstring-format-args-maydiscard\">usz! printf(String format, args…) @maydiscard</h3>\n<p>Regular printf functionality: <code dir=\"auto\">%s</code>, <code dir=\"auto\">%x</code>, <code dir=\"auto\">%d</code>, <code dir=\"auto\">%f</code> and <code dir=\"auto\">%p</code> are supported.</p>\n<p>Will also print enums and vectors.</p>\n<p>Also available as <code dir=\"auto\">printfn</code> which appends a newline.</p>\n<p><code dir=\"auto\">eprintf</code> and its matching function <code dir=\"auto\">eprintfn</code> print to stderr.</p>\n<h3 id=\"char-bprintfchar-buffer-string-format-args-maydiscard\">char[]! bprintf(char[] buffer, String format, args…) @maydiscard</h3>\n<p>Prints using a ‘printf’-style formatting string, to a string buffer.</p>\n<p>Returns a slice of the <code dir=\"auto\">buffer</code> argument with the resulting length.</p>\n<h3 id=\"usz-fprintout-x-usz-fprintnout-x-\">usz! fprint(out, x), usz! fprintn(out, x = \"\")</h3>\n<p>Print a value to a stream. <code dir=\"auto\">out</code> must implement <code dir=\"auto\">OutStream</code>.\nThe <code dir=\"auto\">fprintn</code> variant appends a newline.</p>\n<h3 id=\"usz-fprintfoutstream-out-string-format-args\">usz! fprintf(OutStream out, String format, args…)</h3>\n<p>Prints to the specified OutStream using a ‘printf’-style formatting string.</p>\n<p>Returns the number of characters printed.</p>\n<p><code dir=\"auto\">fprintfn</code> appends a newline.</p>\n<h3 id=\"void-putcharchar-c-inline\">void putchar(char c) @inline</h3>\n<p>Libc <code dir=\"auto\">putchar</code>, prints a single character to stdout.</p>\n<h3 id=\"usz-dstringappendfdstring-str-string-format-args-maydiscard\">usz! DString.appendf(DString* str, String format, args…) @maydiscard</h3>\n<p>Same as printf but on dynamic strings.</p>\n<h3 id=\"file-stdout-file-stdin-file-stderr\">File* stdout(), File* stdin(), File* stderr()</h3>\n<p>Return stdout, stdin and stderr respectively.</p>\n<h2 id=\"stdiofile\">std::io::file</h2>\n<h3 id=\"file-openstring-filename-string-mode\">File! open(String filename, String mode)</h3>\n<p>Open a file with the given file name with the given mode (r, w etc)</p>\n<h3 id=\"file-open_pathpath-path-string-mode\">File! open_path(Path path, String mode)</h3>\n<p>Open a file pointed to by a Path struct, with the given mode.</p>\n<h3 id=\"bool-is_filestring-path\">bool is_file(String path)</h3>\n<p>See whether the given path is a file.</p>\n<h3 id=\"usz-get_sizestring-path\">usz! get_size(String path)</h3>\n<p>Get the size of a file.</p>\n<h3 id=\"void-deletestring-filename\">void! delete(String filename)</h3>\n<p>Delete a file.</p>\n<h3 id=\"void-filereopenself-string-filename-string-mode\">void! File.reopen(&#x26;self, String filename, String mode)</h3>\n<p>Reopen a file with a new filename and mode.</p>\n<h3 id=\"usz-fileseekself-isz-offset-seek-seek_mode--seekset\">usz! File.seek(&#x26;self, isz offset, Seek seek_mode = Seek.SET)</h3>\n<p>Seek in a file. Based on the libc function.</p>\n<h3 id=\"void-filewrite_byteself-char-c-dynamic\">void! File.write_byte(&#x26;self, char c) @dynamic</h3>\n<p>Write a single byte to a file.</p>\n<h3 id=\"void-filecloseself-inline-dynamic\">void! File.close(&#x26;self) @inline @dynamic</h3>\n<p>Close a file, based on the libc function.</p>\n<h3 id=\"bool-fileeofself-inline\">bool File.eof(&#x26;self) @inline</h3>\n<p>True if EOF has been reached. Based on the libc function.</p>\n<h3 id=\"usz-filereadself-char-buffer\">usz! File.read(&#x26;self, char[] buffer)</h3>\n<p>Read into a buffer, based on the libc function.</p>\n<h3 id=\"usz-filewriteself-char-buffer\">usz! File.write(&#x26;self, char[] buffer)</h3>\n<p>Write to a buffer, based on the libc function.</p>\n<h3 id=\"char-fileread_byteself-dynamic\">char! File.read_byte(&#x26;self) @dynamic</h3>\n<p>Read a single byte from a file.</p>\n<h3 id=\"char-load_bufferstring-filename-char-buffer\">char[]! load_buffer(String filename, char[] buffer)</h3>\n<p>Load up to buffer.len characters into the buffer.</p>\n<p>Returns IoError.OVERFLOW if the file is longer than the buffer.</p>\n<h3 id=\"char-load_newstring-filename-allocator-allocator--allocatorheap\">char[]! load_new(String filename, Allocator allocator = allocator::heap())</h3>\n<p>Load the entire file into a new buffer.</p>\n<h3 id=\"char-load_tempstring-filename\">char[]! load_temp(String filename)</h3>\n<p>Load the entire file into a buffer allocated using the temporary allocator.</p>\n<h3 id=\"void-fileflushself-dynamic\">void! File.flush(&#x26;self) @dynamic</h3>\n<p>Flush a file, based on the libc function.</p>\n<h2 id=\"stdcollectionslisttype\">std::collections::list(&#x3C;Type>)</h2>\n<p>Generic list module, elements are of <code dir=\"auto\">Type</code>.</p>\n<div class=\"expressive-code\"><figure class=\"frame not-content\"><figcaption class=\"header\"></figcaption><pre data-language=\"c\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#D6DEEB;--1:#403F53\">import std::collections::list;</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#D6DEEB;--1:#403F53\">def MyIntList </span><span style=\"--0:#C792EA;--1:#8D46B4\">=</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#82AAFF;--1:#3C63B3\">List</span><span style=\"--0:#D6DEEB;--1:#403F53\">(</span><span style=\"--0:#C792EA;--1:#8D46B4\">&#x3C;int></span><span style=\"--0:#D6DEEB;--1:#403F53\">);</span></div></div><div class=\"ec-line\"><div class=\"code\">\n</div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#D6DEEB;--1:#403F53\">...</span></div></div><div class=\"ec-line\"><div class=\"code\">\n</div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#D6DEEB;--1:#403F53\">MyIntList list;</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#D6DEEB;--1:#403F53\">list.</span><span style=\"--0:#82AAFF;--1:#3C63B3\">push</span><span style=\"--0:#D6DEEB;--1:#403F53\">(</span><span style=\"--0:#F78C6C;--1:#AA0982\">123</span><span style=\"--0:#D6DEEB;--1:#403F53\">);</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#D6DEEB;--1:#403F53\">list.</span><span style=\"--0:#82AAFF;--1:#3C63B3\">free</span><span style=\"--0:#D6DEEB;--1:#403F53\">();</span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"import std::collections::list;def MyIntList = List(<int>);...MyIntList list;list.push(123);list.free();\"><div></div></button></div></figure></div>\n<h3 id=\"listpushlist-list-type-element-append\">List.push(List *list, Type element), append(…)</h3>\n<p>Append a single value to the list.</p>\n<h3 id=\"type-listpoplist-list\">Type List.pop(List* list)</h3>\n<p>Removes and returns the last entry in the list.</p>\n<h3 id=\"type-listpop_firstlist-list\">Type List.pop_first(List *list)</h3>\n<p>Removes the first entry in the list.</p>\n<h3 id=\"void-listremove_atlist-list-usz-index\">void List.remove_at(List *list, usz index)</h3>\n<p>Removes the entry at <code dir=\"auto\">index</code>.</p>\n<h3 id=\"void-listinsert_atlist-list-usz-index-type-type\">void List.insert_at(List *list, usz index, Type type)</h3>\n<p>Inserts a value at <code dir=\"auto\">index</code>.</p>\n<h3 id=\"void-listpush_frontlist-list-type-type\">void List.push_front(List *list, Type type)</h3>\n<p>Inserts a value to the front of the list.</p>\n<h3 id=\"void-listremove_lastlist-list\">void List.remove_last(List* list)</h3>\n<p>Remove the last value of the list.</p>\n<h3 id=\"void-listremove_firstlist-list\">void List.remove_first(List *list)</h3>\n<p>Remove the first element in the list.</p>\n<h3 id=\"type-listfirstlist-list\">Type* List.first(List* list)</h3>\n<p>Return the first element in the list if available.</p>\n<h3 id=\"type-listlastlist-list\">Type* List.last(List *list)</h3>\n<p>Return the last element in the list if available.</p>\n<h3 id=\"listis_emptylist-list\">List.is_empty(List *list)</h3>\n<p>Return <code dir=\"auto\">true</code> if the list is empty.</p>\n<h3 id=\"usz-listlenlist-list\">usz List.len(List *list)</h3>\n<p>Return the number of elements in the list.</p>\n<h3 id=\"type-listgetlist-list-usz-index\">Type List.get(List *list, usz index)</h3>\n<p>Return the value at <code dir=\"auto\">index</code>.</p>\n<h3 id=\"void-listfreelist-list\">void List.free(List *list)</h3>\n<p>Free all memory associated with this list.</p>\n<h3 id=\"void-listswaplist-list-usz-i-usz-j\">void List.swap(List *list, usz i, usz j)</h3>\n<p>Swap two elements in the list.</p>"
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = props.components || ({});
  return MDXLayout ? createVNode(MDXLayout, {
    ...props,
    children: createVNode(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}
function _missingMdxReference(id, component) {
  throw new Error("Expected " + ("component" ) + " `" + id + "` to be defined: you likely forgot to import, pass, or provide it.");
}
const url = "src/content/docs/Standard%20Library/index.mdx";
const file = "/home/josh/git/c3_tests/experimental-site-testing-only__local_changes/src/content/docs/Standard Library/index.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/josh/git/c3_tests/experimental-site-testing-only__local_changes/src/content/docs/Standard Library/index.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
