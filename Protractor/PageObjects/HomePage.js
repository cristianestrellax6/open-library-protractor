
var alb = require('../Base/ActionsLibrary.js');
var elb = require('../Base/ElementLibrary.js');

// Home Page Object.
var HomePage = function(){

    // Elements for Home Page
    var userToggle      = elb.id    ("userToggle");
    var loginButton     = elb.css   ("a.generic-button.generic-button-secondary.white");
    var signupButton    = elb.css   ("a.generic-button.generic-button-primary");
    var searchTxt       = elb.css   (".search-bar-input [name='q']");
    var searchSubmit    = elb.css   (".search-bar-submit");
    var nextArrow       = elb.cssAll(".slick-next.slick-arrow").get(0);
    var previewArrow    = elb.cssAll(".slick-prev.slick-arrow").get(0);
    var bookReadButton  = elb.cssAll(".book-cta [data-ol-link-track='public_domain']").get(0);
    var bookBorrowButton= elb.cssAll(".book-cta [data-ol-link-track='staff_picks']").get(0);
    var bookcover       = elb.css   (".book-cover");
    var subjects        = elb.cssAll(".category-icon").get(0);


    // Element actions for the home page.
    this.checkuserToggleButtonIsPresent = function () {
        return alb.elementPresent(userToggle);
    };

    this.clickLoginButton = function () {
        alb.clickElement(loginButton);
    };

    this.clickSignUpButton = function () {
        alb.clickElement(signupButton)
    };

    this.setSearchTxt = function (searchValue) {
        alb.sendText(searchTxt,searchValue);
    };

    this.clickSearchSubmit = function () {
        alb.clickElement(searchSubmit);
    };

    this.clickNextArrow = function () {
        alb.clickElement(nextArrow);
    };

    this.clickPreviewArrow = function () {
        alb.clickElement(previewArrow);
    };

    this.isPreviewArrowEnabled = function () {
        return alb.elementEnabled(previewArrow);
    };

    this.isNextArrowEnabled = function () {
        return alb.elementEnabled(nextArrow);
    };

    this.clickBookReadButton = function () {
        alb.clickElement(bookReadButton);
    };

    this.clickBookBorrowButton = function () {
        alb.clickElement(bookBorrowButton);
    };

    this.clickSubject = function () {
        alb.clickElement(subjects)
    }

};

// Exports the home page Object.
module.exports = new HomePage();