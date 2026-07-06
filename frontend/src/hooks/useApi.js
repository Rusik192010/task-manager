import { useEffect, useState } from "react";
import api from "../api/api";


const useApi = () => {
    const [tasks, setTasks] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')

    const fetchTasks = async () => {
        try {
            setLoading(true)
            setError('')

            const response = await api.get('api/tasks/')
            setTasks(response.data)
        } catch(err) {
            setError(`Ошибка загрузки: ${err.message}`)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchTasks()
    }, [])

    const addTask = async (addData) => {
        try {
            setLoading(true)
            setError('')

            const response = await api.post('api/tasks/', addData)
            setTasks(prev => [...prev, response.data])
        } catch(err) {
            setError(`Ошибка Добавления: ${err.message}`)
        } finally {
            setLoading(false)
        }
    }

    const deleteTask = async (idTask) => {
        try {
            setLoading(true)
            setError('')

            await api.delete(`api/tasks/${idTask}/`)
            setTasks(prev => prev.filter(task => task.id !== idTask))
        } catch(err) {
            setError(`Ошибка удаления: ${err.message}`)
        } finally {
            setLoading(false)
        }
    }

    const updateTask = async (idTask, newData) => {
        try {
            setLoading(true)
            setError('')

            const response = await api.put(`api/tasks/${idTask}/`, newData)
            setTasks(prev => prev.map(task => (
                task.id === idTask ? response.data : task
            )))
        } catch(err) {
            setError(`Ошибка обнавления: ${err.message}`)
        } finally {
            setLoading(false)
        }
    }

    return {
        tasks,
        loading,
        error,
        addTask,
        deleteTask,
        updateTask,
        fetchTasks
    }
}

export default useApi


