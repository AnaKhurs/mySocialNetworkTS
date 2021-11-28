import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {StoreType} from "../../redux/store";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";

type ProfileType = {
    //store: StoreType
}

const Profile:React.FC<ProfileType> = (props) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPostsContainer/>
        </div>
    )
}

export default Profile;