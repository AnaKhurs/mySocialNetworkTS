import React from 'react';
import {
    ActionCreateType,
    addPostActionCreator,
    changeNewPostTextActionCreator, PostType
} from "../../../redux/store";
import {MyPosts} from "./MyPosts";
import {connect} from "react-redux";
import {StateType} from "../../../redux/redux-store";


type MapStareToPropsType = {
    posts: PostType[]
    newPostText: string
}

type MapDispatchToPropsType = {
    addPost: (text: string) => void
    updateNewPostText: (text: string) => void
}

export type MyPostsPropsType = MapStareToPropsType & MapDispatchToPropsType

const mapStareToProps = (state: StateType): MapStareToPropsType => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
};

const mapDispatchToProps = (dispatch: (action: ActionCreateType) => void): MapDispatchToPropsType => {
    return {
        addPost: (text: string) => {
            dispatch(addPostActionCreator(text))
        },
        updateNewPostText: (text: string) => {
            dispatch(changeNewPostTextActionCreator(text))
        }
    }
}

export const MyPostsContainer = connect(mapStareToProps, mapDispatchToProps)(MyPosts)