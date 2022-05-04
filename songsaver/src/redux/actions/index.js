export const addSong = (songObj) => {
  return {
    type: 'ADD_SONG',
    payload: songObj
  }
}