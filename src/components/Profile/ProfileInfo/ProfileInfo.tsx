import React, {ChangeEvent, useState} from 'react';
import classes from './ProfileInfo.module.css'
import {UserProfileDataType} from "../../../redux/profile-reducer";
import userPhoto from './../../../assets/images/abstract-user-flat-4.svg'
import {Preloader} from "../../common/Preloader/Preloader";
import {ProfileStatus} from "./ProfileStatus/ProfileStatus";
import {ProfileData} from "./ProfileData/ProfileData";
import {FormDataType, ProfileDataReduxForm} from "./ProfileDataForm/ProfileDataForm";


type PropsType = {
    profile: UserProfileDataType
    status: string
    updateUserStatus: (status: string) => void
    isOwner: boolean
    savePhoto: (file: File) => void
    saveProfile: (formData: FormDataType) => void
}


export const ProfileInfo = (props: PropsType) => {

    const [editMode, setEditMode] = useState(false)

    if (!props.profile) {
        return <Preloader/>
    }

    const onMainPhotoSelected = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            props.savePhoto(e.target.files[0])
        }
    }

    const onSubmit = (formData: FormDataType) => {
        props.saveProfile(formData)
        setEditMode(false)
        //console.log(formData)
    }

    return (
        <div className={classes.pageProfileInfo}>
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
                    {editMode
                        ? <ProfileDataReduxForm initialValues={props.profile}
                                                profile={props.profile}
                                                onSubmit={onSubmit}
                        />
                        : <ProfileData profile={props.profile}
                                       isOwner={props.isOwner}
                                       goToEditMode={setEditMode}/>}
                </div>
            </div>
        </div>
    )
}