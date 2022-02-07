import React from 'react';
import {UserType} from "../../redux/user-reducer";
import {Pagination} from "./Pagination";
import {User} from "./User/User";

type PropsType = {
    totalUsersCount: number
    pageSize: number
    onPageChanged: (pageNumber: number) => void
    currentPage: number
    users: UserType[]
    unfollow: (userId: number) => void
    follow: (userId: number) => void
    followingInProgress: number[]
}

export const Users = (props: PropsType) => {

    return (
        <div>
            <Pagination totalUsersCount={props.totalUsersCount}
                        currentPage={props.currentPage}
                        onPageChanged={props.onPageChanged}
                        pageSize={props.pageSize}/>

            <div>
                {props.users.map(u => <User key={u.id}
                                            follow={props.follow}
                                            followingInProgress={props.followingInProgress}
                                            unfollow={props.unfollow}
                                            user={u}/>)
                }
            </div>
        </div>
    )
}