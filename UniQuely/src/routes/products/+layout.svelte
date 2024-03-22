<script>
    import Footer from "$lib/Footer.svelte";    
import Header from "$lib/Header.svelte";
</script>

<html data-theme="cupcake" lang="sass">
    <Header/>
    <main>
        <slot></slot>
    </main>
    
    <style lang="postcss">
        :global(html) {
          background-color: theme(colors.green.100);
        }
    </style>
</html>
