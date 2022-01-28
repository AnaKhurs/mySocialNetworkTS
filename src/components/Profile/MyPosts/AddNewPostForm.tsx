import React from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {Textarea} from "../../common/FormsControls/FormsControls";

export type FormDataType = {
    newPostTextBody: string
}
const maxLenght = maxLengthCreator(10)


const AddNewPostForm: React.FC<InjectedFormProps<FormDataType>> = (props: React.PropsWithChildren<InjectedFormProps<FormDataType, {}, string>>) => {


    return (
        <form onSubmit={props.handleSubmit}>
            <Field component={Textarea}
                   name={"newPostTextBody"}
                   validate={[required, maxLenght]}
                   placeholder={"Post message"}
            />
            <button>Add post</button>
        </form>
    )

}

export const AddNewPostReduxForm = reduxForm<FormDataType>({form: "ProfileAddNewPostForm"})(AddNewPostForm)