const stringConcater = (state = '', action) => {
  switch (action.type) {
    case 'CONCAT_A':
      return state + 'A'
    case 'CONCAT_B':
      return state + 'B'
    default:
      return {
        ...state
      }
  }
}

export default stringConcater