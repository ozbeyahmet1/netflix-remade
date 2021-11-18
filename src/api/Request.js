const API_KEY="**************************";

const requests ={
    fetchTrending:`/trending/all/week?api_key=${API_KEY}&LANGUAGE=EN-us`,
    fetchNetflixOriginals:`/discover/tv?api_key=${API_KEY}&WİTH_NETWORKS=213`,
    fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`, 
    fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`, 
    fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
    fetchCrimeMovies: `/discover/movie?api_key=${API_KEY}&with_genres=80`,
    fetchFamilyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10751`
};


export default requests