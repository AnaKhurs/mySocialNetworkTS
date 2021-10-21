export type DialogType = {
    id: number
    name: string
}

export type MessageTextType = {
    id: number
    messageText: string
}
export type PostType = {
    id: number
    message: string
    like: number
}

export type ProfilePageType = {
    posts: Array<PostType>

}

export type DialogPageType = {
    dialogs: Array<DialogType>
    messagesText: Array<MessageTextType>
}

export type StateType = {
    profilePage: ProfilePageType
    dialogPage: DialogPageType
}

const state = {
    profilePage: {
        posts: [
            {id: 1, message: "Hi, how are you?", like: 18},
            {id: 2, message: "It is my first post!!!", like: 19},
            {id: 3, message: "Yoooo", like: 10},
        ],
    },
    dialogPage: {
        dialogs: [
            {id: 1, name: "Nastya"},
            {id: 2, name: "Alex"},
            {id: 3, name: "Masha"},
            {id: 4, name: "Dima"},
            {id: 5, name: "Lena"},
        ],
        messagesText: [
            {id: 1, messageText: "Hi!!!"},
            {id: 2, messageText: "How are you?"},
            {id: 3, messageText: "yoooooo"},
        ],
    },
}


export default state;
