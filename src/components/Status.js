import React from 'react'
import './Status.css'

const Status = ({ completedTasks, tasks }) => {
  return (
    <div className="status">
      <div className="numeric-values">
        <strong>{tasks.length}</strong>
        <strong>{completedTasks}</strong>
      </div>
      <div className="created-completed">
        <p style={{ margin: 0 }}>Created Tasks</p>
        <p style={{ margin: 0 }}>Completed Tasks</p>
      </div>
    </div>
  )
}

export default Status
