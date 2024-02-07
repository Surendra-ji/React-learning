import Items from "./Items";

const PersonItems = (props) => {
    return <>
        <ul className="list-group">
        {props.unknows.map(itm => <Items key={itm} persons={itm}></Items>)}
        </ul>
    </>
};
export default PersonItems;