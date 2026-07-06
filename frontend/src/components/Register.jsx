import { useState } from "react"
import api from '../api/api'

function Register({ onRegister, showLogin }) {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [password2, setPassword2] = useState('')
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault()
        setError('')

        if (username.trim() == '') {
            setError('Заполните поле')
        } else if (password.length < 8) {
            setError('Пароль должен быть не менее 8 символов')
        } else if (password !== password2) {
            setError('Пароли должны совпадать')
        }

        try {
            setLoading(true)

            const response = await api.post('api/token/', { username, password })
            localStorage.setItem('access_token', response.data.access)
            localStorage.setItem('refresh_token', response.data.refresh)

            onRegister()
        } catch(err) {
            if (err.response?.data?.username) {
                setError('Пользователь с таким именем существует')
            } else {
                setError('Ошибка регистрации. Попробуйте позже.')
            }
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
            <input 
                type="password" 
                placeholder="Повторите пароль"
                value={password2}
                onChange={e => setPassword2(e.target.value)}
            />
            <button>Зарегистрироваться</button>
            {error && <p>{error}</p>}
            <button onClick={showLogin}>Уже зарегестрированы?</button>
        </form>
    )
}

export default Register
