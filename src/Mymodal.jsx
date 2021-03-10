import React from 'react'

const Mymodal = ({ cityName, high, low, weather, iconUrl }) => {
  return (
    <div id='modal1' className='modal'>
    <div className='modal-content'>
      <h4>{cityName}</h4>
      <p>
        High: {high} - Low: {low}
      </p>
      <p>
        {weather} <img src={iconUrl} alt="icon" />
      </p>
    </div>
    <div className='modal-footer'>
      <a
        href='#!'
        className='modal-close waves-effect waves-green btn-flat'
      >
        Agree
      </a>
    </div>
    </div>

  )
}

export default Mymodal

