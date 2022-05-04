import { useSelector } from 'react-redux'
import { ListItem } from '../list_item/ListItem'
import './listContainer.css'

export const ListContainer = () => {

  const savedSongs = useSelector(state => state.rootReducer.songTracker);

  return (
    <div className="list-container">
      <div className='list-container-header'>
        <p>Song</p>
        <p>Artist</p>
        <p>Genre</p>
        <p>Rating</p>
      </div>
      {savedSongs.map((song) => {
        return <ListItem 
          Song={song.songTitle}
          Artist={song.songArtist}
          Genre={song.songGenre}
          Rating={song.songRating}
        />
      })}
    </div>
  )
}
