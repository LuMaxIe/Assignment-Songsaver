import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import './sortSelect.css';

export const SortSelect = () => {
  return (
    <div className='sort-container'>
      <select name="sortItem" id='sortOptions'>
        <option value="Song">Song</option>
        <option value="Artist">Artist</option>
        <option value="Rating">Rating</option>
      </select>
      <select name="sortArrangement" id="sortDirection">
        <option value="Ascending">Ascending</option>
        <option value="Descending">Descening</option>
      </select>
      <button>
        <FontAwesomeIcon icon={faCheck} />
      </button>
    </div>
  )
}
