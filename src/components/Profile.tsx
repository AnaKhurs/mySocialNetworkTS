import React from 'react';
import classes from './Profile.module.css'

const Profile = () => {
    return (
        <div className={classes.content}>
            <div>
                <img src='https://www.tourdom.ru/upload/iblock/c67/c67d37818296f908f1ba70503667e48c.jpeg'/>
            </div>
            <div>
                ava+description
            </div>
            <div>
                my posts
                <div>
                    New post
                </div>
                <div className={classes.posts}>
                    <div className={classes.item}>
                        post1
                    </div>
                    <div className={classes.item}>
                        post2
                    </div>
                    <div className={classes.item}>
                        post3
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile;