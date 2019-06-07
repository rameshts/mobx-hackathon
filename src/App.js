import React from 'react';
import logo from './logo.svg';
import './App.css';
import {observer} from "mobx-react";

const App = observer(props => {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <p>
                    <input
                        type="text"
                        placeholder="Type something..."
                        onChange={e => props.info.setText(e.target.value)}
                    />
                </p>
                <p>
                    {props.info.text}
                </p>
            </header>
        </div>
    );
});

export default App;
