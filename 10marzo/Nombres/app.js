const random = require('random-all');
const request = require('request');
const dir = require('./addresses');





let randomInt = random.getInt(1,100);
let randomIntDir = random.getInt(0,9);
let direccion = dir[randomIntDir];

let direccionFinal = `${direccion["Street Address"]}`;










const url = `https://swapi.co/api/people/${randomInt}`;

request({url, json:true}, (error, response) => { 
    const data = response.body;
    //console.log(data); 
    if(error) {
        console.log('Ups..!');
    }
    else{
        console.log(data.name);
        
    }
});

let url2 = `https://api.mapbox.com/geocoding/v5/mapbox.places/${direccionFinal}.json?types=address&proximity=-122.39738575285674,37.7925147111369453&access_token=pk.eyJ1Ijoiam9uYXRoYW5ycnMiLCJhIjoiY2s3ZXVsMGJ6MXU0NzNlcXI2NHB5OW0xdyJ9.2ojNNCg6YGnqM9sCPFJQnQ`
  
request({url:url2, json:true}, (error, response) => { 
    const data = response.body;
    //console.log(data); 
    if(error) {
        console.log('Ups..!');
    }
    else{
        console.log(data.features[0].center);
        let coordenadas = data.features[0].center;
        let coor = `${coordenadas[1]}, ${coordenadas[0]}`
        console.log(coor);

        let url3 = `https://api.darksky.net/forecast/2f43dd15e21f95dc63356fc49bbb230b/${coor}`;
          
request({url:url3, json:true}, (error, response) => { 
    const data = response.body;
    //console.log(data); 
    if(error) {
        console.log('Ups..!');
    }
    else{
      console.log(data.currently.temperature)
      
        
        
    }
});
        
        
    }
});