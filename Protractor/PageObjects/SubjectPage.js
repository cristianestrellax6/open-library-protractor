
var alb = require('../Base/ActionsLibrary.js');
var elb = require('../Base/ElementLibrary.js');

// Subject Page Object.
var SubjectPage = function(){

    // Elements for subject Page
    var searchTxt       = elb.id("searchSubjects");
    var searchButton    = elb.id("button.larger");
    var addToListButton = elb.css(".dropit a");
    var graph           = elb.css(".chart");
    var ebooksCount     = elb.id("coversCount");


    // Element actions for the subject page.
    this.isEbooksCountDisplayed = function () {
        return alb.elementDisplayed(ebooksCount);
    };

    this.isGraphDisplayed = function () {
        return alb.elementDisplayed(graph);
    };

    this.setSubjectSeach = function (searchValue) {
        alb.sendText(searchTxt,searchValue);
    };

    this.clickAddToList = function () {
        alb.clickElement(addToListButton);
    };

};

// Exports the Subject Object.
module.exports = new SubjectPage();