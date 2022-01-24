import React from 'react';
import classes from "./FormsControls.module.css";


type PropsType = {
    input: any
    meta: any
}

export const Textarea = ({input, meta, ...props}: PropsType) => {
    const hasError = meta.touched && meta.error

    return (
        <div className={classes.formControl + ' ' + (hasError ? classes.error : "")}>
            <div>
                <textarea {...input} {...props}/>
            </div>
            {hasError && <span>{meta.error}</span>}

        </div>
    )
}

export const Input = ({input, meta, ...props}: PropsType) => {
    const hasError = meta.touched && meta.error

    return (
        <div className={classes.formControl + ' ' + (hasError ? classes.error : "")}>
            <div>
                <input {...input} {...props}/>
            </div>
            {hasError && <span>{meta.error}</span>}

        </div>
    )
}