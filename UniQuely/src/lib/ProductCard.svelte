
<script lang="ts">
    export let name:String;
    export let sellerName:String;
    export let condition: String;
    export let categoryOne: String;
    export let categoryTwo: String;
</script>

<div class="card w-96 bg-base-100 shadow-xl">
    <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
    <div class="card-body">
      <h2 class="card-title">
        {name}
        <div class="badge badge-condition">{condition}</div>
      </h2>
      <p>posted by {sellerName}</p>
      <div class="card-actions justify-start">
        <div class="badge badge-outline">{categoryOne}</div> 
        <div class="badge badge-outline">{categoryTwo}</div>
      </div>
      <div class="card-actions justify-end">
        <button class="btn btn-primary buy-now-btn">Buy Now</button>
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

</style>