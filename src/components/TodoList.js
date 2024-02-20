import React from 'react'
import './TodoList.css'
import Today from './Today'
import Status from './Status'

const TodoList = () => {
  return (
    <div className="card">
      <div className="inner-box">
        <Today />
        <Status />
      </div>
    </div>
  )
}

export default TodoList
