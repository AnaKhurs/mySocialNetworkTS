import React from 'react';
import classes from './ProfileInfo.module.css'

const ProfileInfo = () => {
    return (
        <div>
            <div className={classes.profileImg}>
                <img src='https://www.tourdom.ru/upload/iblock/c67/c67d37818296f908f1ba70503667e48c.jpeg'/>
            </div>
            <div className={classes.description}>
                ava+description
            </div>
        </div>
    )
}

export default ProfileInfo;