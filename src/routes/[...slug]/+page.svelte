<script>
	import ListCategories from "$lib/components/ListCategories.svelte";
	import ListProducts from "$lib/components/ListProducts.svelte";
	export let data;
	console.log('data', data)
</script>
<svelte:head>
	<title>{data.page.data.name}</title>
	<meta name="description" content="About this app" />
</svelte:head>

<ListCategories categories={data.categories}/>
<ListProducts products={data.products} />