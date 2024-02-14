<script>
    import Header from "$lib/Header.svelte";
    import Footer from "$lib/Footer.svelte";
    import TabBar from "$lib/TabBar.svelte";
  </script>
  
  <html data-theme="cupcake" lang="sass">
    <Header/>
    <TabBar/>
    <main>
        <slot></slot>
    </main>

  
    <style lang="postcss">
        :global(html) {
          background-color: theme(colors.green.100);
        }
    </style>
  
  </html>