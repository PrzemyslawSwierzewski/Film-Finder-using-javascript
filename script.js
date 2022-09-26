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

const getMovies = async () => {
  const selectedGenre = getSelectedGenre();
  const discoverMovieEndpoint='/discover/movie';
  const requestParams = `?api_key=${tmdbKey}&with_genre=${selectedGenre}`;
  const urltoFetch = `${tmdbBaseUrl}${discoverMovieEndpoint}${requestParams}`;

  try{
    const response= await fetch(urltoFetch);
    if(response.ok){
      const jsonResponse = await response.json();
      const movies = jsonResponse.results;
      return movies;
    }
  }catch(error){
    console.log(error);
  }
};

const getMovieInfo = async (movie) => {
  const movieId = movie.id;
  const movieEndpoint=`/movie/${movieId}`;
  const requestParams= `?api_key=${tmdbKey}`;
  const urlToFetch= `${tmdbBaseUrl}${movieEndpoint}${requestParams}`;

  try{
    const response= await fetch(urlToFetch);
    if(response.ok){
      const jsonResponse= await response.json();
      const movieInfo = jsonResponse;
      return movieInfo;
    }
  }catch(error){
    console.log(error);
  }
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