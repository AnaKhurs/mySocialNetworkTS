import React from 'react';
import classes from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./Message/Message";
import {DialogsPropsType} from "./DialogsContainer";
import {AddMessageReduxForm, FormDataType} from "./AddMessageForm";

export const Dialogs = (props: DialogsPropsType) => {

    const dialogsElements = props.dialogs.map(d => <DialogItem key={d.id}
                                                               id={d.id}
                                                               name={d.name}
                                                               avatar={d.avatar}/>)

    let messagesElements = props.messagesText.map((m) => <MessageItem key={m.id}
                                                                      messageText={m.messageText}
                                                                      from={m.from}/>)

    const addNewMessage = (formData: FormDataType) => {
        props.messageSend(formData.newMessageBody)
    }


    return (
        <div className={classes.content}>
            <div className={classes.dialogs}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                <div>
                    {messagesElements}
                    <AddMessageReduxForm onSubmit={addNewMessage}/>
                </div>

            </div>
        </div>
    )
}