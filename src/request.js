function request(urls, fn, limit) {
    const copy = [...urls];
    const promises = copy.splice(0, limit).map((url, index) =>
        fn(url)
            .then(() => index)
            .catch((err) => {
                console.log(err);
                return index;
            })
            .catch((err) => {
                console.log(err);
                return index;
            })
    );

    const resolved = Promise.resolve();
    return copy
        .reduce((acc, curUrl) => {
            return acc
                .then(() => Promise.race(promises))
                .then((fastestIndex) => {
                    promises[fastestIndex] = fn(curUrl)
                        .then(() => fastestIndex)
                        .catch((err) => {
                            console.log(err);
                            return fastestIndex;
                        });
                });
        }, resolved)
        .then(() => Promise.all(promises));
}
function sleep(delay) {
    return new Promise((r, j) => {
        setTimeout(() => {
            console.log(delay);
            delay > 3000 ? j(new Error("timeout")) : r(delay);
        }, delay);
    });
}
request([1000, 2000, 3000, 4000, 1000, 1500], sleep, 3).then(() =>
    console.log("end")
);
