import React from 'react';
import Todo from '../model';
import './style.css';

import { AiFillEdit, AiFillDelete } from 'react-icons/ai';
import { MdDone } from 'react-icons/md';

type Props = {
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction>;
};

// const handleDone = (id:number)=>{
// setTodos(todos.map(todo)=>Todolist.id===id?{...todo,isDone:!To})
// }
const SingleTodo = ({ todo, todos, setTodos }) => {
  return (
    <form className="todos_single">
      <span className="todos_single_text">{todo.todo}</span>
      <div>
        <span className="icon">
          <AiFillEdit />
        </span>
        <span className="icon">
          <AiFillDelete />
        </span>
        <span className="icon">
          <MdDone />
        </span>
      </div>
    </form>
  );
};

export default SingleTodo;
