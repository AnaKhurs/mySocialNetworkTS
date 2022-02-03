import {StateType} from "./redux-store";

export const getSelectorUsers = (state: StateType) => {
    debugger
    return state.usersPage.users
}

export const getSelectorPageSize = (state: StateType) => {
    return state.usersPage.pageSize
}
export const getSelectorTotalUsersCount = (state: StateType) => {
    return state.usersPage.totalUsersCount
}
export const getSelectorCurrentPage = (state: StateType) => {
    return state.usersPage.currentPage
}
export const getSelectorIsFetching = (state: StateType) => {
    return state.usersPage.isFetching
}
export const getSelectorFollowingInProgress = (state: StateType) => {
    return state.usersPage.followingInProgress
}