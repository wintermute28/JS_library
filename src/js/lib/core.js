const $ = function(selector) {
    return new $.prototype.init(selector);
};

$.prototype.init = function(selector) {
    if (!selector) {
        return this; // {}
    }
    Object.assign(this, document.querySelectorAll(selector));
    this.length = document.querySelectorAll(selector).length;
    return this;
};

$.prototype.init.prototype = $.prototype; // в прототип объекта который возвращается из ф-ции записывается прототип главной функции

window.$ = $; //Записываем функцию в window, что бы была возможность ее глобально использовать

export default $;
