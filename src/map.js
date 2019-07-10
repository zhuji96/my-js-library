function map(collection, iteratee) {
  var func = Array.isArray(collection) ? arrayMap : baseMap;
  return func(collection, baseIteratee(iteratee));
}

function arrayMap(array, iteratee) {
  var index = -1,
    length = array ? array.length : 0,
    result = Array(length);

  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }
  return result;
}

function baseMap(collection, iteratee) {
  var index = -1,
    result = isArrayLike(collection) ? Array(collection.length) : [];

  baseEach(collection, function(value, key, collection) {
    result[++index] = iteratee(value, key, collection);
  });
  return result;
}

var baseEach = createBaseEach(baseForOwn);

function baseForOwn(object, iteratee) {
  return object && baseFor(object, iteratee, keys);
}

function createBaseEach(eachFunc, fromRight) {
  return function(collection, iteratee) {
    if (collection == null) {
      return collection;
    }
    if (!isArrayLike(collection)) {
      return;
      // return eachFunc(collection, iteratee);
    }
    var length = collection.length,
      index = fromRight ? length : -1,
      iterable = Object(collection);

    while (fromRight ? index-- : ++index < length) {
      if (iteratee(iterable[index], index, iterable) === false) {
        break;
      }
    }
    return collection;
  };
}

function getIteratee() {
  var result = lodash.iteratee || iteratee;
  result = result === iteratee ? baseIteratee : result;
  return arguments.length ? result(arguments[0], arguments[1]) : result;
}

function baseIteratee(value) {
  if (typeof value == "function") {
    return value;
  }
  if (value == null) {
    return identity;
  }
  // if (typeof value == 'object') {
  //   return isArray(value)
  //     ? baseMatchesProperty(value[0], value[1])
  //     : baseMatches(value);
  // }
  // return property(value);
}

function iteratee(func) {
  return baseIteratee(typeof func == "function" ? func : baseClone(func, true));
}

function identity(value) {
  return value;
}

function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

function isLength(value) {
  return (
    typeof value == "number" &&
    value > -1 &&
    value % 1 == 0 &&
    value <= MAX_SAFE_INTEGER
  );
}

function isFunction(value) {
  var tag = isObject(value) ? Object.prototype.toString.call(value) : "";
  return tag == funcTag || tag == genTag;
}

function isObject(value) {
  var type = typeof value;
  return value != null && (type == "object" || type == "function");
}

var MAX_SAFE_INTEGER = 9007199254740991;
var funcTag = "[object Function]";
var genTag = "[object GeneratorFunction]";

module.exports = map;
