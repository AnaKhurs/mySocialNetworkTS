import {userAPI} from "../api/api";
import {Dispatch} from "redux"

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
    followingInProgress: number[]
}

const initialState: InitialStateType = {
    users: [],
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: [],
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
        case "TOGGLE-FOLLOWING-PROGRESS": {
            return {
                ...state, followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.idUser]
                    : state.followingInProgress.filter(n => n !== action.idUser)
            }
        }
        default:
            return state
    }
}

export type ActionTypeUserReducer =
    FollowAT
    | UnfollowAT
    | SetUsersAT
    | SetCurrentPageAT
    | SetTotalUsersCountAT
    | ToggleIsFetchingAT
    | toggleFollowingProgressAT

type FollowAT = ReturnType<typeof followSuccess>
type UnfollowAT = ReturnType<typeof unfollowSuccess>
type SetUsersAT = ReturnType<typeof setUsers>
type SetCurrentPageAT = ReturnType<typeof setCurrentPage>
type SetTotalUsersCountAT = ReturnType<typeof setTotalUsersCount>
type ToggleIsFetchingAT = ReturnType<typeof toggleIsFetching>
type toggleFollowingProgressAT = ReturnType<typeof toggleFollowingProgress>

export const followSuccess = (id: number) => {
    return {
        type: "FOLLOW",
        id
    } as const
}

export const unfollowSuccess = (id: number) => {
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

export const toggleFollowingProgress = (isFetching: boolean, idUser: number) => {
    return {
        type: "TOGGLE-FOLLOWING-PROGRESS",
        isFetching,
        idUser,
    } as const
}

export const getUsers = (currentPage: number, pageSize: number) => async (dispatch: Dispatch) => {
    dispatch(toggleIsFetching(true))
    const data = await userAPI.getUsers(currentPage, pageSize)
    dispatch(toggleIsFetching(false))
    dispatch(setUsers(data.items))
    dispatch(setTotalUsersCount(data.totalCount))

}

const followUnfollowFlow = async (dispatch: Dispatch, userId: number, apiMethod: any, actionCreator: any) => {
    dispatch(toggleFollowingProgress(true, userId))
    const data = await apiMethod(userId)
    if (data.resultCode === 0) {
        dispatch(actionCreator(userId))
    }
    dispatch(toggleFollowingProgress(false, userId))
}


export const follow = (userId: number) => async (dispatch: Dispatch) => {
    await followUnfollowFlow(dispatch, userId, userAPI.followUser.bind(userAPI), followSuccess)
}


export const unfollow = (userId: number) => async (dispatch: Dispatch) => {
    await followUnfollowFlow(dispatch, userId, userAPI.unfollowUser.bind(userAPI), unfollowSuccess)
}
