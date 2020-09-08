import React from 'react'
import {NavLink} from "react-router-dom";

import './link-item.sass'

const LinkItem = ({text, color, classes, url}) => {
  const classList = `link-item ${classes}`

  return (
      <div className={classList}>
        <button style={{backgroundColor: color}}><NavLink to={url}>{text}</NavLink></button>
      </div>
  )
}

export default LinkItem
