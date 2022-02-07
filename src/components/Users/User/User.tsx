import React from 'react';
import classes from './../Users.module.css'
import userPhoto from './../../../assets/images/abstract-user-flat-4.svg'
import {NavLink} from 'react-router-dom';
import {UserType} from "../../../redux/user-reducer";

type PropsType = {
    user: UserType
    unfollow: (userId: number) => void
    follow: (userId: number) => void
    followingInProgress: number[]
}

export const User = (props: PropsType) => {
    return (
        <div>
            <span>
                <div>
                   <NavLink to={'/profile/' + props.user.id}>
                     <img className={classes.ava} src={props.user.photos.large ? props.user.photos.large : userPhoto}/>
                   </NavLink>
                </div>
                <div>
                   {props.user.followed
                       ? <button disabled={props.followingInProgress.some(n => n === props.user.id)}
                                 onClick={() => props.unfollow(props.user.id)}>Unfollow</button>
                       : <button disabled={props.followingInProgress.some(n => n === props.user.id)}
                                 onClick={() => props.follow(props.user.id)}>Follow</button>
                   }
                 </div>
                 </span>
            <span>
                       <span>
                           <div>{props.user.name}</div>
                           <div>{props.user.status}</div>
                       </span>
                       <span>
                            <div>{"u.location.country"}</div>
                            <div>{"u.location.city"}</div>
                       </span>
                    </span>
        </div>
    )
}
