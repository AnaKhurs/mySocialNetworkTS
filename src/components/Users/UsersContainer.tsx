import React from 'react';
import {connect} from "react-redux";
import {StateType} from "../../redux/redux-store";
import {Users} from "./Users";
import {ActionTypeUserReducer, followAC, setUsersAC, unfollowAC, User} from "../../redux/user-reducer";


type MapStareToPropsType = {
    users: Array<User>
}

type MapDispatchToPropsType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: Array<User>) => void
}

export type UserPropsType = MapStareToPropsType & MapDispatchToPropsType


const mapStareToProps = (state: StateType): MapStareToPropsType => {
    return {
        users: state.usersPage.users
    }
}

const mapDispatchToProps = (dispatch: (action: ActionTypeUserReducer) => void): MapDispatchToPropsType => {
    return {
        follow: (userId: number) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId: number) => {
            dispatch(unfollowAC(userId))
        },
        setUsers: (users: Array<User>) => {
            dispatch(setUsersAC(users))
        }

    }
}

export const UsersContainer = connect(mapStareToProps, mapDispatchToProps)(Users)