import React from 'react'
import './ListItem.css'

export const ListItem = (props) => {
  return (
    <div className='list-item'>
        <p>{props.Song}</p>
        <p>{props.Artist}</p>
        <p>{props.Genre}</p>
        <p>{props.Rating}</p>
    </div>
  )
}
