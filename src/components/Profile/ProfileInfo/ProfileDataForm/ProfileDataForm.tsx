import React from 'react';
import classes from './ProfileDataForm.module.css'
import {Contacts} from "../Contacts/Contacts";
import {ContactsType, UserProfileDataType} from "../../../../redux/profile-reducer";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Input, Textarea} from "../../../common/FormsControls/FormsControls";

type PropsType = {
    profile: UserProfileDataType
}

export type FormDataType = {
    fullName: string
    lookingForAJob: boolean
    lookingForAJobDescription: string
    aboutMe: string
}


const ProfileDataForm: React.FC<InjectedFormProps<FormDataType, PropsType> & PropsType> = (props) => {
    return (

        <form onSubmit={props.handleSubmit}>
            <div>
                <button onClick={() => {
                }}>save
                </button>
            </div>
            <div className={classes.contact}>

                <div className={classes.fullName}>
                    Full name:
                    <Field placeholder={"Full name"}
                           name={"fullName"}
                        //validate={[required]}
                           component={Input}/>
                </div>

                <div>
                    Looking for a job:
                    <Field
                        name={"lookingForAJob"}
                        //validate={[required]}
                        component={Input}
                        type="checkbox"/>
                </div>

                <div className={classes.contact}>
                    My professional skills:
                    <span className={classes.span}>{props.profile.lookingForAJobDescription}</span></div>
                <Field placeholder={"Looking for a job description"}
                       name={"lookingForAJobDescription"}
                    //validate={[required]}
                       component={Textarea}/>

            </div>

            <div className={classes.contact}>About me:
                <span className={classes.span}>{props.profile.aboutMe}</span>
                <Field placeholder={"About me"}
                       name={"aboutMe"}
                    //validate={[required]}
                       component={Textarea}/>

            </div>
            <hr/>

            {Object.keys(props.profile.contacts).map((el) => {
                return (
                    <Contacts key={el}
                              contactTitle={el}
                              contactValue={props.profile.contacts[el as keyof ContactsType]}/>)
            })}


        </form>
    )
}

export const ProfileDataReduxForm = reduxForm<FormDataType, PropsType>({
    form: 'edit-profile'
})(ProfileDataForm)