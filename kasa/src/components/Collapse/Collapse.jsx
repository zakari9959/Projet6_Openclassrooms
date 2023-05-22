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
      <div className="collapseHeader" onClick={toggleCollapse}>
        <h3 className="collapseTitle">{title}</h3>
        <button className="collapseToggleBtn">
          {isCollapsed ? (
            <img src={flecheBas} alt="Collapse" />
          ) : (
            <img src={flecheHaut} alt="Expand" />
          )}
        </button>
      </div>
      {!isCollapsed && <div className="collapseContent">{children}</div>}
    </div>
  )
}

export default Collapse
