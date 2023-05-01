import * as React from 'react';
import InputFeild from './components/InputFeild';
import './style.css';
import { Todo } from './model';
import Todolist from './components/Todolist';

export default function App() {
  const [todo, setTodo] = React.useState<string>('');

  const [todos, setTodos] = React.useState<Todo[]>([]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (todo) {
      setTodos([...todos, { id: Date.now, todo, isDone: false }]);
      setTodo('');
    }
  };

  console.log(todo);
  console.log('Todos', todos);
  return (
    <div className="App">
      <span className="heading">To Do List</span>
      <InputFeild todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
      <Todolist todos={todos} setTodos={setTodos} />
    </div>
  );
}
