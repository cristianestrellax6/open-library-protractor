
var alb = require('../Base/ActionsLibrary.js');
var elb = require('../Base/ElementLibrary.js');

// SignUp Page Object.
var SignUpPage = function(){

    // Elements for the SingUp Page
    var email               = elb.name  ("email");
    var screenName          = elb.name  ("username");
    var passwordTxt         = elb.name  ("password");
    var passwordConfirm     = elb.name  ("password2");
    var termsOfUseCheckbox  = elb.name  ("agreement");
    var signupButton        = elb.css   (".input #signup");
    var invalidClass        = elb.cssAll(".invalid").get(0);

    // Element actions for the SignUp Page
    this.setEmail = function (emailValue) {
        alb.sendText(email,emailValue);
    };

    this.setScreenName = function (nameValue) {
        alb.sendText(screenName,nameValue);
    };

    this.clickScreenName = function () {
        alb.clickElement(screenName);
    };

    this.setPassword = function (passValue) {
        alb.sendText(passwordTxt,passValue);
    };

    this.setPasswordConfirm = function (passCValue) {
        alb.sendText(passwordConfirm,passCValue)
    };

    this.clickTermsOfUse = function () {
        alb.clickElement(termsOfUseCheckbox);
    };

    this.clickSignUp = function () {
        alb.clickElement(signupButton);
    };

    this.isInvalidDisplayed = function () {
        return alb.elementDisplayed(invalidClass);
    };

    this.isSignUpButtonDisplayed = function () {
        return alb.elementDisplayed(signupButton);
    };
};

// Exports the SignUp Object.
module.exports = new SignUpPage();