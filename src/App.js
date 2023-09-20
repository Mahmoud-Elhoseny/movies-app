import './App.css';
import { useSelector } from 'react-redux';
import NavBar from './Components/NavBar';
import Section1 from './Components/Section1';
import Section2 from './Components/Section2';
import Footer from './Components/Footer';
import { useEffect, useState } from 'react';

function App() {
  const { movies } = useSelector((state) => state.movies);
  const { moviesInList } = useSelector((state) => state.auth);
  const [moviesListed, setMoviesListed] = useState([]);
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
      <NavBar handleChange={handleChange} moviesInList={moviesInList} setMoviesListed={setMoviesListed} />
      <Section1 movies={movies} query={query}></Section1>
      <Section2 movies={movies} query={query} ></Section2>
      <Footer />
    </>
  );
}

export default App;
