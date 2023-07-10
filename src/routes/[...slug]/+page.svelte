<script>
	import ListCategories from "$lib/components/ListCategories.svelte";
	import ListProducts from "$lib/components/ListProducts.svelte";
	export let data;
  // console.log('data', data)
	// const {page, categories, products} = data
</script>

<svelte:head>
	<title>{data.page.data.name}</title>
	<meta name="description" content={data.page.data.description} />
	<meta property="og:image" content={data.page.data.thumbnailUrl} />
</svelte:head>

<div
    class="bg-gradient-to-r from-cris-dark via-cris-accent to-cris-dark text-center lg:py-10 md:py-8 py-6"
  >
    <h1
      class="w-10/12 mx-auto md:w-full font-semibold lg:text-4xl text-3xl lg:leading-9 md:leading-7 leading-9 text-center text-cris-inverted"
    >
      {data.page.data.name}
    </h1>
  </div>
<ListCategories categories={data.categories}/>
<ListProducts products={data.products} />