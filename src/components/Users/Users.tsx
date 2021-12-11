import React from 'react';
import {UserPropsType} from "./UsersContainer";
import classes from './Users.module.css'
import axios from "axios";
import userPhoto from './../../assets/images/abstract-user-flat-4.svg'

export const Users = (props: UserPropsType) => {
    if (props.users.length === 0) {
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
                debugger;
                props.setUsers(response.data.items)
            }
        )
    }
    return (
        <div>
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
