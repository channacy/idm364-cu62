import { c as create_ssr_component, a as subscribe, d as add_attribute, e as escape, b as each, v as validate_component } from "../../../chunks/ssr.js";
import "../../../chunks/client.js";
import { c as cart } from "../../../chunks/store.js";
const css$1 = {
  code: ".card.svelte-1280eun{width:300px;height:400px}.badge-condition.svelte-1280eun{background-color:#F7B801}.buy-now-btn.svelte-1280eun{background-color:#48639C;color:white}.card-title.svelte-1280eun:hover{color:#48639C}",
  map: null
};
const ProductCard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_cart;
  $$unsubscribe_cart = subscribe(cart, (value) => value);
  let { ID } = $$props;
  let { name } = $$props;
  let { sellerName } = $$props;
  let { condition } = $$props;
  let { categoryOne } = $$props;
  let { categoryTwo } = $$props;
  let { price } = $$props;
  let { imageUrl } = $$props;
  if ($$props.ID === void 0 && $$bindings.ID && ID !== void 0)
    $$bindings.ID(ID);
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  if ($$props.sellerName === void 0 && $$bindings.sellerName && sellerName !== void 0)
    $$bindings.sellerName(sellerName);
  if ($$props.condition === void 0 && $$bindings.condition && condition !== void 0)
    $$bindings.condition(condition);
  if ($$props.categoryOne === void 0 && $$bindings.categoryOne && categoryOne !== void 0)
    $$bindings.categoryOne(categoryOne);
  if ($$props.categoryTwo === void 0 && $$bindings.categoryTwo && categoryTwo !== void 0)
    $$bindings.categoryTwo(categoryTwo);
  if ($$props.price === void 0 && $$bindings.price && price !== void 0)
    $$bindings.price(price);
  if ($$props.imageUrl === void 0 && $$bindings.imageUrl && imageUrl !== void 0)
    $$bindings.imageUrl(imageUrl);
  $$result.css.add(css$1);
  $$unsubscribe_cart();
  return `<div class="card w-96 bg-base-100 shadow-xl svelte-1280eun"><figure><img${add_attribute("src", imageUrl, 0)} alt="Product"></figure> <div class="card-body"><h2 class="card-title svelte-1280eun"><a href="${"/products/" + escape(ID, true)}">${escape(name)}</a> <div class="badge badge-condition svelte-1280eun">${escape(condition)}</div></h2> <p>posted by ${escape(sellerName)}</p> <div class="card-actions justify-start"><div class="badge badge-outline">${escape(categoryOne)}</div> <div class="badge badge-outline">${escape(categoryTwo)}</div></div> <div class="card-actions justify-start"><p>$ ${escape(price)}</p></div> <div class="card-actions justify-end"><button class="btn btn-primary buy-now-btn svelte-1280eun" data-svelte-h="svelte-1c6j6ef">Add to Cart</button></div></div> </div>`;
});
const css = {
  code: ".product-section.svelte-1fy4ylr{display:flex;align-items:center;gap:10px;margin:20px}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return ` <div class="product-section products svelte-1fy4ylr">${each(data.items, (item) => {
    return `${validate_component(ProductCard, "ProductCard").$$render(
      $$result,
      {
        ID: item.id,
        name: item.name,
        sellerName: item.postedBy,
        condition: item.condition,
        categoryOne: item.categoryOne,
        categoryTwo: item.categoryTwo,
        price: item.price,
        imageUrl: item.imageUrl
      },
      {},
      {}
    )}`;
  })}</div> `;
});
export {
  Page as default
};
