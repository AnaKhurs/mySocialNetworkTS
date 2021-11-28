import React from 'react';
import {StoreType} from "../../redux/store";
import {StoreContext} from '../../StoreContext';
import Navbar from "./Navbar";

type PropsType = {
    //store: StoreType
}

export const NavbarContainer = (props: PropsType) => {

    return (
        <StoreContext.Consumer>
            {
                store => {
                    return (
                        <Navbar friends={store.getState().sidebar.friends}/>
                    )
                }
            }


        </StoreContext.Consumer>
    )

}
