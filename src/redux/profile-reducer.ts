import {ActionCreateType, ProfilePageType} from "./state";

export const profileReducer = (state: ProfilePageType, action: ActionCreateType) => {

    switch (action.type) {
        case ADD_POST:
            let newPost = {id: 5, message: action.messagePost, like: 18}
            state.posts.push(newPost);
            state.newPostText = "";
            break;
        case CHANGE_NEW_POST_TEXT:
            state.newPostText = action.newPostText;
            break;
    }
    return state
}

const ADD_POST = "ADD-POST"
const CHANGE_NEW_POST_TEXT = "CHANGE-NEW-POST-TEXT"