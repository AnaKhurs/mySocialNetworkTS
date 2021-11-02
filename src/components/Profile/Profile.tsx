import React from 'react';
import classes from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ProfilePageType} from "../../redux/state";

type ProfileType = {
    profilePageState: ProfilePageType
    addNewPost: (messagePost:string) => void
    changeNewPostText: (newPostText: string) => void
}

const Profile:React.FC<ProfileType> = (props) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts profilePageState={props.profilePageState} addNewPost={props.addNewPost} changeNewPostText = {props.changeNewPostText} />
        </div>
    )
}

export default Profile;