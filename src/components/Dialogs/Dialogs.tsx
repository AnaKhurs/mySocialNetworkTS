import React, {ChangeEvent} from 'react';
import classes from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./Message/Message";
import {DialogsPropsType} from "./DialogsContainer";

export const Dialogs = (props: DialogsPropsType) => {

    const dialogsElements = props.dialogs.map(d => <DialogItem key={d.id}
                                                               id={d.id}
                                                               name={d.name}
                                                               avatar={d.avatar}/>)

    let messagesElements = props.messagesText.map((m) => <MessageItem key={m.id}
                                                                      messageText={m.messageText}
                                                                      from={m.from}/>)

    let messageSend = () => {
        props.messageSend(props.newMessageText)
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
                        <textarea className={classes.textarea}
                                  value={props.newMessageText}
                                  onChange={changeNewMessageText}
                        />
                        <button className={classes.button} onClick={messageSend}>Send</button>
                    </div>
                </div>

            </div>
        </div>
    )
}