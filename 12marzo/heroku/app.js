//http://direcciones.herokuapp.com/ //esto genera al azar, no lo ocupamos para esta practica
//la contra empieza con # 

//12marzo
//heroku
//git init
//npm init -y

//instalar express
// npm i express

//se crea archivo llamado .gitignore
//dentro se pone la linea node_modules

//wn lugar del comando $ heroku git:clone -a serversayhello
//se pone:
//git remote add heroku https://git.heroku.com/serversayhello.git
//git remote -v
//git add.
//git commit -m "inicial"
//git status
//git push heroku master
//no se puede hacer aqui el heroku open

var express = require('express');
var app = express();
app.get('/', (req, res) => {
    res.send("Hello world in Heroku with Node.js")
});
app.listen(process.env.PORT, '0.0.0.0');