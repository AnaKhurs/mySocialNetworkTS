import React, {ChangeEvent} from 'react';
import classes from './../ProfileInfo.module.css'

type PropsType = {
    status: string
    updateUserStatus: (status: string) => void
}


export class ProfileStatus extends React.Component<PropsType> {
    state = {
        editMode: false,
        status: this.props.status
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
        this.props.updateUserStatus(this.state.status)
    }

    onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {  //стрелка чтобы не потерять this
        this.setState({status: e.currentTarget.value})
    }

    componentDidUpdate(prevProps: Readonly<PropsType>, prevState: Readonly<{}>, snapshot?: any) {
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })
        }
    }


    render() {
        return (
            <div>
                {!this.state.editMode &&
                <div onDoubleClick={this.activateEditMode.bind(this)}
                     className={classes.aboutMe}>{this.props.status || "no status"}</div>}
                {this.state.editMode &&
                <input autoFocus
                       onBlur={this.deactivateEditMode.bind(this)}
                       value={this.state.status}
                       onChange={this.onStatusChange}
                />
                }
            </div>
        )
    }
}
