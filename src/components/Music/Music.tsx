import React, {ComponentType} from 'react';
import classes from './Music.module.css';
import {withAuthRedirect} from "../HOC/withAuthRedirect";
import {compose} from "redux";

const Music = () => {
    return (
        <div className={classes.content}>Music</div>
    )
}

export default compose<ComponentType>(withAuthRedirect)(Music);