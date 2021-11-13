import {ActionCreateType, DialogPageType} from "./state";

export const dialogReducer = (state: DialogPageType, action: ActionCreateType) => {
    switch (action.type) {
        case CHANGE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.newMessageText;
            break;
        case SEND_MESSAGE:
            const newMessage = {id: 4, messageText: action.textMessage, from: "receiver"}
            state.messagesText.push(newMessage);
            state.newMessageText = "";
            break;
    }

    return state
}

const SEND_MESSAGE = "SEND-MESSAGE"
const CHANGE_NEW_MESSAGE_TEXT = "CHANGE-NEW-MESSAGE-TEXT"