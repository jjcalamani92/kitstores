<script>
	import Modal from '$lib/components/Modal.svelte';
	import ProductQuickviews from '$lib/components/ProductQuickviews.svelte';
	import { modal, quickviews } from '$lib/stores';
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
	<button type="button" on:click={quickviews.toggle}>Abrir Quickviews</button>
	<button type="button" on:click={modal.toggle}>Abrir Modal</button>
	
	<Modal />
	<ProductQuickviews />
</section>
