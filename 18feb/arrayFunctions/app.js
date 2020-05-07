// objects properties and methods
var obj = {
    greet: 'Hello'
}
                          //como acceder a la propiedad
console.log(obj.greet); //mediante el punto
console.log(obj['greet']); //nombre de la key
var prop = 'greet'; //mediante una variable
console.log(obj[prop]);

//functions and arrays
var arr = [];
//meter 3 funciones a un array
arr.push(function() {
    console.log('Hello world 1');
});
arr.push(function() {
    console.log('Hello world 2');
});
arr.push(function() {
    console.log('Hello world 3');
});

arr.forEach(function(item) { //con el foreach se recorre el array porla cual nos muestra lo que hay en cada posicion
    item();
});

arr[1]();


