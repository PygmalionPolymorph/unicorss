 var express = require("express");
 var url = require('url');
 var app = express();

 var utils = {};
//takes the passed-in string and returns it
//wrapped in the callback name
utils.wrapDataInCallback = function(req,str){
  var
  start = utils.getJsonCallbackName(req) + '(',
  end = ')';
  return start + str + end;
};
utils.isJsonCallback = function(req){
  var retVal = utils.getJsonCallbackName(req);
  if(retVal){return true;}
  return false;
};
utils.getJsonCallbackName = function(req){
  var url_parts = url.parse(req.url, true);
  if(!url_parts.query || !url_parts.query.callback){return false;}
  return url_parts.query.callback;
};

var parseRSS = require('parse-rss');

 /* serves main page */
app.get("/", function(req, res) {
    var url = 'http://devopsreactions.tumblr.com/rss';

    parseRSS(url, function(err, response) {
	if (err) {
            console.log(err);
	}
        response = JSON.stringify(response);

        if (utils.isJsonCallback(req)) {
            response = utils.wrapDataInCallback(req, response);
        }

	res.send(response);
    });
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
    console.log("Listening on " + port);
});
