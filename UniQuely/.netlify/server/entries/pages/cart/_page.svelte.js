import { c as create_ssr_component, a as subscribe, v as validate_component, b as each, e as escape } from "../../../chunks/ssr.js";
import { H as Header } from "../../../chunks/Header.js";
/* empty css                                                   */
/* empty css                                                   */
import { c as cart } from "../../../chunks/store.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $cart, $$unsubscribe_cart;
  $$unsubscribe_cart = subscribe(cart, (value) => $cart = value);
  let itemsNum = $cart.length;
  let totalPrice = calculateTotalPrice();
  function calculateTotalPrice() {
    let total = 0;
    $cart.forEach((item) => {
      total += item.price;
    });
    return total;
  }
  $$unsubscribe_cart();
  return `<html data-theme="cupcake" lang="sass" class="container">${validate_component(Header, "Header").$$render($$result, {}, {}, {})} <h1 id="cart-title" data-svelte-h="svelte-eknivv">Order Summary</h1> <main><div class="cart-table overflow-x-auto"><table class="table"> <thead data-svelte-h="svelte-2gjlp6"><tr><th>Name</th> <th>Product</th> <th>Price</th> <th></th></tr></thead> <tbody>${each($cart, (item) => {
    return `<tr><td><div class="flex items-center gap-3"><div><div class="font-bold">${escape(item.sellerName)}</div></div> </div></td> <td>${escape(item.name)} <br> <span class="badge badge-ghost badge-sm">${escape(item.categoryOne)}</span></td> <td>$${escape(item.price)}</td> <th><button class="btn btn-ghost btn-xs"><a href="${"/products/" + escape(item.ID, true)}">More Details</a></button></th> </tr>`;
  })}</tbody> <tfoot><tr><th></th> <th>${escape(itemsNum)} Items</th> <th>Total: $${escape(totalPrice.toFixed(2))}</th> <th data-svelte-h="svelte-18bod8b">Items are nonrefunable</th> <th></th></tr></tfoot></table></div> </main> <style lang="postcss" data-svelte-h="svelte-1aie1i1">:global(html) {
      background-color: #dcfce7;
  }

  .cart-table{
      display: flex;
      margin: 10px;
      padding: 4px;
  }

  #cart-title{
    font-size: 24px;
    margin-left: 20px;
  }</style></html>`;
});
export {
  Page as default
};
