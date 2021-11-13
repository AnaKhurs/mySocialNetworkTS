import React, {ChangeEvent, Ref} from 'react';
import classes from './MyPosts.module.css'
import Post from "./Post/Post";
import {AddPostActionType, ChangeNewPostTextActionType, PostType, ProfilePageType} from "./../../../redux/state";

type ProfileInfoType = {
    profilePageState: ProfilePageType
    dispatch: (action: AddPostActionType | ChangeNewPostTextActionType) => void
}

const MyPosts: React.FC<ProfileInfoType> = (props) => {

    let postsElements = props.profilePageState.posts.map((p) => <Post message={p.message} like={p.like}/>)

    let newPostElement = React.createRef<HTMLTextAreaElement>();

    let addPost = () => {
        if (newPostElement.current) {
            /* let text = newPostElement.current.value;*/
            /*            props.addNewPost(props.profilePageState.newPostText)*/
            props.dispatch({type: 'ADD-POST', messagePost: (props.profilePageState.newPostText)})
        }
    }

    const onPostChange = () => {
        if (newPostElement.current) {
            let text = newPostElement.current.value;
            /* props.changeNewPostText(text);*/
            props.dispatch({type: "CHANGE-NEW-POST-TEXT", newPostText: text})
        }


    }

    return (
        <div className={classes.allPosts}>
            <h3>My Posts</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange} value={props.profilePageState.newPostText}
                              ref={newPostElement}></textarea>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div className={classes.posts}>
                {postsElements}
            </div>
        </div>

    )
}

export default MyPosts;