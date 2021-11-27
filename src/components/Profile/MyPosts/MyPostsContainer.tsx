import React, {ChangeEvent, Ref} from 'react';
import {
    addPostActionCreator,
    changeNewPostTextActionCreator, StoreType
} from "../../../redux/store";
import {MyPosts} from "./MyPosts";


type PropsType = {
    store: StoreType
}

export const MyPostsContainer = (props: PropsType) => {

    let addPost = (text: string) => {
        props.store.dispatch(addPostActionCreator(text))
    }

    const updateNewPostText = (text: string) => {
        props.store.dispatch(changeNewPostTextActionCreator(text))
    }

    return <MyPosts addPost={addPost}
                    updateNewPostText={updateNewPostText}
                    posts={props.store.getState().profilePage.posts}
                    newPostText={props.store.getState().profilePage.newPostText}
    />
}
