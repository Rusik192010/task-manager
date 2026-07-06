import { useState } from "react"


function TaskForm({ addTask }) {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [completed, setCompleted] = useState(false)
    const [error, setError] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        if (title.trim() === '' && description.trim() === '') {
            setError('Заполните поля')
        }

        addTask({ title: title, description: description, completed: completed })
        setTitle('')
        setDescription('')
        setCompleted(false)
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="wrap">
                <input 
                    type="text" 
                    placeholder="Задача"
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                />
                <input 
                    type="text" 
                    placeholder="Описание задачи"
                    value={description}
                    onChange={e => setDescription(e.target.value)}
                />
                <label>Выполнено</label>
                <input 
                    type="checkbox" 
                    value={completed}
                    onChange={e => setCompleted(e.target.checked)}
                />
                <button>Создать</button>
            </div>
        </form>
    )
}

export default TaskForm
