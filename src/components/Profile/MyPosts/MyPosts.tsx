import React from 'react';
import classes from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div>
            My Posts
            <div>
                <textarea></textarea>
                <button>Add post</button>
            </div>
            <div className={classes.posts}>
                <Post message="Hi, how are you?" />
                <Post message="It is my first post!!!"/>
                <Post message="Yoooo"/>

</div>
</div>

)
}

export default MyPosts;