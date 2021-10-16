import React from 'react';
import classes from './Post.module.css'

type PostType = {
    message: string
    likecounte: number
}

const Post: React.FC<PostType> = (props) => {
    return (
        <div className={classes.item}>
            <img src='https://cdn.pixabay.com/photo/2015/03/03/08/55/portrait-657116__340.jpg'/>
            {props.message}
            <div>
                <span>like {props.likecounte}</span>
            </div>

        </div>
    )
}

export default Post;