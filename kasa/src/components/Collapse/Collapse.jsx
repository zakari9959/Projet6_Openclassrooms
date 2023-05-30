import React, { useState } from 'react'
import './Collapse.css'
import flecheBas from './fleche--bas.svg'

const Collapse = ({ title, children }) => {
  const [isCollapsed, setIsCollapsed] = useState(true)

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed)
  }

  return (
    <div className={`collapse`}>
      <div className="collapse__header" onClick={toggleCollapse}>
        <h3 className="collapse__title">{title}</h3>
        <button className="collapse__togglebtn">
          {isCollapsed ? (
            <img src={flecheBas} alt="Collapse" />
          ) : (
            <img src={flecheBas} className="rotate" alt="Expand" />
          )}
        </button>
      </div>
      {!isCollapsed && <div className="collapse__content">{children}</div>}
    </div>
  )
}

export default Collapse
