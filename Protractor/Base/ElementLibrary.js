
var ElementLibrary = function () {

    // Return a element located by model
    this.model = function (model) {
        return element(by.model(model));
    };

    // Return a element located by button text
    this.buttonText = function (buttonText) {
        return element(by.buttonText(buttonText))
    };

    // Return a element located by css
    this.css = function (css) {
        return element(by.css(css));
    };

    // Return a element located by link text
    this.linkText = function (linkText) {
        return element(by.linkText(linkText));
    };

    // Return a element located by id
    this.id = function (id) {
        return element(by.id(id));
    };

    // Return a element located by name
    this.name = function (name) {
        return element(by.name(name));
    };

    // Return a element located by a css containing text
    this.cssContainingText = function (selector,text) {
        return element(by.cssContainingText(selector,text));
    };

    // Return a element located by binding
    this.binding = function (bind) {
        return element(by.binding(bind));
    };

    // Return all elements located by repeater
    this.repeater = function (repeaterText) {
        return element.all(by.repeater(repeaterText));
    };

    // Return all elements located by binding
    this.bindingAll = function (bindingText) {
        return element.all(by.binding(bindingText));
    };

    // Return all elements located by button text
    this.buttonTextAll = function (buttonText) {
        return element.all(by.buttonText(buttonText))
    };

    // Return all elements located by link text
    this.linkTextAll = function (linkText) {
        return element.all(by.linkText(linkText));
    };

    // Return all elements located by css
    this.cssAll = function (css) {
        return element.all(by.css(css));
    };
};

module.exports = new ElementLibrary();