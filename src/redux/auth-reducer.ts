import {Dispatch} from "redux";
import {userAuthAPI} from "../api/api";
import {ThunkAction} from "redux-thunk";
import {StateType} from "./redux-store";
import {FormAction, stopSubmit} from "redux-form";

export type DataTypeAuthMe = {
    "id": number | null
    "login": string | null
    "email": string | null
}
export type AuthMeResponseType = {
    "data": DataTypeAuthMe | null
    "messages": [] | null
    "fieldsErrors": [] | null
    "resultCode": number | null
}

type InitialStateType = {
    "data": DataTypeAuthMe | null
    "messages": [] | null
    "fieldsErrors": [] | null
    "resultCode": number | null
    isAuth: boolean
}

const initialState: InitialStateType = {
    "data": null,
    "messages": null,
    "fieldsErrors": null,
    "resultCode": null,
    isAuth: false,
}

export const AuthReducer = (state: InitialStateType = initialState, action: ActionTypeAuthReducer): InitialStateType => {
    switch (action.type) {
        case "SET-AUTH-USER-DATA": {
            return {...state, data: action.data, isAuth: true}
        }
        default:
            return state
    }
}

export type ActionTypeAuthReducer = SetAuthUserDataAT
type SetAuthUserDataAT = ReturnType<typeof setAuthUserData>

export const setAuthUserData = (id: number | null, login: string | null, email: string | null, isAuth: boolean) => {
    return {
        type: "SET-AUTH-USER-DATA",
        data: {
            id,
            login,
            email,
            isAuth
        }
    } as const
}

export const getAuthUserData = () => (dispatch: Dispatch) => {
    return userAuthAPI.getAuthMe()
        .then(data => {
                if (data.resultCode === 0) {
                    let {id, login, email} = data.data
                    dispatch(setAuthUserData(id, login, email, true))
                }
            }
        )
}

type ThunkType = ThunkAction<void, StateType, unknown, ActionTypeAuthReducer | FormAction>

export const login = (email: string, password: string, rememberMe: boolean): ThunkType => {
    return (dispatch) => {
        userAuthAPI.logIn(email, password, rememberMe)
            .then(res => {
                    if (res.data.resultCode === 0) {
                        dispatch(getAuthUserData())
                    } else {
                        let message = res.data.messages.length > 0 ? res.data.messages[0] : "Error"
                        dispatch(stopSubmit("Login", {_error: message}))
                    }
                }
            )
    }
}

export const logout = () => {
    return (dispatch: Dispatch) => {
        userAuthAPI.logOut()
            .then(res => {
                    if (res.data.resultCode === 0) {
                        dispatch(setAuthUserData(null, null, null, false))
                    }
                }
            )
    }
}