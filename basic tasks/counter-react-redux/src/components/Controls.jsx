import { useDispatch } from "react-redux";

const Controls = () => {
    const dispatch = useDispatch();
    const handleIncrement = () => {
        dispatch({type: "INCREMENT"})
    }
    const handleDecerement = () => {
        dispatch({type: "DECREMENT"})
    }
    const handleMultiply = () => {
        dispatch({type: "MULTIPLY"})
    }
    return <>
        <div className="d-grid gap-2 d-sm-flex justify-content-sm-center mb-3">
            <button type="button" onClick={handleIncrement} className="btn btn-success btn-lg px-4 me-sm-3">+</button>
            <button type="button" onClick={handleDecerement} className="btn btn-danger btn-lg px-4 me-sm-3">-</button>
            <button type="button" onClick={handleMultiply} className="btn btn-primary btn-lg px-4">*</button>
        </div>
    </>
}
export default Controls;