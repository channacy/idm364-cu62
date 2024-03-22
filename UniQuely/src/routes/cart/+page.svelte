<script lang="ts">
    import Header from "$lib/Header.svelte";
    import Footer from "$lib/Footer.svelte";
    import TabBar from "$lib/TabBar.svelte";
    import { cart } from '$lib/store';
    let itemsNum = $cart.length;

    let totalPrice: number = calculateTotalPrice();

    function calculateTotalPrice(){
      let total = 0
      $cart.forEach(item => {
        total += item.price;
    });
        return total;
      }

  </script>
  
  <html data-theme="cupcake" lang="sass" class="container">
    <Header/>
    <h1 id="cart-title">Order Summary</h1>
    <main>
        <div class="cart-table overflow-x-auto">
            <table class="table">
              <!-- head -->
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Product</th>
                  <th>Price</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {#each $cart as item}
                <tr>
                  <td>
                    <div class="flex items-center gap-3">
                
                      <div>
                        <div class="font-bold">{item.sellerName}</div>
                      </div>
                    </div>
                  </td>
                  <td>
                    {item.name}
                    <br/>
                    <span class="badge badge-ghost badge-sm">{item.categoryOne}</span>
                  </td>
                  <td>${item.price}</td>
                  <th>
                    <button class="btn btn-ghost btn-xs"> <a href="/products/{item.ID}">More Details</a></button>
                  </th>
                </tr>
                {/each}
              </tbody>
              <tfoot>
                <tr>
                  <th></th>
                  <th>{itemsNum} Items</th>
                  <th>Total: ${totalPrice.toFixed(2)}</th>
                  <th>Items are nonrefunable</th>
                  <th></th>
                </tr>
              </tfoot>
              
            </table>
          </div>
          <!-- <button class="btn-checkout btn btn-warning btn-md">Checkout</button> -->
    </main>
  
<style lang="postcss">
  :global(html) {
      background-color: theme(colors.green.100);
  }

  .cart-table{
      display: flex;
      margin: 10px;
      padding: 4px;
  }

  #cart-title{
    font-size: 24px;
    margin-left: 20px;
  }
</style>
  
  </html>