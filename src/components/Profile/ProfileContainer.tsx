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
import {withAuthRedirect} from "../HOC/withAuthRedirect";


type MapStareToPropsType = {
    newPostText: string
    posts: Array<PostType>
    profile: UserProfileDataType
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
        return <Profile {...this.props}
                        profile={this.props.profile}
        />
    }
}

const mapStareToProps = (state: StateType): MapStareToPropsType => {
    return {
        newPostText: state.profilePage.newPostText,
        posts: state.profilePage.posts,
        profile: state.profilePage.profile
    }
}

const WithURLDataProfileContainer = withRouter(ProfileAPIContainer)

export default withAuthRedirect(connect(mapStareToProps, {addPost, changeNewPostText, getUserProfile})(WithURLDataProfileContainer))
