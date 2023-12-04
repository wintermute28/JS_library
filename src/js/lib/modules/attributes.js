import $ from "../core";

$.prototype.addAttribute = function(attributeName, attributeValue) {
    if (!attributeName) {
        return this;
    }
    if (!attributeValue) {
        attributeValue = "";
    }

    for (let i = 0; i < this.length; i++) {
        if (this[i].getAttribute(attributeName)) {
            continue;
        }
        this[i].setAttribute(attributeName, attributeValue);
    }
    return this;
};

$.prototype.removeAttribute = function(attributeName) {
    if (!attributeName) {
        return this;
    }

    for (let i = 0; i < this.length; i++) {
        if (!this[i].getAttribute(attributeName)) {
            continue;
        }
        this[i].removeAttribute(attributeName);
    }
    return this;
};

$.prototype.getAttribute = function(attributeName) {
    if (!attributeName) {
        return this;
    }

    for (let i = 0; i < this.length; i++) {
        if (!this[i].getAttribute(attributeName)) {
            continue;
        }
        this[i].getAttribute(attributeName);
    }
    return this;
};

