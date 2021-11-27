import React, {ChangeEvent} from 'react';
import classes from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./Message/Message";
import {
    ActionCreateType, changeNewMessageTextActionCreator,
    DialogPageType,
    sendMessageActionCreator
} from "../../redux/store";

type DialogsType = {
    dialogPageState: DialogPageType
    dispatch: (action: ActionCreateType) => void
}

const Dialogs: React.FC<DialogsType> = (props) => {

    const dialogsElements = props.dialogPageState.dialogs.map(d => <DialogItem id={d.id} name={d.name}
                                                                               avatar={d.avatar}/>)

    let messagesElements = props.dialogPageState.messagesText.map((m) => <MessageItem messageText={m.messageText}
                                                                                      from={m.from}/>)

    let messageSend = () => {

        props.dispatch(sendMessageActionCreator(props.dialogPageState.newMessageText))
    }

    const changeNewMessageText = (e: ChangeEvent<HTMLTextAreaElement>) => {
        const textNewMessage = e.currentTarget.value
        props.dispatch(changeNewMessageTextActionCreator(textNewMessage))
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
                        <textarea className={classes.textarea} value={props.dialogPageState.newMessageText}
                                  onChange={changeNewMessageText}></textarea>
                        <button className={classes.button} onClick={messageSend}>Send</button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Dialogs;