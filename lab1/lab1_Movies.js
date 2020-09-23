var favoriteMovies = ["titanic", "batman", "spiderman"]; //declare favoriteMovies

//if The not in movie Name, add to favoriteMovies
function addFavoriteMovie(movieName) {
    if (!movieName.includes("The")) {
        favoriteMovies.push(movieName);
    }
} 

//print the list of movies
function printFavoriteMovie() {
    console.log (`Favorite Movies: ..(${favoriteMovies.length} movies total)`);
    for (i in favoriteMovies){
        console.log(favoriteMovies[i]);
    }
    /* 
    for (i of favoriteMovies) {
        console.log(favoriteMovies[i]);
    }
    var i = 0;
    while (i < favoriteMovies.length){
        console.log(favortieMovies[i]);
        i = i + 1; // i++;
    }
    
    var i = 0;
    for (var i = 0, i < favoriteMovies.length, i++){
        console.log(favoriteMovies[i]);
    }
    */
}

addFavoriteMovie("Ham");
addFavoriteMovie("TheHam");
printFavoriteMovie();