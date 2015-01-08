var express = require('express');
var app = express();

var server = app.listen(8080, function () {

    var host = server.address().address;
    var port = server.address().port;

    console.log('Express server listening at http://%s:%s', host, port)

});

app.post('/data', function(req, res) {
    console.log('received post request');
    res.send('Your data has been received!');
});

app.use(express.static('src/public'));

