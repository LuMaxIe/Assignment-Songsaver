import React from 'react'
import { SortSelect } from '../inputs/sort_options/SortSelect'
import { FilterSelect } from '../inputs/filter_options/FilterSelect'
import './optionsBar.css'

export const OptionsBar = (props) => {
  return (
    <div className='options-container'>
      <SortSelect handleSortList={props.handleSortList}/>
      <FilterSelect availableGenres={props.availableGenres} handleFilterList={props.handleFilterList}/>
    </div>
  )
}
