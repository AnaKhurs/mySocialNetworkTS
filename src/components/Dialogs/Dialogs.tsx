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

    let messagesElements = props.dialogPageState.messagesText.map((m) => <MessageItem messageText={m.messageText} from={m.from}/>)

    let newMessageElement = React.createRef<HTMLTextAreaElement>();

    let messageSend = () => {
        if (newMessageElement.current){
            let text = newMessageElement.current.value;
            alert(text);
        }

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
                       <textarea className={classes.textarea} ref={newMessageElement}></textarea>
                       <button className={classes.button} onClick={messageSend}>Send</button>
                   </div>
                </div>

            </div>
        </div>
    )
}

export default Dialogs;