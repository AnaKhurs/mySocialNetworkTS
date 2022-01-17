import React from 'react';
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {updateUserStatus, UserProfileDataType} from "../../redux/profile-reducer";

type ProfileType = {
    profile: UserProfileDataType
    status: string
    updateUserStatus: (status: string)=>void
}

export const Profile: React.FC<ProfileType> = (props) => {
    return (
        <div>
            <ProfileInfo profile={props.profile} status={props.status} updateUserStatus={props.updateUserStatus}/>
            <MyPostsContainer/>
        </div>
    )
}