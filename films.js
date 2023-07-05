const numberOfFilms = +prompt("Скільки фільмів ви вже подивились?","");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: true

};
const lastFilm = prompt("Який був останій фільм у вашому перегляді?");
const starOfFilm = +prompt("На яку оцінку?","");
const lastFilm1 = prompt("Який був останій фільм у вашому перегляді?");
const starOfFilm1 = +prompt("На яку оцінку?","");

personalMovieDB.movies[lastFilm] = starOfFilm;
personalMovieDB.movies[lastFilm1] = starOfFilm1;

console.log(personalMovieDB);
