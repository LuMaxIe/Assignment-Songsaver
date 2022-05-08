import React, { useState, useEffect }from 'react';
import { useSelector } from 'react-redux';
import './styles/App.css';
import { NavContainer } from './components/navbar/navbar';
import { InputContainer } from './components/inputs/song_input_container/inputContainer.jsx'
import { ListContainer } from './components/lists/list_container/listContainer';
import { OptionsBar } from './components/optionsbar/OptionsBar';
import { splitArrayOfObjectsByObjectKeyValue } from './helpers/songArraySplit';
import { sortSongList } from './helpers/sortSongList'
import { filterSongList } from './helpers/filterSongList';

function App() {

  // Fetch songs and split according to Genre
  const songsInState = useSelector(state => state.rootReducer.songTracker);
  const songsByGenre = splitArrayOfObjectsByObjectKeyValue(songsInState, 'songGenre');
  let songArray = Object.keys(songsByGenre).map((key) => {
    return songsByGenre[key]
  });

  // Set local state to update data by filters and options
  const [LocalStateSongs, setLocalStateSongs] = useState(songArray);

  // 'Watch' for changes in state, re render component by updating local state
  useEffect(() => {
    setLocalStateSongs(songArray)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [songsInState])
  

  //Key generator for list
  const keyGen = () => Math.floor(Math.random() * 100000)

  // Sorting function with key mapping (to be able to add more sorting keys in future)
  const handleSortList = (columnHeader, direction) => {
    const headerMap = [
      {'UI_Key': 'Song', 'Redux_Key': 'songTitle'},
      {'UI_Key': 'Artist', 'Redux_Key': 'songArtist'},
      {'UI_Key': 'Rating', 'Redux_Key': 'songRating'},
    ]
    const updateArr = sortSongList(columnHeader, direction, headerMap, songArray)
    setLocalStateSongs([...updateArr])
  }

  // Filter Function to handle selected filter options
  const handleFilterRequest = (filterOptions) => {
    if(filterOptions.rating === 1 && filterOptions.genre === 'none') {
      setLocalStateSongs(songArray);
      return
    }
    setLocalStateSongs(filterSongList(songArray, filterOptions));
  }

  return (
    <div className="App">
      <NavContainer />
      <InputContainer />
      <OptionsBar
        availableGenres={Object.keys(songsByGenre)} 
        handleSortList={handleSortList}
        handleFilterList={handleFilterRequest}
      />
      {LocalStateSongs.map((genre) => {
        return <ListContainer 
        songsByGenre={genre} 
        genreName={genre[0].songGenre} 
        key={keyGen()}/>
      })}
    </div>
  );
}


export default App;
