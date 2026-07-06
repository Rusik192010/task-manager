import { useEffect, useState } from "react"



function TaskUpdate({ onUpdate, task, onClose }) {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [completed, setCompleted] = useState(false)
    const [error, setError] = useState('')

    useEffect(() => {
        if (task) {
            setTitle(task.title)
            setDescription(task.description)
            setCompleted(task.completed)
        }
    }, [task])

    const handleSubmit = (e) => {
        e.preventDefault()
        onUpdate(task.id, { title, description })
        setTitle('')
        setDescription('')
        setCompleted(false)
        onClose()
    }

    return (
        <form onSubmit={handleSubmit}>
            <button type="button" onClick={onClose}>x</button>
            <div className="wrap">
                <input 
                    type="text" 
                    placeholder="Задача"
                    onChange={e => setTitle(e.target.value)}
                />
                <input 
                    type="text" 
                    placeholder="Описание задачи"
                    onChange={e => setDescription(e.target.value)}
                />
                <label>Выполнено</label>
                <input 
                    type="checkbox" 
                    onChange={e => setCompleted(e.target.checked)}
                />
                <button>Редактировать</button>
            </div>
        </form>
    )
}

export default TaskUpdate
