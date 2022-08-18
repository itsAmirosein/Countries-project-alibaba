import { Box, TextField, IconButton, FormControl, InputLabel, Select, OutlinedInput, MenuItem } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import React, { useMemo } from 'react'
import Cards from './cards';
import { useSelector, useDispatch } from 'react-redux';
import { InitialState } from '../redux/types'
import { filterValueChange, getSearchedCountry, searchInputChange, filterCountries } from '../redux/actions'
import { Link } from 'react-router-dom';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

function MainPage() {

  const { countriesData, searchInputValue, filterValue, filterItems, darkMode } = useSelector((state: InitialState) => state)
  const dispatch = useDispatch()

  function handleOnSearchInput(value: string) {
    dispatch({
      type: getSearchedCountry,
      payload: value
    })
  }

  function handleOnSearchBtnClick(e: any) {
    handleOnSearchInput(searchInputValue)
  }

  function handleOnKeyDown(e: any) {
    if (e.code === 'Enter') {
      handleOnSearchInput(e?.target?.value)
    }
  }

  function handleOnInputChange(e: any) {
    dispatch({
      type: searchInputChange,
      payload: e?.target?.value
    })
  }
  function handleOnFilterChange(e: any) {
    dispatch({
      type: filterValueChange,
      payload: e?.target?.value
    })
    dispatch({
      type: filterCountries,
      payload: e?.target?.value
    })
  }

  return (
    <div className='homepage-container'>
      <div className='_search-bar'>
        <div className='_search-container'>
          <div className={`_input-box ${darkMode ? 'darkMode' : 'lightMode'}`}>
            <IconButton className='_searchIcon-Btn' onClick={handleOnSearchBtnClick}>
              <SearchIcon />
            </IconButton>
            <input
              type="text"
              onKeyDown={handleOnKeyDown}
              onChange={handleOnInputChange}
              className={`_search-input ${darkMode ? 'darkMode' : 'lightMode'}`}
              placeholder='Search for a country ...'
              value={searchInputValue}
            />
          </div>
        </div>
        <div className='_filter-box'>
          <FormControl className={`_select-container`}>
            <InputLabel id="demo-simple-select-label" className={darkMode ? 'darkColorMode' : 'lightColorMode'}>Filter by Region</InputLabel>
            <Select
              inputProps={{
                classes: {
                  icon: { fill: 'white' }
                }
              }}
              IconComponent={()=><ArrowDropDownIcon className={`_filter-arrow ${darkMode ? 'darkColorMode' : 'lightColorMode'}`}/> }
              sx={{ color: 'white' }}
              label='Filter by Region'
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              className={`_select-input ${darkMode ? 'darkMode' : 'lightMode'}`}
              value={filterValue}
              onChange={handleOnFilterChange}
            >
              {filterItems?.map((country) => (
                <MenuItem
                  key={country}
                  value={country}
                >
                  {country}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
      </div>
      <div className='_cards-container'>
        {countriesData?.map(item =>
          <Link to={`/details/${item?.name}`} className="_link" key={item?.name}>
            <Cards cardInfo={item} />
          </Link>)}
      </div>
    </div>
  )
}

export default MainPage