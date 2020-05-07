//temas
//objects
//objects literals

var greet = require('./greet1'); //lo atrapamos en una variable
greet(); //lo invocamos

var greet2 = require('./greet2').greet;
greet2();

var greet3 = require('./greet3');
greet3.greet();
greet3.greeting = 'Changed hello world!'; //se modifica el objeto

var greet3b = require('./greet3'); //se hace referencia la misma direccion fisica
greet3b.greet();

var Greet4 = require('./greet4'); //mayuscula porque es una clase 
var grtr = new Greet4(); //invoco al constructor de la clase
grtr.greet(); //con punto porque ya puedo acceder al metodo de la clase

x = 108;
var x;
console.log(`El valor de x es ${x}`);
