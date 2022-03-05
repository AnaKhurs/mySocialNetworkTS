import React from 'react';
import classes from './ProfileData.module.css'
import {Contacts} from "../Contacts/Contacts";
import {ContactsType, UserProfileDataType} from "../../../../redux/profile-reducer";

type PropsType = {
    profile: UserProfileDataType
    isOwner: boolean
    goToEditMode: (value: boolean) => void
}

export const ProfileData = (props: PropsType) => {
    return (
        <div>
            {props.isOwner &&
            <div>
                <button onClick={() => props.goToEditMode(true)}>edit</button>
            </div>}
            <div className={classes.contact}>
                <div className={classes.fullName}>Full name:
                    <span className={classes.span}>{props.profile.fullName}</span>
                </div>
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

            <div className={classes.contact}>About me:
                <span className={classes.span}>{props.profile.aboutMe}</span>
            </div>
            <hr/>

            {Object.keys(props.profile.contacts).map((el) => {
                return (
                    <Contacts key={el}
                              contactTitle={el}
                              contactValue={props.profile.contacts[el as keyof ContactsType]}/>)
            })}


        </div>
    )
}