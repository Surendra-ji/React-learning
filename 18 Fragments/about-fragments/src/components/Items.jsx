import styles from './Items.module.css';


//  child of child file Or SUB child file
const Items = ({person, isActive, handleBuyClick}) => {
    return <>
         <li key={person} className={`${styles.list} list-group-item ${isActive && 'active'}`}>{person}
         <button className={`${styles.button} btn btn-info`}
         onClick={(evt)=>{handleBuyClick(evt, person)}}
         >Buy</button>
         </li> 
    </>
}
export default Items;