import React from 'react';
import classes from "./FormsControls.module.css";


type PropsType = {
    input: any
    meta: any
}

export const Textarea = ({input, meta, ...props}: PropsType) => {
debugger
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