import Form from '../components/Form';
import Lista from '../components/Lista';
import React from 'react';
import Style from './App.module.scss';
import Stopwatch from '../components/Stopwatch';

function App() {
    return (
        <div className={Style.AppStyle}>
            <Form />
            <Lista />
            <Stopwatch />
        </div>);
}

export default App;