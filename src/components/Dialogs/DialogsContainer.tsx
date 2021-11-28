import React from 'react';
import {
    ActionCreateType,
    changeNewMessageTextActionCreator, DialogType, MessageTextType,
    sendMessageActionCreator
} from "../../redux/store";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {StateType} from "../../redux/redux-store";


type MapStareToPropsType = {
    dialogs: DialogType[]
    messagesText: MessageTextType[];
    newMessageText: string
}

type MapDispatchToPropsType = {
    changeNewMessageText: (textNewMessage: string) => void
    messageSend: (newMessageText: string) => void
}

export type DialogsPropsType = MapStareToPropsType & MapDispatchToPropsType


const mapStareToProps = (state: StateType): MapStareToPropsType => {
    return {
        dialogs: state.dialogPage.dialogs,
        messagesText: state.dialogPage.messagesText,
        newMessageText: state.dialogPage.newMessageText
    }
}

const mapDispatchToProps = (dispatch: (action: ActionCreateType) => void): MapDispatchToPropsType => {
    return {
        changeNewMessageText: (textNewMessage: string) => {
            dispatch(changeNewMessageTextActionCreator(textNewMessage))
        },
        messageSend: (newMessageText: string) => {
            dispatch(sendMessageActionCreator(newMessageText))
        }
    }
}

export const DialogsContainer = connect(mapStareToProps, mapDispatchToProps)(Dialogs)