var EventEmitter = require('events');
var util = require('util');

function Greetr() {
    this.greeting = 'Hello world';
}

util.inherits(Greetr, EventEmitter); //lo que queremos y de donde lo queremos  //inherits nos permite combinar creando en medio la opcion de comunicarse

/*Greetr.prototype.greet = function() {
    console.log(this.greeting);  //accede a la propiedad de greeter
    this.emit('greet');  //vas acceder a greet
    
}*/

Greetr.prototype.greet = function(data) {
    console.log(`${this.greeting}: ${data}`);
    this.emit('greet', data);
    
}

var greeter1 = new Greetr();

greeter1.on('greet', function(data) {
    console.log(`Someone greeteed!: ${data}`); 
});

greeter1.greet('Tony');  //dispara de emisor de eventos
//-------------------------------------------------------//
var obj = {
    name: 'John Doe',
    greet: function(param) {
        console.log(`Hello ${this.name} ${param}`);
    }
}

obj.greet();
obj.greet.call({name: 'Jane Doe'}) ;//funciones tienen metodos  //puedo mandar un parametro al constructor
obj.greet.apply({name: 'Jane Doe'});
var param = 'Uchiha';
obj.greet.call({name: 'John Doe'}, param);