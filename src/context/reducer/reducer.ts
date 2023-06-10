import {ActionPoints} from "./enums";


export const reducer = (state, action) => {
    switch (action?.type) {
        case ActionPoints.ADD:
            return state;
        case ActionPoints.COMPLETE:
            return state
        default:
            return state;
    }
};