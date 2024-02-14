
<script lang="ts">
    import { onNavigate } from "$app/navigation";

    export let ID:String;
    export let name:String;
    export let sellerName:String;
    export let condition: String;
    export let categoryOne: String;
    export let categoryTwo: String;
    export let price:number;
    export let imageUrl: String;
</script>

<div class="card w-96 bg-base-100 shadow-xl">
   <figure><img src={imageUrl} alt="Product Image" /></figure>
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
        <button class="btn btn-primary buy-now-btn"><a href="/cart">Buy Now</a></button>
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