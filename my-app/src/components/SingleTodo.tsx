import React,{ useState, useRef, useEffect } from 'react';
import { Todo } from '../model';
import { AiOutlineEdit } from 'react-icons/ai';
import { MdDone, MdOutlineDeleteOutline } from 'react-icons/md';


import '../components/style.css';
import { Draggable } from 'react-beautiful-dnd';


type Props = {
    index: number;
    todo :Todo;
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;

}

const SingleTodo = ({index, todo, todos, setTodos}: Props) => {

  const [edit, setEdit] = useState<boolean>(false);
  const [editTodo, setEditTodo] = useState<string>(todo.todo);

  //delete task
  const handleDelete = (id : number) => {
      setTodos(todos.filter((todo) => todo.id !==id ))
  };

  //Done task
  const handleDone = (id:number) => {
    setTodos(
      todos.map((todo)=> 
        todo.id === id ? {...todo, isDone: !todo.isDone} : todo )
    );
  }

  //edit task
  const handleEdit = (e: React.FormEvent, id:number) =>{
    e.preventDefault();
    setTodos(
      todos.map((todo) => (
        todo.id === id ? {...todo, todo: editTodo} : todo))
    )
      
        setEdit(false);
      
  };

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  },[edit])


  return (
    <Draggable 
    draggableId={todo.id.toString()}
    index={index}

    >
        {
          (provided, snapShot) => (
                  <form 
                  className={`todos_single ${snapShot.isDragging ? "drag" : ''}`}
                  onSubmit={(e)=> handleEdit(e, todo.id)}
                  {...provided.draggableProps}
                  {...provided.dragHandleProps}
                  ref={provided.innerRef}
                  >
            { edit ? (
                <input 
                ref={inputRef}
                className="single_todo_text-edit"
                value={editTodo} 
                onChange={(e) => setEditTodo(e.target.value)}
                autoFocus
                />
                ) : todo.isDone ? (
                  <s className="single_todo_text">{todo.todo}</s>) :(
                <span className="single_todo_text">{todo.todo}</span>
              )}

            <div>
              <span onClick={()=>{
                if (!edit && !todo.isDone) {
                  setEdit(!edit);
                }
              }}><AiOutlineEdit className='icon'/></span>
              <span 
              onClick={()=> handleDelete(todo.id)}><MdOutlineDeleteOutline className='icon'/></span>
              <span 
              onClick={()=> handleDone(todo.id)}><MdDone className='icon'/></span>
            </div>
            
          </form>
          )
        }
    </Draggable>
  )
}

export default SingleTodo;