import React from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";

export type FormDataType = {
    newPostTextBody: string
}


const AddNewPostForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field component={"textarea"} name={"newPostTextBody"}/>
            <button>Add post</button>
        </form>
    )

}

export const AddNewPostReduxForm = reduxForm<FormDataType>({form: "ProfileAddNewPostForm"})(AddNewPostForm)