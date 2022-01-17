import React from 'react';
import classes from './ProfileInfo.module.css'
import {UserProfileDataType} from "../../../redux/profile-reducer";
import userPhoto from './../../../assets/images/abstract-user-flat-4.svg'
import {Preloader} from "../../common/Preloader/Preloader";
import {ProfileStatus} from "./ProfileStatus/ProfileStatus";

type PropsType = {
    profile: UserProfileDataType
    status: string
    updateUserStatus: (status: string) => void
}


export const ProfileInfo = (props: PropsType) => {
    if (!props.profile) {
        return <Preloader/>
    }
    return (
        <div>
            {/*  <div className={classes.profileImg}>
                <img src='https://www.tourdom.ru/upload/iblock/c67/c67d37818296f908f1ba70503667e48c.jpeg'/>
            </div>*/}
            <div className={classes.description}>
                <img className={classes.avaProfile}
                     src={props.profile.photos.large ? props.profile.photos.large : userPhoto}/>
                <div className={classes.infoProfile}>
                    <div className={classes.name}>{props.profile.fullName}</div>

                    <ProfileStatus status={props.status} updateUserStatus={props.updateUserStatus}/>

                    <hr></hr>
                    <div className={classes.aboutMe}>aboutMe: {props.profile.aboutMe}</div>
                    <hr></hr>
                    <div className={classes.contact}>
                        <div>facebook: {props.profile.contacts.facebook}</div>
                        <div>website: {props.profile.contacts.website}</div>
                        <div>vk: {props.profile.contacts.vk}</div>
                        <div>twitter: {props.profile.contacts.twitter}</div>
                        <div>instagram: {props.profile.contacts.instagram}</div>
                        <div>youtube: {props.profile.contacts.youtube}</div>
                        <div>github: {props.profile.contacts.github}</div>
                        <div>mainLink: {props.profile.contacts.mainLink}</div>
                    </div>
                    {/*                    <div className={classes.lookingForAJo}>lookingForAJob</div>
                    <div className={classes.lookingForAJobDescription}>lookingForAJobDescription</div>
                    <div className={classes.fullName}>fullName</div>*/}
                </div>
            </div>
        </div>
    )
}
