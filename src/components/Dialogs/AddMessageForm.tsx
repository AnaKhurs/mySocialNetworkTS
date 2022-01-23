import React from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import classes from './Dialogs.module.css';

export type FormDataType = {
    newMessageBody: string
}


const AddMessageForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={classes.messageSend}>
            <Field component={"textarea"} name={"newMessageBody"} placeholder={"Enter your message"}
                   className={classes.textarea}/>
            <button className={classes.button}>Send++++</button>
        </form>
    )

}

export const AddMessageReduxForm = reduxForm<FormDataType>({form: "dialogAddMessageForm"})(AddMessageForm)