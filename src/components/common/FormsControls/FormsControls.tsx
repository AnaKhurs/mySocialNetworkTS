import React from 'react';
import classes from "./FormsControls.module.css";

type PropsType = {
    input: any
    meta: any
}

export const Textarea = ({input, meta: {touched, error}, ...props}: PropsType) => {
    const hasError = touched && error

    return (
        <div className={classes.formControl + ' ' + (hasError ? classes.error : "")}>
            <div>
                <textarea {...input} {...props}/>
            </div>
            {hasError && <span>{error}</span>}

        </div>
    )
}

export const Input = ({input, meta: {touched, error}, ...props}: PropsType) => {
    const hasError = touched && error

    return (
        <div className={classes.formControl + ' ' + (hasError ? classes.error : "")}>
            <div>
                <input {...input} {...props}/>
            </div>
            {hasError && <span>{error}</span>}

        </div>
    )
}