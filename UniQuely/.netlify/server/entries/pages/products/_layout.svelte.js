import { c as create_ssr_component, v as validate_component } from "../../../chunks/ssr.js";
/* empty css                                                   */
import { H as Header } from "../../../chunks/Header.js";
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<html data-theme="cupcake" lang="sass">${validate_component(Header, "Header").$$render($$result, {}, {}, {})} <main>${slots.default ? slots.default({}) : ``}</main> <style lang="postcss" data-svelte-h="svelte-ruchgx">:global(html) {
          background-color: #dcfce7;
        }</style></html>`;
});
export {
  Layout as default
};
