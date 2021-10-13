import React from 'react';
import classes from './MyPosts.module.css'
import Post from "./Post/Post";

function MyPosts () {
    return (
        <div>
            My Posts
            <div>
                <textarea></textarea>
                <button>Add post</button>
            </div>
            <div className={classes.posts}>
                <Post message="Hi, how are you?" likecounte={18}/>
                <Post message="It is my first post!!!" likecounte={19}/>
                <Post message="Yoooo"likecounte={10}/>

</div>
</div>

)
}

export default MyPosts;