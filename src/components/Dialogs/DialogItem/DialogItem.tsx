import React from 'react';
import classes from './DialogItem.module.css';
import {NavLink} from "react-router-dom";


type DialogItemType = {
    id: number
    name: string
    avatar: string
}

const DialogItem: React.FC<DialogItemType> = (props) => {
    let path = '/dialogs/' + props.id
    return (
        <div className={classes.dialog}>

                <img className={classes.avatarDialogItem} src={props.avatar}/>
                <NavLink className={classes.nameDialogItem} to={path}>{props.name}</NavLink>

        </div>
    )
}

export default DialogItem;