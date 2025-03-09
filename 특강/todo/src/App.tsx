import TodoCreator from '@/components/todos/TodoCreator'
import TodoList from '@/components/todos/TodoList'

export default function App() {
  console.log('App component rendered') // 렌더링 확인
  return (
    <div className="mx-auto max-w-[500px] p-5">
      <TodoCreator />
      <TodoList />
    </div>
  )
}