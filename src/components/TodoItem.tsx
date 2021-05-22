import { FC } from "react"
import { ITodo } from "./types/types"

interface TodoItemProps {
  todo: ITodo
}

const TodoItem: FC<TodoItemProps> = ({ todo }) => {
  return (
    <div style={{ padding: 5, borderBottom: '1px solid black' }}>
      <input type="checkbox" checked={todo.completed} onChange={() => console.log('complete')} />
      {todo.id} Задание {todo.title}
    </div>
  )
}

export default TodoItem