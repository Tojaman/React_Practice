import { useState } from 'react'

export default function TodoCreator() {
  const [newTodo, setNewTodo] = useState('')

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewTodo(e.target.value)
  }

  const handleAddTodo = () => {
    if (newTodo.trim() !== '') {
      // TODO: Todo 추가 로직 구현
      console.log('Todo 추가:', newTodo)
      setNewTodo('') // 입력 필드 초기화
    }
  }

  return (
    <div className="flex items-center">
      <input
        placeholder="새로운 할 일"
        value={newTodo}
        onChange={handleInputChange}
        className="border rounded p-2 mr-2" />
      <button
        onClick={handleAddTodo}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md">
        추가
      </button>
    </div>
  )
}