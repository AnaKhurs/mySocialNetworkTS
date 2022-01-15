import React from 'react';
import {connect} from "react-redux";
import {Profile} from "./Profile";
import {StateType} from "../../redux/redux-store";
import {
    addPost,
    changeNewPostText,
    getUserProfile,
    PostType,
    UserProfileDataType
} from "../../redux/profile-reducer";
import {Redirect, RouteComponentProps, withRouter} from "react-router-dom";


type MapStareToPropsType = {
    newPostText: string
    posts: Array<PostType>
    profile: UserProfileDataType
    isAuth: boolean
}
type MapDispatchToPropsType = {
    addPost: (text: string) => void
    changeNewPostText: (text: string) => void
    getUserProfile: (userId: string) => void
}
type PathParamsType = {
    userId: string
}

type PropsType = RouteComponentProps<PathParamsType> & UserPropsType

export type UserPropsType = MapStareToPropsType & MapDispatchToPropsType

class ProfileAPIContainer extends React.Component<PropsType> {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = "2"
        }
        this.props.getUserProfile(userId)
    }

    render() {
        if (!this.props.isAuth) return <Redirect to={"/login"}/>
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
        isAuth: state.auth.isAuth
    }
}

const WithURLDataProfileContainer = withRouter(ProfileAPIContainer)

export const ProfileContainer = connect(mapStareToProps,
    {
        addPost,
        changeNewPostText,
        getUserProfile,
    })(WithURLDataProfileContainer)