import { writable } from 'svelte/store';

export const openMobileMenu = writable(false);
export const isMenuOpen = writable(false);
export const isMobileMenuOpen = writable(false);
export const isModalOpen = writable(false);


function createUI() {
	const { subscribe, set, update } = writable(false);

	return {
		subscribe,
		toggle: () => update((n) => !n),
		close: () => set(false)
	};
}

export const cart = createUI();
export const modal = createUI();
export const menu = createUI();
export const menuMobile = createUI();

