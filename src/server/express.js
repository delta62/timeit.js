var express = require('express');
var bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.json());

var server = app.listen(8080, serverStart);

app.post('/data', function(request, response) {
    console.log('data received:');
    console.log('==============');
    console.log(request.body);
    response.send();
});

app.use(express.static('src/public'));

function serverStart () {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Express server listening at http://%s:%s', host, port)
}

