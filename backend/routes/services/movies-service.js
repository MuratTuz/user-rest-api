const movies = require('../../model/moviesData');

export function getAllMovies() {
    return movies;
}

export function getMovieById(id) {
    let movie = movies.find(m => m.id == id);
    return movie;
}

export function createMovie(newMovie) {
    movies.push(newMovie);
}

export function updateMovieById(id, updateMovieBody) {
    let movie = movies.find(m => m.id == id);
    movie = updateMovieBody;
    return movie;
}

export function deleteMovieById(id) {
    movies = movies.filter(m => m.id != id);
}


