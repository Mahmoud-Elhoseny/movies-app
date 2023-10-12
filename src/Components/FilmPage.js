import React from 'react'
import '../css/filmPage.css'
const FilmPage = ({ selectedMovie }) => {
  return (
    <div className='filmPage pt-5'>
      <div className='allDi'>
        <div className='divImg'>
          <img src={`http://www.themoviedb.org/t/p/w220_and_h330_face${selectedMovie?.poster_path}`} alt='filmImg' />
        </div>
        <div className='text'>
          <h2 className='pt-5'>{selectedMovie?.title}</h2>
          <div className='ps-5 text'>
            <br />
            <br />
            <p>{selectedMovie?.overview}</p>
            <br />
            <br />
            <p>Views Rate: <span>{selectedMovie?.vote_count}</span></p>
            <p>Original Language: <span>{selectedMovie?.original_language}</span></p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FilmPage