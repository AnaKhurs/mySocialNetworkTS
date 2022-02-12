import React from 'react';
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {UserProfileDataType} from "../../redux/profile-reducer";

type ProfileType = {
    profile: UserProfileDataType
    status: string
    updateUserStatus: (status: string) => void
    isOwner: boolean
    savePhoto: () => void
}

export const Profile: React.FC<ProfileType> = (props) => {
    return (
        <div>
            <ProfileInfo savePhoto={props.savePhoto} isOwner={props.isOwner} profile={props.profile}
                         status={props.status} updateUserStatus={props.updateUserStatus}/>
            <MyPostsContainer/>
        </div>
    )
}