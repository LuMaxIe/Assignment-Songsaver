export const filterSongList = (songArray, filterOptions) => {
  let returnArray = [...songArray];

  // Loop over songArray and review arrays within
  for (let i = songArray.length - 1; i >= 0; i--) {
    const genreArray = returnArray[i];

    // Remove array on index if it is not in desired filter
    if(filterOptions.genre !== genreArray[0].songGenre && filterOptions.genre !== 'none') {
      returnArray.splice(i, 1);
      continue
    }

    // Remove songs from inner (genre) array if they do not meet rating requirements
    returnArray[i] = genreArray.filter((song) => {
      return song.songRating >= Number(filterOptions.rating);
    })
  }

  return returnArray
}