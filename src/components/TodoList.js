import React, { useEffect, useState } from 'react'
import './TodoList.css'
import Today from './Today'
import Status from './Status'
import ListItems from './ListItems'
import AddItem from './AddItem'
import { addTodo } from '../apis/crud'

const TodoList = () => {
  const [tasks, setTasks] = useState([])
  const [completedTasks, setCompletedTasks] = useState(0)
  const [newItem, setNewItem] = useState('')
  const [editing, setEditing] = useState(new Array(tasks.length).fill(false))
  const [editedValue, setEditedValue] = useState([])
  useEffect(() => {
    setEditing(new Array(tasks.length).fill(false))
    const newEditedValue = tasks.map((todo) => {
      return todo.todo
    })
    setEditedValue(newEditedValue)
  }, [tasks])
  const handleAddItem = () => {
    addTodo(newItem, false, setTasks)
  }
  useEffect(() => {
    let total = 0
    tasks.forEach((todo) => {
      if (todo.completed) {
        total = total + 1
      }
    })
    setCompletedTasks(total)
  }, [tasks])
  console.log(tasks, editing)
  return (
    <div className="card">
      <div className="inner-box">
        <Today />
        <Status completedTasks={completedTasks} tasks={tasks} />
        {tasks.length ? (
          <ListItems
            tasks={tasks}
            setTasks={setTasks}
            editing={editing}
            setEditing={setEditing}
            editedValue={editedValue}
            setEditedValue={setEditedValue}
          />
        ) : null}
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
