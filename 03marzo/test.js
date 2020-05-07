setTimeout( () => {
    console.log('1');
    
}, 3000);

setTimeout(() => {
    console.log('2');
    
}, 0);

console.log('3');
//cuando una funcion es pasada a otra funcion la cual asume en que un momento sera pasada a otra, como cuando yo paso una funcion como paramatro a otra