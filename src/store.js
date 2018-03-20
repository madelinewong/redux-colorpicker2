import { createStore } from 'redux';

//types
export const CHANGE_COLOR = 'CHANGE_COLOR';

//actions

export const changeColor = (color) => ({
    type: CHANGE_COLOR,
    payload: {
        value: color
    }
});

//inital state
const initalState = {
    color: "color"
};
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