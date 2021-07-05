export enum ToolsActionTypes {
    SET_RECTANGLE = "SET_RECTANGLE",
    SET_LINE = "SET_LINE",
    SET_PENCIL = "SET_PENCIL",
    SET_CIRCLE = "SET_CIRCLE"
}

interface setRectangleAction {
    type: ToolsActionTypes.SET_RECTANGLE,
    payload: boolean
}

interface setLineAction {
    type: ToolsActionTypes.SET_LINE,
    payload: boolean
}

interface setPencilAction {
    type: ToolsActionTypes.SET_PENCIL,
    payload: boolean
}

interface setCircleAction {
    type: ToolsActionTypes.SET_CIRCLE,
    payload: boolean
}

export const setRectangle = (statusRect: boolean): setRectangleAction => {
    return {
        type: ToolsActionTypes.SET_RECTANGLE,
        payload: statusRect
    }
}

export const setLine = (statusLine: boolean): setLineAction => {
    return {
        type: ToolsActionTypes.SET_LINE,
        payload: statusLine
    }
}

export const setCircle = (statusLine: boolean): setCircleAction => {
    return {
        type: ToolsActionTypes.SET_CIRCLE,
        payload: statusLine
    }
}

export const setPencil = (statusPencil: boolean): setPencilAction => {
    return {
        type: ToolsActionTypes.SET_PENCIL,
        payload: statusPencil
    }
}

