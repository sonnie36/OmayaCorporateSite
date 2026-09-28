import React from 'react'

const Service = ({title,description,icon,onClick}) => {
  return (
    <div className="service-card">
    <div className="icon">{icon}</div>
    <h3>{title}</h3>
    <p>{description}</p>
    <button onClick={onClick}>
      <span>→</span>
    </button>
  </div>
  )
}

export default Service