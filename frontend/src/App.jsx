import { useEffect, useState } from "react"
import Login from "./components/Login"
import Register from "./components/Register"

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [showLogin, setShowLogin] = useState(false)

  useEffect(() => {
    const token = localStorage.getItem('access_token')
    if (token) {
      setIsAuthenticated(true)
    }
  }, [])

  const handleLogin = () => {
    setIsAuthenticated(true)
  }

  const handleLogout = () => {
    setIsAuthenticated(false)
    localStorage.removeItem('access_token')
    localStorage.removeItem('refresh_token')
  }

  const onShowLogin = () => {
    setShowLogin(true)
  }

  const onShowRegister = () => {
    setShowLogin(false)
  }

  if (!isAuthenticated) {
    return (
      <div>
        {!showLogin ? (
            <Register onRegister={handleLogin} showLogin={onShowLogin} />
          ) : (
            <Login onLogin={handleLogin} showRegister={onShowRegister} />
          )
        }
      </div>
    )
  }

  return (
    <>
      <h1>Менеджер задач</h1>
      <button onClick={handleLogout}>Выйти</button>
    </>
  )
}

export default App
