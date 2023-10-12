let allMovies = [];

//Define a movie class with parameters title (string), rating (number) and haveWatched (boolean)
class Movie {
    constructor(title, rating, haveWatched) {
        this.title = title;
        this.rating = rating;
        this.haveWatched = haveWatched;
    }
}

//add a movie OBJECT to the allMovies array
let addMovie = (movie) => {
    allMovies.push(movie);
    updateResult("A new movie is added", 'update-text');
    updateMovieSelect();  // <-- Add this line
}


//iterate through all elements of allMovies array
//Display the total number of movies in allMovies array
let printMovies = () => {
    updateResult("Printing all movies....", 'update-text');
    for (let movie of allMovies) {
        updateResult(`${movie.title}, rating of ${movie.rating}, havewatched: ${movie.haveWatched}`, 'film-info');
    }
    updateResult(`You have ${allMovies.length} movies in total`, 'update-text');
}



//Display only the movies that has a rating higher than rating(argument)
//Display the total number of matches
let highRatings = (rating) => {
    updateResult(`printing movie that has a rating higher than ${rating}`);
    let count = 0;
    for (let movie of allMovies) {
        if (movie.rating > rating) {
            count++;
            updateResult(`${movie.title} has a rating of ${movie.rating}`, 'film-info');
        }
    }
    updateResult(`In total, there are ${count} matches`);
}


//Toggle the 'haveWatched' property of the specified movie 
let changeWatched = (title) => {
    for (let movie of allMovies) {
        if (movie.title === title) {
            movie.haveWatched = !movie.haveWatched;
            updateResult(`changing the status of the movie...`, 'update-text');
            break;
        }
    }
}


function updateResult(message, className = '') {
    let resultDiv = document.getElementById("result");
    let p = document.createElement("p");
    p.innerText = message;
    if (className) p.className = className;
    resultDiv.appendChild(p);
}


function updateMovieSelect() {
    let select = document.getElementById("movieSelect");
    select.innerHTML = ""; // Clear current options

    allMovies.forEach(movie => {
        if (!movie.haveWatched) {
            let option = document.createElement("option");
            option.text = movie.title;
            select.add(option);
        }
    });
}


function addMovieFromInput() {
    let title = document.getElementById("movieTitle").value;
    let rating = parseFloat(document.getElementById("movieRating").value);
    let haveWatched = document.getElementById("movieWatched").checked;

    if (title && !isNaN(rating)) {
        let movie = new Movie(title, rating, haveWatched);
        addMovie(movie);
        updateMovieSelect(); // Update the select dropdown
    } else {
        updateResult("Please provide valid inputs.");
    }
}

function displayHighRatings() {
    let rating = parseFloat(document.getElementById("ratingInput").value);
    if (!isNaN(rating)) {
        highRatings(rating);
    } else {
        updateResult("Please provide a valid rating.");
    }
}

function toggleMovieWatched() {
    let title = document.getElementById("movieSelect").value;
    changeWatched(title);
}

// Initial update of the dropdown
updateMovieSelect();


////////////////////////////////////////////////////////////
//Test code - DO NOT DELETE
let x = new Movie("Spiderman", 3, true);
let y = new Movie("Citizen Kane", 4, false);
let z = new Movie("Zootopia", 4.5, true);

allMovies.push(x,y,z);
updateMovieSelect();

/*replace console.log with display on web page*/
console.log("----------------");
console.log("running program......");
console.log("----------------");
printMovies();


let movie1 = new Movie("Parasite", 2, false);

/*replace console.log with display on web page*/
console.log("----------------");
addMovie(movie1);
console.log("----------------");



changeWatched("Spiderman");
/*replace console.log with display on web page*/
console.log("----------------");

printMovies();

/*replace console.log with display on web page*/
console.log("----------------");

changeWatched("Spiderman");
/*replace console.log with display on web page*/
console.log("----------------");

printMovies();
/*replace console.log with display on web page*/
console.log("----------------");

highRatings(3.5);