import React from 'react'
import {NavLink} from "react-router-dom";

import './link-item.sass'

const LinkItem = ({text, color, classes, url}) => {
  const classList = `link-item ${classes}`

  return (
      <div className={classList}>
        <NavLink to={url}><button style={{backgroundColor: color}}>{text}</button></NavLink>
      </div>
  )
}

export default LinkItem
