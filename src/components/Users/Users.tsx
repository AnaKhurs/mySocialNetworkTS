import React from 'react';
import classes from './Users.module.css'
import userPhoto from './../../assets/images/abstract-user-flat-4.svg'
import {UserType} from "../../redux/user-reducer";
import {NavLink} from 'react-router-dom';
import {userAPI} from "../../api/api";

type PropsType = {
    totalUsersCount: number
    pageSize: number
    onPageChanged: (pageNumber: number) => void
    currentPage: number
    users: UserType[]
    unfollow: (userId: number) => void
    follow: (userId: number) => void
    toggleFollowingProgress: (isFetching: boolean, idUser: number) => void
    followingInProgress: number[]
}

export const Users = (props: PropsType) => {
    const pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    const pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return (
        <div>
            <div>
                {
                    pages.map(p => <span
                        onClick={() => props.onPageChanged(p)}
                        className={props.currentPage === p ? classes.selectedPage : ''}>{p}</span>)
                }
            </div>
            {props.users.map(u => <div key={u.id}>
                    <span>
                       <div>
                           <NavLink to={'/profile/' + u.id}>
                          <img className={classes.ava} src={u.photos.large ? u.photos.large : userPhoto}/>
                      </NavLink>
                       </div>
                       <div>
                           {u.followed
                               ? <button disabled={props.followingInProgress.some(n => n === u.id)}
                                         onClick={() => {
                                             props.toggleFollowingProgress(true, u.id)
                                             userAPI.unfollowUser(u.id).then(data => {
                                                     if (data.resultCode === 0) {
                                                         props.unfollow(u.id)
                                                         props.toggleFollowingProgress(false, u.id)
                                                     }
                                                 }
                                             )
                                         }}>Unfollow</button>
                               : <button disabled={props.followingInProgress.some(n => n === u.id)}
                                         onClick={() => {
                                             props.toggleFollowingProgress(true, u.id)
                                             userAPI.followUser(u.id).then(data => {
                                                     if (data.resultCode === 0) {
                                                         props.follow(u.id)
                                                         props.toggleFollowingProgress(false, u.id)
                                                     }
                                                 }
                                             )
                                         }}>Follow</button>
                           }
                       </div>
                    </span>
                    <span>
                       <span>
                           <div>{u.name}</div>
                           <div>{u.status}</div>
                       </span>
                       <span>
                            <div>{"u.location.country"}</div>
                            <div>{"u.location.city"}</div>
                       </span>
                    </span>
                </div>
            )}
        </div>
    )
}