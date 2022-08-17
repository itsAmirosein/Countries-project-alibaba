import { Box, TextField, IconButton, FormControl, InputLabel, Select, OutlinedInput } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import React from 'react'
import Cards from './cards';

function MainPage() {
  return (
    <div className='homepage-container'>
      <div className='_search-bar'>
        <div className='_search-container'>
          <div className='_input-box'>
            <IconButton className='_searchIcon-Btn'>
              <SearchIcon />
            </IconButton>
            <input type="text" className='_search-input' />
          </div>
        </div>
        <div className='_filter-box'>
          <FormControl  className='_select-container'>
            <InputLabel id="demo-multiple-name-label">Filter by Region</InputLabel>
            <Select
              labelId="demo-multiple-name-label"
              id="demo-multiple-name"
              className='_select-input'
              // value={personName}
              // onChange={handleChange}
              input={<OutlinedInput label="Filter by Region" />}
            // MenuProps={MenuProps}
            >
              {/* {names.map((name) => (
            <MenuItem
              key={name}
              value={name}
              style={getStyles(name, personName, theme)}
            >
              {name}
            </MenuItem>
          ))} */}
            </Select>
          </FormControl>
        </div>
      </div>
      <div className='_cards-container'>
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        </div>
    </div>
  )
}

export default MainPage