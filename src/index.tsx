import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

export type DialogType = {
    id: number
    name: string
}
const dialogs: Array<DialogType> = [
    {id: 1, name: "Nastya"},
    {id: 2, name: "Alex"},
    {id: 3, name: "Masha"},
    {id: 4, name: "Dima"},
    {id: 5, name: "Lena"},
]

export type MessageTextType = {
    id: number
    messageText: string
}
const messagesText: Array<MessageTextType> = [
    {id: 1, messageText: "Hi!!!"},
    {id: 2, messageText: "How are you?"},
    {id: 3, messageText: "yoooooo"},
]

export type PostType = {
    id: number
    message: string
    like: number
}
let posts: Array<PostType> = [
    {id: 1, message: "Hi, how are you?", like: 18},
    {id: 2, message: "It is my first post!!!", like: 19},
    {id: 3, message: "Yoooo", like: 10},
]

ReactDOM.render(<App posts={posts} messagesText={messagesText} dialogs={dialogs}/>, document.getElementById('root')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
