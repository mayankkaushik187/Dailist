import React, { useState } from 'react'
import './ListItems.css'
import { Button } from '@mui/material'
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline'
import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon from '@mui/icons-material/Edit'

const ListItems = ({ tasks, setTasks }) => {
  const [newItem, setNewItem] = useState('Hello')
  const handleItemStatusChanged = (index) => {
    const newTasks = tasks.map((item, i) => {
      if (i === index) {
        return {
          ...item,
          completed: !item.completed,
        }
      } else return item
    })
    setTasks(newTasks)
  }
  const handleDeleteItem = (index) => {
    setTasks([...tasks.slice(0, index), ...tasks.slice(index + 1)])
  }
  return (
    <div className="all-items">
      {tasks.map((todo, index) => (
        <div className="list-item">
          <Button
            sx={{
              alignItems: 'flex-start',
              justifyContent: 'flex-start',
              padding: 0,
              width: 'max-content',
              '&.MuiButtonBase-root:hover': {
                bgcolor: 'transparent',
              },
            }}
            disableRipple={true}
            disableFocusRipple={true}
            onClick={() => handleItemStatusChanged(index)}
          >
            <CheckCircleOutlineIcon
              sx={{ color: !todo.completed ? '#50C878' : 'gray' }}
            />
          </Button>
          {todo.completed ? (
            <strike
              style={{
                margin: 0,
                fontSize: '1.2rem',
                width: '100%',
                whiteSpace: 'nowrap',
              }}
            >
              {todo.todo}
            </strike>
          ) : (
            <p
              style={{
                margin: 0,
                fontSize: '1.2rem',
                whiteSpace: 'nowrap',
                width: '100%',
              }}
            >
              {todo.todo}
            </p>
          )}
          <div className="delete">
            <Button
              sx={{
                alignItems: 'center',
                justifyContent: 'flex-end',
                padding: 0,
                width: 'max-content',
                '&.MuiButtonBase-root:hover': {
                  bgcolor: 'transparent',
                },
              }}
            >
              <EditIcon sx={{ color: '#50c878' }} />
            </Button>
            <Button
              sx={{
                alignItems: 'center',
                justifyContent: 'flex-end',
                padding: 0,
                width: 'max-content',
                '&.MuiButtonBase-root:hover': {
                  bgcolor: 'transparent',
                },
                marginLeft: '0.5rem',
              }}
              disableRipple={true}
              disableFocusRipple={true}
              onClick={() => handleDeleteItem(index)}
            >
              <DeleteIcon sx={{ color: '#50C878' }} />
            </Button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default ListItems
