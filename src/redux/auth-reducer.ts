export type DataType = {
    "id": number
    "login": string
    "email": string
}
type AuthDataType = {
    "data": DataType | null
    "messages": [] | null
    "fieldsErrors": [] | null
    "resultCode": number | null
}

type InitialStateType = {
    "data": DataType | null
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
            debugger
            return {...state, data: action.data, isAuth: true}
        }
        default:
            return state
    }
}

export type ActionTypeAuthReducer = SetAuthUserDataAT
type SetAuthUserDataAT = ReturnType<typeof setAuthUserData>

export const setAuthUserData = (id: number, login: string, email: string) => {
    return {
        type: "SET-AUTH-USER-DATA",
        data: {
            id,
            login,
            email,
        }
    } as const
}