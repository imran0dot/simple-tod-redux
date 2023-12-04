import { STATUSCHANGED, COLORCHNAGED } from "./actionTypes";


const statusChanged = (status) => {
    return {
        type: STATUSCHANGED,
        payload: status
    }
}

const colorChanged = (color, changeType) => {
    return {
        type: COLORCHNAGED,
        payload: { color, changeType }
    }
}


export { statusChanged, colorChanged }