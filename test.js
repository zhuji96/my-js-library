const assert = require("assert").strict;
const _ = require("./index");

// assert.strictEqual(_.get(null, ["a"], "default"), "default", "null.a");
// assert.strictEqual(
//     _.get(undefined, ["a"], "default"),
//     "default",
//     "undefined.a"
// );
// assert.strictEqual(_.get([], ["a"], "default"), "default", "[].a");
// assert.strictEqual(_.get({}, ["a"], "default"), "default", "{}.a");
// assert.strictEqual(_.get({ a: 1 }, ["a"], "default"), 1, "{a:1}.a");
// assert.strictEqual(
//     _.get({ a: 1 }, ["a", "b"], "default"),
//     "default",
//     "{a:1}.a.b"
// );
// assert.strictEqual(_.get(["a"], [0], "default"), "a", "[{a:1}][0]");
// assert.strictEqual(_.get([{ a: 1 }], [0, "a"], "default"), 1, "[{a:1}][0].a");
// assert.strictEqual(
//     _.get([{ a: 1 }], [0, "b"], "default"),
//     "default",
//     "[{a:1}][0].b"
// );
console.log(_.map({ 0: 1, 1: 2, length: 2 }, null));
