import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import './sortSelect.css';

export const SortSelect = (props) => {

  const [sortItem, setSortItem] = useState('Song');
  const [sortArrangement, setSortArrangement] = useState('Ascending');

  const handleSortItemChange = (input) => {
    setSortItem(input)
  }

  const handleSortArrangementChange = (input) => {
    setSortArrangement(input)
  }

  return (
    <div className='sort-container'>
      <div>
        <p>Sorting</p>
      </div>
      <select 
      name="sortItem" 
      id='sortOptions'
      onChange={(e) => {handleSortItemChange(e.target.value)}}
      placeholder='filter'
      >
        <option value="Song">Song</option>
        <option value="Artist">Artist</option>
        <option value="Rating">Rating</option>
      </select>
      <select 
      name="sortArrangement" 
      id="sortDirection" 
      onChange={(e) => handleSortArrangementChange(e.target.value)}
      >
        <option value="Ascending">Ascending</option>
        <option value="Descending">Descending</option>
      </select>
      <button onClick={() => {
        props.handleSortList(sortItem, sortArrangement)
      }}>
        <FontAwesomeIcon icon={faCheck} />
      </button>
    </div>
  )
}
