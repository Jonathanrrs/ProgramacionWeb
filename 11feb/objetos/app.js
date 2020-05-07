var person = {
    firstname: 'John',
    lastname: 'Doe',
    greet: function () {
        console.log(`Hello, ${this.firstname} ${this.lastname}`);
        
    }
}
person.greet();  //acceder con notación de punto a la key
console.log(person['firstname']); //acceder con bracket a la key



