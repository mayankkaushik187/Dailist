import React, { useState } from 'react'
import './TodoList.css'
import Today from './Today'
import Status from './Status'
import ListItems from './ListItems'
import AddItem from './AddItem'
import { addTodo } from '../apis/crud'

const TodoList = () => {
  const [tasks, setTasks] = useState([])
  const [completedTasks, setCompletedTasks] = useState([])
  const [newItem, setNewItem] = useState('')
  const handleAddItem = () => {
    addTodo(newItem, false, setTasks)
  }
  console.log(tasks)
  return (
    <div className="card">
      <div className="inner-box">
        <Today />
        <Status completedTask={completedTasks} tasks={tasks} />
        <ListItems tasks={tasks} setTasks={setTasks} />
        <AddItem
          tasks={tasks}
          setTasks={setTasks}
          setNewItem={setNewItem}
          handleAddItem={handleAddItem}
        />
      </div>
    </div>
  )
}

export default TodoList
