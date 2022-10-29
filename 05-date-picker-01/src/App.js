import { React, useState} from 'react'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'
import './App.css'


export default function App (){
    const [selectedDate, setSelectedDate] = useState(null);
  return (
    <div className='app'>
        <h1>Date Picker</h1>
        <DatePicker
        selected={selectedDate} 
        onChange={date => setSelectedDate(date)}
        dateFormat= 'yyyy/MM/dd'
        // minDate={new Date()}
        // maxDate={new Date()}
        // filterDate={date =>date.getDay() !== 6 && date.getDay() !== 0}
        // isClearable
        showYearDropdown
        scrollableMonthYearDropdown
        placeholderText='YYYY/MM/DD'
         />
    </div>
  )
}



