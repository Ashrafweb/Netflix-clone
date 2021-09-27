const API_KEY = "c9ee9250c0e4c2a52366261f2d28310f";

const requests = {
  fetchTrending: `/trending/all/day?api_key=${API_KEY}`,
  fetchNetflixOriginals: `/discover/movie?api_key=${API_KEY}&with_networks=213`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  fetchRomanticMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
};

export default requests;

//'https://api.themoviedb.org/3/discover/movie?api_key=c9ee9250c0e4c2a52366261f2d28310f&language=en-US&sort_by=popularity.desc&page=1'
//
//https://api.themoviedb.org/3/trending/all/day?api_key=<<api_key>>
