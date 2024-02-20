<script>
    import Header from "$lib/Header.svelte";
    import Footer from "$lib/Footer.svelte";
    import TabBar from "$lib/TabBar.svelte";
  </script>
  
  <html data-theme="cupcake" lang="sass">
    <Header/>
    <h1 id="cart-title">My Cart</h1>
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
                <!-- row 1 -->
                <tr>
                  <td>
                    <div class="flex items-center gap-3">
                      <div class="avatar">
                        <div class="mask mask-squircle w-12 h-12">
                          <img src="/tailwind-css-component-profile-2@56w.png" alt="Avatar Tailwind CSS Component" />
                        </div>
                      </div>
                      <div>
                        <div class="font-bold">Hart Hagerty</div>
                        <div class="text-sm opacity-50">Drexel University</div>
                      </div>
                    </div>
                  </td>
                  <td>
                    Denmin Pants
                    <br/>
                    <span class="badge badge-ghost badge-sm">Clothes</span>
                  </td>
                  <td>Purple</td>
                  <th>
                    <button class="btn btn-ghost btn-xs">details</button>
                  </th>
                </tr>
                <!-- row 2 -->
                <tr>
                  <td>
                    <div class="flex items-center gap-3">
                      <div class="avatar">
                        <div class="mask mask-squircle w-12 h-12">
                          <img src="/tailwind-css-component-profile-3@56w.png" alt="Avatar Tailwind CSS Component" />
                        </div>
                      </div>
                      <div>
                        <div class="font-bold">Brice Swyre</div>
                        <div class="text-sm opacity-50">Drexel University</div>
                      </div>
                    </div>
                  </td>
                  <td>
                    Denim Jacket
                    <br/>
                    <span class="badge badge-ghost badge-sm">Clothes</span>
                  </td>
                  <td>Red</td>
                  <th>
                    <button class="btn btn-ghost btn-xs">details</button>
                  </th>
                </tr>
                <!-- row 3 -->
                <tr>
                  <td>
                    <div class="flex items-center gap-3">
                      <div class="avatar">
                        <div class="mask mask-squircle w-12 h-12">
                          <img src="/tailwind-css-component-profile-4@56w.png" alt="Avatar Tailwind CSS Component" />
                        </div>
                      </div>
                      <div>
                        <div class="font-bold">Marjy Ferencz</div>
                        <div class="text-sm opacity-50">Drexel University</div>
                      </div>
                    </div>
                  </td>
                  <td>
                    Pencils
                    <br/>
                    <span class="badge badge-ghost badge-sm">Office Supply</span>
                  </td>
                  <td>$5</td>
                  <th>
                    <button class="btn btn-ghost btn-xs">details</button>
                  </th>
                </tr>
                <!-- row 4 -->
                <tr>
                  <td>
                    <div class="flex items-center gap-3">
                      <div class="avatar">
                        <div class="mask mask-squircle w-12 h-12">
                          <img src="/tailwind-css-component-profile-5@56w.png" alt="Avatar Tailwind CSS Component" />
                        </div>
                      </div>
                      <div>
                        <div class="font-bold">Yancy Tear</div>
                        <div class="text-sm opacity-50">Drexel University</div>
                      </div>
                    </div>
                  </td>
                  <td>
                    Custom Tote Bag
                    <br/>
                    <span class="badge badge-ghost badge-sm">Handmade</span>
                  </td>
                  <td>$10</td>
                  <th>
                    <button class="btn btn-ghost btn-xs">details</button>
                  </th>
                </tr>
              </tbody>
              <!-- foot -->
              <tfoot>
                <tr>
                  <th></th>
                  <th>4 Items</th>
                  <th>Total: $999</th>
                  <th>Items nonrefunable</th>
                  <th></th>
                </tr>
              </tfoot>
              
            </table>
          </div>
          <button class="btn-checkout btn btn-warning btn-md">Checkout</button>
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
    margin-left: 5px;
  }
</style>
  
  </html>