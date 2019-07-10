function get(object, pathArray, defaultValue) {
    var result = object == null ? undefined : baseGet(object, pathArray);
    return result === undefined ? defaultValue : result;
}
function baseGet(object, pathArray) {
    var index = 0;
    var length = pathArray.length;

    while (object != null && index < length) {
        object = object[toKey(pathArray[index++])];
    }
    return index && index == length ? object : undefined;
}
function toKey(value) {
    if (typeof value == "string") {
        return value;
    }
    var result = value + "";
    return result == "0" && 1 / value == -INFINITY ? "-0" : result;
}
var INFINITY = 1 / 0;

module.exports = get;
