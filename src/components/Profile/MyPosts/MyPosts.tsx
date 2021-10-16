import React from 'react';
import classes from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = () => {
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
                <Post message="Hi, how are you?" likecounte={18}/>
                <Post message="It is my first post!!!" likecounte={19}/>
                <Post message="Yoooo" likecounte={10}/>

            </div>
        </div>

    )
}

export default MyPosts;