import React, {ChangeEvent} from 'react';
import classes from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./Message/Message";
import {DialogType, MessageTextType} from "../../redux/store";

type DialogsType = {
    changeNewMessageText: (textNewMessage: string) => void
    messageSend: () => void
    dialogs: DialogType[]
    messagesText: MessageTextType[]
    newMessageText: string
}

export const Dialogs: React.FC<DialogsType> = (props) => {

    const dialogsElements = props.dialogs.map(d => <DialogItem id={d.id}
                                                               name={d.name}
                                                               avatar={d.avatar}/>)

    let messagesElements = props.messagesText.map((m) => <MessageItem messageText={m.messageText}
                                                                      from={m.from}/>)

    let messageSend = () => {
        props.messageSend()
    }

    const changeNewMessageText = (e: ChangeEvent<HTMLTextAreaElement>) => {
        const textNewMessage = e.currentTarget.value
        props.changeNewMessageText(textNewMessage)
    }


    return (
        <div className={classes.content}>
            <div className={classes.dialogs}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                <div>
                    {messagesElements}
                    <div className={classes.messageSend}>
                        <textarea className={classes.textarea} value={props.newMessageText}
                                  onChange={changeNewMessageText}></textarea>
                        <button className={classes.button} onClick={messageSend}>Send</button>
                    </div>
                </div>

            </div>
        </div>
    )
}