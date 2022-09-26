const tmdbKey = '151ab5e2c26308ac35fd487f17505d7f';
const tmdbBaseUrl = 'https://api.themoviedb.org/3';
const playBtn = document.getElementById('playBtn');

const getGenres = async () => {
  const genreRequestEndpoint = '/genre/movie/list';
  const requestParams = `?api_key=${tmdbKey}`;
  const urltoFetch = `${tmdbBaseUrl}${genreRequestEndpoint}${requestParams}`;

  try{

    const response = await fetch(urltoFetch);
    if (response.ok){
      const jsonResponse = await response.json();
      const genres = jsonResponse.genres;
      return genres;
    }

  }catch(error){
    console.log(error);
  };
};

const getMovies = () => {
  const selectedGenre = getSelectedGenre();

};

const getMovieInfo = () => {

};

// Gets a list of movies and ultimately displays the info of a random movie from the list
const showRandomMovie = () => {
  const movieInfo = document.getElementById('movieInfo');
  if (movieInfo.childNodes.length > 0) {
    clearCurrentMovie();
  };

};

getGenres().then(populateGenreDropdown);
playBtn.onclick = showRandomMovie;