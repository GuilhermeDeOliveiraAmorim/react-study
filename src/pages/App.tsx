import Form from '../components/Form';
import Lista from '../components/Lista';
import React, { useState } from 'react';
import Style from './App.module.scss';
import Stopwatch from '../components/Stopwatch';

function App() {
    const [tarefas, setTarefas] = useState(
        [
            {
                tarefa: 'React',
                tempo: '02:00:00'
            },
            {
                tarefa: 'TypeScript',
                tempo: '03:00:00'
            }
            ,
            {
                tarefa: 'UX/UI',
                tempo: '01:00:00'
            }
        ]
    );
    return (
        <div className={Style.AppStyle}>
            <Form setTarefas={setTarefas} />
            <Lista tarefas={tarefas} />
            <Stopwatch />
        </div>);
}

export default App;