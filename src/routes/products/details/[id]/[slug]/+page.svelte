<script>
	import ProductOverviews from "$lib/components/ProductOverviews.svelte";
  export let data;
  console.log('data', data)
</script>
<svelte:head>
	<title>{data.product.data.name}</title>
	<meta name="description" content={data.product.data.description} />
	<meta property="og:image" content={data.product.data.thumbnailUrl} />
</svelte:head>

<ProductOverviews product={data.product} />