import { Button } from '@mui/material'
import React from 'react'
import NightlightRoundIcon from '@mui/icons-material/NightlightRound';
function Header() {
    return (
        <div className='header-container'>
            <div className='_text'>
                <h2> Where in the world ? </h2>
            </div>
            <div className='_darkmode-btn-container'>
                <Button className='_darkModeBtn' startIcon={<NightlightRoundIcon />}>
                    Dark Mode
                </Button>

            </div>
        </div>
    )
}

export default Header