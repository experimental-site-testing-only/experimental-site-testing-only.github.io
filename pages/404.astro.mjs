import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML, a as renderComponent } from '../chunks/astro/server_afRpe8AA.mjs';
import 'kleur/colors';
import { s as starlightConfig, u as useTranslations, g as getEntry, B as BuiltInDefaultLocale } from '../chunks/translations_BGgu4mWs.mjs';
import 'clsx';
import { $ as $$Common } from '../chunks/common_fmIdOkkC.mjs';
export { renderers } from '../renderers.mjs';

const html = "";

				const frontmatter = {};
				const file = "/home/josh/git/c3_tests/experimental-site-testing-only__local_changes/node_modules/@astrojs/starlight/components/EmptyMarkdown.md";
				const url = undefined;

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

const prerender = true;
const $$404 = createComponent(async ($$result, $$props, $$slots) => {
  const { lang = BuiltInDefaultLocale.lang, dir = BuiltInDefaultLocale.dir } = starlightConfig.defaultLocale || {};
  let locale = starlightConfig.defaultLocale?.locale;
  if (locale === "root") locale = void 0;
  const entryMeta = { dir, lang, locale };
  const t = useTranslations(locale);
  const fallbackEntry = {
    slug: "404",
    id: "404.md",
    body: "",
    collection: "docs",
    data: {
      title: "404",
      template: "splash",
      editUrl: false,
      head: [],
      hero: { tagline: t("404.text"), actions: [] },
      pagefind: false,
      sidebar: { hidden: false, attrs: {} },
      draft: false
    },
    render: async () => ({
      Content: Content,
      headings: [],
      remarkPluginFrontmatter: {}
    })
  };
  const userEntry = await getEntry("docs", "404");
  const entry = userEntry || fallbackEntry;
  const route = { ...entryMeta, entryMeta, entry, id: entry.id, slug: entry.slug };
  return renderTemplate`${renderComponent($$result, "CommonPage", $$Common, { "route": route })}`;
}, "/home/josh/git/c3_tests/experimental-site-testing-only__local_changes/node_modules/@astrojs/starlight/routes/static/404.astro", void 0);

const $$file = "/home/josh/git/c3_tests/experimental-site-testing-only__local_changes/node_modules/@astrojs/starlight/routes/static/404.astro";
const $$url = undefined;

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$404,
	file: $$file,
	prerender,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
