import React from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import classes from './Dialogs.module.css';
import {Textarea} from "../common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../utils/validators/validators";

export type FormDataType = {
    newMessageBody: string
}

const maxLenght = maxLengthCreator(50)

const AddMessageForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={classes.messageSend}>
            <Field component={Textarea}
                   validate={[required, maxLenght]}
                   name={"newMessageBody"}
                   placeholder={"Enter your message"}
                   className={classes.textarea}/>
            <button className={classes.button}>Send++++</button>
        </form>
    )
}

export const AddMessageReduxForm = reduxForm<FormDataType>({form: "dialogAddMessageForm"})(AddMessageForm)