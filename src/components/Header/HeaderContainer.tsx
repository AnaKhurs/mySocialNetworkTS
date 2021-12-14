import React from 'react';
import {Header} from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {DataType, setAuthUserData} from "../../redux/auth-reducer";
import {StateType} from "../../redux/redux-store";


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
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`,
            {withCredentials: true})
            .then(response => {
                    if (response.data.resultCode === 0) {
                        let {id, login, email} = response.data.data
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