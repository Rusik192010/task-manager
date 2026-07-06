import { useEffect, useState } from "react"
import Login from "./components/auth/Login"
import Register from "./components/auth/Register"
import TaskForm from "./components/tasks/TaskForm"
import TaskList from "./components/tasks/TaskList"
import useApi from "./hooks/useApi"
import TaskUpdate from "./components/tasks/TaskUpdate"

function App() {
  const { tasks, loading, error, fetchTasks, addTask, deleteTask, updateTask } = useApi()
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [showLogin, setShowLogin] = useState(false)
  const [isFirstLoad, setIsFirstLoad] = useState(true)
  const [edition, setEdition] = useState(null)

  console.log(edition)

  useEffect(() => {
    const token = localStorage.getItem('access_token')
    if (token) {
      setIsAuthenticated(true)
    }
    setIsFirstLoad(false)
  }, [])

  const handleLogin = () => {
    setIsAuthenticated(true)

    setTimeout(() => {
        fetchTasks()
    }, 200)
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

  const onAddTask = (addData) => {
    addTask(addData)
  }

  const onUpdateTask = (id, newData) => {
    updateTask(id, newData)
  }

  const handleClose = () => {
    setEdition(null)
  }

  const onDeleteTask = (idTask) => {
    deleteTask(idTask)
    console.log('🔄 Закрываю форму редактирования')
    setEdition(null) 
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
      {error && 
        <h2>Ошибка {error}</h2>
      }

      {!loading && !error && (
          <div>
            <header>
              <h1>Менеджер задач</h1>
              <button onClick={handleLogout}>Выйти</button>
            </header>
            <main>
              <TaskForm addTask={addTask} />
              <TaskList tasks={tasks} onDelete={onDeleteTask} onEdit={setEdition} />
              {edition && (
                  <TaskUpdate task={edition} onUpdate={onUpdateTask} onClose={handleClose} />
                )
              }
            </main>
          </div>
        )
      }
    </>
  )
}

export default App
