import React, { useState } from 'react'
import './Collapse.css'
import flecheHaut from './fleche--haut.svg'
import flecheBas from './fleche--bas.svg'

const Collapse = ({ title, children }) => {
  const [isCollapsed, setIsCollapsed] = useState(true)

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed)
  }

  return (
    <div className="collapse">
      <div className="collapse--header" onClick={toggleCollapse}>
        <h3 className="collapse--title">{title}</h3>
        <button className="collapse--toggle-btn">
          {isCollapsed ? (
            <img src={flecheBas} alt="Collapse" />
          ) : (
            <img src={flecheHaut} alt="Expand" />
          )}
        </button>
      </div>
      {!isCollapsed && <div className="collapse--content">{children}</div>}
    </div>
  )
}

export default Collapse
