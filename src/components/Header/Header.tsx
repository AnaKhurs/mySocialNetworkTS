import React from 'react';
import classes from './Header.module.css';

function Header() {
    return (
        <header className={classes.header}>
            <img
                src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPHRvtFUvNT9Rrpz2HE4gu05hPPg8m7DweCg&usqp=CAU'/>
        </header>
    )
}

export default Header;