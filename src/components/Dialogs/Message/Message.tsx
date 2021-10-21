import React from 'react';
import classes from './../Dialogs.module.css';



type MessageItemType = {
    messageText: string
}

const MessageItem: React.FC<MessageItemType> = (props) => {
    return (
        <div className={classes.message}>{props.messageText}</div>
    )
}

export default MessageItem;