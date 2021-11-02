import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import {PostType, StateType} from "./redux/state";

type AppType = {
    state: StateType
    addNewPost: (messagePost:string) => void
    changeNewPostText: (newPostText: string) => void
}

function App(props: AppType) {
    console.log('App rendering')
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar sidebarState={props.state.sidebar}/>
                <div className='app-wrapper-content'>
                    <Route path='/dialogs' render={() => <Dialogs dialogPageState={props.state.dialogPage} />}/>
                    <Route path='/profile' render={() => <Profile profilePageState={props.state.profilePage} addNewPost={props.addNewPost} changeNewPostText = {props.changeNewPostText}/>}/>
                    <Route path='/news' render={() => <News/>}/>
                    <Route path='/music' render={() => <Music/>}/>
                    <Route path='/settings' render={() => <Settings/>}/>
                </div>
            </div>
        </BrowserRouter>
    );
}


export default App;
