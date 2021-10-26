import React from 'react';
import classes from './Message.module.css';


type MessageItemType = {
    messageText: string
    from: string
}

const MessageItem: React.FC<MessageItemType> = (props) => {
    return (
        <div className={`${classes.MessageItem} ${classes[props.from]}`}>
            <div className={classes.message}>{props.messageText}</div>
        </div>
    )
}

export default MessageItem;