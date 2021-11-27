import React from 'react';
import {changeNewMessageTextActionCreator, sendMessageActionCreator, StoreType} from "../../redux/store";
import {Dialogs} from "./Dialogs";

type PropsType = {
    store: StoreType
}

export const DialogsContainer = (props: PropsType) => {

    let messageSend = () => {
        props.store.dispatch(sendMessageActionCreator(props.store.getState().dialogPage.newMessageText))
    }

    const changeNewMessageText = (textNewMessage: string) => {
        props.store.dispatch(changeNewMessageTextActionCreator(textNewMessage))
    }

    return <Dialogs changeNewMessageText={changeNewMessageText}
                    messageSend={messageSend}
                    dialogs={props.store.getState().dialogPage.dialogs}
                    messagesText={props.store.getState().dialogPage.messagesText}
                    newMessageText={props.store.getState().dialogPage.newMessageText}
    />
}
