const movies = require('../../model/moviesData');

exports.getAllMovies= ()=> {
    return movies;
}

exports.getMovieById=(id)=> {
    let movie = movies.find(m => m.id == id);
    return movie;
}

exports.createMovie=(newMovie)=> {
    movies.push(newMovie);
}

exports.updateMovieById=(id, updateMovieBody)=> {
    let movie = movies.find(m => m.id == id);
    movie = updateMovieBody;
    return movie;
}

exports.deleteMovieById=(id)=> {
    movies = movies.filter(m => m.id != id);
}


