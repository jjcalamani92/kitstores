<script>
	/**
	 * @type {any}
	 */
	export let categories;
	import { page } from '$app/stores';
	console.log('page', $page)
</script>

<div class="mx-auto px-4 py-6 sm:px-6 lg:px-8">
	<div class="mx-auto max-w-5xl lg:max-w-none space-y-6">
		<div class="grid grid-cols-1 md:grid-cols-4 gap-4">
			{#each categories as { _id, slug, data: { name, thumbnailUrl } }, i}
				<div
					class={`${
						i % 4 === 0 ? 'lg:col-span-2' : 'lg:col-span-1'
					} relative group flex justify-center items-center h-[30rem] w-full`}
				>
					<img
						class="object-center object-cover h-full w-full z-0"
						src={thumbnailUrl ||
							'https://i.ibb.co/ThPFmzv/omid-armin-m-VSb6-PFk-VXw-unsplash-1-1.png'}
						alt="girl-image"
					/>

					<a
						href="{$page.url.pathname}/{slug}"
						class="dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 bottom-4 z-10 absolute text-base font-medium leading-none text-gray-800 py-3 w-36 bg-white text-center"
					>
						{name}
					</a>
					<div
						class="absolute opacity-0 group-hover:opacity-100 transition duration-500 bottom-3 py-6 z-0 px-20 w-36 bg-white bg-opacity-50"
					/>
				</div>
			{/each}
		</div>
	</div>
</div>
