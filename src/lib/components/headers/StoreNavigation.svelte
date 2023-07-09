<script>
	import { cart } from "$lib/stores";
	import { menuMobile, menu, search } from '$lib/stores';
	import FlyoutNavigation from './FlyoutNavigation.svelte';
	import MobileMenu from './MobileMenu.svelte';
	/**
	 * @type {any}
	 */
	 export let pages;

</script>

<div class="bg-white">
	<!--
    Mobile menu

    Off-canvas menu for mobile, show/hide based on off-canvas menu state.
  -->
	{#if $menuMobile}
		<MobileMenu />
	{/if}

	<header class="relative bg-white">
		<p
			class="flex h-10 items-center justify-center bg-orange-600 px-4 text-sm font-medium text-white sm:px-6 lg:px-8"
		>
			Get free delivery on orders over $100
		</p>

		<nav aria-label="Top" class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
			<div class="border-b border-gray-200">
				<div class="flex h-16 items-center">
					<!-- Mobile menu toggle, controls the 'mobileMenuOpen' state. -->
					<button on:click={menuMobile.toggle} type="button" class="rounded-md bg-white p-2 text-gray-400 lg:hidden">
						<span class="sr-only">Open menu</span>
						<svg
							class="h-6 w-6"
							fill="none"
							viewBox="0 0 24 24"
							stroke-width="1.5"
							stroke="currentColor"
							aria-hidden="true"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
							/>
						</svg>
					</button>

					<!-- Logo -->
					<div class="ml-4 flex lg:ml-0">
						<a href="/">
							<span class="sr-only">Your Company</span>
							<h1 class=" text-lg font-bold">Logo</h1>
							<!-- <img
								class="h-8 w-auto"
								src="https://tailwindui.com/img/logos/mark.svg?color=orange&shade=600"
								alt=""
							/> -->
						</a>
					</div>

					<!-- Flyout menus -->
					<div class="hidden lg:ml-8 lg:block lg:self-stretch">
						<div class="flex h-full space-x-8">
							<div class="flex">
								<div class="relative flex">
									<!-- Item active: "border-orange-600 text-orange-600", Item inactive: "border-transparent text-gray-700 hover:text-gray-800" -->
									<button
										on:click={menu.toggle}
										type="button"
										class="border-transparent text-gray-700 hover:text-gray-800 relative z-10 -mb-px flex items-center border-b-2 pt-px text-sm font-medium transition-colors duration-200 ease-out"
										aria-expanded="false">Women</button
									>
								</div>
					
								<!--
									'Women' flyout menu, show/hide based on flyout menu state.
					
									Entering: "transition ease-out duration-200"
										From: "opacity-0"
										To: "opacity-100"
									Leaving: "transition ease-in duration-150"
										From: "opacity-100"
										To: "opacity-0"
								-->
								{#if $menu}
								<FlyoutNavigation />
							{/if}
							</div>
							
							{#each pages as { _id, slug, data:{name} }, i}
								
								<a
									href="/{slug}"
									class="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800"
									>{name}</a
								>
							{/each}
							
						</div>
					</div>

					<div class="ml-auto flex items-center">
						<div class="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
							<a href={"#"} class="text-sm font-medium text-gray-700 hover:text-gray-800">Sign in</a>
							<span class="h-6 w-px bg-gray-200" aria-hidden="true" />
							<a href={"#"} class="text-sm font-medium text-gray-700 hover:text-gray-800"
								>Create account</a
							>
						</div>

						<div class="hidden lg:ml-8 lg:flex">
							<a href={null} class="flex items-center text-gray-700 hover:text-gray-800">
								<img
									src="https://tailwindui.com/img/flags/flag-canada.svg"
									alt=""
									class="block h-auto w-5 flex-shrink-0"
								/>
								<span class="ml-3 block text-sm font-medium">CAD</span>
								<span class="sr-only">, change currency</span>
							</a>
						</div>

						<!-- Search -->
						<div class="flex lg:ml-6">
							<button on:click={search.toggle} class="p-2 text-gray-400 hover:text-gray-500">
								<span class="sr-only">Search</span>
								<svg
									class="h-6 w-6"
									fill="none"
									viewBox="0 0 24 24"
									stroke-width="1.5"
									stroke="currentColor"
									aria-hidden="true"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
									/>
								</svg>
							</button>
						</div>

						<!-- Cart -->
						<div class="ml-4 flow-root lg:ml-6">
							<button on:click={cart.toggle} class="group -m-2 flex items-center p-2">
								<svg
									class="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
									fill="none"
									viewBox="0 0 24 24"
									stroke-width="1.5"
									stroke="currentColor"
									aria-hidden="true"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
									/>
								</svg>
								<span class="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800"
									>0</span
								>
								<span class="sr-only">items in cart, view bag</span>
							</button>
						</div>
					</div>
				</div>
			</div>
		</nav>
	</header>
</div>
