import './App.css';
import { useState,useEffect } from 'react';
import AddingInput from './components/Todo/AddingInput';
import List from './components/Todo/List';

function App() {
  const date = new Date()
  const [tasks, setTasks] = useState([])

  useEffect(() => {
    if(tasks.length !==0){
      localStorage.setItem('data', JSON.stringify(tasks))
    }
},[tasks])

useEffect(() => {
   const dataStorageData =  JSON.parse(localStorage.getItem('data'))
   if(dataStorageData){
    setTasks(dataStorageData)
   }
},[])

  const addTask = (tasks) => {
    setTasks(prevTask => {
      return [
        ...prevTask,
        {
          title : tasks,
          id: Date.now(),
          date : date.toDateString() ,
          status: false
        }
    ]
    })
  }

  const deleteTask = (id) => {
    const deletedTask = tasks.filter(task => {
      return task.id !== id
    })
    setTasks(deletedTask)
    const localStorageData = localStorage.getItem('data')
    if(localStorageData.length > 0) {
      localStorage.removeItem('data')
    }
  }

  const checkTask = (id) => {
    const checkedTask = tasks.map(task =>{
      if(task.id === id){
       return {...task, status: !task.status}
      }
      return task
    })
    setTasks(checkedTask)
  }

  const editTask = (id, newTask) => {
    const editedTask = tasks.map(task => {
      if(task.id === id){
        return {...task, title: newTask}
      }
      return task
    })
    setTasks(editedTask)
  }

  const tasksList = tasks.map(task => (
    <List 
    task={task}
    key={task.id}
    onRemove={deleteTask}
    onCheck={checkTask}
    onEdit={editTask}
    />
  ))
  return (

    <div className='container'>
    <AddingInput addTask={addTask}/>
    <ul>{tasksList}</ul>
    </div>
  );
}

export default App;
