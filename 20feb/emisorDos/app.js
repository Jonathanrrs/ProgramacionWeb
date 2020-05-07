var Emitter = require('events');
var eventsConfigure = require('./config').events;
var emtr = new Emitter();
emtr.on(eventsConfigure.GREET, function() { 
    console.log('Somewhere someone said hello');
    
});

emtr.on(eventsConfigure.GREET, function() {
    console.log('A greeting ocurred!');
    
});


console.log('Hello!');
emtr.emit('greet');

