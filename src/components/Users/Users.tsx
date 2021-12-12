import React from 'react';
import {UserPropsType} from "./UsersContainer";
import classes from './Users.module.css'
import axios from "axios";
import userPhoto from './../../assets/images/abstract-user-flat-4.svg'

export class Users extends React.Component<UserPropsType> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
                this.props.setUsers(response.data.items)
                this.props.setTotalUsersCount(response.data.totalCount)
            }
        )
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
                this.props.setUsers(response.data.items)
            }
        )
    }

    render() {
        const pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
        const pages = [];
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i);
        }


        return (
            <div>
                <div>
                    { pages.map(p => <span
                        onClick={() => this.onPageChanged(p)}
                        className={this.props.currentPage === p ? classes.selectedPage : ''}>{p}</span>)}


                </div>
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