import styles from './Items.module.css';
const handleBuyClick = (e,persons) => {
    console.log(e)
    console.log(persons);
}

const Items = ({persons}) => {
    return <>
         <li key={persons} className={`${styles.list} list-group-item`}>{persons}
         <button className={`${styles.button} btn btn-info`}
         onClick={(e) => handleBuyClick(e,persons)}
         >Buy</button>
         </li> 
    </>
}
export default Items;