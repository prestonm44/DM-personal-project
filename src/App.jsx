import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './Components/NavBar'
import User from './Components/User'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main class="main" id="top">
      <NavBar />
      <Link to="/">Buildings</Link>
      <Link to="/Users">Users</Link>
      <Link to="/AccessPoints">Access Points</Link>
      <div class="content">
        <Outlet />
      </div>
    </main>
  )
}

export default App
