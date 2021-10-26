export type DialogType = {
    id: number
    name: string
    avatar: string
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
                avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSppWophE6gr9mU8RtSdE8Q9sA75aUGBGFFNw&usqp=CAU"
            },
            {
                id: 4,
                name: "Dima",
                avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThjiIep4R49K8xkJr_xQxVOXUvblr-wBlbGA&usqp=CAU"
            },
            {
                id: 5,
                name: "Lena",
                avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_ex0z9Qxd-dAv5wzHfQHQ_h5MeN5nlBgnbw&usqp=CAU"
            },
        ],
        messagesText: [
            {id: 1, messageText: "Hi!!!"},
            {id: 2, messageText: "How are you?"},
            {id: 3, messageText: "yoooooo"},
        ],
    },
}


export default state;
