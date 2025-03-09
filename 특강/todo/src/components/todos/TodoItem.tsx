
import { useState } from 'react'
import type { Todo } from '@/stores/todo'

export default function TodoItem({ todo }: { todo: Todo }) {
    const [idEdit, setIsEdit] = useState(false)

    return <div key={todo.id}>
        {
        }
    </div>
}