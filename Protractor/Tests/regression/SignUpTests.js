
var signUpPage  = require('../../PageObjects/SignUpPage.js' );
var homePage    = require('../../PageObjects/HomePage.js'   );
var pages       = require('../../Pages/Pages.js'            );

describe("Test Sign Up Page", function(){

    //just for non-angular pages
    beforeEach(function () {
        isAngularSite(false);
    });

    it('Invalid email set', function () {
        pages.getOpenLibraryPage();
        homePage.clickSignUpButton();

        signUpPage.setEmail(browser.params.Login.badUser);
        signUpPage.clickScreenName();

        expect(signUpPage.isInvalidDisplayed()).toBe(true);
    });

    it('Screen name must be between 3 and 20', function () {
        pages.getOpenLibraryPage();
        homePage.clickSignUpButton();

        signUpPage.setEmail(browser.params.user);
        signUpPage.setScreenName(browser.params.badUser);
        signUpPage.setPassword(browser.params.password);
        signUpPage.setPasswordConfirm(browser.params.password);
        signUpPage.clickTermsOfUse();
        signUpPage.clickSignUp();

        expect(signUpPage.isInvalidDisplayed()).toBe(true);
    });

    it('Password and confirm must be between 3 and 20', function () {
        pages.getOpenLibraryPage();
        homePage.clickSignUpButton();

        signUpPage.setEmail(browser.params.user);
        signUpPage.setScreenName(browser.params.screenName);
        signUpPage.setPassword(browser.params.badPassword);
        signUpPage.setPasswordConfirm(browser.params.badPassword);
        signUpPage.clickTermsOfUse();
        signUpPage.clickSignUp();

        expect(signUpPage.isInvalidDisplayed()).toBe(true);
    });

    it('Not able to signup if terms are not checked', function () {
        pages.getOpenLibraryPage();
        homePage.clickSignUpButton();

        signUpPage.setEmail(browser.params.user);
        signUpPage.setScreenName(browser.params.screenName);
        signUpPage.setPassword(browser.params.password);
        signUpPage.setPasswordConfirm(browser.params.password);
        signUpPage.clickSignUp();

        expect(signUpPage.isSignUpButtonDisplayed()).toBe(true);
    })

});