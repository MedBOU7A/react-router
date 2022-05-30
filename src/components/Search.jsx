import React from 'react'
import StarRaiting from './StarRaiting'

const Search = ({searchRating, searchValue, handelSearch, handelRating}) => {
  return (
    <div>
        <h1>Movie app</h1>
        <div>
            <input type="text" value={searchValue} onChange={handelSearch} />
        </div>
        <StarRaiting rate={searchRating} handelRating={handelRating} />
    </div>
  )
}

export default Search