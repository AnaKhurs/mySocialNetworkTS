import React from 'react';
import classes from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ActionCreateType, ProfilePageType} from "../../redux/state";

type ProfileType = {
    profilePageState: ProfilePageType
    dispatch: (action: ActionCreateType) => void
}

const Profile:React.FC<ProfileType> = (props) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts profilePageState={props.profilePageState} dispatch={props.dispatch} />
        </div>
    )
}

export default Profile;