import React,{ useState, useEffect } from 'react'
import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';
import Footer from './components/Footer';




const App = () => {
    const[showAddForm, setShowAddForm] = useState(false)
    const [tasks, setTasks] = useState([
        {
            "id": 1,
            "text": "Meeting with Customers",
            "day": "5th",
            "reminder": false
          },
          {
            "id": 2,
            "text": "Create New Documentation",
            "day": "6th",
            "reminder": false
          },
          {
            "text": "buying new products",
            "day": "6th",
            "reminder": true,
            "id": 3
          },
          {
            "text": "Go To The Picnic Company",
            "day": "7th",
            "reminder": false,
            "id": 4
          },
        
    ]);

 

    // Delete tasks
   const deleteTask =  (id) => {

        setTasks(tasks.filter((task) => task.id !== id));
    };

    //Set reminder
    const toggleReminder = (id) => {
        setTasks(
            tasks.map((task) =>
            task.id === id ? {...task, reminder : !task.reminder} : task)
        )
    }


    //Add Task
    const addTask = (task) => {
       const id = Math.floor(Math.random() * 10000) + 1;
       const newTask = {id,...task};
       setTasks([...tasks, newTask])
    };



  return (
    <>
    <div className="container">
    <Header
    showAddForm={showAddForm}
    onAdd={() => setShowAddForm(!showAddForm)} 
    title="Tasks management"/>
    {showAddForm && <AddTask onAdd={addTask}/>}
    {tasks.length > 0 ? (
    <Tasks
    onToggle={toggleReminder}
    onDelete={deleteTask}
    tasks={tasks}
    /> 
    ):("There is no task!") }
    </div>
    <Footer/>
    </>
  );
}

export default App

