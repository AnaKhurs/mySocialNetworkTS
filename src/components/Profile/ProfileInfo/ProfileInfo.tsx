import React, {ChangeEvent} from 'react';
import classes from './ProfileInfo.module.css'
import {UserProfileDataType} from "../../../redux/profile-reducer";
import userPhoto from './../../../assets/images/abstract-user-flat-4.svg'
import {Preloader} from "../../common/Preloader/Preloader";
import {ProfileStatus} from "./ProfileStatus/ProfileStatus";

type PropsType = {
    profile: UserProfileDataType
    status: string
    updateUserStatus: (status: string) => void
    isOwner: boolean
    savePhoto: (file: File) => void
}


export const ProfileInfo = (props: PropsType) => {
    if (!props.profile) {
        return <Preloader/>
    }

    const onMainPhotoSelected = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            props.savePhoto(e.target.files[0])
        }

    }

    return (
        <div className={classes.pageProfileInfo}>
            {/*  <div className={classes.profileImg}>
                <img src='https://www.tourdom.ru/upload/iblock/c67/c67d37818296f908f1ba70503667e48c.jpeg'/>
            </div>*/}
            <div className={classes.description}>
                <div className={classes.photo}>
                    <img className={classes.avaProfile}
                         src={props.profile.photos.large || userPhoto}/>
                    {props.isOwner && <input type={"file"} onChange={onMainPhotoSelected}/>}
                </div>

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


// lastModified: 1644420533593
// lastModifiedDate: Wed Feb 09 2022 18:28:53 GMT+0300 (Москва, стандартное время) {}
// name: "0896ab7512a5ffe598fe2440cb2f1e4a.jpeg"
// size: 24012
// type: "image/jpeg"
// webkitRelativePath: ""
//     [[Prototype]]: File