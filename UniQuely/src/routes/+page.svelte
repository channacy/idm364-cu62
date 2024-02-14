<script>
	import WelcomeNav from '$lib/WelcomeNav.svelte';
	import WelcomeBody from '$lib/WelcomeBody.svelte';
	import Footer from "$lib/Footer.svelte";
</script>

<html data-theme="cupcake" lang="sass">
	<WelcomeNav />
	<WelcomeBody />
	<Footer/>
</html>

<style lang="postcss">
	:global(html) {
	  background-color: theme(colors.green.100);
	}
</style>