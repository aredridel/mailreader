var imap = require('imap');

var sneaker = require('sneaker');
var stream = require('stream');

var dc = require('duplex-combination');

var s = sneaker('/imap');

var c = imap({socket: pretendSocket(s), user: 'test', password: 'test', authTimeout: 10000});
c.connect();

function pretendSocket(s) {
    s.setKeepAlive = function () { };
    s.setTimeout = function () { };
    s.connect = function () { 
        this.emit('connect');
    };

    return s;
}
