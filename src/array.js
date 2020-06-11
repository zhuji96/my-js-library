function arrayMap(array, callback) {
    const res = [];
    let i = 0;
    while (i < array.length) {
        res[i] = callback(array[i], i, array);
        i += 1;
    }
    return res;
}

function arrayFilter(array, callback) {
    const res = [];
    let i = 0;
    while (i < array.length) {
        if (callback(array[i], i, array)) {
            res.push(array[i]);
        }
        i += 1;
    }
    return res;
}

function arrayForEach(array, callback) {
    let i = 0;
    while (i < array.length) {
        callback(array[i], i, array);
        i += 1;
    }
}

function arrayReduce(array, callback, initial) {
    let res = initial ? initial : array[0];
    let i = initial ? 0 : 1;
    while (i < array.length) {
        res = callback(res, array[i], i, array);
        i += 1;
    }
    return res;
}

console.log(
    arrayReduce(
        [1, 2, 3, 4],
        (acc, cur) => {
            acc += cur;
            return acc;
        },
        1
    )
);
