import { ListItem } from '../list_item/ListItem'
import { useDispatch } from 'react-redux'
import { removeSong } from '../../../redux/actions';
import './listContainer.css'
import React from 'react'

export const ListContainer = (props) => {

  const dispatch = useDispatch();
  const keyGen = () => Math.floor(Math.random() * 100000);

  const handleRemoveSong = (identifier) => {
    dispatch(removeSong(identifier))
  }

  return (
    <div className="list-container">
      <div>
        <p>{props.genreName}</p>
      </div>
      <div className='list-container-header'>
        <p>Song</p>
        <p>Artist</p>
        <p>Genre</p>
        <p>Rating</p>
      </div>
      {props.songsByGenre.map((song) => {
        return <ListItem
          key={keyGen()} 
          Song={song.songTitle}
          Artist={song.songArtist}
          Genre={song.songGenre}
          Rating={song.songRating}
          songRemover={handleRemoveSong}
        />
      })}
    </div>
  )
}
