import React from 'react';
import {changeNewMessageTextActionCreator, sendMessageActionCreator, StoreType} from "../../redux/store";
import {StoreContext} from '../../StoreContext';
import {Dialogs} from "./Dialogs";

type PropsType = {
    //store: StoreType
}

export const DialogsContainer = (props: PropsType) => {


    return (
        <StoreContext.Consumer>
            {
                store => {

                    const messageSend = () => {
                        store.dispatch(sendMessageActionCreator(store.getState().dialogPage.newMessageText))
                    }

                    const changeNewMessageText = (textNewMessage: string) => {
                        store.dispatch(changeNewMessageTextActionCreator(textNewMessage))
                    }

                    return (
                        <Dialogs changeNewMessageText={changeNewMessageText}
                                 messageSend={messageSend}
                                 dialogs={store.getState().dialogPage.dialogs}
                                 messagesText={store.getState().dialogPage.messagesText}
                                 newMessageText={store.getState().dialogPage.newMessageText}
                        />
                    )
                }
            }

        </StoreContext.Consumer>
    )
}
