
var EventEmitter = require('events').EventEmitter;
class Clock extends EventEmitter {

    constructor(){
        super();
        setInterval(() => {
            this.emit('tictac')
        }, 1000);
    }

    theTime() {
        var date = new Date(),
        hrs = date.getHours(),
        min = date.getMinutes(),
        sec = date.getSeconds(),
        msg = hrs + ':' + min + ':' + sec;

        console.log(msg);
    }
}

var tula = new Clock()

module.exports = Clock;
