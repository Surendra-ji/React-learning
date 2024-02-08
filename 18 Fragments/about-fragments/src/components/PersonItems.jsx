import { useState } from "react";
import Items from "./Items";
// child file
const PersonItems = (props) => {
    let [currentActive, setcurrentActive] = useState([]);
    const onBuyClick = (e,person) => {
        if (!currentActive.includes(person)) {
            let newList = [...currentActive, person]
            setcurrentActive(newList);
            // console.log(`${person}--- ${newList}`);
        }
    }
    return <>
        <ul className="list-group">
        {props.unknows.map(itm => <Items key={itm} person={itm} isActive={currentActive.includes(itm)} handleBuyClick={onBuyClick}></Items>)}
        </ul>
    </>
};
export default PersonItems;