import React from 'react';
import {NavLink} from 'react-router-dom';
import classes from './Header.module.css';
import {PropsType} from "./HeaderContainer";

export const Header = (props: PropsType) => {
    return (
        <header className={classes.header}>
            <div className={classes.loginBlock}>
                {props.isAuth ? props.data?.login : <NavLink to={'/login'}>LOGIN</NavLink>}
            </div>
            <img
                src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPHRvtFUvNT9Rrpz2HE4gu05hPPg8m7DweCg&usqp=CAU'/>


        </header>
    )
}