<script>
	export let data;
	import './styles.css';
	import StoreNavigation from '$lib/components/headers/StoreNavigation.svelte';
	import ShoppingCarts from '$lib/components/shoppingCarts/ShoppingCarts.svelte';
	// import StoreNavigation from '../components/headers/StoreNavigation.svelte';
	// console.log('pages', data)
</script>

<div class="app">
	<StoreNavigation pages={data.pages} />

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

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		max-width: 64rem;
		margin: 0 auto;
		box-sizing: border-box;
	}

	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 12px;
	}

	footer a {
		font-weight: bold;
	}

	@media (min-width: 480px) {
		footer {
			padding: 12px 0;
		}
	}
</style>
