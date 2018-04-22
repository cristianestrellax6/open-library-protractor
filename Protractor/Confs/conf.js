
var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');
var SpecReporter = require('jasmine-spec-reporter');
var pages = require('../Pages/Pages.js');

// Configuration file.
exports.config = {

    //// Sauce user and key to run test in sauce labs
    //sauceUser: 'xxxxxx',
    //sauceKey: '039324cc-b74f-451e-9b90-xxxxxx',

    //docker hub Address or selenium server address.
    seleniumAddress: 'http://127.0.0.1:4444/wd/hub',

    //Un comment this line if you want to test locally
    //directConnect: true,

    // Capabilities to be passed to the webdriver instance.
    capabilities: {
        'browserName': 'chrome',
        'shardTestFiles': true,
        'maxInstances': 1,
        'chromeOptions': {
            'args': ['--test-type'],
            // Set download path and avoid prompting for download even though
            prefs: {
                'download': {
                    'prompt_for_download': false,
                    'directory_upgrade': true
                }
            }
        }
    },

    // This can be changed via the command line as:
    // --params.login.user 'ngrocks'
    // ex. browser.params.login.user
    params: {
        
        /** login keys**/
        Login: {
            badUser: 'as',
            badPassword: '12',
            screenName: 'compayaso',
            user: 'example@example.com',
            password: 'Qwerty6'
        },

        SearchKeys: {
            adventure: 'adventure',
            noResult: 'asdsadasd'
        },

        /** Servers: go to ./Protractor/ServerURLs.js to define it
         * 0 = production
         * **/
        Server:{
            server: 0
        }
    },

    suites: {
        regression: '../Tests/regression/*.js'
    },

    // Spec patterns are relative to the current working directly when
    // protractor is called.
    specs: [

        //'../Tests/Smoke/LoginTest.js',
    ],

    // Framework to use. Jasmine 2 is recommended.
    framework: 'jasmine2',

    onPrepare: function() {

        // Used for non-angular pages
        global.isAngularSite = function(flag) {
            browser.ignoreSynchronization = !flag;
        };

        // Add the jasmine html reporter
        jasmine.getEnv().addReporter(new Jasmine2HtmlReporter({
            savePath: './TestResults/report'+(new Date()).toString().split(' ').splice(1, 4).join('').split(':').join('-')+'/',
            filePrefix: pages.getServer().substr(8,pages.getServer().indexOf('.')-8)+'-',
            consolidate: true,
            consolidateAll: false
        }));

        // Add the jasmine spec reporter
        jasmine.getEnv().addReporter(new SpecReporter({
            displayStacktrace: 'specs',
            displayFailedSpec: true,
            displaySpecDuration: true,
            displaySuiteNumber: true,
            displayFailuresSummary: false,
            displayPendingSummary: false

        }));


        // Set the browser windows size and position
        browser.manage().window().setSize(1280, 800);
        browser.manage().window().setPosition(1, 1);

    },

    // Options to be passed to Jasmine.
    jasmineNodeOpts: {
        print: function() {}
    },

    allScriptsTimeout: 15000

};
