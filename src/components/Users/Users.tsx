import React from 'react';
import classes from './Users.module.css'
import userPhoto from './../../assets/images/abstract-user-flat-4.svg'
import {UserType} from "../../redux/user-reducer";

type PropsType = {
    totalUsersCount: number
    pageSize: number
    onPageChanged: (pageNumber: number) => void
    currentPage: number
    users: UserType[]
    unfollow: (userId: number) => void
    follow: (userId: number) => void
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
                          <img className={classes.ava} src={u.photos.large ? u.photos.large : userPhoto}/>
                       </div>
                       <div>
                           {u.followed
                               ? <button onClick={() => props.unfollow(u.id)}>Unfollow</button>
                               : <button onClick={() => props.follow(u.id)}>Follow</button>}
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