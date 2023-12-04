import $ from "../core";

$.prototype.on = function(evenrName, callback) {
    if (!evenrName || !callback) {
        return this;
    }
    for (let i = 0; i < this.length; i++) {
        this[i].addEventListener(evenrName, callback);
    }
    return this;
};

$.prototype.off = function(evenrName, callback) {
    if (!evenrName || !callback) {
        return this;
    }
    for (let i = 0; i < this.length; i++) {
        this[i].removeEventListener(evenrName, callback);
    }
    return this;
};

$.prototype.click = function(handler) {
    for (let i = 0; i < this.length; i++) {
        if (handler) {
            this[i].addEventListener('click', handler);
        } else {
            this[i].click();
        }
    }
    return this;
};