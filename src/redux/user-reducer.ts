type LocationType = {
    city: string
    country: string
}
export type PhotosType = {
    "small": null | string
    "large": null | string
}

export type User = {
/*    id: number
    fullName: string
    avatar: string
    followed: boolean
    status: string
    location: LocationType*/
    "name": string
    "id": number
    "uniqueUrlName": null | string
    "photos": PhotosType
    "status": null | string
    "followed": boolean
}

type InitialStateType = {
    users: Array<User>
}

const initialState: InitialStateType = {
    users: []
}

export const userReducer = (state: InitialStateType = initialState, action: ActionTypeUserReducer): InitialStateType => {
    switch (action.type) {
        case "FOLLOW": {
            return {...state, users: state.users.map(u => u.id === action.id ? {...u, followed: true} : u)}
        }
        case "UNFOLLOW": {
            return {...state, users: state.users.map(u => u.id === action.id ? {...u, followed: false} : u)}
        }
        case "SET-USERS": {
            return {...state, users: [...state.users, ...action.users]}
        }
        default:
            return state
    }
}

export type ActionTypeUserReducer = FollowAT | UnfollowAT | SetUsersAT
type FollowAT = ReturnType<typeof followAC>
type UnfollowAT = ReturnType<typeof unfollowAC>
type SetUsersAT = ReturnType<typeof setUsersAC>

export const followAC = (id: number) => {
    return {
        type: "FOLLOW",
        id
    } as const
}

export const unfollowAC = (id: number) => {
    return {
        type: "UNFOLLOW",
        id
    } as const
}

export const setUsersAC = (users: Array<User>) => {
    return {
        type: "SET-USERS",
        users: users
    } as const
}