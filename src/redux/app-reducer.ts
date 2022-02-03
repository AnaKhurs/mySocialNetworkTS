import {ThunkAction} from "redux-thunk";
import {StateType} from "./redux-store";
import {ActionTypeAuthReducer, getAuthUserData} from "./auth-reducer";


type InitialStateType = {
    initialized: boolean
}

const initialState: InitialStateType = {
    initialized: false

}

export const appReducer = (state: InitialStateType = initialState, action: ActionTypeAppReducer): InitialStateType => {
    switch (action.type) {
        case "INITIALIZED-SUCCESS":
            return {
                ...state,
                initialized: true
            }
        default:
            return state
    }
}

export type ActionTypeAppReducer = SetInitializedType
type SetInitializedType = ReturnType<typeof initializedSuccess>

export const initializedSuccess = () => {
    return {
        type: "INITIALIZED-SUCCESS"
    } as const
}
type ThunkType = ThunkAction<void, StateType, unknown, ActionTypeAuthReducer | ActionTypeAppReducer>

export const initializeApp = (): ThunkType => {
    return (dispatch) => {
        const promise = dispatch(getAuthUserData())
        Promise.all([promise])
            .then(() => {
                dispatch(initializedSuccess())
            })

    }
}