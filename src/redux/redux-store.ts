import {combineReducers, createStore} from "redux"
import {profileReducer} from "./profile-reducer";
import {dialogReducer} from "./dialog-reducer";
import {sidebarReducer} from "./sidebar-reducer";
import {userReducer} from "./user-reducer";

const rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogPage: dialogReducer,
    sidebar: sidebarReducer,
    usersPage: userReducer
});

export const store = createStore(rootReducer);

export type StoreType = typeof store

export type StateType = ReturnType<typeof rootReducer>
