import React from 'react';
import {StoreType} from "./redux/store";
import {store} from "./redux/redux-store";
import {BrowserRouter} from "react-router-dom";
import App from "./App";

export const StoreContext = React.createContext({} as StoreType)

type ProviderPropsType = {
    value: StoreType
    children: React.ReactNode
}

export const Provider = (props: ProviderPropsType) => {
    return (
        <StoreContext.Provider value={props.value}>
            {props.children}
        </StoreContext.Provider>
    )

}
