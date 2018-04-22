
var signUpPage  = require('../../PageObjects/SignUpPage.js' );
var loginPage   = require('../../PageObjects/LoginPage.js'  );
var homePage    = require('../../PageObjects/HomePage.js'   );
var pages       = require('../../Pages/Pages.js'            );

describe("Test Home Page", function(){

    //just for non-angular pages
    beforeEach(function () {
        isAngularSite(false);
    });

    it('No user toggle if user is not logged in', function () {
        pages.getOpenLibraryPage();

        expect(homePage.checkuserToggleButtonIsPresent()).toBe(false);
    });


    it('Arrow disabled if no more books', function () {
        expect(homePage.isPreviewArrowEnabled()).toBe(false);
        expect(homePage.isNextArrowEnabled()).toBe(true);
    });

    it('Clicking login button redirects to login page', function () {
        pages.getOpenLibraryPage();
        homePage.clickLoginButton();

        expect(loginPage.checkLoginButtonIsPresent()).toBe(true);
    });

    it('Clicking sign up button redirects to sign up page', function () {
        pages.getOpenLibraryPage();
        homePage.clickSignUpButton();

        expect(signUpPage.isSignUpButtonDisplayed()).toBe(true);
    });

    it('(not logged in) Clicking borrow button redirects to login', function () {
        pages.getOpenLibraryPage();
        homePage.clickBookBorrowButton();

        expect(loginPage.checkLoginButtonIsPresent()).toBe(true);
    });

    it('(logged in) Clicking borrow button redirects to book read', function () {
        pages.getOpenLibraryPage();

        homePage.clickLoginButton();
        loginPage.fullLogin();
        homePage.clickBookBorrowButton();

        expect(loginPage.checkLoginButtonIsPresent()).toBe(false);
    });

});