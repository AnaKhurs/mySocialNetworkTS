import {Dispatch} from "redux";
import {userAuthAPI} from "../api/api";
import {ThunkAction} from "redux-thunk";
import {StateType} from "./redux-store";
import {FormAction, stopSubmit} from "redux-form";

export type DataTypeAuthMe = {
    id: number | null
    login: string | null
    email: string | null
}
export type AuthMeResponseType = {
    data: DataTypeAuthMe | null
    messages: [] | null
    fieldsErrors: [] | null
    resultCode: number | null
}

type InitialStateType = {
    data: DataTypeAuthMe | null
    messages: [] | null
    fieldsErrors: [] | null
    resultCode: number | null
    isAuth: boolean
}

const initialState: InitialStateType = {
    data: null,
    messages: null,
    fieldsErrors: null,
    resultCode: null,
    isAuth: false,
}

export const AuthReducer = (state: InitialStateType = initialState, action: ActionTypeAuthReducer): InitialStateType => {
    switch (action.type) {
        case "auth/SET-AUTH-USER-DATA": {
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
        type: "auth/SET-AUTH-USER-DATA",
        data: {
            id,
            login,
            email,
            isAuth
        }
    } as const
}

export const getAuthUserData = () => async (dispatch: Dispatch) => {
    const response = await userAuthAPI.getAuthMe()
    if (response.data.resultCode === 0) {
        let {id, login, email} = response.data.data
        dispatch(setAuthUserData(id, login, email, true))
    }
}

type ThunkType = ThunkAction<void, StateType, unknown, ActionTypeAuthReducer | FormAction>

export const login = (email: string, password: string, rememberMe: boolean): ThunkType => async (dispatch) => {
    const res = await userAuthAPI.logIn(email, password, rememberMe)
    if (res.data.resultCode === 0) {
        dispatch(getAuthUserData())
    } else {
        let message = res.data.messages.length > 0 ? res.data.messages[0] : "Error"
        dispatch(stopSubmit("Login", {_error: message}))
    }
}

export const logout = () => async (dispatch: Dispatch) => {
    const res = await userAuthAPI.logOut()
    if (res.data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false))
    }
}