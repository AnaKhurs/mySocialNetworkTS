import React from 'react';
import {connect} from "react-redux";
import {Profile} from "./Profile";
import {StateType} from "../../redux/redux-store";
import {addPost, changeNewPostText, PostType, setUserProfile, UserProfileDataType} from "../../redux/profile-reducer";
import axios from "axios";
import {RouteComponentProps, withRouter} from "react-router-dom";


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
type PathParamsType = {
    userId: string
}

type PropsType = RouteComponentProps<PathParamsType> & UserPropsType

export type UserPropsType = MapStareToPropsType & MapDispatchToPropsType

class ProfileAPIContainer extends React.Component<PropsType> {

    componentDidMount() {
        let userId = this.props.match.params.userId
       /* if (!userId) {
            userId = "2"
        }*/
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId).then(response => {
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

const WithURLDataProfileContainer = withRouter(ProfileAPIContainer)

export const ProfileContainer = connect(mapStareToProps,
    {
        addPost,
        changeNewPostText,
        setUserProfile,
    })(WithURLDataProfileContainer)