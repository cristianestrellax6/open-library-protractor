
var loginPage   = require('../../PageObjects/LoginPage.js'  );
var homePage    = require('../../PageObjects/HomePage.js'   );
var pages       = require('../../Pages/Pages.js'            );

describe("Test The Login", function(){

    //just for non-angular pages
    beforeEach(function () {
        isAngularSite(false);
    });

    it('Bad login - Empty/empty', function () {
        pages.getOpenLibraryPage();
        homePage.clickLoginButton();
        loginPage.enterUsername('');
        loginPage.enterPassword('');
        loginPage.clickLoginPage();

        expect(loginPage.checkLoginButtonIsPresent()).toBe(true);
    });

    it('Bad login - good/empty', function () {
        loginPage.enterUsername(browser.params.Login.user);
        loginPage.enterPassword('');
        loginPage.clickLoginPage();

        expect(loginPage.checkLoginButtonIsPresent()).toBe(true);
    });

    it('Bad login - empty/good', function () {
        loginPage.clearLoginTextboxs();
        loginPage.enterUsername('');
        loginPage.enterPassword(browser.params.Login.password);
        loginPage.clickLoginPage();

        expect(loginPage.checkLoginButtonIsPresent()).toBe(true);
    });

    it('Bad login - good/bad', function () {
        loginPage.clearLoginTextboxs();
        loginPage.enterUsername(browser.params.Login.user);
        loginPage.enterPassword(Math.floor((Math.random() * 10000) + 1));
        loginPage.clickLoginPage();

        expect(loginPage.checkLoginButtonIsPresent()).toBe(true);
    });

    it('Bad login - bad/good', function () {
        loginPage.clearLoginTextboxs();
        loginPage.enterUsername(Math.floor((Math.random() * 10000) + 1));
        loginPage.enterPassword(browser.params.Login.password);
        loginPage.clickLoginPage();

        expect(loginPage.checkLoginButtonIsPresent()).toBe(true);
    });

    it('Bad login - GOOD/GOOD', function () {
        loginPage.clearLoginTextboxs();
        loginPage.enterUsername(browser.params.Login.user.toUpperCase());
        loginPage.enterPassword(browser.params.Login.password.toUpperCase());
        loginPage.clickLoginPage();

        expect(loginPage.checkLoginButtonIsPresent()).toBe(true);
    });

    it("To test good login",function(){
        loginPage.clearLoginTextboxs();
        loginPage.enterUsername(browser.params.Login.user);
        loginPage.enterPassword(browser.params.Login.password);
        loginPage.clickLoginPage();

        expect(homePage.checkuserToggleButtonIsPresent()).toBe(true);
    });

});