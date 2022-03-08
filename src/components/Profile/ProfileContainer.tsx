import React, {ComponentType} from 'react';
import {connect} from "react-redux";
import {Profile} from "./Profile";
import {StateType} from "../../redux/redux-store";
import {
    addPost,
    getUserProfile,
    getUserStatus,
    PostType, savePhoto, saveProfile,
    updateUserStatus,
    UserProfileDataType
} from "../../redux/profile-reducer";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {withAuthRedirect} from "../HOC/withAuthRedirect";
import {compose} from "redux";


type MapStareToPropsType = {
    posts: Array<PostType>
    profile: UserProfileDataType
    status: string
    isAuth: boolean
    authorized: number | null | undefined
}

type MapDispatchToPropsType = {
    addPost: (text: string) => void
    getUserProfile: (userId: string) => void
    getUserStatus: (userId: string) => void
    updateUserStatus: (status: string) => void
    savePhoto: () => void
    saveProfile: () => void
}
type PathParamsType = {
    userId: string
}

type PropsType = RouteComponentProps<PathParamsType> & UserPropsType

export type UserPropsType = MapStareToPropsType & MapDispatchToPropsType

class ProfileContainer extends React.Component<PropsType> {

    refreshProfile() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = String(this.props.authorized)
            if (!userId) {
                this.props.history.push('/login')
            }
        }
        this.props.getUserProfile(userId)
        this.props.getUserStatus(userId)
    }

    componentDidMount() {
        this.refreshProfile()
    }

    componentDidUpdate(prevProps: Readonly<PropsType>, prevState: Readonly<{}>, snapshot?: any) {
        if (this.props.match.params.userId !== prevProps.match.params.userId) {
            this.refreshProfile()
        }

    }

    render() {
        return <Profile {...this.props}
                        isOwner={!this.props.match.params.userId}
                        profile={this.props.profile}
                        status={this.props.status}
                        updateUserStatus={this.props.updateUserStatus}
                        savePhoto={this.props.savePhoto}
                        saveProfile={this.props.saveProfile}
        />
    }
}

const mapStareToProps = (state: StateType): MapStareToPropsType => {
    return {
        posts: state.profilePage.posts,
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        isAuth: state.auth.isAuth,
        authorized: state.auth.data?.id,

    }
}

export default compose<ComponentType>(
    withAuthRedirect,
    connect(mapStareToProps, {
        addPost,
        getUserProfile,
        getUserStatus,
        updateUserStatus,
        savePhoto,
        saveProfile,
    }),
    withRouter)(ProfileContainer)