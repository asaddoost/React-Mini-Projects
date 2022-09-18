import React, { useState, useRef, useEffect } from 'react'
import TodoList from './TodoList'
// import uuid from 'uuid/v4'
import { v4 as uuidv4 } from "uuid";

const LOCAL_STORAGE_KEY = 'todoApp.todos'

function App() {
  const [todos, setTodos ] = useState([])
  const todoNameRef = useRef()

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if (storedTodos)setTodos(storedTodos)
  }, [])

  useEffect(() =>{
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
    }, [todos])

    const toggleTodo = (id) => {
      const newTodos = [...todos]
      const todo = newTodos.find(todo => todo.id === id )
      todo.complete = !todo.complete
      setTodos(newTodos)
    }

  const handleAddTodo = (e) => {
    const name = todoNameRef.current.value
    if (name === '') return
    setTodos(prevTodos => {
      return [...prevTodos, {id:uuidv4(), name:name, complete:false}]
    })
    todoNameRef.current.value = null
  }

  const handleClearTodo = () => {
    const newTodos = todos.filter(todo => ! todo.complete) 
    setTodos(newTodos)
  }
  return (
    <>
      <div className="container">
      <TodoList todos={todos} toggleTodo={toggleTodo}/>
      <input ref={todoNameRef} type="text" placeholder='add tasks' autoFocus/>
      <div className='btn-box'>
      <button onClick={handleAddTodo} className='btn green'> + Add</button>
      <button onClick={handleClearTodo} className='btn red'> - clear</button>
      </div>
      <div className='counter'>{todos.filter(todo => !todo.complete).length} task Left to do</div>
      </div>
    </>
  )
}

export default App
