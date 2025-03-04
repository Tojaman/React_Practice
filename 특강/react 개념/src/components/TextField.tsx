import { useRef, useEffect } from 'react'

export default function TextField() {
    const inputRef = useRef<HTMLInputElement | null>(null)

    useEffect(() => {
        // optional chaining: ?앞(inputRef.current)이 null이 아닐 때만 뒤(focus()) 메서드가 호출
        inputRef.current?.focus()
    }, [])
    return (
        <input ref={inputRef}/>
    )
}

/** 컴포넌트 생명주기(lifecycle)
 * 
 * 
 */