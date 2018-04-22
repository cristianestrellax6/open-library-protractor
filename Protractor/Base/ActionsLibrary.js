
var ActionsLibrary = function () {
    // Those methods are the common iterations that Protractor use for elements
    // wrapped in this class for reusability

    // Send some text to the passed element
    this.sendText = function (element, text) {
        element.sendKeys(text);
    };

    // Return if a element is displayed
    this.elementDisplayed = function (element) {
        return element.isDisplayed();
    };

    // Return if a element is displayed
    this.elementEnabled = function (element) {
        return element.isEnabled();
    };

    // Return if a element is present
    this.elementPresent = function (element) {
        return element.isPresent();
    };

    // Clear the content of a element
    this.clearContent = function (element) {
        element.clear();
    };

    // Click on a element
    this.clickElement = function (element) {
        element.click();
    };

    // Get text of a element in lowercase
    this.getElementText = function (element) {
        return element.getText().then(function (text) {
            return text.toLowerCase();
        })
    };

    // Get the attribute value of a element in lowercase
    this.getValue = function (element) {
        return element.getAttribute('value').then(function (value) {
            return value.toLowerCase();
        })
    }

};

module.exports = new ActionsLibrary();