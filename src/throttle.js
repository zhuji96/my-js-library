function throttleL(func, delay) {
	// 立即调用
	let prev = null;
	let context = null;
	let args = null;

	function result() {
		context = this;
		args = arguments;
		if (prev == null || Date.now() - prev > delay) {
			func.apply(context, args);
			prev = Date.now();
		}
	}

	return result;
}

function throttleT(func, delay) {
	// 最后一次延后调用
	let timer = null;
	let context = null;
	let args = null;

	function result() {
		context = this;
		args = arguments;
		if (!timer) {
			timer = setTimeout(later, delay);
		}
	}

	function later() {
		timer = null;
		func.apply(context, args);
	}

	return result;
}

function throttleLT(func, delay) {
	// 立即调用且最后一次延后调用
	let timer = null;
	let prev = null;
	let context = null;
	let args = null;

	function result() {
		context = this;
		args = arguments;
		const now = Date.now();
		const remain = prev ? delay - (now - prev) : 0;
		if (timer) {
			clearTimeout(timer);
		}
		if (remain <= 0) {
			func.apply(context, args);
			prev = Date.now();
		} else {
			timer = setTimeout(later, remain);
		}
	}

	function later() {
		timer = null;
		func.apply(context, args);
	}

	return result;
}
