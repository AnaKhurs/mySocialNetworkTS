import React from 'react'
import classes from './Contacts.module.css'

type PropsType = {
    contactTitle: null | string
    contactValue: null | string
}

export const Contacts = (props: PropsType) => {
    return (
        <div className={classes.contacts}>
            <div><b>{props.contactTitle}</b>: {props.contactValue}</div>
        </div>
    )
}