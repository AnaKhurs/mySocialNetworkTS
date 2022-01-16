import React from 'react';
import classes from './News.module.css';
import {withAuthRedirect} from "../HOC/withAuthRedirect";

const News = () => {
    return (
        <div className={classes.content}>News</div>
    )
}

export default withAuthRedirect(News);