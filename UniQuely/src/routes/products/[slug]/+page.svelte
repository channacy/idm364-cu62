<script lang="ts">
  export let data;
</script>

<div class="container">
  <div class="image-container">
    <img src={data.item[0].imageUrl} alt="product" />
  </div>

  <div class="text-container">
    <div class="item-details-header">
      <h1>{data.item[0].name}</h1>
      <p>posted by {data.item[0].postedBy}</p>
    </div>
    <h2>Description</h2>
    <p>{data.item[0].description}</p>
    <h2>Quantity</h2>
    <p>{data.item[0].quantity}</p>
    <h2>Condition</h2>
    <p>{data.item[0].condition}</p>
    <h2>Categories</h2>
    <p>{data.item[0].categoryOne}</p>
    <p>{data.item[0].categoryTwo}</p>
    <br/>
    <hr/>
    <br/>
    <div class="item-details-footer">
      <h3>${data.item[0].price}</h3>
      <button class="btn btn-primary buy-now-btn"><a href="/cart">Add to Cart</a></button>
    </div>
  </div>
</div>

<style>
  h1{
    font-weight: bold;
    font-size: 32px;
  }
  h3{
    font-size: 24px;
  }

  p{
    color:gray;
  }
  .container {
    display: flex;
    margin: 10px;
    background-color: white;
    align-items: center;

  }

  .item-details-header, .item-details-footer{
    display: flex;
    justify-content: space-between;
    align-items:baseline;

  }

  .image-container {
    margin-right: 20px; 
    width: 20%;
    background-color: white;
    padding: 10px;
  }

  .text-container{
    background-color: white;
    padding: 12px;
    width: 80%;
  }

  img {
    width: 250px;
    height: 250px;

  }
</style>
