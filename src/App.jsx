import './App.css'
import React, { useEffect } from 'react'
import { DatePicker } from '@mui/x-date-pickers'
import { LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import dayjs from 'dayjs'
import { Button } from '@mui/material'

function App ()  {
  let date = Date()
  const [value, setValue] = React.useState(dayjs(date))

  const handleClick = () => {
    alert(`Your appointment has been booked on ${value}`)
  }
  return (
    <div className='App'>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
     <DatePicker 
     value={value}
     onChange={(newValue) => setValue(newValue)}
     />
     </LocalizationProvider>
     <Button onClick={handleClick}  variant='contained'>BOOK AN APPOINMENT</Button>
    </div>
  )
}

export default App