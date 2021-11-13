export type DialogType = {
    id: number
    name: string
    avatar: string
}

export type MessageTextType = {
    id: number
    messageText: string
    from: string
}
export type PostType = {
    id: number
    message: string
    like: number
}

export type ProfilePageType = {
    posts: Array<PostType>
    newPostText: string

}

export type DialogPageType = {
    dialogs: Array<DialogType>
    messagesText: Array<MessageTextType>
    newMessageText: string
}

export type StateType = {
    profilePage: ProfilePageType
    dialogPage: DialogPageType
    sidebar: FriendsType
}

export type FriendsType = {
    friends: Array<FriendType>
}

export type FriendType = {
    id: number
    name: string
    avatar: string
}

export type StoreType = {
    _state: StateType
    _callSubscriber: (state: StateType) => void
    getState: () => StateType
    subscribe: (observer: (state: StateType) => void) => void
    dispatch: (action: ActionCreateType) => void

}


export type ActionCreateType =
    ReturnType<typeof addPostActionCreator>
    | ReturnType<typeof changeNewPostTextActionCreator>
    | ReturnType<typeof changeNewMessageTextActionCreator>
    | ReturnType<typeof sendMessageActionCreator>


export const addPostActionCreator = (text: string) => {
    return {
        type: 'ADD-POST',
        messagePost: text
    } as const
}

export const changeNewPostTextActionCreator = (text: string) => {
    return {
        type: "CHANGE-NEW-POST-TEXT",
        newPostText: text
    } as const
}

export const changeNewMessageTextActionCreator = (text: string) => {
    return {
        type: "CHANGE-NEW-MESSAGE-TEXT",
        newMessageText: text
    } as const
}
export const sendMessageActionCreator = (text: string) => {
    return {
        type: "SEND-MESSAGE",
        textMessage: text
    } as const
}

const ADD_POST = "ADD-POST"
const CHANGE_NEW_POST_TEXT = "CHANGE-NEW-POST-TEXT"
const SEND_MESSAGE = "SEND-MESSAGE"
const CHANGE_NEW_MESSAGE_TEXT = "CHANGE-NEW-MESSAGE-TEXT"

export const store: StoreType = {
    _state: {
        profilePage: {
            newPostText: "",
            posts: [
                {id: 1, message: "Hi, how are you?", like: 18},
                {id: 2, message: "It is my first post!!!", like: 19},
                {id: 3, message: "Yoooo", like: 10},
            ],
        },
        dialogPage: {
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
            newMessageText: "",
        },
        sidebar: {
            friends: [
                {
                    id: 1,
                    name: "Lena",
                    avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0AfKY4bAlZOoZf1-lx6csbUt1LrtdMeuzLaiYapJPAVaLPdfBQSr1dOy5SRO8vev0BdE&usqp=CAU"
                },
                {
                    id: 2,
                    name: "Alex",
                    avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTH8C8VibswhLf3oI9Y-oEncHluuxKte7xvRw&usqp=CAU"
                },
                {
                    id: 3,
                    name: "Nastya",
                    avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThjiIep4R49K8xkJr_xQxVOXUvblr-wBlbGA&usqp=CAU"
                },
            ]
        }
    },
    _callSubscriber(state: StateType) {
        console.log("rerenderEntireTree")
    },
    getState() {
        return this._state
    },
    subscribe(observer: (state: StateType) => void) {
        this._callSubscriber = observer;
    },
    dispatch(action) {
        if (action.type === ADD_POST) {
            let newPost = {id: 5, message: action.messagePost, like: 18}
            this._state.profilePage.posts.push(newPost);
            this._callSubscriber(this._state);
            this._state.profilePage.newPostText = "";
        } else if (action.type === CHANGE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newPostText;
            this._callSubscriber(this._state);
        } else if (action.type === CHANGE_NEW_MESSAGE_TEXT) {
            this._state.dialogPage.newMessageText = action.newMessageText;
            this._callSubscriber(this._state);
        } else if (action.type === SEND_MESSAGE) {
            const newMessage = {id: 4, messageText: action.textMessage, from: "receiver"}
            this._state.dialogPage.messagesText.push(newMessage);
            this._callSubscriber(this._state);
            this._state.dialogPage.newMessageText = "";
        }
    },
}


