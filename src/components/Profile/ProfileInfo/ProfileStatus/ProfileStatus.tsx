import React from 'react';
import classes from './../ProfileInfo.module.css'

type PropsType = {
    status: null | string
}


export class ProfileStatus extends React.Component<PropsType> {
    state = {
        editMode: false
    }

    activateEditMode() {
        this.setState({
            editMode: true
        })
    }

    deactivateEditMode() {
        this.setState({
            editMode: false
        })
    }

    render() {
        return (
            <div>
                {!this.state.editMode &&
                <div onDoubleClick={this.activateEditMode.bind(this)}
                     className={classes.aboutMe}>{this.props.status}</div>}
                {this.state.editMode &&
                <input autoFocus
                       onBlur={this.deactivateEditMode.bind(this)}
                       value={this.props.status ? this.props.status : ""}/>}
            </div>
        )
    }
}
