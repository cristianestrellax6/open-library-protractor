default: test
test:
	node_modules/protractor/bin/protractor Protractor/Confs/conf.js --params.Login.user $(usr) --params.Login.password $(psw) --suite 'regression'