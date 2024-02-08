import style from './ChildToParentEvent.module.css';

function ChildToParentEvent ({handleKeyDown}) {
    
    return <>
    <input type='text' className={style.PInput} placeholder='Child to parent envet'
    onKeyDown={handleKeyDown}
    ></input>
    </>
}

export default ChildToParentEvent;