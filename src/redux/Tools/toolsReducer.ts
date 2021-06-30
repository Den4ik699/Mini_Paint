import {ToolsActionTypes} from './toolsAction'

const initialState = {
    statusPencil: true,
    statusRect: false,
    statusLine: false,
    statusCircle: false
}

export const toolsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ToolsActionTypes.SET_PENCIL:
            return {
                ...state,
                statusPencil: action.payload
            }
        case ToolsActionTypes.SET_RECTANGLE:
            return {
                ...state,
                statusRect: action.payload
            }
        case ToolsActionTypes.SET_LINE: {
            return {
                ...state,
                statusLine: action.payload
            }
        }
        case ToolsActionTypes.SET_CIRCLE: {
            return {
                ...state,
                statusCircle: action.payload
            }
        }
        default:
            return state
    }
}