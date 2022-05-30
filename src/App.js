import React, { useState } from 'react'
import "./App.css"
import MovieList from './components/MovieList';
import { moviesData } from './data'
import Search from './components/Search';
import AddMovie from './components/AddMovie'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import About from './components/About';




const App = () => {
  const [movies, setMovies] = useState(moviesData);
  const [searchRating, setSearchRating] = useState(1);
  const [searchValue, setSearchValue] = useState("") ;

  const handelAdd =(newMovie)=>  setMovies([...movies, newMovie]);
  const handelRating =(newRaing)=> setSearchRating(newRaing);
  const handelSearch =(e)=> setSearchValue(e.target.value)
  return (
  <div className='App' >
   <Search searchRating={searchRating} searchValue={searchValue} 
    handelRating={handelRating} handelSearch={handelSearch} />
   <BrowserRouter>
    <Routes>
      <Route path='/' element={<MovieList movies={movies} searchRating={searchRating} searchValue={searchValue} />} />
      <Route path='/film/:id' element={<About movies={movies} />}/>
    </Routes>
   </BrowserRouter>
   <AddMovie handelAdd={handelAdd} />
  </div>

  )
}

export default App;

