import React, {ComponentType} from 'react';
import {connect} from "react-redux";
import {StateType} from "../../redux/redux-store";
import {Users} from "./Users";
import {
    follow, getUsers,
    setCurrentPage, setTotalUsersCount,
    setUsers, toggleFollowingProgress, toggleIsFetching,
    unfollow,
    UserType
} from "../../redux/user-reducer";
import {Preloader} from "../common/Preloader/Preloader";
import {withAuthRedirect} from "../HOC/withAuthRedirect";
import {compose} from "redux";
import {
    getSelectorUsers,
    getSelectorCurrentPage,
    getSelectorFollowingInProgress,
    getSelectorIsFetching,
    getSelectorPageSize,
    getSelectorTotalUsersCount
} from "../../redux/user-selectors";


type MapStareToPropsType = {
    users: Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: number[]
}
type MapDispatchToPropsType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setCurrentPage: (currentPage: number) => void
    toggleFollowingProgress: (isFetching: boolean, idUser: number) => void
    getUsers: (currentPage: number, pageSize: number) => void
}

export type UserPropsType = MapStareToPropsType & MapDispatchToPropsType


class UsersContainer extends React.Component<UserPropsType> {

    componentDidMount() {
        const {currentPage, pageSize} = this.props
        this.props.getUsers(currentPage, pageSize)
    }

    onPageChanged = (pageNumber: number) => {
        const {pageSize} = this.props
        this.props.getUsers(pageNumber, pageSize)
        this.props.setCurrentPage(pageNumber)
    }

    render() {
        return <>
            {this.props.isFetching && <Preloader/>}
            <Users totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   onPageChanged={this.onPageChanged}
                   currentPage={this.props.currentPage}
                   users={this.props.users}
                   unfollow={this.props.unfollow}
                   follow={this.props.follow}
                   followingInProgress={this.props.followingInProgress}
            />
        </>
    }
}

/*const mapStareToProps = (state: StateType): MapStareToPropsType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress,
    }
}*/

const mapStareToProps = (state: StateType): MapStareToPropsType => {
    return {
        users: getSelectorUsers(state),
        pageSize: getSelectorPageSize(state),
        totalUsersCount: getSelectorTotalUsersCount(state),
        currentPage: getSelectorCurrentPage(state),
        isFetching: getSelectorIsFetching(state),
        followingInProgress: getSelectorFollowingInProgress(state),
    }
}

export default compose<ComponentType>(
    withAuthRedirect,
    connect(mapStareToProps,
        {
            follow: follow,
            unfollow: unfollow,
            setCurrentPage,
            toggleFollowingProgress,
            getUsers
        }))(UsersContainer)


