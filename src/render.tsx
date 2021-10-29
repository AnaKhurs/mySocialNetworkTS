import ReactDOM from "react-dom";
import App from "./App";
import {addNewPost, StateType} from "./redux/state";
import React from "react";

export const rerenderEntireTree= (state:StateType) => {
    ReactDOM.render(<App state={state} addNewPost={addNewPost}/>, document.getElementById('root')
    );
}