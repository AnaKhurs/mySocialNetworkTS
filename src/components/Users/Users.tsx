import React from 'react';
import classes from './Users.module.css'
import userPhoto from './../../assets/images/abstract-user-flat-4.svg'
import {UserType} from "../../redux/user-reducer";
import {NavLink} from 'react-router-dom';
import axios from "axios";

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
                           <NavLink to={'/profile/' + u.id}>
                          <img className={classes.ava} src={u.photos.large ? u.photos.large : userPhoto}/>
                      </NavLink>
                       </div>
                       <div>
                           {u.followed
                               ? <button onClick={() => {
                                   axios.delete(`https://social-network.samuraijs.com/api/1.0//follow/${u.id}`,
                                       {withCredentials: true, headers:{"API-KEY": "24771d0b-afb6-4f59-ba2e-1f7f77002e3d"}})
                                       .then(response => {
                                               if (response.data.resultCode === 0) {
                                                   props.unfollow(u.id)
                                               }
                                           }
                                       )
                               }}>Unfollow</button>
                               : <button onClick={() => {
                                   axios.post(`https://social-network.samuraijs.com/api/1.0//follow/${u.id}`,
                                       {}, {withCredentials: true, headers:{"API-KEY": "24771d0b-afb6-4f59-ba2e-1f7f77002e3d"}})
                                       .then(response => {
                                               if (response.data.resultCode === 0) {
                                                   props.follow(u.id)
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