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
                    <img src='https://meragor.com/files/styles//220_220_bottom_wm/cherno-belye-avy-044.jpg'/>
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