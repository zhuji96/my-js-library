function PromiseAll(promises) {
    return new Promise((resolve, reject) => {
        if (!Array.isArray(promises)) {
            return reject(new Error("type err"));
        }
        let i = 0;
        const res = [];
        let count = promises.length;
        while (i < promises.length) {
            (function (i) {
                promises[i]
                    .then((data) => {
                        res[i] = data;
                        count -= 1;
                        if (count === 0) {
                            resolve(res);
                        }
                    })
                    .catch((err) => {
                        reject(err);
                        return;
                    });
            })(i);
            i += 1;
        }
    });
}

function sleep(delay) {
    return new Promise((r, j) => {
        setTimeout(() => {
            console.log(delay);
            delay > 3000 ? j(new Error("timeout")) : r(delay);
        }, delay);
    });
}

const promises = [sleep(1000), sleep(2000), sleep(1500)];
PromiseAll(promises)
    .then((res) => {
        console.log(res);
    })
    .catch((e) => {
        console.log("catch", e);
    });
