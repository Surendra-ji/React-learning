import styles from './Item.module.css';
function Item({workName,workDate,handleDelet}) {
    const onDelet = () => {
        handleDelet(workName);
    }
    return <div className={`${styles.kgrow} row`}>
        <div className="col-6">
            {workName}
        </div>
        <div className="col-4">
            {workDate}
        </div>
        <div className="col-2"><button onClick={onDelet} className={`${styles.kgbtn} btn btn-danger`}>Delete</button></div>
    </div>


}
export default Item;