
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
type FollowAT = ReturnType<typeof follow>
type UnfollowAT = ReturnType<typeof unfollow>
type SetUsersAT = ReturnType<typeof setUsers>
type SetCurrentPageAT = ReturnType<typeof setCurrentPage>
type SetTotalUsersCountAT = ReturnType<typeof setTotalUsersCount>
type ToggleIsFetchingAT = ReturnType<typeof toggleIsFetching>

export const follow = (id: number) => {
    return {
        type: "FOLLOW",
        id
    } as const
}

export const unfollow = (id: number) => {
    return {
        type: "UNFOLLOW",
        id
    } as const
}

export const setUsers = (users: Array<UserType>) => {
    return {
        type: "SET-USERS",
        users: users
    } as const
}

export const setCurrentPage = (currentPage: number) => {
    return {
        type: "SET-CURRENT-PAGE",
        currentPage
    } as const
}

export const setTotalUsersCount = (totalUsers: number) => {
    return {
        type: "SET-TOTAL-USERS-COUNT",
        totalUsers
    } as const
}

export const toggleIsFetching = (isFetching: boolean) => {
    return {
        type: "TOGGLE-IS-FETCHING",
        isFetching
    } as const
}