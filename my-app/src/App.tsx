import React, {useState} from 'react';
import './App.css';
//components
import InputField from './components/InputField';
import TodoList from './components/TodoList';
import  { DragDropContext, DropResult } from 'react-beautiful-dnd';

//types
import { Todo } from './model';




const App: React.FC = () => {

  const [todo, setTodo] = useState<string>('');
  const [todos, setTodos] = useState<Todo[]>([]);
  const [completedTodos, setCompletedTodos] = useState<Todo[]>([]);


  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();

    if(todo) {
      setTodos([...todos,{id:Date.now(), todo, isDone: false } ])
      //empty todo
      setTodo('');
    }

  };

  // console.log(todos)


  const onDragEnd = (result: DropResult) => {
    const { source, destination} = result;
    console.log(result);

    if(!destination) return;

    if(destination.droppableId === source.droppableId 
      && destination.index === source.index)
       return;

    let add,
     active = todos,
     complete = completedTodos;

    if(source.droppableId === 'TodosList'){
      add = active[source.index];
      active.splice(source.index, 1);
    } else {
      add = complete[source.index];
      complete.splice(source.index, 1);
    }


    if(destination.droppableId === 'TodosList') {
      active.splice(destination.index, 0 , add);
    } else {
      complete.splice(destination.index, 0, add);
    }

    setCompletedTodos(complete);
    setTodos(active);

  };



  return (
    //drag and drop package
    <DragDropContext onDragEnd={onDragEnd}>
          <div className="App">
            <span className='heading'>Tasks</span>
            <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd}/>
            <TodoList 
            todos={todos} 
            setTodos={setTodos}
            completedTodos={completedTodos}
            setCompletedTodos={setCompletedTodos}
            />
        </div>
    </DragDropContext>
  );
}


export default App;
