
var alb = require('../Base/ActionsLibrary.js');
var elb = require('../Base/ElementLibrary.js');

// Login Page Object.
var LoginPage = function(){

    // Elements for the Login Page
    var loginButton     = elb.name("login");
    var usernameTxt     = elb.name("username");
    var passwordTxt     = elb.name("password");


    // Element actions for the login page.
    this.clearLoginTextboxs = function () {
        alb.clearContent(usernameTxt);
        alb.clearContent(passwordTxt);
    };

    this.checkLoginButtonIsPresent = function () {
        return alb.elementPresent(loginButton);
    };

    this.enterUsername = function(username){
        alb.sendText(usernameTxt,username);
    };

    this.enterPassword = function(password){
        alb.sendText(passwordTxt,password);
    };

    this.clickLoginPage = function(){
        alb.clickElement(loginButton);
    };

    this.fullLogin = function () {
        this.enterUsername(browser.params.Login.user);
        this.enterPassword(browser.params.Login.password);
        this.clickLoginPage();
    }
};

// Exports the LoginPage Object.
module.exports = new LoginPage();