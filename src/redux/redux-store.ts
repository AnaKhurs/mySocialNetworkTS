import {combineReducers, createStore} from "redux"
import {profileReducer} from "./profile-reducer";
import {dialogReducer} from "./dialog-reducer";
import {sidebarReducer} from "./sidebar-reducer";
import {StoreType} from "./store";

const reducer = combineReducers({
    profilePage: profileReducer,
    dialogPage: dialogReducer,
    sidebar: sidebarReducer
});

export const store:StoreType = createStore(reducer);

