// Hook: use~~~인 애들은 모두 Hook이라고 함
// useState: 데이터를 바꿀 때 화면 값도 같이 바꾸고 싶다면 useState를 사용함
import { useState } from 'react'
import List from '@/components/List.tsx'
import TextField from '@/components/TextField.tsx'
// 경로 별칭(path alias): vite.js에서 제공

export default function App() {
  // let count = 0
  const [count, setCount] = useState(0) // 반응성

  function handleClick() {
    const _count = count+1
    setCount(_count)
    console.log(_count)
  }

  function handleMouseEnter() {}
  function handleMouseLeave() {}

  // tsx, jsx처럼 x가 붙으면 html 구조를 return할 수 있음
  return (
    // <> </>: Fragment
    <>
      <h1
        // className="text-4xl font-bold"
        className={`text-4xl font-bold ${count > 7 ? 'active' : ''}`}
        // react는 문자 타입으로 넣어줄 수 없음, 객체 형식으로 넣어줘야 함
        style={{
          backgroundColor: 'white'
          // 원래 이름인 background-color를 카멜케이스인 backgroundColor로 작성하면 react가 알아서 css로 변경해서 적용해줌
        }}
        // 파란색{}: 화살표 함수(함수임)
        // onClick={() => {
        //   const _count = count + 1
        //   setCount(count + 1)
        //   // console.log(count) // 화면 값과 콘솔 값은 다를 수 있음
        //   console.log(_count)
        // }}>
        onClick={handleClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}>
        App.tsx({count})
      </h1>
      {count > 0 && (
        <button
          onClick={() => {
          setCount(0)
        }}>
          초기화
        </button>
      )}
      <List />
      <TextField />
    </>
  )
}