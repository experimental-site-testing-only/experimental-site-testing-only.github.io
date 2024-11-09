import { F as Fragment, _ as __astro_tag_component__, l as createVNode } from './astro/server_DFSFkPP8.mjs';
import '@astrojs/internal-helpers/path';
import { $ as $$Image } from './_astro_assets_vwwZhGgV.mjs';
import { o as $$FileTree } from './Code_Brojeh4W.mjs';
import 'clsx';

const frontmatter = {
  "title": "Build Commands",
  "description": "Build Commands",
  "sidebar": {
    "order": 240
  }
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "compile-individual-files",
    "text": "Compile Individual Files"
  }, {
    "depth": 2,
    "slug": "run",
    "text": "Run"
  }, {
    "depth": 2,
    "slug": "common-additional-parameters",
    "text": "Common additional parameters"
  }, {
    "depth": 2,
    "slug": "init-a-new-project",
    "text": "Init a new project"
  }, {
    "depth": 2,
    "slug": "test",
    "text": "Test"
  }, {
    "depth": 2,
    "slug": "build",
    "text": "Build"
  }, {
    "depth": 2,
    "slug": "clean",
    "text": "Clean"
  }, {
    "depth": 2,
    "slug": "build-and-run",
    "text": "Build and Run"
  }, {
    "depth": 2,
    "slug": "clean-and-run",
    "text": "Clean and Run"
  }, {
    "depth": 2,
    "slug": "dist",
    "text": "Dist"
  }, {
    "depth": 2,
    "slug": "docs",
    "text": "Docs"
  }, {
    "depth": 2,
    "slug": "bench",
    "text": "Bench"
  }];
}
const __usesAstroImage = true;
function _createMdxContent(props) {
  const {Fragment: Fragment$1} = props.components || ({});
  if (!Fragment$1) _missingMdxReference("Fragment");
  return createVNode(Fragment, {
    children: [createVNode(Fragment$1, {
      "set:html": "<p>Building a project is done by invoking the C3 compiler with the <code dir=\"auto\">build</code> or <code dir=\"auto\">run</code> command inside of the project structure. The compiler will search upwards in the file hierarchy until a <code dir=\"auto\">project.json</code> file is found.</p>\n<p>You can also <a href=\"/build-your-project/project-config/\">customise the project build config</a>.</p>\n<h2 id=\"compile-individual-files\">Compile Individual Files</h2>\n<p>By default the compiler is compiling stand-alone files to output an executable binary.</p>\n<div class=\"expressive-code\"><link rel=\"stylesheet\" href=\"/_astro/ec.j8ofn.css\"><script type=\"module\" src=\"/_astro/ec.8zarh.js\"></script><figure class=\"frame is-terminal not-content\"><figcaption class=\"header\"><span class=\"title\"></span><span class=\"sr-only\">Terminal window</span></figcaption><pre data-language=\"bash\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#82AAFF;--1:#3C63B3\">c3c</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#ECC48D;--1:#3C63B3\">compile</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#ECC48D;--1:#3C63B3\">&#x3C;file1></span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#ECC48D;--1:#3C63B3\">&#x3C;file2></span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#ECC48D;--1:#3C63B3\">&#x3C;file3></span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"c3c compile <file1> <file2> <file3>\"><div></div></button></div></figure></div>\n<h2 id=\"run\">Run</h2>\n<p>When starting out, with C3 it’s natural to use <code dir=\"auto\">compile-run</code> to try things out. For larger projects, the built-in build system is recommended instead.</p>\n<p>The <code dir=\"auto\">compile-run</code> command works same as compilation, but also immediately runs the resulting executable.</p>\n<div class=\"expressive-code\"><figure class=\"frame is-terminal not-content\"><figcaption class=\"header\"><span class=\"title\"></span><span class=\"sr-only\">Terminal window</span></figcaption><pre data-language=\"bash\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#82AAFF;--1:#3C63B3\">c3c</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#ECC48D;--1:#3C63B3\">compile-run</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#ECC48D;--1:#3C63B3\">&#x3C;file1></span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#ECC48D;--1:#3C63B3\">&#x3C;file2></span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#ECC48D;--1:#3C63B3\">&#x3C;file3></span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"c3c compile-run <file1> <file2> <file3>\"><div></div></button></div></figure></div>\n<h2 id=\"common-additional-parameters\">Common additional parameters</h2>\n<p>Additional parameters:</p>\n<ul>\n<li><code dir=\"auto\">--lib &#x3C;path></code> add a library to search.</li>\n<li><code dir=\"auto\">--output &#x3C;path></code> override the output directory.</li>\n<li><code dir=\"auto\">--path &#x3C;path></code> execute as if standing at <code dir=\"auto\">&#x3C;path></code></li>\n</ul>\n<h2 id=\"init-a-new-project\">Init a new project</h2>\n<div class=\"expressive-code\"><figure class=\"frame is-terminal not-content\"><figcaption class=\"header\"><span class=\"title\"></span><span class=\"sr-only\">Terminal window</span></figcaption><pre data-language=\"bash\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#82AAFF;--1:#3C63B3\">c3c</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#ECC48D;--1:#3C63B3\">init</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#ECC48D;--1:#3C63B3\">&#x3C;project_name></span><span style=\"--0:#D6DEEB;--1:#403F53\"> [optional </span><span style=\"--0:#ECC48D;--1:#3C63B3\">path]</span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"c3c init <project_name> [optional path]\"><div></div></button></div></figure></div>\n<p>Create a new project structure in the current directory.</p>\n<p>Use the <code dir=\"auto\">--template</code> to select a template. The following are built in:</p>\n<ul>\n<li><code dir=\"auto\">exe</code> - the default template, produces an executable.</li>\n<li><code dir=\"auto\">static-lib</code> - template for producing a static library.</li>\n<li><code dir=\"auto\">dynamic-lib</code> - template for producing a dynamic library.</li>\n</ul>\n<p>It is also possible to give the path to a custom template.</p>\n<p>Additional parameters:</p>\n<ul>\n<li><code dir=\"auto\">--template &#x3C;path></code> indicate an alternative template to use.</li>\n</ul>\n<p>For example <code dir=\"auto\">c3c init hello_world</code> creates the following structure:</p>\n"
    }), createVNode($$FileTree, {
      "set:html": "<ul>\n<li>build/</li>\n<li>docs/</li>\n<li>lib/</li>\n<li>resources/</li>\n<li>scripts/</li>\n<li>src/\n<ul>\n<li>main.c3</li>\n</ul>\n</li>\n<li>test/</li>\n<li>LICENSE</li>\n<li>project.json</li>\n<li>README.md</li>\n</ul>"
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<p>Check the <a href=\"/build-your-project/project-config/\">project configuration docs</a> to learn more about configuring your project.</p>\n<h2 id=\"test\">Test</h2>\n<div class=\"expressive-code\"><figure class=\"frame is-terminal not-content\"><figcaption class=\"header\"><span class=\"title\"></span><span class=\"sr-only\">Terminal window</span></figcaption><pre data-language=\"bash\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#82AAFF;--1:#3C63B3\">c3c</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#ECC48D;--1:#3C63B3\">test</span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"c3c test\"><div></div></button></div></figure></div>\n<p>Will run any tests in the project in the <code dir=\"auto\">\"sources\"</code> directory defined in your <code dir=\"auto\">project.json</code> for example:</p>\n<div class=\"expressive-code\"><figure class=\"frame not-content\"><figcaption class=\"header\"></figcaption><pre data-language=\"json5\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#D6DEEB;--1:#403F53\">...</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#9B504E\">sources</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#D6DEEB;--1:#403F53\">: [ </span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#9B504E\">src/**</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#D6DEEB;--1:#403F53\"> ],</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#D6DEEB;--1:#403F53\">...</span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"...&#x22;sources&#x22;: [ &#x22;src/**&#x22; ],...\"><div></div></button></div></figure></div>\n<p>Tests are defined with a <code dir=\"auto\">@test</code> attribute, for example:</p>\n<div class=\"expressive-code\"><figure class=\"frame not-content\"><figcaption class=\"header\"></figcaption><pre data-language=\"c3\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#D6DEEB;--1:#403F53\">fn </span><span style=\"--0:#C792EA;--1:#8D46B4\">void!</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#82AAFF;--1:#3C63B3\">test_fn</span><span style=\"--0:#D6DEEB;--1:#403F53\">() @test</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#D6DEEB;--1:#403F53\">{</span></div></div><div class=\"ec-line\"><div class=\"code\"><span class=\"indent\">    </span><span style=\"--0:#82AAFF;--1:#3C63B3\">assert</span><span style=\"--0:#D6DEEB;--1:#403F53\">(</span><span style=\"--0:#82AAFF;--1:#3C63B3\">true</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#C792EA;--1:#8D46B4\">==</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#82AAFF;--1:#3C63B3\">true</span><span style=\"--0:#D6DEEB;--1:#403F53\">, </span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#ECC48D;--1:#9B504E\">true is definitely true</span><span style=\"--0:#D9F5DD;--1:#111111\">\"</span><span style=\"--0:#D6DEEB;--1:#403F53\">);</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#D6DEEB;--1:#403F53\">}</span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"fn void! test_fn() @test{    assert(true == true, &#x22;true is definitely true&#x22;);}\"><div></div></button></div></figure></div>\n<h2 id=\"build\">Build</h2>\n<div class=\"expressive-code\"><figure class=\"frame is-terminal not-content\"><figcaption class=\"header\"><span class=\"title\"></span><span class=\"sr-only\">Terminal window</span></figcaption><pre data-language=\"bash\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#82AAFF;--1:#3C63B3\">c3c</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#ECC48D;--1:#3C63B3\">build</span><span style=\"--0:#D6DEEB;--1:#403F53\"> [target]</span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"c3c build [target]\"><div></div></button></div></figure></div>\n<p>Build the project in the current path. It doesn’t matter where in the project structure you are.</p>\n<p>The built-in templates define two targets: <code dir=\"auto\">debug</code> (which is the default) and <code dir=\"auto\">release</code>.</p>\n<h2 id=\"clean\">Clean</h2>\n<div class=\"expressive-code\"><figure class=\"frame is-terminal not-content\"><figcaption class=\"header\"><span class=\"title\"></span><span class=\"sr-only\">Terminal window</span></figcaption><pre data-language=\"bash\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#82AAFF;--1:#3C63B3\">c3c</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#ECC48D;--1:#3C63B3\">clean</span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"c3c clean\"><div></div></button></div></figure></div>\n<h2 id=\"build-and-run\">Build and Run</h2>\n<div class=\"expressive-code\"><figure class=\"frame is-terminal not-content\"><figcaption class=\"header\"><span class=\"title\"></span><span class=\"sr-only\">Terminal window</span></figcaption><pre data-language=\"bash\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#82AAFF;--1:#3C63B3\">c3c</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#ECC48D;--1:#3C63B3\">run</span><span style=\"--0:#D6DEEB;--1:#403F53\"> [target]</span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"c3c run [target]\"><div></div></button></div></figure></div>\n<p>Build the target (if needed) and run the executable.</p>\n<h2 id=\"clean-and-run\">Clean and Run</h2>\n<div class=\"expressive-code\"><figure class=\"frame is-terminal not-content\"><figcaption class=\"header\"><span class=\"title\"></span><span class=\"sr-only\">Terminal window</span></figcaption><pre data-language=\"bash\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#82AAFF;--1:#3C63B3\">c3c</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#ECC48D;--1:#3C63B3\">clean-run</span><span style=\"--0:#D6DEEB;--1:#403F53\"> [target]</span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"c3c clean-run [target]\"><div></div></button></div></figure></div>\n<p>Clean, build and run the target.</p>\n<h2 id=\"dist\">Dist</h2>\n<div class=\"expressive-code\"><figure class=\"frame is-terminal not-content\"><figcaption class=\"header\"><span class=\"title\"></span><span class=\"sr-only\">Terminal window</span></figcaption><pre data-language=\"bash\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#82AAFF;--1:#3C63B3\">c3c</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#ECC48D;--1:#3C63B3\">dist</span><span style=\"--0:#D6DEEB;--1:#403F53\"> [target]</span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"c3c dist [target]\"><div></div></button></div></figure></div>\n<p><em>Not properly added yet</em></p>\n<p>Clean, build and package the target for distribution.\nWill also run the target if it is a executable.</p>\n<h2 id=\"docs\">Docs</h2>\n<div class=\"expressive-code\"><figure class=\"frame is-terminal not-content\"><figcaption class=\"header\"><span class=\"title\"></span><span class=\"sr-only\">Terminal window</span></figcaption><pre data-language=\"bash\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#82AAFF;--1:#3C63B3\">c3c</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#ECC48D;--1:#3C63B3\">docs</span><span style=\"--0:#D6DEEB;--1:#403F53\"> [target]</span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"c3c docs [target]\"><div></div></button></div></figure></div>\n<p><em>Not added yet</em></p>\n<p>Rebuilds the documentation.</p>\n<h2 id=\"bench\">Bench</h2>\n<div class=\"expressive-code\"><figure class=\"frame is-terminal not-content\"><figcaption class=\"header\"><span class=\"title\"></span><span class=\"sr-only\">Terminal window</span></figcaption><pre data-language=\"bash\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#82AAFF;--1:#3C63B3\">c3c</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#ECC48D;--1:#3C63B3\">bench</span><span style=\"--0:#D6DEEB;--1:#403F53\"> [target]</span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"c3c bench [target]\"><div></div></button></div></figure></div>\n<p>Runs benchmarks on a target.</p>"
    })]
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

const url = "src/content/docs/Build%20Your%20Project/build-commands.mdx";
const file = "/home/josh/git/c3_tests/experimental-site-testing-only__local_changes/src/content/docs/Build Your Project/build-commands.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/josh/git/c3_tests/experimental-site-testing-only__local_changes/src/content/docs/Build Your Project/build-commands.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
