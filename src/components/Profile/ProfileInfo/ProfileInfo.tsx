import React from 'react';
import classes from './ProfileInfo.module.css'
import {UserProfileDataType} from "../../../redux/profile-reducer";
import userPhoto from './../../../assets/images/abstract-user-flat-4.svg'
import {Preloader} from "../../common/Preloader/Preloader";

type PropsType = {
    profile: UserProfileDataType
}


const ProfileInfo = (props: PropsType) => {
    if (!props.profile) {
        return <Preloader/>
    }
    return (
        <div>
            <div className={classes.profileImg}>
                <img src='https://www.tourdom.ru/upload/iblock/c67/c67d37818296f908f1ba70503667e48c.jpeg'/>
            </div>
            <div className={classes.description}>
                <img src={props.profile.photos.large ? props.profile.photos.large : userPhoto}/>
                ava+description
            </div>
        </div>
    )
}

export default ProfileInfo;