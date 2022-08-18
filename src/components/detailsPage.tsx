import React, { useMemo } from 'react'
import { Button } from '@mui/material'
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { Link, useParams, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { InitialState } from '../redux/types';

function DetailsPage() {

  const { countriesData,darkMode } = useSelector((state: InitialState) => state)
  const { name } = useParams()
  const navigate = useNavigate()

  const selectedCountry = useMemo(() => {
    return countriesData.find(item => item?.name === name)
  }, [name,countriesData])

  function handleOnBorderCountryClick(e: any) {
    const findCountry = countriesData?.find(item => item?.alpha3Code === e?.target?.textContent)
    navigate(`/details/${findCountry?.name}`)
  }


  return (
    <div className='details-container'>
      <div className='_back-btn-container'>
        <Link to='/' className='link'>
          <Button className={`_back-btn ${darkMode ? 'darkMode' : 'lightMode'}`} startIcon={<KeyboardBackspaceIcon />} >
            Back
          </Button>
        </Link>
      </div>
      <div className='_detail-info-container'>
        <div className='_flag-container'>
          <img className='_flag' src={selectedCountry?.flag} alt="flag" />
        </div>
        <div className='_info-container'>
          <div className='_info-title'>
            <h3>{selectedCountry?.name}</h3>
          </div>
          <div className='_info-row'>
            <p>
              <b>
                Native Name:
              </b>
              {` ${selectedCountry?.nativeName}`}

            </p>
            <p>
              <b>
                Top Level Domain:
              </b>
              {` ${selectedCountry?.topLevelDomain?.map(item => item)}`}

            </p>
          </div>
          <div className='_info-row'>
            <p>
              <b>
                Population:
              </b>
              {` ${selectedCountry?.population}`}

            </p>
            <p>
              <b>
                Currencies:
              </b>
              {` ${selectedCountry?.currencies?.map((item: any) => item?.name)}`}
            </p>
          </div>
          <div className='_info-row'>
            <p>
              <b>
                Region:
              </b>
              {` ${selectedCountry?.region}`}

            </p>
            <p>
              <b>
                Language:
              </b>
              {` ${selectedCountry?.languages?.map((item: any) => item?.name)}`}
            </p>
          </div>
          <div className='_info-row'>
            <p>
              <b>
                Sub Region:
              </b>
              {` ${selectedCountry?.subregion}`}

            </p>
          </div>
          <div className='_info-row'>
            <p>
              <b>
                Capital:
              </b>
              {` ${selectedCountry?.capital}`}

            </p>
          </div>
          {selectedCountry?.borders && <div className='_info-border-countries'>
            <b>Border countires :</b>
            {selectedCountry?.borders?.map(item => (
              <Button className={`_border-countries-btn ${darkMode ? 'darkMode' : 'lightMode'}`} onClick={handleOnBorderCountryClick}>{item}</Button>)
            )}
          </div>}
        </div>
      </div>
    </div>
  )
}

export default DetailsPage