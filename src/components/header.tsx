import { Button } from '@mui/material'
import React from 'react'
import NightlightRoundIcon from '@mui/icons-material/NightlightRound';
import { darkModeChange } from '../redux/actions';
import { useDispatch, useSelector } from 'react-redux'
import { InitialState } from '../redux/types';

function Header() {
    const dispatch = useDispatch()
    const { darkMode } = useSelector((state: InitialState) => state)
    function handleOnDarkModeClick() {
        dispatch({
            type: darkModeChange,
            payload: !darkMode
        })
    }
    return (
        <div className={`header-container ${darkMode ? 'darkMode' : 'lightMode'}`} >
            <div className='_text'>
                <h2> Where in the world ? </h2>
            </div>
            <div className='_darkmode-btn-container'>
                <Button className={`_darkModeBtn ${darkMode ? 'darkMode' : 'lightMode'}`} startIcon={<NightlightRoundIcon />} onClick={handleOnDarkModeClick}>
                    Dark Mode
                </Button>

            </div>
        </div>
    )
}

export default Header