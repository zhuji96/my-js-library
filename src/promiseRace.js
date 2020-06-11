function PromiseRace(promises) {
    return new Promise((resolve, reject) => {
        if (!Array.isArray(promises)) {
            return reject(new Error("type err"));
        }
        let i = 0;
        while (i < promises.length) {
            Promise.resolve(promises[i]).then(resolve, reject);
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
PromiseRace(promises)
    .then((res) => {
        console.log("success", res);
    })
    .catch((e) => {
        console.log("catch", e);
    });
