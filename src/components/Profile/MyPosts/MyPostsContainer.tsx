import React from 'react';
import {MyPosts} from "./MyPosts";
import {connect} from "react-redux";
import {StateType} from "../../../redux/redux-store";
import {
    ActionTypeProfileReducer,
    addPost,
    PostType
} from "../../../redux/profile-reducer";


type MapStareToPropsType = {
    posts: PostType[]
}

type MapDispatchToPropsType = {
    addPost: (text: string) => void
}

export type MyPostsPropsType = MapStareToPropsType & MapDispatchToPropsType

const mapStareToProps = (state: StateType): MapStareToPropsType => {
    return {
        posts: state.profilePage.posts,
    }
};

const mapDispatchToProps = (dispatch: (action: ActionTypeProfileReducer) => void): MapDispatchToPropsType => {
    return {
        addPost: (text: string) => {
            dispatch(addPost(text))
        },
    }
}

export const MyPostsContainer = connect(mapStareToProps, mapDispatchToProps)(MyPosts)