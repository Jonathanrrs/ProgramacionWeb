const request = require('request');
const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Avenida%20Universidad%20333,%20Las%20V%C3%ADboras,%2028040%20Colima,%20Col..json?types=address&proximity=-122.39738575285674,37.7925147111369453&access_token=pk.eyJ1Ijoiam9uYXRoYW5ycnMiLCJhIjoiY2s3ZXVsMGJ6MXU0NzNlcXI2NHB5OW0xdyJ9.2ojNNCg6YGnqM9sCPFJQnQ';

//otro
request({url, json:true}, (error, response) => { //hay 2 params, 1° es onject literal, el 2° un callback, trae dos datos: error y response
    const data = response; //json.parse(responde.body) se lo quitamos y le agregamos a la linea de arriba el true, ya no debemos hacer el parseo//json parse: hago el parseo de la respuesta, es el body del http, json parse analiza el contenido de una cadena con formato JSON y extrae los valores que puede almacenar en un campo o variable 
    //console.log(data); 
    if(error) {
        console.log('Ups..!');
    }
    else{
        //console.log(data.features[0].place_name);
        //console.log(data.features[0].center);
        console.log(`Dirección ${data.features[0].place_name}`);
        console.log(`Coordenadas ${data.features[0].center}`);
        
        
        
    }

});






