import React from 'react';
import classes from './Settings.module.css';
import {withAuthRedirect} from "../HOC/withAuthRedirect";

const Settings = () => {
    return (
        <div className={classes.content}>Settings</div>
    )
}

export default withAuthRedirect(Settings);