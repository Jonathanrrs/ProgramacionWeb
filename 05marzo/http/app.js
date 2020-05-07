const request = require('request');
var fahrenheitToCelsius = require('fahrenheit-to-celsius'); //instalar paquete para convertir de grados fahrenheit a celsious
const url = 'https://api.darksky.net/forecast/2f43dd15e21f95dc63356fc49bbb230b/19.24,-103.72?lang=es';
const url2 = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Avenida%20Universidad%20333,%20Las%20V%C3%ADboras,%2028040%20Colima,%20Col..json?types=address&proximity=-122.39738575285674,37.7925147111369453&access_token=pk.eyJ1Ijoiam9uYXRoYW5ycnMiLCJhIjoiY2s3ZXVsMGJ6MXU0NzNlcXI2NHB5OW0xdyJ9.2ojNNCg6YGnqM9sCPFJQnQ';
//si tenemos una key que su valor y la key es lo mismo, solo ponemos uno
request({url, json:true}, (error, response) => { //hay 2 params, 1° es onject literal, el 2° un callback, trae dos datos: error y response
    const data = response.body //json.parse(responde.body) se lo quitamos y le agregamos a la linea de arriba el true, ya no debemos hacer el parseo//json parse: hago el parseo de la respuesta, es el body del http, json parse analiza el contenido de una cadena con formato JSON y extrae los valores que puede almacenar en un campo o variable 
    //console.log(data); 
    if(error) {
        console.log('Ups..!');
    }
    else{
        //console.log(data);
        //console.log(data.daily.data[0].summary + 'clima');
        console.log(`${data.daily.data[0].summary} es el clima`);
        
        
        //console.log(fahrenheitToCelsius(data.currently.temperature));
        //var temp = fahrenheitToCelsius(data.currently.temperature);
        //console.log(temp.toFixed(2))
    }
})


//otro
request({url2, json:true}, (error, response) => { //hay 2 params, 1° es onject literal, el 2° un callback, trae dos datos: error y response
    const datas = response; //json.parse(responde.body) se lo quitamos y le agregamos a la linea de arriba el true, ya no debemos hacer el parseo//json parse: hago el parseo de la respuesta, es el body del http, json parse analiza el contenido de una cadena con formato JSON y extrae los valores que puede almacenar en un campo o variable 
    //console.log(data); 
    if(error) {
        console.log('Ups..!');
    }
    else{
        console.log(datas);
        
    }
})
//dark sky api nos registramos, correo ucol

//instalar a chrome json formatter

//registrar en mapbox


//https://api.mapbox.com/geocoding/v5/mapbox.places/Avenida%20Universidad%20333,%20Las%20V%C3%ADboras,%2028040%20Colima,%20Col..json?types=address&proximity=-122.39738575285674,37.7925147111369453&access_token=pk.eyJ1Ijoiam9uYXRoYW5ycnMiLCJhIjoiY2s3ZXVsMGJ6MXU0NzNlcXI2NHB5OW0xdyJ9.2ojNNCg6YGnqM9sCPFJQnQ