import React from 'react'
import './Today.css'
const Today = () => {
  const days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ]
  const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ]
  const date = new Date()
  const today = days[date.getDay()]
  const numericDate = date.getDate()
  const currentMonth = months[date.getMonth()]
  return (
    <div className="today">
      <strong>{today}</strong>, {numericDate} {currentMonth}
    </div>
  )
}

export default Today
