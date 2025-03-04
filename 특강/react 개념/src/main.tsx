// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './main.css'
import App from './App'

// App.tsx의 반환값을 root 자리에 출력한다는 의미
createRoot(document.getElementById('root')!).render(
  <>
    <App />
  </>
)
