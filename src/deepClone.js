function deepClone(source) {
    if (source == null) {
        return null
    }
    if (isPrimitive(source)) {
        return source
    }
    if (isObject(source)) {
        const res = {};
        getKeys(source).forEach(key => {
            res[key] = deepClone(source[key])
        });
        return res;
    }
    if (isArray(source)) {
        return source.map(val => deepClone(val));
    }
}

function getKeys(sourceObj, {onlySelf=true, onlyEnumerable=true}) {
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