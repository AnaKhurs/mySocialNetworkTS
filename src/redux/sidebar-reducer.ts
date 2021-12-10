import {addPostActionCreator} from "./profile-reducer";

export type FriendsType = {
    friends: Array<FriendType>
}

export type FriendType = {
    id: number
    name: string
    avatar: string
}

const initialState = {
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

export const sidebarReducer = (state: FriendsType = initialState) => {
    return state
}
