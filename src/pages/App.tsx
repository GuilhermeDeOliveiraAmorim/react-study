import Form from '../components/Form';
import Lista from '../components/Lista';
import React from 'react';
import Style from './App.module.scss';

function App() {
    return (
        <div className={Style.AppStyle}>
            <Form />
            <Lista />
        </div>);
}

export default App;