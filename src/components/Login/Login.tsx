import React from 'react';
import {FormDataType, LoginReduxForm} from "./LoginForm";

export const Login = () => {

    const onSubmit = (formData: FormDataType) => {
       console.log(formData)
    }

    return (
        <div>

            <h3>LOGIN</h3>
            <LoginReduxForm onSubmit={onSubmit}/>

        </div>
    )

}