/*let rerenderEntireTree = (state: StateType) => {
    console.log("rerenderEntireTree")
}*/

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
    getState: () => StateType
    addNewPost: (messagePost: string) => void
    changeNewPostText: (newPostText: string) => void
    _callSubscriber: (state: StateType) => void
    subscribe: (observer: (state: StateType) => void) => void
}

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
            ],
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
    getState() {
        return this._state
    },
    addNewPost(messagePost: string) {
        let newPost = {
            id: 5, message: messagePost, like: 18
        }
        this._state.profilePage.posts.push(newPost);
        this._callSubscriber(this._state);
        this._state.profilePage.newPostText = "";
    },
    changeNewPostText(newPostText: string) {
        this._state.profilePage.newPostText = newPostText;
        this._callSubscriber(this._state);
    },
    _callSubscriber(state: StateType) {
        console.log("rerenderEntireTree")
    },
    subscribe(observer: (state: StateType) => void) {
        this._callSubscriber = observer;
    }


}


/*const state: StateType = {
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
        ],
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
}*/


/*export const addNewPost = (messagePost: string) => {
    let newPost = {
        id: 5, message: messagePost, like: 18
    }
    state.profilePage.posts.push(newPost);
    rerenderEntireTree(state);
    state.profilePage.newPostText = "";
}*/

/*export const changeNewPostText = (newPostText: string) => {
    state.profilePage.newPostText = newPostText;
    rerenderEntireTree(state);
}*/

/*export const subscribe = (observer: (state: StateType) => void) => {
    rerenderEntireTree = observer;
}*/

/*
export default state;*/
