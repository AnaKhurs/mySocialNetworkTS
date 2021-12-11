import React from 'react';
import {UserPropsType} from "./UsersContainer";
import classes from './Users.module.css'
import axios from "axios";
import userPhoto from './../../assets/images/abstract-user-flat-4.svg'

export class Users extends React.Component<UserPropsType> {
    constructor(props: UserPropsType) {
        super(props);
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
                this.props.setUsers(response.data.items)
            }
        )
    }
    render() {
        return (
            <div>
                {this.props.users.map(u => <div key={u.id}>
                    <span>
                       <div>
                          <img className={classes.ava} src={u.photos.large ? u.photos.large : userPhoto}/>
                       </div>
                       <div>
                           {u.followed
                               ? <button onClick={() => this.props.unfollow(u.id)}>Unfollow</button>
                               : <button onClick={() => this.props.follow(u.id)}>Follow</button>}

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
}