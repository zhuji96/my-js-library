function EventEmit() {
    this.listenerMap = {};
}

EventEmit.prototype.on(event, listener) = function () {
    if (listenerMap[event]) {
        listenerMap[event].push(listener);
        return;
    }
    listenerMap[event] = [listener];
};

EventEmit.prototype.off(event, listener) = function () {
    if (!listenerMap[event]) {
        return;
    }
    listenerMap[event] = listenerMap[event].filter((x) => x !== listener);
};

EventEmit.prototype.emit(event, ...args) = function () {
    if (listenerMap[event]) {
        listenerMap[event].forEach((listener) => {
            listener(...args);
        });
    }
};

EventEmit.prototype.once(event, listener) = function () {
    function newListener(...args) {
        listener(...args);
        this.off(event, newListener);
    }
    this.on(event, newListener);
};
