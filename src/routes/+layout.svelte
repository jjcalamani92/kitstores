<script>
	export let data;
	import './styles.css';
	import StoreNavigation from '$lib/components/headers/StoreNavigation.svelte';
	import ShoppingCarts from '$lib/components/shoppingCarts/ShoppingCarts.svelte';
	import SearchSlideOvers from '$lib/components/SearchSlideOvers.svelte';
	
	const { pages, site } = data
</script>

<svelte:head>
	<link rel="icon" type="image/svg+xml" href={data.site.data.info.icon} />
	<link rel="shortcut icon" href={data.site.data.info.icon} type="image/x-icon" />
		<link rel="apple-touch-icon" href={data.site.data.info.icon} />
		<link rel="icon" type="image/svg+xml" href={data.site.data.info.icon} />
		<link
			rel="icon"
			type="image/png"
			href={data.site.data.info.icon}
			sizes="192x192"
		/>
		<link rel="icon" type="image/png" href={data.site.data.info.icon} />
</svelte:head>

<div class="app">
	<StoreNavigation {pages} />
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

