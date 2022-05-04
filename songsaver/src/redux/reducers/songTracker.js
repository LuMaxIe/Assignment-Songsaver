const songTracker = (state = [], action) => {
  switch (action.type) {
    case 'ADD_SONG':
      let stateCopy = Array.isArray(state) ? state.slice() : [];
      stateCopy.push(action.payload);
      return stateCopy
    case 'REMOVE_SONG':
      state = state.slice();
      state.splice(state.findIndex(x => x.songTitle === action.payload), 1)
      return state
    default:
      return state
  }
} 

export default songTracker