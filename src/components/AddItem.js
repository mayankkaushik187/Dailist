import { Button, TextField } from '@mui/material'
import React from 'react'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline'
import './AddItem.css'
const AddItem = ({ tasks, setTasks, setNewItem, handleAddItem }) => {
  return (
    <div className="add">
      <TextField
        fullWidth
        label="Add your item"
        size="small"
        sx={{
          borderRadius: '8px',
          borderColor: '#50C878',
          '& .MuiInputBase-input': {
            borderColor: '#50C878',
          },
          '& label.Mui-focused': {
            color: '#50C878',
          },
          '&:hover label': {
            color: '#50c878',
          },
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: 'grey',
            },
            '&:hover fieldset': {
              borderColor: '#50C878',
            },
            '&.Mui-focused fieldset': {
              borderColor: '#50C878',
            },
          },
        }}
        onChange={(e) => setNewItem(e.target.value)}
      />
      <Button
        disableRipple={true}
        disableElevation={true}
        disableFocusRipple={true}
        sx={{
          alignItems: 'center',
          justifyContent: 'flex-end',
          padding: 0,
          width: 'max-content',
          '&.MuiButtonBase-root:hover': {
            bgcolor: 'transparent',
          },
        }}
        onClick={() => {
          handleAddItem()
        }}
      >
        <AddCircleOutlineIcon sx={{ color: '#50C878' }} />
      </Button>
    </div>
  )
}

export default AddItem
