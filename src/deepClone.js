function deepClone(source, map = new Map()) {
    if (source == null) {
        return null;
    }
    if (isPrimitive(source)) {
        return source;
    }
    if (isObject(source)) {
        if (map.get(source)) {
            return source;
        }
        const res = {};
        map.set(source, res);
        getKeys(source).forEach((key) => {
            res[key] = deepClone(source[key], map);
        });
        return res;
    }
    if (isArray(source)) {
        return source.map((val) => deepClone(val));
    }
}

function getKeys(sourceObj, { onlySelf = true, onlyEnumerable = true }) {
    if (onlySelf === true && onlyEnumerable === true) {
        return Object.keys(sourceObj);
    }
    if (onlySelf === true && onlyEnumerable === false) {
        return Object.getOwnPropertyNames(sourceObj);
    }
    if (onlySelf === false && onlyEnumerable === true) {
        // for in
    }
    if (onlySelf === false && onlyEnumerable === false) {
        // 递归 getOwnPropertyNames
    }
}
