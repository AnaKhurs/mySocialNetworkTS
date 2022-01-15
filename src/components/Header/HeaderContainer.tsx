import React from 'react';
import {Header} from "./Header";
import {connect} from "react-redux";
import {DataType, getAuthUserData} from "../../redux/auth-reducer";
import {StateType} from "../../redux/redux-store";


type MapStareToPropsType = {
    data: DataType | null
    isAuth: boolean
}
type MapDispatchToPropsType = {
    getAuthUserData: () => void
}

export type PropsType = MapStareToPropsType & MapDispatchToPropsType

export class HeaderAPIContainer extends React.Component<PropsType> {
    componentDidMount() {
        this.props.getAuthUserData()
    }

    render() {
        return <Header {...this.props}/>;
    }
}

const mapStateToProps = (state: StateType): MapStareToPropsType => {
    return {
        data: state.auth.data,
        isAuth: state.auth.isAuth
    }
}

export const HeaderContainer = connect(mapStateToProps, {getAuthUserData})(HeaderAPIContainer)