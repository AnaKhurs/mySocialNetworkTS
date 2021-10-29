import React from 'react';
import classes from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ProfilePageType} from "../../redux/state";

type ProfileType = {
    profilePageState: ProfilePageType
    addNewPost: (messagePost:string) => void
}

const Profile:React.FC<ProfileType> = (props) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={props.profilePageState.posts} addNewPost={props.addNewPost}/>
        </div>
    )
}

export default Profile;