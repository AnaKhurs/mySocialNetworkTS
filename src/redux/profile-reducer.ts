import {ActionCreateType, ProfilePageType} from "./store";

const initialState = {
        newPostText: "",
        posts: [
            {id: 1, message: "Hi, how are you?", like: 18},
            {id: 2, message: "It is my first post!!!", like: 19},
            {id: 3, message: "Yoooo", like: 10},
        ],
    }

export const profileReducer = (state: ProfilePageType = initialState, action: ActionCreateType) => {

    switch (action.type) {
        case ADD_POST:
            let newPost = {id: 5, message: action.messagePost, like: 18}
            return  {
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