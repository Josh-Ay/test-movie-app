import React, { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Header from './components/Header/Header'
import SearchBar from './components/SearchBar/SearchBar'
import MovieTile from './components/MovieTile/MovieTile'
import { axiosInstance } from './config/config'
import { searchForMovie } from './config/requests'

function App() {

  const [ searchValue, setSearchValue ] = useState("");
  const [ searchResults, setSearchResults ] = useState(null);
  const [ isLoading, setLoading ] = useState(false);

  useEffect(() => {
    if (searchValue.length < 1) return setSearchResults([]);

    setLoading(true);

    searchForMovie(searchValue).then(res => {
      console.log(res)
      setSearchResults(res.data);
      setLoading(false);
    }).catch(err => {
      console.log(err.response ? err.response.data : err.message);
      setLoading(false);
      setSearchResults(null)
    })
    
    window.scrollTo(0, document.body.scrollHeight);

  }, [searchValue])

  return (
    <>
      <Header title={"MyTestApp"} />
      <main>
        <div className='movie__Content__Container'>
          <div className='content__Container'>
            <h1>Watch<br />something<br />incredible.</h1>  
          </div>
          <SearchBar searchValue={searchValue} setSearchValue={setSearchValue} />
          {
            isLoading ? <p className='movie__Category'>Please wait...</p> :
            searchValue.length < 1 ? <p className='movie__Category'>Please type above to search.</p> :
            searchValue.length > 1 && !searchResults ? <p className='movie__Category'>No movies found</p> :
            <>
              <p className='movie__Category'>{searchResults.Genre}</p>
              <div className='movies__Container'>
                <MovieTile movie={searchResults} />
              </div>
            </>
          }
        </div>
      </main>
    </>
  )
}

export default App
