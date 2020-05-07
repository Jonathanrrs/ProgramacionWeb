'use strict';

const EventEmitter = require('events');
module.exports = class Greetr extends EventEmitter {   //module.exports para exportar el modulo
    constructor() { //el constructor
        super(); //se reemplaza por el call(this), es lo mismo, para la herencia de una clase  <----   es la llamada al super constructor
        this.greeting = 'Hello world!'; //es una propiedad
    }

    greet(data) {  //es una funcion miembro
        console.log(`${this.greeting}: ${data}`);
        this.emit('greet', data);  
    }
}