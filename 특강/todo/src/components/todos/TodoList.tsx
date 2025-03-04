import { useState } from 'react'

export default function TodoList() {
  const [todos, setTodos] = useState([
    { id: 1, text: '할 일 1' },
    { id: 2, text: '할 일 2' },
    { id: 3, text: '할 일 3' }
  ])

  return (
    <div className="container mx-auto mt-5">
      <h1 className="text-2xl font-bold mb-4">Todo List</h1>
      <ul>
        {todos.map(todo => (
          <li
            key={todo.id}
            className="bg-white shadow-md rounded-md p-4 mb-2">
            {todo.text}
          </li>
        ))}
      </ul>
    </div>
  )
}