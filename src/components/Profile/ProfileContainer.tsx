import React from 'react';
import {connect} from "react-redux";
import {Profile} from "./Profile";
import {StateType} from "../../redux/redux-store";
import {addPost, changeNewPostText, PostType, setUserProfile, UserProfileDataType} from "../../redux/profile-reducer";
import axios from "axios";
import {UserType} from "../../redux/user-reducer";
import {withRouter} from "react-router-dom";



type MapStareToPropsType = {
    newPostText: string
    posts: Array<PostType>
    profile: UserProfileDataType
}
type MapDispatchToPropsType = {
    addPost: (text: string) => void
    changeNewPostText: (text: string) => void
    setUserProfile: (profile: UserProfileDataType) => void
}

export type UserPropsType = MapStareToPropsType & MapDispatchToPropsType

class ProfileAPIContainer extends React.Component<UserPropsType> {

    componentDidMount() {

        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`).then(response => {
                this.props.setUserProfile(response.data)
            }
        )
    }

    render() {
        return <Profile {...this.props}
            profile={this.props.profile}
        />
    }
}

const mapStareToProps = (state: StateType): MapStareToPropsType => {
    return {
        newPostText: state.profilePage.newPostText,
        posts: state.profilePage.posts,
        profile: state.profilePage.profile,
    }
}

/*const ff = withRouter(ProfileAPIContainer)*/

export const ProfileContainer = connect(mapStareToProps,
    {
        addPost,
        changeNewPostText,
        setUserProfile,
    })(ProfileAPIContainer)