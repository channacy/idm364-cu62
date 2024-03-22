<script>
    import ProductCard from "$lib/ProductCard.svelte"
    export let data;
</script>
<div class="product-section products">
  {#each data.items as item}
    <ProductCard ID={item.id} name={item.name} sellerName={item.postedBy} condition={item.condition} categoryOne={item.categoryOne} categoryTwo={item.categoryTwo} price={item.price} imageUrl={item.imageUrl}/>
  {/each}
</div>
<style>

.product-section{
    display: flex;
    align-items: center;
    gap: 10px;
    margin: 20px;
    flex-wrap: wrap;
    justify-content: center;
}


</style>
