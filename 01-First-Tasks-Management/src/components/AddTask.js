import React, {useState} from 'react'

const AddTask = ({onAdd}) => {
  const [text, setText] = useState("") ;
  const [day, setDay] = useState("") ;
  const [reminder, setReminder] = useState(false) ;

  const onSubmit = (e) => {
    e.preventDefault();
    
    if(!text) {
      alert('Please add a task')
      return;
    }

    onAdd({text, day,reminder})

    setText("");
    setDay("");
    setReminder("");


  }

  return (
    <form className="add-form" onSubmit={onSubmit}>
      <div className="form-control">
        <label>Task</label>
        <input
        value={text}
        onChange={(e) => setText(e.target.value) }
        type="text"
        placeholder='Add a task'
          autoFocus
        />
      </div>
      <div className="form-control">
        <label>Day</label>
        <input
        value={day}
        onChange={(e) => setDay(e.target.value) }
        type="text" 
        placeholder='Add a day'/>
      </div>
      <div className="form-control form-control-check">
      
        <input
        checked={reminder}
        value={reminder}
        onChange={(e) => setReminder(e.currentTarget.checked) }
        type="checkbox" />  
        <label>Reminder</label>
        
      </div>
      <input type="submit" value="+ Add  new  task" className="btn btn-block"/>
    </form>
  )
}

export default AddTask


