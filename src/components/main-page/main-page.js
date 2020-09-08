import React, {useState} from 'react'

import {NavLink} from "react-router-dom";

import './main-page.sass'

const MainPage = ({changeCityName}) => {
  const [inputData, changeInputData] = useState('')

  return (
      <div className="main-page">
        <h1 className="main-page__title">Weather App</h1>

        <div className="main-page__text-field">
          <input onChange={(e) => changeInputData(e.target.value)} type="text" placeholder="Enter a city"/>
          <NavLink onClick={() => changeCityName(inputData)} to="/weather"><span>&#10148;</span></NavLink>
        </div>
      </div>
  )
}

export default MainPage
