import React from 'react';
import {NetworkApp} from './App';
import ReactDOM from 'react-dom';


test('renders learn react link', () => {
    const div = document.createElement("div")
    ReactDOM.render(<NetworkApp/>, div);
    ReactDOM.unmountComponentAtNode(div)
});
