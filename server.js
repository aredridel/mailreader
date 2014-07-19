var sneaker = require('sneaker');
var http = require('http');

var net = require('net');

var ecstatic = require('ecstatic')(__dirname + '/public');

var server = http.createServer(ecstatic);
server.listen(process.env.PORT || 8080);

sneaker(server, function (stream) {
    var client = net.connect({host: 'mail.nbtsc.org', port: 143})
    stream.pipe(process.stdout, {end: false});
    client.pipe(process.stdout, {end: false});
    client.pipe(stream).pipe(client);
    stream.on('error', function (err) {
        console.error(err);
    });
});
