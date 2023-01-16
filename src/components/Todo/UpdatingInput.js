import classes from './UpdatingInput.module.css'
import { UilThumbsUp } from '@iconscout/react-unicons'
import { UilTimes } from '@iconscout/react-unicons'

const UpdatingInput = (props) => {
    return (
      
        <form className={classes.formUpdate} onSubmit={props.onSubmit}>
          <div className={classes.inputWrapper}>
          <input className={classes.task} type="text" value={props.editInputValue} onChange={props.onChange} /> 
            <label><span></span></label>
          </div>
            <div>
            <button type="submit"><UilThumbsUp size='32' color='#e16428' /></button>
            <button onClick={props.onCancel}><UilTimes size='32' color='#e16428'/></button>
            </div>
        </form>
    )
}

export default UpdatingInput