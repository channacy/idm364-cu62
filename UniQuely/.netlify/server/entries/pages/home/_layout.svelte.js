import { c as create_ssr_component, v as validate_component } from "../../../chunks/ssr.js";
import { H as Header } from "../../../chunks/Header.js";
/* empty css                                                   */
/* empty css                                                   */
const css = {
  code: ".nav-tab.svelte-1k3r0qo.svelte-1k3r0qo{overflow:hidden;align-items:center;text-align:center;padding:2rem 1rem}.nav-tab.svelte-1k3r0qo a.svelte-1k3r0qo{text-align:center;font-size:16px}.nav-tab.svelte-1k3r0qo a.svelte-1k3r0qo:hover{font-weight:500;text-decoration:underline}",
  map: null
};
const TabBar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div role="tablist" class="nav-tab svelte-1k3r0qo" data-svelte-h="svelte-1sb1h7r"><a role="tab" class="tab svelte-1k3r0qo">All</a> <a role="tab" class="tab svelte-1k3r0qo">Clothes</a> <a role="tab" class="tab tab-active svelte-1k3r0qo">Furniture</a> <a role="tab" class="tab svelte-1k3r0qo">Pantry</a> <a role="tab" class="tab svelte-1k3r0qo">Art</a> <a role="tab" class="tab svelte-1k3r0qo">Supplies</a> <a role="tab" class="tab svelte-1k3r0qo">Books</a> <a role="tab" class="tab svelte-1k3r0qo">Other</a> </div>`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<html data-theme="cupcake" lang="sass">${validate_component(Header, "Header").$$render($$result, {}, {}, {})} ${validate_component(TabBar, "TabBar").$$render($$result, {}, {}, {})} <main>${slots.default ? slots.default({}) : ``}</main> <style lang="postcss" data-svelte-h="svelte-ruchgx">:global(html) {
          background-color: #dcfce7;
        }</style></html>`;
});
export {
  Layout as default
};
