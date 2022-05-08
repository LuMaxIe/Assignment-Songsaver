import React from 'react'
import { SortSelect } from '../inputs/sort_options/SortSelect'
import './optionsBar.css'

export const OptionsBar = (props) => {
  return (
    <div className='options-container'>
      <SortSelect handleSortList={props.handleSortList}/>
    </div>
  )
}
