Promise.prototype.finally = function (callback) {
    const P = this.constructor;
    return this.then(
        (value) => {
            P.resolve(callback()).then(() => value);
        },
        (err) => {
            P.resolve(callback()).then(() => {
                throw err;
            });
        }
    );
};
