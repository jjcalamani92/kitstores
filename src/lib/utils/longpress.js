// @ts-ignore
export function longpress(node, duration) {
	// @ts-ignore
	let timer;

	const handleMousedown = () => {
		timer = setTimeout(() => {
			node.dispatchEvent(new CustomEvent('longpress'));
		}, duration);
	};

	const handleMouseup = () => {
		// @ts-ignore
		clearTimeout(timer);
	};

	node.addEventListener('mousedown', handleMousedown);
	node.addEventListener('mouseup', handleMouseup);

	return {
		// @ts-ignore
		update(newDuration) {
			duration = newDuration;
		},
		destroy() {
			node.removeEventListener('mousedown', handleMousedown);
			node.removeEventListener('mouseup', handleMouseup);
		}
	};
}
