
export type PhotosType = {
    "small": null | string
    "large": null | string
}

export type UserType = {
    "name": string
    "id": number
    "uniqueUrlName": null | string
    "photos": PhotosType
    "status": null | string
    "followed": boolean
}

type InitialStateType = {
    users: Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
}

const initialState: InitialStateType = {
    users: [],
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false
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
            return {...state, users: [...action.users]}
        }
        case "SET-CURRENT-PAGE": {
            return {...state, currentPage: action.currentPage}
        }
        case "SET-TOTAL-USERS-COUNT": {
            return {...state, totalUsersCount: action.totalUsers}
        }
        case "TOGGLE-IS-FETCHING": {
            return {...state, isFetching: action.isFetching}
        }
        default:
            return state
    }
}

export type ActionTypeUserReducer = FollowAT | UnfollowAT | SetUsersAT | SetCurrentPageAT | SetTotalUsersCountAT | ToggleIsFetchingAT
type FollowAT = ReturnType<typeof followAC>
type UnfollowAT = ReturnType<typeof unfollowAC>
type SetUsersAT = ReturnType<typeof setUsersAC>
type SetCurrentPageAT = ReturnType<typeof setCurrentPageAC>
type SetTotalUsersCountAT = ReturnType<typeof setTotalUsersCountAC>
type ToggleIsFetchingAT = ReturnType<typeof toggleIsFetchingAC>

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

export const setUsersAC = (users: Array<UserType>) => {
    return {
        type: "SET-USERS",
        users: users
    } as const
}

export const setCurrentPageAC = (currentPage: number) => {
    return {
        type: "SET-CURRENT-PAGE",
        currentPage
    } as const
}

export const setTotalUsersCountAC = (totalUsers: number) => {
    return {
        type: "SET-TOTAL-USERS-COUNT",
        totalUsers
    } as const
}

export const toggleIsFetchingAC = (isFetching: boolean) => {
    return {
        type: "TOGGLE-IS-FETCHING",
        isFetching
    } as const
}