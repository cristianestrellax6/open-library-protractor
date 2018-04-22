
var loginPage   = require('../../PageObjects/LoginPage.js'  );
var subjectPage = require('../../PageObjects/SubjectPage.js');
var homePage    = require('../../PageObjects/HomePage.js'   );
var pages       = require('../../Pages/Pages.js'            );

describe("Test Subject page", function(){

    //just for non-angular pages
    beforeEach(function () {
        isAngularSite(false);
    });

    it('Ebook count is displayed', function () {
        pages.getOpenLibraryPage();
        homePage.clickSubject();


        expect(subjectPage.isEbooksCountDisplayed()).toBe(true);
    });

    it('Graph is displayed', function () {
        pages.getOpenLibraryPage();
        homePage.clickSubject();
        expect(subjectPage.isGraphDisplayed()).toBe(true);
    });

    it('(not logged) clicking add to list redirects to login', function () {
        pages.getOpenLibraryPage();
        homePage.clickSubject();
        subjectPage.clickAddToList();

        expect(loginPage.checkLoginButtonIsPresent()).toBe(true);
    });

});