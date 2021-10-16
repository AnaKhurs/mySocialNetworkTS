import React from 'react';
import classes from './Dialogs.module.css';
import {NavLink} from "react-router-dom";


const Dialogs = () => {
    return (
        <div className={classes.content}>
            <div className={classes.dialogs}>
                <div className={classes.dialog + " " + classes.active}>
                   <NavLink to='/dialogs/1'>Nastya</NavLink>
                </div>
                <div className={classes.dialog}>
                    <NavLink to='/dialogs/2'>Alex</NavLink>
                    </div>
                <div className={classes.dialog}>
                    <NavLink to='/dialogs/3'>Masha</NavLink>
                    </div>
                <div className={classes.dialog}>
                    <NavLink to='/dialogs/4'>Lena</NavLink>
                    </div>
                <div className={classes.dialog}>
                    <NavLink to='/dialogs/5'>Dima</NavLink>
                    </div>
            </div>
            <div className={classes.messages}>
                <div className={classes.message}>Hi</div>
                <div className={classes.message}>How are you?</div>
                <div className={classes.message}>Yooo</div>
            </div>
        </div>
    )
}

export default Dialogs;