import React, {ChangeEvent, Ref} from 'react';
import {
    addPostActionCreator,
    changeNewPostTextActionCreator, StoreType
} from "../../../redux/store";
import {StoreContext} from '../../../StoreContext';
import {MyPosts} from "./MyPosts";


type PropsType = {
    //store: StoreType
}

export const MyPostsContainer = (props: PropsType) => {

    return (
        <StoreContext.Consumer>
            {
                store => {

                    let addPost = (text: string) => {
                        store.dispatch(addPostActionCreator(text))
                    }

                    const updateNewPostText = (text: string) => {
                        store.dispatch(changeNewPostTextActionCreator(text))
                    }

                    return <MyPosts addPost={addPost}
                                    updateNewPostText={updateNewPostText}
                                    posts={store.getState().profilePage.posts}
                                    newPostText={store.getState().profilePage.newPostText}/>
                }}
        </StoreContext.Consumer>)

}
