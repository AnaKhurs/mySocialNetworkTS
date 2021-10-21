import React from 'react';
import classes from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ProfilePageType} from "../../redux/state";

type ProfileType = {
    profilePageState: ProfilePageType
}

const Profile:React.FC<ProfileType> = (posts) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={posts.profilePageState.posts}/>
        </div>
    )
}

export default Profile;