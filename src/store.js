import { createStore } from 'redux';

//reducer
const reducer = (state=initalState, action) => {
    console.log(action);
    switch(action.type){
        case "COLOR_CHANGE":
        return {
            ...state, 
            color: action.payload.value
        };
        default:
        return state;
    }
}
//store
const store = createStore(
    reducer, 
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;