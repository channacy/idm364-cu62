import { c as create_ssr_component, d as add_attribute, e as escape } from "../../../../chunks/ssr.js";
const css = {
  code: "h1.svelte-v6mt2s{font-weight:bold;font-size:32px}h3.svelte-v6mt2s{font-size:24px}p.svelte-v6mt2s{color:gray}.container.svelte-v6mt2s{display:flex;margin:10px;background-color:white;align-items:center}.item-details-header.svelte-v6mt2s,.item-details-footer.svelte-v6mt2s{display:flex;justify-content:space-between;align-items:baseline}.image-container.svelte-v6mt2s{margin-right:20px;width:20%;background-color:white;padding:10px}.text-container.svelte-v6mt2s{background-color:white;padding:12px;width:80%}img.svelte-v6mt2s{width:250px;height:250px}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `<div class="container svelte-v6mt2s"><div class="image-container svelte-v6mt2s"><img${add_attribute("src", data.item[0].imageUrl, 0)} alt="product" class="svelte-v6mt2s"></div> <div class="text-container svelte-v6mt2s"><div class="item-details-header svelte-v6mt2s"><h1 class="svelte-v6mt2s">${escape(data.item[0].name)}</h1> <p class="svelte-v6mt2s">posted by ${escape(data.item[0].postedBy)}</p></div> <h2 data-svelte-h="svelte-hqk62g">Description</h2> <p class="svelte-v6mt2s">${escape(data.item[0].description)}</p> <h2 data-svelte-h="svelte-1odawjv">Quantity</h2> <p class="svelte-v6mt2s">${escape(data.item[0].quantity)}</p> <h2 data-svelte-h="svelte-1ojfp45">Condition</h2> <p class="svelte-v6mt2s">${escape(data.item[0].condition)}</p> <h2 data-svelte-h="svelte-1v5ei8e">Categories</h2> <p class="svelte-v6mt2s">${escape(data.item[0].categoryOne)}</p> <p class="svelte-v6mt2s">${escape(data.item[0].categoryTwo)}</p> <br> <hr> <br> <div class="item-details-footer svelte-v6mt2s"><h3 class="svelte-v6mt2s">$${escape(data.item[0].price)}</h3> <button class="btn btn-primary buy-now-btn" data-svelte-h="svelte-1a6s7b4"><a href="/cart">Add to Cart</a></button></div></div> </div>`;
});
export {
  Page as default
};
