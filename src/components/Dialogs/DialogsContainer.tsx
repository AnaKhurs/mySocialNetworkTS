import React, {ComponentType} from 'react';
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {StateType} from "../../redux/redux-store";
import {
    ActionTypeDialogReducer,
    DialogType,
    MessageTextType, sendMessageActionCreator
} from "../../redux/dialog-reducer";
import {withAuthRedirect} from "../HOC/withAuthRedirect";
import {compose} from 'redux';

type MapStareToPropsType = {
    dialogs: DialogType[]
    messagesText: MessageTextType[]
}

type MapDispatchToPropsType = {
    messageSend: (newMessageText: string) => void
}

export type DialogsPropsType = MapStareToPropsType & MapDispatchToPropsType


const mapStareToProps = (state: StateType): MapStareToPropsType => {
    return {
        dialogs: state.dialogPage.dialogs,
        messagesText: state.dialogPage.messagesText,
    }
}

const mapDispatchToProps = (dispatch: (action: ActionTypeDialogReducer) => void): MapDispatchToPropsType => {
    return {
        messageSend: (newMessageText: string) => {
            dispatch(sendMessageActionCreator(newMessageText))
        }
    }
}

export default compose<ComponentType>(withAuthRedirect, connect(mapStareToProps, mapDispatchToProps))(Dialogs)

