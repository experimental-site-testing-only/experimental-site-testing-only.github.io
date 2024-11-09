import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_DFSFkPP8.mjs';
import 'kleur/colors';
import 'clsx';


				const frontmatter = {"title":"Standard Library Reference","description":"Standard Library Reference","sidebar":{"order":141}};
				const file = "/home/josh/git/c3_tests/experimental-site-testing-only__local_changes/src/content/docs/Standard Library/stdlib_refcard.md";
				const url = undefined;
				function rawContent() {
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };