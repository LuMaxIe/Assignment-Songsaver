import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import './ListItem.css'

export const ListItem = (props) => {

  const handleClick = (title) => {
    props.songRemover(title)
  }

  return (
    <div className='list-item'>
        <p>{props.Song}</p>
        <p>{props.Artist}</p>
        <p>{props.Genre}</p>
        <p>{props.Rating}</p>
        <button onClick={() => handleClick(props.Song.toString())}>
          <FontAwesomeIcon icon={faTrash} />
        </button>
    </div>
  )
}
