import React from 'react';
import classes from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {PostType} from "../../index";

type ProfileType = {
    posts:Array<PostType>
}

const Profile:React.FC<ProfileType> = (posts) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={posts.posts}/>
        </div>
    )
}

export default Profile;