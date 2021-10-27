import React, {Ref} from 'react';
import classes from './MyPosts.module.css'
import Post from "./Post/Post";
import {PostType} from "./../../../redux/state";

type ProfileInfoType = {
    posts: Array<PostType>
}

const MyPosts: React.FC<ProfileInfoType> = (props) => {

    let postsElements = props.posts.map((p) => <Post message={p.message} like={p.like}/>)

    let newPostElement = React.createRef<HTMLTextAreaElement>();

    let addPost = () => {
        if (newPostElement.current) {
            let text = newPostElement.current.value;
            alert(text)
        }
    }

    return (
        <div className={classes.allPosts}>
            <h3>My Posts</h3>
            <div>
                <div>
                    <textarea ref={newPostElement}></textarea>
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