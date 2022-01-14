// sugar syntax (looks nicer and easer to write)

import Navbar from "./components/Navbar"
import Jumbotron from "./components/Jumbotron"
import Carousel from "./components/Carousel"
import Card from "./components/Card"

const movie = { "Title": "Goodfellas", "Year": "1990", "Rated": "R", "Released": "21 Sep 1990", "Runtime": "146 min", "Genre": "Biography, Crime, Drama", "Director": "Martin Scorsese", "Writer": "Nicholas Pileggi, Martin Scorsese", "Actors": "Robert De Niro, Ray Liotta, Joe Pesci", "Plot": "The story of Henry Hill and his life in the mob, covering his relationship with his wife Karen Hill and his mob partners Jimmy Conway and Tommy DeVito in the Italian-American crime syndicate.", "Language": "English, Italian", "Country": "United States", "Awards": "Won 1 Oscar. 44 wins & 38 nominations total", "Poster": "https://m.media-amazon.com/images/M/MV5BY2NkZjEzMDgtN2RjYy00YzM1LWI4ZmQtMjIwYjFjNmI3ZGEwXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg", "Ratings": [{ "Source": "Internet Movie Database", "Value": "8.7/10" }, { "Source": "Rotten Tomatoes", "Value": "96%" }, { "Source": "Metacritic", "Value": "90/100" }], "Metascore": "90", "imdbRating": "8.7", "imdbVotes": "1,086,143", "imdbID": "tt0099685", "Type": "movie", "DVD": "22 Aug 1997", "BoxOffice": "$46,836,214", "Production": "N/A", "Website": "N/A", "Response": "True" }


const App = () => {
  return (
    <>
    <Navbar />
    <Jumbotron />
    <Carousel />
    <Card movie={movie}/>
    </>
  )
}
// React.createElement('h1', 'Hello Word!')

export default App