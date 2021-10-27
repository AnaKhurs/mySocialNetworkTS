import React from 'react';
import classes from './Post.module.css'

type PostType = {
    message: string
    like: number
}

const Post: React.FC<PostType> = (props) => {
    return (
        <div className={classes.item}>
            <div className={classes.avaPost}>
                <div className={classes.ava}>
                    <img src='https://cdn.pixabay.com/photo/2015/03/03/08/55/portrait-657116__340.jpg'/>
                </div>
                <div className={classes.messagePost}>
                    {props.message}
                </div>
            </div>
            <div className={classes.likeCounte}>
                <span>like {props.like}</span>
            </div>

        </div>
    )
}

export default Post;