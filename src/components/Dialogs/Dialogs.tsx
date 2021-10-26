import React from 'react';
import classes from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./Message/Message";
import {DialogPageType} from "../../redux/state";

type DialogsType = {
    dialogPageState: DialogPageType
}

const Dialogs: React.FC<DialogsType> = (props) => {

    const dialogsElements = props.dialogPageState.dialogs.map(d => <DialogItem id={d.id} name={d.name} avatar={d.avatar}/>)

    let messagesElements = props.dialogPageState.messagesText.map((m) => <MessageItem messageText={m.messageText}/>)

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