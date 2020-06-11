function Lazyman() {
    this.queue = [];
    setTimeout(() => this.next(), 0);
}
Lazyman.prototype.eat = function () {
    this.queue.push(() => {
        console.log("eat");
        this.next();
    });
    return this;
};
Lazyman.prototype.sleep = function (delay) {
    this.queue.push(() => {
        setTimeout(() => {
            console.log("sleep" + delay + "s");
            this.next();
        }, delay);
    });
    return this;
};
Lazyman.prototype.next = function () {
    const task = this.queue.shift();
    if (task) {
        task();
    }
};
new Lazyman().eat().sleep(5000).eat();
