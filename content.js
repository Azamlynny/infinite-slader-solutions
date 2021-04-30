import fetch from 'node-fetch';

const url = 'https://www.slader.com/textbook/9781118473504-elementary-linear-algebra-11th-edition/155/truefalse-exercises/i/';

let header = new fetch.Headers();
h.append(`X-Forwarded-For`, (Math.random().toString()));

let req = new fetch.Request(url, {
    method: 'GET',
    headers: h,
    mode: 'cors'
});

fetch(req)
    .then( (response)=>{
        if(response.ok){
            return response.json();
        }
    })
    .then( (jsonData) =>{
       console.log(jsonData); 
    });

