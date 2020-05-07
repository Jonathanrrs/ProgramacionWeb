// function statement
//Función normal
/*function greet() {
     console.log(`Hi`);
    
 }

 greet();*/

//Función de la flecha

 let greet = () => {
     console.log(`Hi`); //El uso de backtic
 }

 greet();

 //functions are first-class
 let logGreeting = (fn) => {
     fn();
 }

 /*logGreeting(greet);*/

 //Función anonima
 logGreeting(() => {
     console.log(`Hi`); //Función como parametro
     
 });

 //Functions expression, cuando a una variable le envio una funcion

 var greetMe = function() {
     console.log(`Hi tony`);
     
 }

 //It's first-class

 logGreeting(greetMe);


 // use a function expression on the fly, cuando no hay una definicion  previa

 logGreeting(function() {  //Esto es con la palabra reservada function pero es lo mismo a la de flecha ya hecha
     console.log(`Hello tony!`);
     
 })
//13/02/2020
 //String interpolation
 var a = 10;
 console.log(`Hello world I'm the variable a=${a}`); //template string

 //object literal
 var persona = {
     nombre = "Jonathan",
     paterno = "Ruiz",
     Materno = "Sandoval",
     Dirección: {
         calle: "limoneras",
         num : "1574",
         cp: "28048"
     }
 }

 //Acceder a una key
 console.log(persona.nombre);
 console.log(persona['nombre']); //brackets se usa comilla simple

//18feb
//Javascript hoisting --> var function()
//arrow no

//temas
//eventos
//cadena prototipo
//array funciones

//eventos
/*ejemplo               ruta      handler
applicationCache.get('/users', () => {
    console.log(`Hola`);
    
})*/

//herencia prototipada
//array de funciones, emisor de eventos