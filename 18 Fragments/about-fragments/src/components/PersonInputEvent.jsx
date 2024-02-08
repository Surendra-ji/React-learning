import style from './PersonInputEvent.module.css';

function PersonInputEvent () {
    const handleChange = (e) => {
        console.log(e.target.value);
    }
    return <>
    <input type='text' className={style.PInput} placeholder='Enter the Unknown Person name'
    onChange={(e) => handleChange(e)}
    ></input>
    </>
}

export default PersonInputEvent;