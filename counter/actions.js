export const changeColor = (color) => ({
    type: COLOR_CHANGE,
    payload: {
        value: color
    }
});

//inital state

const initalState = {
    color: "color"
};