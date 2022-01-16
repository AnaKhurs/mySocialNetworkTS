import React, {ComponentType} from 'react';
import classes from './Settings.module.css';
import {withAuthRedirect} from "../HOC/withAuthRedirect";
import {compose} from "redux";

const Settings = () => {
    return (
        <div className={classes.content}>Settings</div>
    )
}

export default compose<ComponentType>(withAuthRedirect)(Settings);