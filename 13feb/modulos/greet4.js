function Greetr() { //mayuscula porque es una clase
    this.greeting = 'Hello world!!!';
    this.greet = function() {
        console.log(this.greeting);
    }
}

module.exports = Greetr; //no se pone parentesis porque no se quiere invocar