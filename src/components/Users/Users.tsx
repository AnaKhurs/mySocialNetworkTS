import React from 'react';
import {UserPropsType} from "./UsersContainer";
import classes from './Users.module.css'


export const Users = (props: UserPropsType) => {
    debugger
    if (props.users.length === 4) {
        props.setUsers([
            {
                id: 1,
                fullName: "Elena",
                avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0AfKY4bAlZOoZf1-lx6csbUt1LrtdMeuzLaiYapJPAVaLPdfBQSr1dOy5SRO8vev0BdE&usqp=CAU",
                followed: true,
                status: "I am a boss",
                location: {city: "Minsk", country: "Belarus"}
            },
            {
                id: 2,
                fullName: "Alexander",
                avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTH8C8VibswhLf3oI9Y-oEncHluuxKte7xvRw&usqp=CAU",
                followed: true,
                status: "I am a boss to!",
                location: {city: "Minsk", country: "Belarus"}

            }])
    }
    return (
        <div>
            {props.users.map(u => <div key={u.id}>
                    <span>
                       <div>
                          <img className={classes.ava} src={u.avatar}/>
                       </div>
                       <div>
                           {u.followed
                               ? <button onClick={() => props.unfollow(u.id)}>Unfollow</button>
                               : <button onClick={() => props.follow(u.id)}>Follow</button>}

                       </div>
                    </span>
                    <span>
                       <span>
                           <div>{u.fullName}</div>
                           <div>{u.status}</div>
                       </span>
                       <span>
                            <div>{u.location.country}</div>
                            <div>{u.location.city}</div>
                       </span>
                    </span>
                </div>
            )}
        </div>
    )
}
