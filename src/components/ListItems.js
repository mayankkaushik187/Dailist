import React, { useEffect, useState } from 'react'
import './ListItems.css'
import { Button, TextField } from '@mui/material'
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline'
import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon from '@mui/icons-material/Edit'
import SaveIcon from '@mui/icons-material/Save'

const ListItems = ({
  tasks,
  setTasks,
  editing,
  setEditing,
  editedValue,
  setEditedValue,
}) => {
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

  const handleEditItem = (index, text) => {
    console.log('text aaya', text)
    const newTasks = tasks.map((item, i) => {
      if (i === index) {
        return {
          ...item,
          todo: text,
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
        <div
          className="list-item"
          style={{ marginBottom: index + 1 === tasks.length ? 0 : '1rem' }}
          key={index}
        >
          <Button
            sx={{
              alignItems: 'center',
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
          {!editing[index] ? (
            todo.completed ? (
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
            )
          ) : (
            <TextField
              fullWidth
              size="small"
              defaultValue={todo.todo}
              onChange={(e) => {
                const newEditedValue = editedValue.map((item, i) => {
                  if (i === index) return e.target.value
                  else return item
                })
                setEditedValue(newEditedValue)
              }}
            />
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
              disableRipple={true}
              disableFocusRipple={true}
              onClick={() => {
                const newEditing = editing.map((item, i) => {
                  if (index === i) {
                    return !item
                  } else return item
                })
                console.log(editedValue, newEditing, editing)
                if (editedValue[index] && !newEditing[index]) {
                  handleEditItem(index, editedValue[index])
                  console.log('here')
                }
                setEditing(newEditing)
              }}
            >
              {!editing[index] ? (
                <EditIcon sx={{ color: '#50c878' }} />
              ) : (
                <SaveIcon sx={{ color: '#50c878' }} />
              )}
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
