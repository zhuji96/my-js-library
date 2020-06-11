function deepClone(sourceObj) {
    const res = {}
    getKeys(sourceObj).forEach(key => {
        if (sourceObj[key] ===)
    })
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