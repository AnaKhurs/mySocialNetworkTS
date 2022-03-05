import React from 'react';
import {FormDataType, LoginReduxForm} from "./LoginForm";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";
import {StateType} from "../../redux/redux-store";


const Login1 = (props: LoginPropsType) => {

    const onSubmit = (formData: FormDataType) => {
        props.login(formData.email, formData.password, formData.rememberMe)
    }

    if (props.isAuth) {
        return <Redirect to={"/profile"}/>
    }

    return (
        <div>

            <h3>LOGIN</h3>
            <LoginReduxForm onSubmit={onSubmit}/>

        </div>
    )
}

type MapStareToPropsType = {
    isAuth: boolean
}

const mapStareToProps = (state: StateType): MapStareToPropsType => {
    return {
        isAuth: state.auth.isAuth
    }
}

type MapDispatchToPropsType = {
    login: (email: string, password: string, rememberMe: boolean) => void
}

export type LoginPropsType = MapStareToPropsType & MapDispatchToPropsType


export const Login = connect(mapStareToProps, {login})(Login1)