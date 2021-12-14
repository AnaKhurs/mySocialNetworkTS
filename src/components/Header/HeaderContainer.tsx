import React from 'react';
import {Header} from "./Header";
import {connect} from "react-redux";
import {DataType, setAuthUserData} from "../../redux/auth-reducer";
import {StateType} from "../../redux/redux-store";
import {userAuthAPI} from "../../api/api";


type MapStareToPropsType = {
    data: DataType | null
    isAuth: boolean
}
type MapDispatchToPropsType = {
    setAuthUserData: (id: number, login: string, email: string) => void
}

export type PropsType = MapStareToPropsType & MapDispatchToPropsType

export class HeaderAPIContainer extends React.Component<PropsType> {
    componentDidMount() {
        userAuthAPI.getAuthMe().then(data => {
                if (data.resultCode === 0) {
                    let {id, login, email} = data.data
                    this.props.setAuthUserData(id, login, email)
                }
            }
        )
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

export const HeaderContainer = connect(mapStateToProps, {setAuthUserData})(HeaderAPIContainer)