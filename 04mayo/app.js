const express = require('express');
const app = express();

const port = 3000;
//Mapear la carpeta publica a assets
app.use('/assets', express.static(__dirname + '/public'));

app.get('/', (req,res) => {
    //res.send('Hola');
    res.send('<html><head><title>Page Title</title></head><body><h1>My First Heading</h1><p>My first paragraph.</p></body></html>');
});

app.get('/person/:id', (req,res) => {
    console.log(req.params.id);
    //res.send('<html><head><title>Page Title</title></head><body><h1>My First Heading</h1><p>My first paragraph.</p></body></html>');
    res.send(`<html><head><link href=/assets/style.css type=text/css rel=stylesheet><title>Page Title</title></head><body><h1>El id de la persona es: ${req.params.id}</h1><p>My first paragraph.</p></body></html>`)
});

app.listen(port,() => {
    console.log('Listening on port 3000');
    
});
//npm install nodemon -D
//EJS
