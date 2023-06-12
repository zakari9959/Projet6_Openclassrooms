import React, { useState } from 'react'
import './Collapse.css'
import flecheBas from '../../assets/fleche--bas.svg'

const Collapse = ({ title, children }) => {
  const [isCollapsed, setIsCollapsed] = useState(true)

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed)
  }

  return (
    <div className="collapse">
      <div className="collapse__header" onClick={toggleCollapse}>
        <h3 className="collapse__title">{title}</h3>
        <button className="collapse__togglebtn">
          {isCollapsed ? (
            <img src={flecheBas} alt="Collapse" />
          ) : (
            <img
              src={flecheBas}
              className="collapse__togglebtn--rotate"
              alt="Expand"
            />
          )}
        </button>
      </div>
      <div
        className={`collapse__content ${
          isCollapsed ? 'collapse__content--hide' : 'collapse__content--show'
        }`}
      >
        <div className="collapse__content__text">{children}</div>
      </div>
    </div>
  )
}

export default Collapse
