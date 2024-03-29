import { c as create_ssr_component, a as subscribe, e as escape } from "./ssr.js";
import { c as cart } from "./store.js";
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
  return `<div class="navbar bg-base-100"><div class="flex-1" data-svelte-h="svelte-51t3w6"><a href="/home" class="btn btn-ghost text-xl">🎨 UniQuely</a></div> <div class="flex-none"><div class="dropdown dropdown-end"><div tabindex="0" role="button" class="btn btn-ghost btn-circle"><div class="indicator"><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg> <span class="badge badge-sm indicator-item">${escape(itemsNum)}</span></div></div> <div tabindex="0" class="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow"><div class="card-body"><span class="font-bold text-lg">${escape(itemsNum)} Items</span> <span style="color: black" class="text-info">Subtotal: $${escape(totalPrice.toFixed(2))}</span> <div class="card-actions" data-svelte-h="svelte-1lb5lwv"><button style="background-color: #48639C; color: white" class="btn btn-block" onclick="window.location.href='/cart'">View cart</button></div></div></div></div> <div class="dropdown dropdown-end" data-svelte-h="svelte-1tcjddi"><div tabindex="0" role="button" class="btn btn-ghost btn-circle avatar"><div class="w-10 rounded-full"><img alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"></div></div> <ul tabindex="0" class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"><li><a class="justify-between">Profile
              <span class="badge">New</span></a></li> <li><a>Settings</a></li> <li><a>Logout</a></li></ul></div></div></div>`;
});
export {
  Header as H
};
