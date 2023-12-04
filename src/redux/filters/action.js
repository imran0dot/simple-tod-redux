import { STATUSCHANGED, COLORCHNAGED } from "./actionTypes";


const statusChanged = (state) => {
    return {
        type: STATUSCHANGED,
        payload: state
    }
}

const colorChanged = (color, changeType) => {
    return {
        type: COLORCHNAGED,
        payload: { color, changeType }
    }
}


export { statusChanged, colorChanged }