import styles from './Buttons.module.css'

const Buttons = () => {
    let btns = [1,2,3,4,5,6,7,8,9,0,'.','/','*','-','+','=','C']
    return <>
        <div className={`${styles.btnContainer}`}>
            {btns.map(btn => <button key ={btn} className={`${styles.btn}`}>{btn}</button>)}
        </div>
    </>
}

export default Buttons