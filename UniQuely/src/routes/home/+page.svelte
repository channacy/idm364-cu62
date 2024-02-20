<script>
    import ProductCard from "$lib/ProductCard.svelte"
    export let data;
</script>

<div class="product-section products">
    {#each data.products as product, slug}
   <ProductCard ID={product.ID} name={product.name} sellerName={product.sellerName} condition={product.condition} categoryOne={product.categoryOne} categoryTwo={product.categoryTwo} price={product.price} imageUrl={product.imageUrl}/>
  {/each}
</div>
<div class="join">
    <input class="join-item btn btn-square" type="radio" name="options" aria-label="1" checked />
    <input class="join-item btn btn-square" type="radio" name="options" aria-label="2" />
    <input class="join-item btn btn-square" type="radio" name="options" aria-label="3" />
    <input class="join-item btn btn-square" type="radio" name="options" aria-label="4" />
  </div>

<style>

.product-section{
    display: flex;
    align-items: center;
    gap: 10px;
    margin: 20px;
}

.join{
   display: flex;
   justify-content: center;
   align-items: center;
}

</style>
