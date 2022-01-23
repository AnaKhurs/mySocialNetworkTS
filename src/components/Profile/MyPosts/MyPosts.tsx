import React from 'react';
import classes from './MyPosts.module.css'
import Post from "./Post/Post";
import {MyPostsPropsType} from "./MyPostsContainer";
import {AddNewPostReduxForm, FormDataType} from "./AddNewPostForm";


export const MyPosts = (props: MyPostsPropsType) => {

    let postsElements = props.posts.map((p) => <Post message={p.message} like={p.like}/>)

    const onSubmit = (formData: FormDataType) => {
        props.addPost(formData.newPostTextBody)
    }

    return (
        <div className={classes.allPosts}>
            <h3>My Posts</h3>
            <AddNewPostReduxForm onSubmit={onSubmit}/>
            <div className={classes.posts}>
                {postsElements}
            </div>
        </div>

    )
};