import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './Components/NavBar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main class="main" id="top">
      <NavBar />

      <div class="content">
        <Outlet />
      </div>
    </main>
  )
}

export default App
