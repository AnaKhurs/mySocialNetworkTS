import React from 'react';
import classes from './Users.module.css'
import userPhoto from './../../assets/images/abstract-user-flat-4.svg'
import {UserType} from "../../redux/user-reducer";
import {NavLink} from 'react-router-dom';
import {Pagination} from "./Pagination";

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
                                         onClick={() => props.unfollow(u.id)}>Unfollow</button>
                               : <button disabled={props.followingInProgress.some(n => n === u.id)}
                                         onClick={() => props.follow(u.id)}>Follow</button>
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