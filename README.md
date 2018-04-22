# open-library-protractor
Automated tests with Protractor 5.3.0 and Jasmine2

Resources needed
==========
Recommended install [WebStorm](https://www.jetbrains.com/webstorm/download/)

Install [NodeJS](https://nodejs.org/en/download/) (version => 6)

Install Protractor and webdriver-manager:

    npm install protractor@5.3.0 -g
    npm install webdriver-manager -g
    webdriver-manager update    

Environment 
==========
Clone GitHub repository and install dependencies:



Run the tests locally 
==========
By command line:

	protractor ./Protractor/Confs/conf.js

Via WebStorm IDE:

	Menu->Run->Edit Configurations
	Add New Configuration
	Name: Protractor
	JavaScript file: /usr/local/lib/node_modules/protractor/lib/cli.js
	Application parameters: ./Protractor/Confs/conf.js --suite smoke
	Ok
	Menu->Run->Run Protractor


Global Variables
==========
Variables that may be pass when running test:

    ex. protractor ./Protractor/Confs/conf.js --params.login.user 'ngrocks'

    --params.Login.user
    --params.Login.password
    --params.Server.server
    
    Suite: --suite smoke




