
var serverURLs = require('../Servers/ServerURLs.js');

// Pages Page Object
var Pages = function(){

    // Get the page
    this.getOpenLibraryPage = function(){
        var pageURL=  serverURLs.getServer();
        browser.get(pageURL);
        return pageURL;
    };

    // Get the actual URL on the page.
    this.getActualURL = function(){
        return browser.getCurrentUrl();
    };

    // Get the server used
    this.getServer = function () {
        return serverURLs.getServer();
    }

};

// Exports Pages.js object
module.exports = new Pages();