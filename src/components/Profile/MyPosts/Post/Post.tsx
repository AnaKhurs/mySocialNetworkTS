import React from 'react';
import classes from './Post.module.css'

type PostType = {
    message: string
}

const Post = (props: PostType) => {
    return (
        <div className={classes.item}>
            <img src='https://cdn.pixabay.com/photo/2015/03/03/08/55/portrait-657116__340.jpg'/>
            {props.message}
            <div>
                <span>like</span>
            </div>

        </div>
    )
}

export default Post;