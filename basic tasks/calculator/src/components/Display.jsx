import style from './Display.module.css';
const Display = ({disVal}) => {
    return <input className={`${style.inputBox}`} type='text' value={disVal} readOnly></input>

}
export default Display;