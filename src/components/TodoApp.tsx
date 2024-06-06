import { useState } from "react"
import ListaTareas from "./ListaTareas"

export const TodoApp = () => {

  const [newTask, setNewTask] = useState<string>('')
  const [listaTareas, setListaTareas] = useState<string[]>([])

  const handleAddTask = () => {
    if (newTask.trim() === '') return
    setListaTareas(tareaAnteriores => [...tareaAnteriores, newTask])
    setNewTask('')
  }

  const handleBorrarTarea = (index: number) => {
    setListaTareas(tareas => tareas.filter((_, i) => i !== index))
  }

  return (
    <div>
      <h1>Lista de Tareas</h1>
      <div>
        <input 
          type='text'
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder='Nueva Tarea' 
        />
        <button onClick={handleAddTask}>Agregar tarea</button>
      </div>
      <ListaTareas 
        listaTareas={listaTareas} 
        borrarTarea={handleBorrarTarea}
      />
    </div>
  )
}