import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {UserProfileDataType} from "../../redux/profile-reducer";

type ProfileType = {
    profile:UserProfileDataType
}

export const Profile:React.FC<ProfileType> = (props) => {
    return (
        <div>
            <ProfileInfo profile={props.profile}/>
            <MyPostsContainer/>
        </div>
    )
}