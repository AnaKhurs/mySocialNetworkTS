import React from 'react';
import {StoreType} from "../../redux/store";
import Navbar from "./Navbar";

type PropsType = {
    store: StoreType
}

export const NavbarContainer = (props: PropsType) => {

    return <Navbar friends={props.store.getState().sidebar.friends}/>

}
