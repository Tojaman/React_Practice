import { create } from 'zustand'
import { combine } from 'zustand/middleware'

export interface Todo {
    id: string
    order: number
    title: string
    done: boolean
    createdAt: string
    updatedAt: string
}

/** 중앙 집중화된 상태 관리 저장소(패턴) */
// use로 시작하기 때문에 Hook
export const useTodoStore = create(
    // combine(상태, 액션함수)
    combine({
        todos: [] as Todo[] // Todo 타입의 배열
    },
    // set, get: todos 데이터를 set, get 할 수 있음
    (set, get) => ({
        getTodos: async () => {
            const todos: Todo[] = await requestTodo({})
            set({
                todos: todos
            })
        },

        createTodo: async (title: string) => {
            const data: Todo = await requestTodo({
                method: 'POST',
                data: {
                    title
                }
            })

            // const todos = get().todos
            const { todos } = get() // 위 코드를 이 코드로 축약 가능
            set({
                /** ...: {}나 []를 없애주는 기능
                 * todos는 배열([]) 형태
                 * todos에 todos를 할당하면 todos = [todos]가 됨
                 * 따라서 ...을 사용함으로써 배열을 없애고 내용물만 저장하여 todos = todos가 됨
                 */
                todos: [data, ...todos] // "fetch로 받은 값" + "기존의 todos 내용물" 할당
            })
        },
        updateTodo: async () => {},
        deleteTodo: async () => {},
    }))

    // combine({
    //     todos: []
    // }, () => ()
    //     return {} // 로직 없이 객체를 바로 반환하는 경우 위 코드처럼 return없이 {} 가능
    // ))
)

async function requestTodo(
    payload: {
        endpoint?: string
        method?: 'GET' | 'POST' | 'PUT' | 'DELETE'
        data?: unknown
    }) {
        const { endpoint = '', method = 'GET', data } = payload // endpoint, method: 기본값 설정
        const res = await fetch(
            `https://asia-northeast3-heropy-api.cloudfunctions.net/api/todos${endpoint}`,
            {
                method,
                headers: {
                    "content-type": "application/json",
                    "apikey": "KDT8_bcAWVpD8",
                    "username": "KDT8_ParkYoungWoong"
                },
                body: data ? JSON.stringify(data) : undefined // body에 data가 있으면 JSON화, 없다면 사용하지X
            } 
        )
    return res.json()
}