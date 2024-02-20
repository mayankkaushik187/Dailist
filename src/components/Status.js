import React from 'react'
import './Status.css'

const Status = () => {
  return (
    <div className="status">
      <div className="numeric-values">
        <strong>0</strong>
        <strong>0</strong>
      </div>
      <div className="created-completed">
        <p style={{ margin: 0 }}>Created Tasks</p>
        <p style={{ margin: 0 }}>Completed Tasks</p>
      </div>
    </div>
  )
}

export default Status
