function TaskList({ tasks, onDelete,  onEdit }) {
    console.log('📋 Задачи в TaskList:', tasks)
    return (
        <ul>
            {tasks.map(task => (
                <li key={task.id}>
                    <h2>{task.title}</h2>
                    <p>{task.description}</p>
                    <button onClick={() => onDelete(task.id)}>Удалить</button>
                    <button onClick={() => onEdit(task)}>Редактировать</button>
                </li>
            ))}
        </ul>
    )
}

export default TaskList
