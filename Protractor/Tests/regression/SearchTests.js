
var searchPage  = require('../../PageObjects/SearchPage.js' );
var homePage    = require('../../PageObjects/HomePage.js'   );
var pages       = require('../../Pages/Pages.js'            );

describe("Test Search page", function(){

    //just for non-angular pages
    beforeEach(function () {
        isAngularSite(false);
    });

    it('list of books count', function () {
        pages.getOpenLibraryPage();
        homePage.setSearchTxt(browser.params.SearchKeys.adventure);
        homePage.clickSearchSubmit();

        expect(searchPage.checkBookListCount()).toBe(true);
        expect(searchPage.checkBookAutorCount()).toBe(true);
        expect(searchPage.checkBookTitleCount()).toBe(true);
    });

    it('list of books count', function () {
        pages.getOpenLibraryPage();
        homePage.setSearchTxt(browser.params.SearchKeys.noResult);
        homePage.clickSearchSubmit();

        expect(searchPage.isNoHitsDisplayed()).toBe(true);
    });

    it('list of books count', function () {
        pages.getOpenLibraryPage();
        homePage.setSearchTxt(browser.params.SearchKeys.adventure);
        homePage.clickSearchSubmit();

        expect(searchPage.isPaginationDisplayed()).toBe(true);
    });



});