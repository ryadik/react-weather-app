import React from 'react'

import {NavLink} from "react-router-dom";

import './main-page.sass'

const MainPage = ({changeCityName}) => {
  return (
      <div className="main-page">
        <h1 className="main-page__title">Weather App</h1>

        <div className="main-page__text-field">
          <input onChange={changeCityName} type="text" placeholder="Enter a city"/>
            <NavLink to="/weather"><span>&#10148;</span></NavLink>
        </div>
      </div>
  )
}

export default MainPage
