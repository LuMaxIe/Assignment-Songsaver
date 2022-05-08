import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'

export const FilterSelect = (props) => {

  const [genre, setGenre] = useState('none');
  const [rating, setRating] = useState(1)

  const handleGenreChange = (input) => {
    setGenre(input)
  }

  const handleRatingChange = (input) => {
    setRating(input)
  }

  return (
    <div className='filter-container'>
      <select 
        name="filter-select" 
        id="filter-select"
        onChange={(e) => handleGenreChange(e.target.value)}
      >
        <option key={0} value={'none'}>none</option>
        {props.availableGenres.map((genre, index) => (
          <option key={index + 1} value={genre}>
            {genre}
          </option>
        ))}
      </select>
      <select 
        name="rating-filter-select" 
        id="rating-filter-select"
        onChange={(e) => handleRatingChange(e.target.value)}
      >
        <option key={1} value={1}>1</option>
        <option key={2} value={2}>2</option>
        <option key={3} value={3}>3</option>
        <option key={4} value={4}>4</option>
        <option key={5} value={5}>5</option>
      </select>
      <button onClick={() => {
        props.handleFilterList({genre, rating})
      }}>
        <FontAwesomeIcon icon={faCheck} />
      </button>
    </div>
  )
}
