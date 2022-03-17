var XMLHttpRequest = require('xhr2');
const fs = require('fs');
const request = new XMLHttpRequest();
request.open("GET", "https://imdb-api.com/en/API/Search/k_a0xlltxv/inception 2010");
request.send();
request.onload = () => {
    if(request.status === 200){
        movie = JSON.parse(request.response)
        movie_to_JSON = JSON.stringify(movie);
        saveToFile(movie_to_JSON);
       

    }else{
        console.log('error ${request.statuts}');
    }
}


function saveToFile(data){
  
    fs.writeFile('movies.json', data, (err) => {
        if (err) {
            throw err;
        }
        console.log("JSON data is saved.");
        getObject();
    });
}

function getObject(){
    fs.readFile('movies.json', 'utf-8', (err, data) => {
        if (err) {
            throw err;
        }
    
        // parse JSON object
        const movie = JSON.parse(data.toString());
      
        // print JSON object
        for (var key in movie) {
            console.log(key);
           // console.log(movie[key]);
            for(let key2 in movie[key]){
                console.log("keyyyyyyy");
                console.log(key2['id']);
            }
        }

});
}   

