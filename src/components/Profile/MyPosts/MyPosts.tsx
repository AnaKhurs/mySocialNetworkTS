import React, {ChangeEvent, Ref} from 'react';
import classes from './MyPosts.module.css'
import Post from "./Post/Post";
import {PostType} from "../../../redux/store";

type ProfileInfoType = {
    //profilePageState: ProfilePageType

    posts: PostType[]
    addPost: (text: string) => void
    updateNewPostText: (text: string) => void
    newPostText: string
}

export const MyPosts: React.FC<ProfileInfoType> = (props) => {

    let postsElements = props.posts.map((p) => <Post message={p.message} like={p.like}/>)

    let newPostElement = React.createRef<HTMLTextAreaElement>();

    let onAddPost = () => {
        if (newPostElement.current) {
            props.addPost(props.newPostText)
            //props.dispatch(addPostActionCreator(props.profilePageState.newPostText))
        }
    }

    const onPostChange = () => {
        if (newPostElement.current) {
            let text = newPostElement.current.value;
            props.updateNewPostText(text)

            //props.dispatch(changeNewPostTextActionCreator(text))
        }
    }

    return (
        <div className={classes.allPosts}>
            <h3>My Posts</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange}
                              value={props.newPostText}
                              ref={newPostElement}
                    />
                </div>
                <div>
                    <button onClick={onAddPost}>Add post</button>
                </div>
            </div>
            <div className={classes.posts}>
                {postsElements}
            </div>
        </div>

    )
}