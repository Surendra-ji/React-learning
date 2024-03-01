import {createStore} from "redux";
const INITIAL_VALUE = {
    counter: 0
}
const counterReducer = (store=INITIAL_VALUE, action) =>{
    let newstore = store;
    if(action.type === "INCREMENT") {
        newstore = {counter: store.counter+1}
    } else if(action.type === "DECREMENT") {
        newstore = {counter: store.counter-1}
    } else if(action.type === "MULTIPLY") {
        newstore = {counter: store.counter*store.counter}
    }

    return newstore;
}

const counterStore = createStore(counterReducer);

export default counterStore;
