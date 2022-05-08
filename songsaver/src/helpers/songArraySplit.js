export const splitArrayOfObjectsByObjectKeyValue = (inputArray, keyName) => {
  let returnObject = {};
  if(!inputArray.length > 0) {
    return returnObject
  }

  //Get all unique values of given key
  const uniqueGenres = [...new Set(inputArray.map(item => item[keyName]))];

  //Iterate over values and add matching to return item
  uniqueGenres.forEach((genre) => {
    if(!returnObject[genre]) {
      returnObject[genre] = []
    }
    //Iterate over input to add items to array in return object
    inputArray.forEach((item) => {
      if(item[keyName] === genre) {
        returnObject[genre].push(item);
      }
    })
  })

  return returnObject
};
