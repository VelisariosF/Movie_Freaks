/*
const movie_data = fetch('https://imdb-api.com/en/API/Search/k_a0xlltxv/inception 2010')
  .then(response => response.json())
  .then(data => {
    
   
    var elem = document.createElement("img");
    let img_source = "";
    img_source = data['results'][0]['image'];
     elem.setAttribute("id", "main_image");
     elem.setAttribute("src", img_source);
    elem.innerHTML = img_source.toString();
    document.getElementById("image-container").appendChild(elem);
  });

*/

const imdb_api_url = "https://imdb-api.com/en/API/Search/k_a0xlltxv/";

const imdb_api_title_url = "https://imdb-api.com/en/API/Title/k_a0xlltxv/"
const JSON_FILES_ROOT_FOLDER_PATH = "../json/";

function search_movies(url){
  fetch(url)
  .then(response => response.json())
  .then(data => {
    
    const movie_results = data['results'];
    if(movie_results == null){
      showNoResultsPage();
    }else{
    let movies_data = [];
    for(let i = 0; i < movie_results.length; i++){
      let id = movie_results[i]['id'];
   
      createElement(imdb_api_title_url + id);
     
    }
  }
  });




}
 



function createElement(movie_url){
  fetch(movie_url)
  .then(response => response.json())
  .then(data => {
    
    const movie_results = data;
    let image = movie_results['image'];
    let title = movie_results['title'];
    let releaseDate = movie_results['releaseDate'];
    let director = movie_results['directors'];
    let stars = movie_results['stars'];
    let genres = movie_results['genres'];

    //create the list
    var movies_list = document.getElementById('movies_list');
    var elem_li = document.createElement('li');
    elem_li.setAttribute("class", "movie-container");


    var elem_img = document.createElement("img");
    elem_img.setAttribute("src", image);
    elem_li.appendChild(elem_img);


    var elem_title = document.createElement("h1");
    elem_title.innerHTML = title;
    elem_title.setAttribute("class", "title");
    elem_li.appendChild(elem_title);


    var elem_rldate = document.createElement("p");
    elem_rldate.innerHTML = releaseDate;
    elem_rldate.setAttribute("class", "rldate");
    elem_li.appendChild(elem_rldate);

    var elem_dir = document.createElement("p");
    elem_dir.innerHTML = director;
    elem_dir.setAttribute("class", "director");
    elem_li.appendChild(elem_dir);

    var elem_stars = document.createElement("p");
    elem_stars.innerHTML = stars;
    elem_stars.setAttribute("class", "stars");
    elem_li.appendChild(elem_stars);

    var elem_genre = document.createElement("p");
    elem_genre.innerHTML = genres;
    elem_genre.setAttribute("class", "genre");
    elem_li.appendChild(elem_genre);
    
    movies_list.appendChild(elem_li);

  });




}


function search(){
  removeAllChildNodes(document.getElementById("movies_list"));
  let user_imput = document.getElementById("user_input").value;
  search_movies(imdb_api_url + user_imput);


}

function showNoResultsPage(){
//  window.location('../NoResults.html');
  document.location.href = '../NoResults.html';
}


function removeAllChildNodes(parent) {
  while (parent.firstChild) {
      parent.removeChild(parent.firstChild);
  }
}