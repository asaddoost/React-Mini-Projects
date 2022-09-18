import React from 'react'

function Todo ({todo, toggleTodo}) {
const handleTodoClick = () => {
  toggleTodo(todo.id)
}

  return (
      <div className='todo'>
    <input onChange={handleTodoClick} type="checkbox" checked={todo.complete}/>
        {todo.name}
    </div>
  )
}

export default Todo