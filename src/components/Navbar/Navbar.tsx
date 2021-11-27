import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Navbar.module.css';
import {FriendsType} from "../../redux/store";

type NavbarType = {
    sidebarState: FriendsType
}



const Navbar:React.FC<NavbarType> = (props) => {

    const itemFriendElements = props.sidebarState.friends.map(f => <div key={f.id} className={classes.itemFriend}>
        <img className={classes.avatarFriend} src={f.avatar}/>
    </div>)


    return (
        <nav className={classes.nav}>
            <div className={classes.item}><NavLink to='/profile' activeClassName={classes.activeLink}>Profile</NavLink></div>
            <div className={classes.item}><NavLink to='/dialogs' activeClassName={classes.activeLink}>Messages</NavLink></div>
            <div className={classes.item}><NavLink to='/news' activeClassName={classes.activeLink}>News</NavLink></div>
            <div className={classes.item}><NavLink to='/music'activeClassName={classes.activeLink}>Music</NavLink></div>
            <div className={classes.item}><NavLink to='/settings' activeClassName={classes.activeLink}>Settings</NavLink></div>

            <div className={classes.friends}>

                <NavLink to='/friends' activeClassName={classes.activeLink}><h3>Friends</h3></NavLink>
                <div className={classes.arrayFriends}>

                    {itemFriendElements}

                </div>
            </div>
        </nav>
    )
}

export default Navbar;