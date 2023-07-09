<script>
	/**
	 * @type {any}
	 */
	export let products;
	import { page } from '$app/stores';
	// console.log('page', $page)
</script>

<div class="mx-auto px-4 py-6 sm:px-6 lg:px-8">
	<div class="mx-auto max-w-5xl lg:max-w-none space-y-6">
		<div class="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 lg:gap-y-12 lg:gap-x-8 sm:gap-y-10 sm:gap-x-6 gap-y-6 lg:mt-12 mt-10">
			{#each products as { _id, slug, data: { name, thumbnailUrl } }, i}
			<div class="relative group">
        
        <div class="relative group">
          <div class="flex justify-center items-center opacity-0 bg-gradient-to-t from-gray-800 via-gray-800 to-opacity-30 group-hover:opacity-50 absolute top-0 left-0 h-full w-full"></div>
          
          <!-- svelte-ignore a11y-img-redundant-alt -->
          <img
            class="w-full"
            src={thumbnailUrl}
            alt="A girl Posing Image"
          />
          <div class="absolute bottom-0 p-8 w-full opacity-0 group-hover:opacity-100">
            <!-- <ButtonProductCart product={product} client:load />
            <ButtonProductView product={product} client:load /> -->
          </div>
        </div>
        <a href={`/products/details/${_id}/${slug}`} class="font-normal dark:text-white  leading-5 text-gray-800 md:mt-6 mt-4">
          {name}
        </a>
        <!--
          <p class="font-semibold dark:text-gray-300 text-xl leading-5 text-gray-800 mt-4">
            $1550
          </p>
          <p class="font-normal dark:text-gray-300 text-base leading-4 text-gray-600 mt-4">
            2 colours
          </p>
           -->
      </div>
			{/each}
		</div>
	</div>
</div>
