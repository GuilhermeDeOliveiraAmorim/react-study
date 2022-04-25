import Form from '../components/Form';
import Lista from '../components/Lista';
import React, { useState } from 'react';
import Style from './App.module.scss';
import Stopwatch from '../components/Stopwatch';
import { ITarefas } from '../types/tarefas';

function App() {
    const [tarefas, setTarefas] = useState<ITarefas[] | []>([]);
    return (
        <div className={Style.AppStyle}>
            <Form setTarefas={setTarefas} />
            <Lista tarefas={tarefas} />
            <Stopwatch />
        </div>);
}

export default App;