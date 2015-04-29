"use strict";

var socket = io();

var refocus = function() {
    window.scrollTo(0, document.body.scrollHeight);
};

document.forms[0].onsubmit = function() {
    sendMessage();
    return false;
}

function sendMessage() {
    var inp = document.getElementById('message');
    if(inp.value != '') {
        socket.emit('message', inp.value);
        inp.value = '';
    }
}

function receiveMessage(msg) {
    var log = document.getElementById('log'),
        li = document.createElement('li'),
        text = document.createTextNode(msg);
    li.appendChild(text);
    log.appendChild(li);
    
    refocus();
}

socket.on('message', function(msg) {
    receiveMessage(msg);
});