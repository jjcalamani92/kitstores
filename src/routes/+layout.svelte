<script>
	export let data;
	import './styles.css';
	import StoreNavigation from '$lib/components/headers/StoreNavigation.svelte';
	import ShoppingCarts from '$lib/components/shoppingCarts/ShoppingCarts.svelte';
	import SearchSlideOvers from '$lib/components/SearchSlideOvers.svelte';
	// import StoreNavigation from '../components/headers/StoreNavigation.svelte';
	// console.log('pages', data)
</script>

<div class="app">
	<StoreNavigation pages={data.pages} />
	<SearchSlideOvers />
	<ShoppingCarts />
	<!-- <Header0 /> -->
	<!-- <Header /> -->

	<main>
		<slot />
	</main>

	<footer>
		<p>visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to learn SvelteKit</p>
	</footer>
</div>

