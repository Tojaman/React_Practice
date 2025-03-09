import { useState } from 'react'
import { useTodoStore } from '@/stores/todo'

export default function TodoCreator() {
  
  const [title, setTitle] = useState('')

  // useTodoStroe((state) => {
  //   return state.createTodo
  // })
  // 위 코드를 아래 코드처럼 생략 가능
  const createTodo = useTodoStore(state => state.createTodo) // 매개 변수가 하나일 때는 소괄호(state) 생략 가능

  function handleCreate() {
    createTodo(title)
  }

  return (
    <>
      {/* <h1>{title}</h1> */}
      <input
      value={title}
      className="round-md"
      onChange={(e) => {
        setTitle(e.currentTarget.value) // 양방향 데이터 바인딩
      }}
      onKeyDown={(e) => {
        if (e.nativeEvent.isComposing) return; // 한글 입력 중이면 무시
        if (e.key == 'Enter') {
          handleCreate()
        }
      }}
      />
      <button onClick={handleCreate}>추가</button>
    </>
  )
}