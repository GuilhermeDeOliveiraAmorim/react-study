import React from 'react';
import Item from './Item';
import StyleLista from './Lista.module.scss';

function Lista() {
    const tarefas = [
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
    return (
        <aside className={StyleLista.listaTarefas}>
            <h2>
                Estudos do dia
            </h2>
            <ul>
                {tarefas.map((item, index) => (
                    <Item
                    key={index}
                        {...item}
                    />
                ))}
            </ul>
        </aside>
    );
}

export default Lista;