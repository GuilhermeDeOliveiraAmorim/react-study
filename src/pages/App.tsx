import Form from '../components/Form';
import Lista from '../components/Lista';
import React, { useState } from 'react';
import Style from './App.module.scss';
import Stopwatch from '../components/Stopwatch';
import { ITarefa } from '../types/tarefas';

function App() {
    const [tarefas, setTarefas] = useState<ITarefa[] | []>([]);
    const [selecionado, setSelecionado] = useState<ITarefa>();
    function selecionaTarefa(tarefaSelecionada: ITarefa) {
        setSelecionado(tarefaSelecionada);
        setTarefas(tarefasAnteriores => tarefasAnteriores.map(tarefa => ({
            ...tarefa,
            selecionado: tarefa.id === tarefaSelecionada.id ? true : false
        })))
    }
    return (
        <div className={Style.AppStyle}>
            <Form setTarefas={setTarefas} />
            <Lista
                tarefas={tarefas}
                selecionaTarefa={selecionaTarefa}
            />
            <Stopwatch />
        </div>);
}

export default App;