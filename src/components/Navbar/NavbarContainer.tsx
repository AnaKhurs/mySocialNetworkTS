import React from 'react';
import Navbar from "./Navbar";
import {connect} from "react-redux";
import {StateType} from "../../redux/redux-store";
import {FriendType} from "../../redux/sidebar-reducer";

type MapStateToPropsType = {
    friends: FriendType[];
}

const mapStateToProps = (state: StateType): MapStateToPropsType => {
    return {
        friends: state.sidebar.friends
    }
};

export type NavbarPropsType = MapStateToPropsType

export const NavbarContainer = connect(mapStateToProps)(Navbar)