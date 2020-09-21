var favoriteMovies = ["titanic", "batman", "spiderman"]; //declare favoriteMovies

//if The not in movie Name, add to favoriteMovies
function addFavoriteMovie(movieName) {
    if (!movieName.includes("The")) {
        favoriteMovies.push(movieName);
    }
} 

//print the list of movies
function printFavoriteMovie() {
    console.log ("Favorite Movies: .." + "(" + favoriteMovies.length + " movies total)");
    for (i in favoriteMovies){
        console.log(favoriteMovies[i]);
    }
}

addFavoriteMovie("Ham");
addFavoriteMovie("TheHam");
printFavoriteMovie();