import { useSelector } from 'react-redux'
import { ListItem } from '../list_item/ListItem'
import { useDispatch } from 'react-redux'
import { removeSong } from '../../../redux/actions';
import './listContainer.css'
import { SortSelect } from '../../inputs/sort_options/SortSelect';

export const ListContainer = () => {

  const dispatch = useDispatch()
  const savedSongs = useSelector(state => state.rootReducer.songTracker);
  const keyGen = () => Math.floor(Math.random() * 100000)

  const handleRemoveSong = (identifier) => {
    dispatch(removeSong(identifier))
  }

  return (
    <div className="list-container">
      <div className='list-container-header'>
        <p>Song</p>
        <p>Artist</p>
        <p>Genre</p>
        <p>Rating</p>
        <SortSelect />
      </div>
      {savedSongs.map((song) => {
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
