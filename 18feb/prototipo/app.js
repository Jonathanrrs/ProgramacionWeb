function Person(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname; 
}
Person.prototype.greet = function() { //es un prototipo pero de la clase, agregando atributo o funcionalidad, metodo
    console.log(`Hello, ${this.firstname} ${this.lastname}`);
    
}
var john = new Person('John', 'Doe'); //creamos la clase
//console.log(john.firstname);
john.greet(); //llamamos al metodo que esta en el prototipo de la clase
var jane = new Person('Jane', 'Doe'); 
jane.greet(); //

console.log(john.__proto__);
console.log(jane.__proto__);
console.log(john.__proto__ === jane.__proto__); //comprobamos que su prototipo es igual, apunta a lo mismo, es por referencia, no por valor

