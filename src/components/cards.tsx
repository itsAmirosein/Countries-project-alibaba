import React from 'react'
import { CardsProps } from './types'

function Cards({ cardInfo }: CardsProps) {
    return (
        <div className='card'>
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