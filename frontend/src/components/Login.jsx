import { useState } from "react"
import api from '../api/api'

function Login({ onLogin }) {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault()
        setError('')

        try {
            setLoading(true)

            const response = await api.post('api/token/', { username, password })

            localStorage.setItem('access_token', response.data.access)
            localStorage.setItem('refresh_token', response.data.refresh)

            onLogin()
        } catch(err) {
            setError(`Неверный логин или пароль.`)
        } finally {
            setLoading(false)
        }
    }

    if (loading) {
        return <h1>Загрузка...</h1>
    }

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                placeholder="Имя пользователя"
                value={username}
                onChange={e => setUsername(e.target.value)}
            />
            <input 
                type="password" 
                placeholder="Пароль"
                value={password}
                onChange={e => setPassword(e.target.value)}
            />
            <button>Войти</button>
            {error && <p>Ошибка {error}</p>}
        </form>
    )
}

export default Login
