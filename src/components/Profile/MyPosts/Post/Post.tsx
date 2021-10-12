import React from 'react';
import classes from './Post.module.css'

const Post = () => {
    return (
        <div className={classes.item}>
            <img src='https://cdn.pixabay.com/photo/2015/03/03/08/55/portrait-657116__340.jpg'/>
            post1
            <div>
                <span>like</span>
            </div>

        </div>
    )
}

export default Post;