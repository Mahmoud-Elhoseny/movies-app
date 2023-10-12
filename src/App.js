import './App.css';
import { useSelector } from 'react-redux';
import NavBar from './Components/NavBar';
import Section1 from './Components/Section1';
import Footer from './Components/Footer';
import FilmPage from './Components/FilmPage.js';
import { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {
  const { movies } = useSelector((state) => state.movies);
  const { moviesInList } = useSelector((state) => state.auth);
  const [moviesListed, setMoviesListed] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  useEffect(() => {
    if (moviesInList) {
      setMoviesListed(moviesInList);
    }
  }, [moviesInList])


  const [query, setQuery] = useState("")
  const handleChange = (e) => {
    const newQuery = e.target.value
    setQuery(newQuery.toString().toLowerCase())
  }

  return (
    <>
      <BrowserRouter>
        <NavBar handleChange={handleChange} moviesInList={moviesInList} setMoviesListed={setMoviesListed} setSelectedMovie={setSelectedMovie}/>
        <Routes>
          <Route path="/" element={<Section1 movies={movies} query={query} setSelectedMovie={setSelectedMovie}/>} />
          <Route path="/film/:id" element={<FilmPage selectedMovie={selectedMovie}/>} />
          </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
