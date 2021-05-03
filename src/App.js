import './App.css';
import MovieRows from './MovieRows';
import req from './req';
import MovieBanner from './MovieBanner';
import NavBar from './Navbar';

function App() {
  return (
    <div className="App">
      <NavBar />
      <MovieBanner />
      <MovieRows title = "Netflix Originals" large fetchUrl = {req.fetchNetflixOriginals}/>
      <MovieRows title = "Trending Now" fetchUrl = {req.fetchTrending}/>
      <MovieRows title = "Top Rated" fetchUrl = {req.fetchTopRated}/>
      <MovieRows title = "Action Movies"  fetchUrl = {req.fetchActionMovies}/>
      <MovieRows title = "Comedy Movies" fetchUrl = {req.fetchComedyMovies}/>
      <MovieRows title = "Horror Movies" fetchUrl = {req.fetchHorrorMovies}/>
      <MovieRows title = "Romantic Movies" fetchUrl = {req.fetchRomanticMovies}/>
      <MovieRows title = "Documentaries" fetchUrl = {req.fetchDocumentaries}/>
    </div>
  );
}

export default App;
