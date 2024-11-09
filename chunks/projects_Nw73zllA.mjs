import { F as Fragment, _ as __astro_tag_component__, l as createVNode } from './astro/server_DFSFkPP8.mjs';
import '@astrojs/internal-helpers/path';
import { $ as $$Image } from './_astro_assets_Chkh7uj9.mjs';
import { o as $$FileTree } from './Code_BVp9VohH.mjs';
import 'clsx';

const frontmatter = {
  "title": "Projects",
  "description": "Learn to create C3 projects",
  "sidebar": {
    "order": 31
  }
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "projects-in-c3",
    "text": "Projects in C3"
  }, {
    "depth": 3,
    "slug": "-creating-a-new-project",
    "text": "💡 Creating a new project"
  }, {
    "depth": 3,
    "slug": "-project-structure",
    "text": "📁 Project structure"
  }, {
    "depth": 4,
    "slug": "directory-overview",
    "text": "Directory Overview"
  }, {
    "depth": 3,
    "slug": "-building-the-project",
    "text": "🔧 Building the project"
  }, {
    "depth": 4,
    "slug": "-build--run",
    "text": "🏃 Build & run"
  }, {
    "depth": 4,
    "slug": "-build",
    "text": "🔧 Build"
  }];
}
const __usesAstroImage = true;
function _createMdxContent(props) {
  const {Fragment: Fragment$1} = props.components || ({});
  if (!Fragment$1) _missingMdxReference("Fragment");
  return createVNode(Fragment, {
    children: [createVNode(Fragment$1, {
      "set:html": "<aside aria-label=\"Not installed the C3 compiler yet?\" class=\"starlight-aside starlight-aside--note\"><p class=\"starlight-aside__title\" aria-hidden=\"true\"><svg viewBox=\"0 0 24 24\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"starlight-aside__icon\"><path d=\"M12 11C11.7348 11 11.4804 11.1054 11.2929 11.2929C11.1054 11.4804 11 11.7348 11 12V16C11 16.2652 11.1054 16.5196 11.2929 16.7071C11.4804 16.8946 11.7348 17 12 17C12.2652 17 12.5196 16.8946 12.7071 16.7071C12.8946 16.5196 13 16.2652 13 16V12C13 11.7348 12.8946 11.4804 12.7071 11.2929C12.5196 11.1054 12.2652 11 12 11ZM12.38 7.08C12.1365 6.97998 11.8635 6.97998 11.62 7.08C11.4973 7.12759 11.3851 7.19896 11.29 7.29C11.2017 7.3872 11.1306 7.49882 11.08 7.62C11.024 7.73868 10.9966 7.86882 11 8C10.9992 8.13161 11.0245 8.26207 11.0742 8.38391C11.124 8.50574 11.1973 8.61656 11.29 8.71C11.3872 8.79833 11.4988 8.86936 11.62 8.92C11.7715 8.98224 11.936 9.00632 12.099 8.99011C12.2619 8.97391 12.4184 8.91792 12.5547 8.82707C12.691 8.73622 12.8029 8.61328 12.8805 8.46907C12.9582 8.32486 12.9992 8.16378 13 8C12.9963 7.73523 12.8927 7.48163 12.71 7.29C12.6149 7.19896 12.5028 7.12759 12.38 7.08ZM12 2C10.0222 2 8.08879 2.58649 6.4443 3.6853C4.79981 4.78412 3.51809 6.3459 2.76121 8.17317C2.00433 10.0004 1.8063 12.0111 2.19215 13.9509C2.578 15.8907 3.53041 17.6725 4.92894 19.0711C6.32746 20.4696 8.10929 21.422 10.0491 21.8079C11.9889 22.1937 13.9996 21.9957 15.8268 21.2388C17.6541 20.4819 19.2159 19.2002 20.3147 17.5557C21.4135 15.9112 22 13.9778 22 12C22 10.6868 21.7413 9.38642 21.2388 8.17317C20.7363 6.95991 19.9997 5.85752 19.0711 4.92893C18.1425 4.00035 17.0401 3.26375 15.8268 2.7612C14.6136 2.25866 13.3132 2 12 2ZM12 20C10.4178 20 8.87104 19.5308 7.55544 18.6518C6.23985 17.7727 5.21447 16.5233 4.60897 15.0615C4.00347 13.5997 3.84504 11.9911 4.15372 10.4393C4.4624 8.88743 5.22433 7.46197 6.34315 6.34315C7.46197 5.22433 8.88743 4.4624 10.4393 4.15372C11.9911 3.84504 13.5997 4.00346 15.0615 4.60896C16.5233 5.21447 17.7727 6.23984 18.6518 7.55544C19.5308 8.87103 20 10.4177 20 12C20 14.1217 19.1572 16.1566 17.6569 17.6569C16.1566 19.1571 14.1217 20 12 20Z\"></path></svg>Not installed the C3 compiler yet?</p><section class=\"starlight-aside__content\"><p><a href=\"/getting-started/prebuilt-binaries/\">Download C3</a>, available on Mac, Windows and Linux.</p></section></aside>\n<h2 id=\"projects-in-c3\">Projects in C3</h2>\n<p>Projects are <em>optional</em>, but are a good way to manage compiling code when there\nare a lot of files and modules.\nThey also allow you to specify libraries to link, and define how your project should be built for specific targets.</p>\n<h3 id=\"-creating-a-new-project\">💡 Creating a new project</h3>\n<p>The <code dir=\"auto\">c3c init</code> command will create a new directory containing your project structure.\nIt requires a name of the project, we will use <code dir=\"auto\">myc3project</code> in its place.</p>\n<div class=\"expressive-code\"><link rel=\"stylesheet\" href=\"/_astro/ec.j8ofn.css\"><script type=\"module\" src=\"/_astro/ec.8zarh.js\"></script><figure class=\"frame is-terminal not-content\"><figcaption class=\"header\"><span class=\"title\"></span><span class=\"sr-only\">Terminal window</span></figcaption><pre data-language=\"bash\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#82AAFF;--1:#3C63B3\">c3c</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#ECC48D;--1:#3C63B3\">init</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#ECC48D;--1:#3C63B3\">myc3project</span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"c3c init myc3project\"><div></div></button></div></figure></div>\n<p>You can also customize the path where the project will be created or specify a <em>template</em>. For more information check the <a href=\"/build-your-project/build-commands/#init-a-new-project\">init command reference</a>.</p>\n<h3 id=\"-project-structure\">📁 Project structure</h3>\n<p>If you check the directory that was created you might find it a bit confusing with a bunch of different directories, but worry not because if you expand them you will realise that most of them are actually empty!</p>\n"
    }), createVNode($$FileTree, {
      "set:html": "<ul>\n<li>build/</li>\n<li>docs/</li>\n<li>lib/</li>\n<li>resources/</li>\n<li>scripts/</li>\n<li>src/\n<ul>\n<li>main.c3</li>\n</ul>\n</li>\n<li>test/</li>\n<li>LICENSE</li>\n<li>project.json</li>\n<li>README.md</li>\n</ul>"
    }), "\n", createVNode(Fragment$1, {
      "set:html": "<h4 id=\"directory-overview\">Directory Overview</h4>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n<table><thead><tr><th>Directory</th><th>Usage</th></tr></thead><tbody><tr><td><code dir=\"auto\">./build</code></td><td>Where your temporary files and build results will go.</td></tr><tr><td><code dir=\"auto\">./docs</code></td><td>Code Documentation</td></tr><tr><td><code dir=\"auto\">./lib</code></td><td>C3 libraries (with the .c3l suffix)</td></tr><tr><td><code dir=\"auto\">./resources</code></td><td>Non-code resources like images, sound effects etc.</td></tr><tr><td><code dir=\"auto\">./scripts</code></td><td>Scripts, including .c3 scripts that generate code at compile time.</td></tr><tr><td><code dir=\"auto\">./src</code></td><td>Storing our code, by default contains <code dir=\"auto\">main.c3</code> with “Hello World”.</td></tr><tr><td><code dir=\"auto\">project.json</code></td><td>Record project information, similar to <code dir=\"auto\">package.json</code> in NodeJS.</td></tr><tr><td><code dir=\"auto\">LICENSE</code></td><td>Project license.</td></tr><tr><td><code dir=\"auto\">README.md</code></td><td>Help others understand and use your code.</td></tr></tbody></table>\n<h3 id=\"-building-the-project\">🔧 Building the project</h3>\n<p>Assuming you have successfully initialized a project as seen above, we can now look at how to compile it.</p>\n<h4 id=\"-build--run\">🏃 Build &#x26; run</h4>\n<p>C3 has a simple command to build &#x26; run our project.</p>\n<div class=\"expressive-code\"><figure class=\"frame is-terminal not-content\"><figcaption class=\"header\"><span class=\"title\"></span><span class=\"sr-only\">Terminal window</span></figcaption><pre data-language=\"bash\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#82AAFF;--1:#3C63B3\">c3c</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#ECC48D;--1:#3C63B3\">run</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#7FDBCA;--1:#097174\">></span><span style=\"--0:#D6DEEB;--1:#403F53\"> Program linked to executable </span><span style=\"--0:#D9F5DD;--1:#111111\">'</span><span style=\"--0:#ECC48D;--1:#9B504E\">build/myc3project</span><span style=\"--0:#D9F5DD;--1:#111111\">'</span><span style=\"--0:#D6DEEB;--1:#403F53\">.</span></div></div><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#7FDBCA;--1:#097174\">></span><span style=\"--0:#D6DEEB;--1:#403F53\"> Launching ./build/myc3project...</span></div></div><div class=\"ec-line highlight mark\"><div class=\"code\"><span style=\"--0:#7FDBCA;--1:#086164\">></span><span style=\"--0:#D6DEEB;--1:#403F53\"> Hello, World</span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"c3c run> Program linked to executable &#x27;build/myc3project&#x27;.> Launching ./build/myc3project...> Hello, World\"><div></div></button></div></figure></div>\n<p>You can also specify the target to build &#x26; run.</p>\n<div class=\"expressive-code\"><figure class=\"frame is-terminal not-content\"><figcaption class=\"header\"><span class=\"title\"></span><span class=\"sr-only\">Terminal window</span></figcaption><pre data-language=\"bash\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#82AAFF;--1:#3C63B3\">c3c</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#ECC48D;--1:#3C63B3\">run</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#ECC48D;--1:#3C63B3\">myc3project</span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"c3c run myc3project\"><div></div></button></div></figure></div>\n<h4 id=\"-build\">🔧 Build</h4>\n<p>If you only want to build the project, you can use the <code dir=\"auto\">build</code> command:</p>\n<div class=\"expressive-code\"><figure class=\"frame is-terminal not-content\"><figcaption class=\"header\"><span class=\"title\"></span><span class=\"sr-only\">Terminal window</span></figcaption><pre data-language=\"bash\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#82AAFF;--1:#3C63B3\">c3c</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#ECC48D;--1:#3C63B3\">build</span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"c3c build\"><div></div></button></div></figure></div>\n<p>This command builds the project targets defined in our <code dir=\"auto\">project.json</code> file.</p>\n<aside aria-label=\"Note\" class=\"starlight-aside starlight-aside--note\"><p class=\"starlight-aside__title\" aria-hidden=\"true\"><svg viewBox=\"0 0 24 24\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"starlight-aside__icon\"><path d=\"M12 11C11.7348 11 11.4804 11.1054 11.2929 11.2929C11.1054 11.4804 11 11.7348 11 12V16C11 16.2652 11.1054 16.5196 11.2929 16.7071C11.4804 16.8946 11.7348 17 12 17C12.2652 17 12.5196 16.8946 12.7071 16.7071C12.8946 16.5196 13 16.2652 13 16V12C13 11.7348 12.8946 11.4804 12.7071 11.2929C12.5196 11.1054 12.2652 11 12 11ZM12.38 7.08C12.1365 6.97998 11.8635 6.97998 11.62 7.08C11.4973 7.12759 11.3851 7.19896 11.29 7.29C11.2017 7.3872 11.1306 7.49882 11.08 7.62C11.024 7.73868 10.9966 7.86882 11 8C10.9992 8.13161 11.0245 8.26207 11.0742 8.38391C11.124 8.50574 11.1973 8.61656 11.29 8.71C11.3872 8.79833 11.4988 8.86936 11.62 8.92C11.7715 8.98224 11.936 9.00632 12.099 8.99011C12.2619 8.97391 12.4184 8.91792 12.5547 8.82707C12.691 8.73622 12.8029 8.61328 12.8805 8.46907C12.9582 8.32486 12.9992 8.16378 13 8C12.9963 7.73523 12.8927 7.48163 12.71 7.29C12.6149 7.19896 12.5028 7.12759 12.38 7.08ZM12 2C10.0222 2 8.08879 2.58649 6.4443 3.6853C4.79981 4.78412 3.51809 6.3459 2.76121 8.17317C2.00433 10.0004 1.8063 12.0111 2.19215 13.9509C2.578 15.8907 3.53041 17.6725 4.92894 19.0711C6.32746 20.4696 8.10929 21.422 10.0491 21.8079C11.9889 22.1937 13.9996 21.9957 15.8268 21.2388C17.6541 20.4819 19.2159 19.2002 20.3147 17.5557C21.4135 15.9112 22 13.9778 22 12C22 10.6868 21.7413 9.38642 21.2388 8.17317C20.7363 6.95991 19.9997 5.85752 19.0711 4.92893C18.1425 4.00035 17.0401 3.26375 15.8268 2.7612C14.6136 2.25866 13.3132 2 12 2ZM12 20C10.4178 20 8.87104 19.5308 7.55544 18.6518C6.23985 17.7727 5.21447 16.5233 4.60897 15.0615C4.00347 13.5997 3.84504 11.9911 4.15372 10.4393C4.4624 8.88743 5.22433 7.46197 6.34315 6.34315C7.46197 5.22433 8.88743 4.4624 10.4393 4.15372C11.9911 3.84504 13.5997 4.00346 15.0615 4.60896C16.5233 5.21447 17.7727 6.23984 18.6518 7.55544C19.5308 8.87103 20 10.4177 20 12C20 14.1217 19.1572 16.1566 17.6569 17.6569C16.1566 19.1571 14.1217 20 12 20Z\"></path></svg>Note</p><section class=\"starlight-aside__content\"><p>If you want to build a specific target, you can do so by specifying its name.\nThe default target is created with the name of the project, such as <code dir=\"auto\">myc3project</code>.</p><div class=\"expressive-code\"><figure class=\"frame is-terminal not-content\"><figcaption class=\"header\"><span class=\"title\"></span><span class=\"sr-only\">Terminal window</span></figcaption><pre data-language=\"bash\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#82AAFF;--1:#3C63B3\">c3c</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#ECC48D;--1:#3C63B3\">build</span><span style=\"--0:#D6DEEB;--1:#403F53\"> </span><span style=\"--0:#ECC48D;--1:#3C63B3\">myc3project</span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"c3c build myc3project\"><div></div></button></div></figure></div></section></aside>\n<p>We will now have a binary in <code dir=\"auto\">build</code>, which we can run:</p>\n<div class=\"expressive-code\"><figure class=\"frame is-terminal not-content\"><figcaption class=\"header\"><span class=\"title\"></span><span class=\"sr-only\">Terminal window</span></figcaption><pre data-language=\"bash\"><code><div class=\"ec-line\"><div class=\"code\"><span style=\"--0:#82AAFF;--1:#3C63B3\">./build/myc3project</span></div></div></code></pre><div class=\"copy\"><button title=\"Copy to clipboard\" data-copied=\"Copied!\" data-code=\"./build/myc3project\"><div></div></button></div></figure></div>\n<p>It should print <code dir=\"auto\">Hello, World!</code> and return back to the command line prompt.\nIf you are on Windows, you will have <code dir=\"auto\">myc3project.exe</code> instead. Call it in the same way.</p>\n<p>If you need more detail later on check <a href=\"/build-your-project/build-commands/\">C3 project build commands</a> and <a href=\"/build-your-project/project-config/\">C3 project configuration</a> to learn more.</p>"
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

const url = "src/content/docs/Getting%20Started/projects.mdx";
const file = "/home/josh/git/c3_tests/experimental-site-testing-only__local_changes/src/content/docs/Getting Started/projects.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/josh/git/c3_tests/experimental-site-testing-only__local_changes/src/content/docs/Getting Started/projects.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
