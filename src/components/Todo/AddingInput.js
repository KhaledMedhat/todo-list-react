import { useState } from "react"
import classes from './AddingInput.module.css'


const AddingInput = (props) => {
    const [addingInput, setAddingInput] = useState('')

    const inputChangeHandler = (e) => {
      setAddingInput(e.target.value)
    }

    const addingTaskSubmission = (e) => {
        e.preventDefault()
        if(addingInput.trim().length === 0){
            return
        }
        props.addTask(addingInput)
        setAddingInput('')
    }

    return(
        
        <form onSubmit={addingTaskSubmission}>
            <input required  className={classes.task} type="text" value={addingInput} onChange={inputChangeHandler} />
            <label><span>Enter Your Tasks</span></label>
        </form>
    )
}

export default AddingInput