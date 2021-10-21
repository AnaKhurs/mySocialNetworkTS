import React from 'react';
import classes from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./Message/Message";
import {DialogType, MessageTextType} from "../../index";

type DialogsType = {
    dialogs: Array<DialogType>
    messagesText: Array<MessageTextType>
}

const Dialogs: React.FC<DialogsType> = (props) => {

    const dialogsElements = props.dialogs.map(d => <DialogItem id={d.id} name={d.name}/>)

    let messagesElements = props.messagesText.map((m) => <MessageItem messageText={m.messageText}/>)

    return (
        <div className={classes.content}>
            <div className={classes.dialogs}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                {messagesElements}
            </div>
        </div>
    )
}

export default Dialogs;