import React from 'react';
import classes from './MyPosts.module.css'
import Post from "./Post/Post";
import {PostType} from "./../../../index";

type ProfileInfoType = {
    posts: Array<PostType>
}

const MyPosts: React.FC<ProfileInfoType> = (props) => {

    let postsElements = props.posts.map((p) => <Post message={p.message} like={p.like}/>)

    return (
        <div className={classes.allPosts}>
            <h3>My Posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={classes.posts}>
                {postsElements}
            </div>
        </div>

    )
}

export default MyPosts;