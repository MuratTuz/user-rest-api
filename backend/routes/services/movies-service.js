var movies = require('../../model/moviesData').moviesData;

exports.getAllMovies = () => {
    console.log(movies);
    return movies;
}

exports.getMovieById=(id)=> {
    let movie = movies.find(m => m.id == id);
    return movie;
}

exports.createMovie=(newMovie)=> {
    movies.push(newMovie);
}

exports.updateMovieById=(id, updatedMovieBody)=> {
    let movie = movies.find(m => m.id == id);
    if (movie) {
        Object.assign(movie, updatedMovieBody);
        return movies; // object array
    } else
    return movie; // undefined
}

exports.deleteMovieById = (id) => {
    let movie = movies.find(m => m.id == id);
    if (movie) {
        const newMovies = movies.filter(m => m.id != id);
        movies = newMovies;
        return movies; // new object array
    } else
    return movie; // undefined

}


