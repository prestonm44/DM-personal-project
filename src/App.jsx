import { useState } from 'react'
import NavBar from './Components/NavBar'

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
