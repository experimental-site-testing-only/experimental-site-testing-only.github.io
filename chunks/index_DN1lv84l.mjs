import { F as Fragment, _ as __astro_tag_component__, l as createVNode } from './astro/server_DFSFkPP8.mjs';
import '@astrojs/internal-helpers/path';
import { $ as $$Image } from './_astro_assets_Chkh7uj9.mjs';
import 'clsx';

const frontmatter = {
  "title": "Thank You",
  "description": "Thank You",
  "sidebar": {
    "order": 1000
  }
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "thank-you",
    "text": "Thank You"
  }, {
    "depth": 2,
    "slug": "special-mentions",
    "text": "Special Mentions"
  }];
}
const __usesAstroImage = true;
function _createMdxContent(props) {
  const {Fragment} = props.components || ({});
  if (!Fragment) _missingMdxReference("Fragment");
  return createVNode(Fragment, {
    "set:html": "<h2 id=\"thank-you\">Thank You</h2>\n<ul>\n<li>A huge “thank you” goes out to all contributors and sponsors.</li>\n<li>A special mention to <a href=\"https://huly.io\">Huly® Platform™</a> for sponsoring $100/month.</li>\n</ul>\n<h2 id=\"special-mentions\">Special Mentions</h2>\n<ul>\n<li>Bas van der Berg the Author of <a href=\"http://www.c2lang.org\">C2</a></li>\n<li>Jon Goodwin the Author of <a href=\"http://cone.jondgoodwin.com\">Cone</a></li>\n<li>Andrey Penechko the Author of <a href=\"https://github.com/MrSmith33/vox\">Vox</a>.</li>\n</ul>"
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
const url = "src/content/docs/Thank%20You/index.mdx";
const file = "/home/josh/git/c3_tests/experimental-site-testing-only__local_changes/src/content/docs/Thank You/index.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/home/josh/git/c3_tests/experimental-site-testing-only__local_changes/src/content/docs/Thank You/index.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
