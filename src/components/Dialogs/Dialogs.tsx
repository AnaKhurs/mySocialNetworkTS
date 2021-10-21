import React from 'react';
import classes from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./Message/Message";


type DialogDataType = {
    id: number
    name: string
}

const dialogsData: Array<DialogDataType> = [
    {id: 1, name: "Nastya"},
    {id: 2, name: "Alex"},
    {id: 3, name: "Masha"},
    {id: 4, name: "Dima"},
    {id: 5, name: "Lena"},
]

const dialogsElements = dialogsData.map(d => <DialogItem id={d.id} name={d.name}/>)

type messageTextDataType = {
    id: number
    messageText: string
}

const messagesTextData: Array<messageTextDataType> = [
    {id: 1, messageText: "Hi!!!"},
    {id: 2, messageText: "How are you?"},
    {id: 3, messageText: "yoooooo"},
]

let messagesElements = messagesTextData.map((m) => <MessageItem messageText={m.messageText}/>)

const Dialogs = () => {
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