import React from 'react';
import classes from './Dialogs.module.css';
import {NavLink} from "react-router-dom";


type DialogItemType = {
    id: string
    name: string
}

const DialogItem: React.FC<DialogItemType> = (props) => {
    let path = '/dialogs/' + props.id
    return (
        <div className={classes.dialog}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

type MessegeItemType = {
    messageText: string
}

const MessageItem: React.FC<MessegeItemType> = (props) => {
    return (
        <div className={classes.message}>{props.messageText}</div>
    )
}

const Dialogs = () => {
    return (
        <div className={classes.content}>
            <div className={classes.dialogs}>
                <DialogItem id="1" name="Nastya"/>
                <DialogItem id="2" name="Alex"/>
                <DialogItem id="3" name="Masha"/>
                <DialogItem id="4" name="Dima"/>
                <DialogItem id="5" name="Lena"/>
            </div>
            <div className={classes.messages}>
                <MessageItem messageText="Hi!!!"/>
                <MessageItem messageText="How are you?"/>
                <MessageItem messageText="yoooooo"/>
            </div>
        </div>
    )
}

export default Dialogs;