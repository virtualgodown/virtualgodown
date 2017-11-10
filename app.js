var express = require('express');
var path=require('path');
var app = express();
const fs = require('fs');
// Define the port to run on
app.set('port', process.env.PORT);
if (!app.get('port')) {
  app.set('port', 3000);
}
app.use("/", express.static(path.join(__dirname, 'public')));
app.use("/*",function(req,res,next){
  res.sendFile(path.join(__dirname, '/public/html/index.html'));
})
// Listen for requests
var server = app.listen(app.get('port'), function() {
  var port = server.address().port;
  console.log('port ' + port);
});
