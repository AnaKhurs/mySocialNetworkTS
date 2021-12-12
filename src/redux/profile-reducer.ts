export type PostType = {
    id: number
    message: string
    like: number
}

export type ProfilePageType = {
    posts: Array<PostType>
    newPostText: string
    profile: UserProfileDataType
}
type ContactsType = {
    "facebook": null | string
    "website": null | string
    "vk": null | string
    "twitter": null | string
    "instagram": null | string
    "youtube": null | string
    "github": null | string
    "mainLink": null | string
}
type PhotosType = {
    "small": null | string
    "large": null | string
}
export type UserProfileDataType = {
    "aboutMe": null | string
    "contacts": ContactsType
    "lookingForAJob": boolean
    "lookingForAJobDescription": null | string
    "fullName": string
    "userId": number
    "photos": PhotosType
}

const initialState = {
    newPostText: "",
    posts: [
        {id: 1, message: "Hi, how are you?", like: 18},
        {id: 2, message: "It is my first post!!!", like: 19},
        {id: 3, message: "Yoooo", like: 10},
    ],
    profile: {
        "aboutMe": "Я крутой чел",
        "contacts": {
            "facebook": null,
            "website": null,
            "vk": "vk.com/dimych",
            "twitter": "https://twitter.com/@sdf",
            "instagram": "instagra.com/sds",
            "youtube": null,
            "github": null,
            "mainLink": null
        },
        "lookingForAJob": false,
        "lookingForAJobDescription": "Найди меня",
        "fullName": "Andrecky",
        "userId": 15,
        "photos": {
            "small": "https://social-network.samuraijs.com/activecontent/images/users/15/user-small.jpg?v=0",
            "large": "https://social-network.samuraijs.com/activecontent/images/users/15/user.jpg?v=0"
        }
    }
}

export const profileReducer = (state: ProfilePageType = initialState, action: ActionTypeProfileReducer): ProfilePageType => {

    switch (action.type) {
        case 'ADD-POST':
            let newPost = {id: 5, message: action.messagePost, like: 18}
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ""
            }
        case "CHANGE-NEW-POST-TEXT":
            return {...state, newPostText: action.newPostText}
        case "SET_USER_PROFILE":
            return {...state, profile: action.profile}
    }
    return state
}

export type ActionTypeProfileReducer =
    ReturnType<typeof addPost>
    | ReturnType<typeof changeNewPostText>
    | ReturnType<typeof setUserProfile>


export const addPost = (text: string) => {
    return {
        type: 'ADD-POST',
        messagePost: text
    } as const
}

export const changeNewPostText = (text: string) => {
    return {
        type: "CHANGE-NEW-POST-TEXT",
        newPostText: text
    } as const
}

export const setUserProfile = (profile: UserProfileDataType) => {
    return {
        type: "SET_USER_PROFILE",
        profile
    } as const
}