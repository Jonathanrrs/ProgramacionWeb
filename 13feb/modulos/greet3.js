function Greetr() { //mayuscula porque es una clase
    this.greeting = 'Hello world!!';
    this.greet = function() {
        console.log(this.greeting);
        
    }
}

module.exports = new Greetr(); //se exporta una clase, un objeto