var person = {  //no representa una clase, representa un objectliteral
    firstname: '',
    lastname: '',
    greet: function() {
        return `${this.firstname} ${this.lastname}`;
    }
}

var john = Object.create(person); //toma como parametro un objectliteral sin la necesidad de new 
john.firstname = 'John';
john.lastname = 'Doe';

var jane = Object.create(person);
jane.firstname = 'Jane';
jane.lastname = 'Doe';

console.log(john.greet());
console.log(jane.greet());
