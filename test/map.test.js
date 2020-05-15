const _ = require("../src");

test("[1,2] map x * x equal [1,4]", () => {
	expect(_.map([1, 2], (x) => x * x)).toEqual([1, 4]);
});
