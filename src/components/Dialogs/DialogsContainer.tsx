import React from 'react';
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {StateType} from "../../redux/redux-store";
import {
    ActionTypeDialogReducer,
    changeNewMessageTextActionCreator,
    DialogType,
    MessageTextType, sendMessageActionCreator
} from "../../redux/dialog-reducer";

type MapStareToPropsType = {
    dialogs: DialogType[]
    messagesText: MessageTextType[]
    newMessageText: string
    isAuth: boolean
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
        newMessageText: state.dialogPage.newMessageText,
        isAuth: state.auth.isAuth
    }
}

const mapDispatchToProps = (dispatch: (action: ActionTypeDialogReducer) => void): MapDispatchToPropsType => {
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