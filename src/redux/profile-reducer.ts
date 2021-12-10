export type PostType = {
    id: number
    message: string
    like: number
}

export type ProfilePageType = {
    posts: Array<PostType>
    newPostText: string
}
const initialState = {
    newPostText: "",
    posts: [
        {id: 1, message: "Hi, how are you?", like: 18},
        {id: 2, message: "It is my first post!!!", like: 19},
        {id: 3, message: "Yoooo", like: 10},
    ],
}

export const profileReducer = (state: ProfilePageType = initialState, action: ActionTypeProfileReducer) => {

    switch (action.type) {
        case ADD_POST:
            let newPost = {id: 5, message: action.messagePost, like: 18}
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ""
            }
        case CHANGE_NEW_POST_TEXT:
            return {...state, newPostText: action.newPostText}
    }
    return state
}

const ADD_POST = "ADD-POST"
const CHANGE_NEW_POST_TEXT = "CHANGE-NEW-POST-TEXT"

export type ActionTypeProfileReducer =
    ReturnType<typeof addPostActionCreator>
    | ReturnType<typeof changeNewPostTextActionCreator>


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