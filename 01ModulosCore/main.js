/*var reloj = require('./reloj.js')//No es necesaria la extensión .js/.json

console.log(
    reloj.clock
)
*/
/*
Código de Samu
*/
var reloj = require("./reloj");

var miReloj = new reloj();

miReloj.on("tictac", ()=>{
    miReloj.theTime();
});




// module.exports = Clock;

