import styles from './Item.module.css';
function Item(props) {
    return <div className={`${styles.kgrow} row`}>
        <div className="col-6">
            {props.workName}
        </div>
        <div className="col-4">
            {props.workDate}
        </div>
        <div className="col-2"><button className={`${styles.kgbtn} btn btn-danger`}>Delete</button></div>
    </div>


}
export default Item;