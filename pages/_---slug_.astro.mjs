import { e as createAstro, c as createComponent, r as renderTemplate, a as renderComponent } from '../chunks/astro/server_afRpe8AA.mjs';
import 'kleur/colors';
import { $ as $$Common, p as paths } from '../chunks/common_BPAD89ek.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://c3-lang.org");
const prerender = true;
async function getStaticPaths() {
  return paths;
}
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "CommonPage", $$Common, { "route": Astro2.props })}`;
}, "/home/josh/git/c3_tests/experimental-site-testing-only__local_changes/node_modules/@astrojs/starlight/routes/static/index.astro", void 0);

const $$file = "/home/josh/git/c3_tests/experimental-site-testing-only__local_changes/node_modules/@astrojs/starlight/routes/static/index.astro";
const $$url = undefined;

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	getStaticPaths,
	prerender,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
