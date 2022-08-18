import React from 'react'
import { useSelector } from 'react-redux'
import { InitialState } from '../redux/types'
import { CardsProps } from './types'

function Cards({ cardInfo }: CardsProps) {
    
    const { darkMode } = useSelector((state: InitialState) => state)

    return (
        <div className={`card ${darkMode ? 'darkMode' : 'lightMode'}`}>
            <div className='_flag-container'>
                <img src={cardInfo?.flag} alt='flag' className='_flag-img'/>
            </div>
            <div className='_card-info-container'>
                <div className='_card-info-box'>
                    <h3 className='_card-info-title'>
                        {cardInfo?.name}
                    </h3>
                    <p>
                        <b>
                            Population:
                        </b>
                        {` ${cardInfo?.population}`}

                    </p>
                    <p>
                        <b>
                            Region:
                        </b>
                        {` ${cardInfo?.region}`}

                    </p>
                    <p>
                        <b>
                            Capital:
                        </b>
                        {` ${cardInfo.capital}`}

                    </p>
                </div>
            </div>
        </div>
    )
}

export default Cards