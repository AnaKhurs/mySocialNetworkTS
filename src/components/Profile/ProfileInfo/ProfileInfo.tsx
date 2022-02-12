import React, {ChangeEvent} from 'react';
import classes from './ProfileInfo.module.css'
import {UserProfileDataType} from "../../../redux/profile-reducer";
import userPhoto from './../../../assets/images/abstract-user-flat-4.svg'
import {Preloader} from "../../common/Preloader/Preloader";
import {ProfileStatus} from "./ProfileStatus/ProfileStatus";
import {Contacts} from './Contacts/Contacts';
import {ContactsType} from "./../../../redux/profile-reducer";

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

                    <hr/>
                    <div className={classes.contact}>
                        <div className={classes.fullName}>FullName</div>
                        <div>
                            Looking for a job:
                            <span className={classes.span}>{props.profile.lookingForAJob ? " Yes " : " No "}</span>
                        </div>
                        {props.profile.lookingForAJob &&
                        <div className={classes.contact}>
                            My professional skills:
                            <span className={classes.span}>{props.profile.lookingForAJobDescription}</span></div>
                        }

                    </div>
                    <hr/>
                    <div className={classes.contact}>aboutMe:
                        <span className={classes.span}>{props.profile.aboutMe}</span></div>
                    <hr/>
                    {Object.keys(props.profile.contacts).map((el) => {
                        return (
                            <Contacts key={el}
                                      contactTitle={el}
                                      contactValue={props.profile.contacts[el as keyof ContactsType]}/>)
                    })}
                </div>
            </div>
        </div>
    )
}