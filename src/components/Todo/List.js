import Card from '../UI/Card'
import classes from './List.module.css'
import {  useState } from 'react'
import UpdatingInput from './UpdatingInput'
import { UilPen } from '@iconscout/react-unicons'
import { UilTrash } from '@iconscout/react-unicons'
import { UilCheckCircle } from '@iconscout/react-unicons'
import { UisCheckCircle } from '@iconscout/react-unicons-solid'


const List = (props) => {

    const [isEditToggled, setIsEditToggled] = useState(false)
    const [editedInput, setEditedInput] = useState(props.task.title)

    const toggleEdit = () => {
        setIsEditToggled(!isEditToggled)
    }

    const editTaskSubmission = (e) => {
        e.preventDefault()
        if(editedInput.trim().length === 0){
            return props.onRemove(props.task.id)
        }
        props.onEdit(props.task.id, editedInput)
        toggleEdit()
    }

    const editInputHandler = (e) => {
        setEditedInput(e.target.value)
    }

    const cancelEditHandler = () => {
        setEditedInput(editedInput)
    }

    return (
        <Card>
        {isEditToggled ? 
            <UpdatingInput 
            onChange={editInputHandler}
            editInputValue={editedInput}
            onSubmit={editTaskSubmission}
            onCancel={cancelEditHandler}/>
            :
            <li key={props.task.id} >
           <div className={classes.info}>
            <p className={props.task.status ? `${classes.task} ${classes.checked}` : classes.task }>{props.task.title}</p>
            <p>{props.task.date}</p>
           </div>
           <div className={classes.buttons}>
           <button  onClick={() => props.onRemove(props.task.id)}>
            <UilTrash size='32' color='#e16428'/>
        
            </button>
            <button onClick={toggleEdit}><UilPen size='32' color='#e16428'/></button>
            {!props.task.status ?
             <button onClick={() => props.onCheck(props.task.id)}>
                <UilCheckCircle size='32' color='#e16428'/>
                </button>
              : <button onClick={() => props.onCheck(props.task.id)}><UisCheckCircle size='32' color='#e16428'/></button> }
           </div>
           </li>
        }  
       </Card>
       
    )
}

export default List