import React from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Input} from "../common/FormsControls/FormsControls";
import {required} from "../../utils/validators/validators";

export type FormDataType = {
    email: string
    password: string
    rememberMe: boolean
}


const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Input}
                       validate={[required]}
                       placeholder={"email"}
                       name={"email"}
                />
            </div>
            <div>
                <Field component={Input}
                       validate={[required]}
                       placeholder={"password"}
                       name={"password"}
                       type={"password"}/>
            </div>
            <div>
                <Field component={"input"} type={"checkbox"} name={"rememberMe"}/>Remember me
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    )

}

export const LoginReduxForm = reduxForm<FormDataType>({form: "Login"})(LoginForm)