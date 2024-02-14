<!-- src/routes/[slug]/+page.svelte -->
<script lang="ts">
    /**
     * @typedef {Object} Product
     * @property {string} ID 
     * @property {string} name 
     * @property {string} imageUrl
     * @property {string} sellerName
     * @property {string} condition
     * @property {string} categoryOne
     * @property {string} categoryTwo
     * @property {number} price
     * 
     */
  
    /**
     * @typedef {Object} Data
     * @property {Product} product - The team data.
     */
  
    /** @type {Data} */
    export let data;
  
    const { name, imageUrl, sellerName, condition, categoryOne, categoryTwo, price } = data.product;
  </script>


  <article class="prose">
    <h1>{name}</h1>
    <h2>posted by {sellerName}</h2>
    <h2>Condition: {condition}</h2>
    <p>
      Desciption of product: {categoryOne}
    </p>
    <p>
      More: {categoryTwo}
    </p>
    <p>
       Price: {price}
      </p>
  </article>