const express = require('express');
const app = express();


const port = 3000;
//Mapear la carpeta publica a assets
app.use('/assets', express.static(__dirname + '/public'));

app.set('view engine', 'ejs')

app.get('/', (req,res) => {
    //res.send('Hola');
    res.render('index');
});

app.get('/person/:id', (req,res) => {
    //console.log(req.params.id);
    res.render('index', {ID: req.params.id})
});

app.listen(port,() => {
    console.log('Listening on port 3000');
    
});

//instalar ejs