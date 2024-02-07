const errorMsg = (props) => {
    return <>
        {props.unknows.length === 0 && <h2>Unknow list is empty</h2>}
    </>
}
export default errorMsg;