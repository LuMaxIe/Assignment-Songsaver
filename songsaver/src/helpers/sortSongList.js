export const sortSongList = (columnHeader, direction, headerMap, listToSort) => {
  //parse header to correct format
  for (let i = 0; i < headerMap.length; i++) {
    if(columnHeader === headerMap[i]['UI_Key']) {
      columnHeader = headerMap[i]['Redux_Key']
    }
  }

  // Set up sorting conditions & sort song array
  let setDirection1 = direction === 'Ascending' ? -1 : 1;
  let setDirection2 = direction === 'Ascending' ? 1 : -1;
  const newArr = listToSort.map((x) => {
    return x.sort((a, b) => {
      if(a[columnHeader] < b[columnHeader]) {
        return setDirection1;
      }
      if(a[columnHeader] > b[columnHeader]) {
        return setDirection2;
      }
      return 0;
    })
  })
  return newArr
}
