'use strict';
var Greetr = require('./greetr'); //aqui nos traemos el modelo con el require

/*const EventEmitter = require('events');
const util = require('util');
class Greetr extends EventEmitter {
    constructor() {
        super();
        this.greeting = 'Hello world!';
    }

    greet(data) {
        console.log(`${this.greeting}: ${data}`);        //Lo marcado en verde fue reemplazado por el modulo que nos trajimos exportandolo de greetr
        this.emit('greet', data);  
    }
}*/
/*
function Greetr() {
    EventEmitter.call(this);
    this.greeting = 'Hello world';
}*/

/*util.inherits(Greetr, EventEmitter); */



var greeter1 = new Greetr();

greeter1.on('greet', function(data) {
    console.log(`Someone greeteed!: ${data}`); 
});
var data = 'lol';
greeter1.greet(data);