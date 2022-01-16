import React, {ComponentType} from 'react';
import classes from './News.module.css';
import {withAuthRedirect} from "../HOC/withAuthRedirect";
import {compose} from "redux";

const News = () => {
    return (
        <div className={classes.content}>News</div>
    )
}

export default compose<ComponentType>(withAuthRedirect)(News);