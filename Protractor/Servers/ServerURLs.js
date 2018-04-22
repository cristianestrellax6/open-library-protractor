
// Servers and paths
var ServerURLs = function(){

    // Return the Server URL
    this.getServer = function(){
        var serverURls = [
            "https://openlibrary.org"
        ];

        return serverURls[browser.params.Server.server];
    };

};

// Exports the serverURLs.js object
module.exports = new ServerURLs();