
<script lang="ts">
    import { onNavigate } from "$app/navigation";
    import { cart } from '$lib/store';

    export let ID:string;
    export let name:string;
    export let sellerName:string;
    export let condition: string;
    export let categoryOne: string;
    export let categoryTwo: string;
    export let price:number;
    export let imageUrl: string;

    function handle_click(){
      cart.update(existingValue => ([...existingValue, {ID, name, sellerName, price, categoryOne}]));
      console.log($cart);
    }

</script>

<div class="card w-96 bg-base-100 shadow-xl">
   <figure><img src={imageUrl} alt="Product" /></figure>
    <div class="card-body">
        <h2 class="card-title">
        <a href="/products/{ID}">{name}</a>
        <div class="badge badge-condition">{condition}</div>
      </h2>
      <p>posted by {sellerName}</p>
      <div class="card-actions justify-start">
        <div class="badge badge-outline">{categoryOne}</div> 
        <div class="badge badge-outline">{categoryTwo}</div>
      </div>
      <div class="card-actions justify-start">
        <p>$ {price}</p>
      </div>
      <div class="card-actions justify-end">
        <button class="btn btn-primary buy-now-btn" on:click={handle_click}>Add to Cart</button>
      </div>
    </div>
  </div>

<style>
.card{
    width: 300px;
    height: 400px;
}

.badge-condition{
    background-color:#F7B801;
}
.buy-now-btn{
    background-color: #48639C;
    color: white;
}
.card-title:hover{
    color: #48639C;
}

</style>