function debounce(func, wait, immediate) {
	let timer = null;
	let context = null;
	let args = null;

	function result() {
		context = this;
		args = arguments;
		if (timer) {
			clearTimeout(timer);
		}
		if (immediate && timer == null) {
			func.apply(context, args);
		}
		timer = setTimeout(later, wait);
	}

	function later() {
		timer = null;
		if (immediate) return;
		func.apply(context, args);
	}

	return result;
}
