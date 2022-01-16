import React from 'react';
import classes from './Music.module.css';
import {withAuthRedirect} from "../HOC/withAuthRedirect";

const Music = () => {
    return (
        <div className={classes.content}>Music</div>
    )
}

export default withAuthRedirect(Music);