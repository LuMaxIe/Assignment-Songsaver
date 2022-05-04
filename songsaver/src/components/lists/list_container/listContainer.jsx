import { ListItem } from '../list_item/ListItem'
import './listContainer.css'

export const ListContainer = () => {
  return (
    <div className="list-container">
      <div className='list-container-header'>
        <p>Song</p>
        <p>Artist</p>
        <p>Genre</p>
        <p>Rating</p>
      </div>
      <ListItem />
    </div>
  )
}
