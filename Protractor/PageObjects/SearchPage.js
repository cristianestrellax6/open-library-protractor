
var alb = require('../Base/ActionsLibrary.js');
var elb = require('../Base/ElementLibrary.js');

// Search Page Object.
var SearchPage = function(){

    // Elements for Search Page
    var bookCovers  = elb.cssAll(".bookcover"       );
    var bookTittle  = elb.cssAll(".booktitle"       );
    var bookAutor   = elb.cssAll(".bookauthor"      );
    var pagination  = elb.css   (".pagination"      );
    var noHits      = elb.css   ("#contentHead .red");

    // Element actions for the search page.
    this.checkuserToggleButtonIsPresent = function () {
        return alb.elementDisplayed(userToggle);
    };

    this.checkBookListCount = function () {
        return bookCovers.count().then(function (count) {
            return count === 100;
        });
    };

    this.checkBookTitleCount = function () {
        return bookTittle.count().then(function (count) {
            return count === 100;
        });
    };

    this.checkBookAutorCount = function () {
        return bookAutor.count().then(function (count) {
            return count === 100;
        });
    };

    this.isNoHitsDisplayed = function () {
        return alb.elementDisplayed(noHits);
    };

    this.isPaginationDisplayed = function () {
        return alb.elementDisplayed(pagination);
    };

};

// Exports the Search Object.
module.exports = new SearchPage();