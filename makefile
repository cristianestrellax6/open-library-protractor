default: test
test:
	node_modules/protractor/bin/protractor Protractor/Confs/conf.js --params.Login.user '$OL_CREDS_USR' --params.Login.password '$OL_CREDS_PSW' --suite 'regression'
PHONY: test