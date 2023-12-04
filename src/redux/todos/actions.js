import { ADDED, ALLCOMPLETED, COLORSLECTED, DELETED, TOGGLED } from "./actionTypes"

const added = (todoText) => {
    return {
        type: ADDED,
        payload: todoText
    }
}


const toggled = (todoId) => {
    return {
        type: TOGGLED,
        payload: todoId
    }
}

const colorselected = (todoId, color) => {
    return {
        type: COLORSLECTED,
        payload: { todoId, color }
    }
}

const deleted = (todoId) => {
    return {
        type: DELETED,
        payload: todoId
    }
}

const allcompleted = () => {
    return {
        type: ALLCOMPLETED,
    }
}

const clearcompleted = () => {
    return {
        type: clearcompleted,
    }
}

export { added, toggled, colorselected, deleted, allcompleted, clearcompleted }