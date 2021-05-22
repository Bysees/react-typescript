import axios from 'axios';
import { FC, useEffect, useState } from 'react';
import './../App.css';
import List from './List';
import TodoItem from './TodoItem';
import { ITodo } from './types/types';

const TodosPage: FC = () => {

  const [todos, setTodos] = useState<ITodo[]>([])

  useEffect(() => {
    fetchTodos()
  }, [])

  async function fetchTodos() {
    const response = await axios.get<ITodo[]>('https://jsonplaceholder.typicode.com/todos?_limit=10')
    setTodos(response.data)
  }

  return (
    <div style={{ border: '1px solid black' }}>
      <List items={todos} renderItem={(todo: ITodo) => <TodoItem todo={todo} key={todo.id} />} />
    </div>
  );
}

export default TodosPage;
