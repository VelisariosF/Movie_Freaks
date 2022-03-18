//var XMLHttpRequest = require('xhr2');
//const fs = require('fs');
//const { get } = require('https');
const JSON_FILES_ROOT_FOLDER_PATH = "../json/";
const request = new XMLHttpRequest();
/*
function getImdbData(){

    request.open("GET", "https://imdb-api.com/en/API/Search/k_a0xlltxv/batman");
    request.send();
    request.onload = () => {
        if(request.status === 200){
            movie = JSON.parse(request.response)
            movie_to_JSON = JSON.stringify(movie);
            saveToFile(movie_to_JSON, JSON_FILES_ROOT_FOLDER_PATH + 'movies.json');
           
    
        }else{
            console.log('error ${request.statuts}');
        }
    }
    
}

function saveToFile(data, filename){
  
    fs.writeFile(filename, data, (err) => {
        if (err) {
            throw err;
        }
        console.log("JSON data is saved.");
        getObject(JSON_FILES_ROOT_FOLDER_PATH + 'movies.json');
    });
}
*/
function getObject(filename){
    fs.readFile(filename, 'utf-8', (err, data) => {
        if (err) {
            throw err;
        }
    
        // parse JSON object
        const movie = JSON.parse(data.toString());
        
        // print JSON object
      //  for (var key in movie) {
        //    console.log(key);
          //  console.log(movie[key.indexOf('id')]);
          
        //}
        const results = movie['results'];
        
        console.log(results[0]['image']);
});
}   


function getIMG(filename){
    fs.readFile(filename, 'utf-8', (err, data) => {
        if (err) {
            throw err;
        }
    
        // parse JSON object
        const movie = JSON.parse(data.toString());
        
        // print JSON object
      //  for (var key in movie) {
        //    console.log(key);
          //  console.log(movie[key.indexOf('id')]);
          
        //}
        const results = movie['results'];
        
        return results[0]['image'];
});
    
}

function getIMGSRC(){
    
    var elem = document.createElement("img");
    let img_source = getData();
    elem.setAttribute("src", '"' + img_source + '"');
    document.getElementById("image-container").appendChild(elem);
    
}



function getData(){
    request.open("GET", "https://imdb-api.com/en/API/Search/k_a0xlltxv/batman");
    request.send();
    request.onload = () => {
        if(request.status === 200){
            let movie = JSON.parse(request.response)
    
            const results = movie['results'];
            console.log(results[0]['image']);
            return results[0]['image'];
            
           
    
        }else{
            console.log('error ${request.statuts}');
        }
    }
}

