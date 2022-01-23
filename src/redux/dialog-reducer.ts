export type MessageTextType = {
    id: number
    messageText: string
    from: string
}
export type DialogPageType = {
    dialogs: Array<DialogType>
    messagesText: Array<MessageTextType>
}

export type DialogType = {
    id: number
    name: string
    avatar: string
}

const initialState = {
    dialogs: [
        {
            id: 1,
            name: "Nastya",
            avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0AfKY4bAlZOoZf1-lx6csbUt1LrtdMeuzLaiYapJPAVaLPdfBQSr1dOy5SRO8vev0BdE&usqp=CAU"
        },
        {
            id: 2,
            name: "Alex",
            avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTH8C8VibswhLf3oI9Y-oEncHluuxKte7xvRw&usqp=CAU"
        },
        {
            id: 3,
            name: "Masha",
            avatar: "https://s1.r29static.com/bin/entry/ab2/0,398,2000,2000/x,80/1648676/image.jpg"
        },
        {
            id: 4,
            name: "Dima",
            avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThjiIep4R49K8xkJr_xQxVOXUvblr-wBlbGA&usqp=CAU"
        },
        {
            id: 5,
            name: "Lena",
            avatar: "https://pyxis.nymag.com/v1/imgs/359/91f/8fc4e3abb6c8cc68ca9a3389e4b495165b-24-mr-robot.rsquare.w700.jpg"
        },
    ],
    messagesText: [
        {id: 1, messageText: "Hi!!!", from: "sender"},
        {id: 2, messageText: "How are you?", from: "sender"},
        {id: 3, messageText: "yoooooo", from: "receiver"},
        {id: 4, messageText: "yo!", from: "receiver"},
    ],
}

export const dialogReducer = (state: DialogPageType = initialState, action: ActionTypeDialogReducer): DialogPageType => {
    switch (action.type) {
        case SEND_MESSAGE:
            const newMessage = {id: 4, messageText: action.textMessage, from: "receiver"}
            return {
                ...state,
                messagesText: [...state.messagesText, newMessage],
            }
    }
    return state
}

const SEND_MESSAGE = "SEND-MESSAGE"

export type ActionTypeDialogReducer = ReturnType<typeof sendMessageActionCreator>

export const sendMessageActionCreator = (text: string) => {
    return {
        type: "SEND-MESSAGE",
        textMessage: text
    } as const
}