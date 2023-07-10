<script>
	import ListCategories from "$lib/components/ListCategories.svelte";
	import ListProducts from "$lib/components/ListProducts.svelte";
	export let data;
</script>
<svelte:head>
	<title>{data.page.data.name}</title>
	<meta name="description" content={data.page.data.description} />
	<meta property="og:image" content={data.page.data.thumbnailUrl} />
</svelte:head>

<ListCategories categories={data.categories}/>
<ListProducts products={data.products} />