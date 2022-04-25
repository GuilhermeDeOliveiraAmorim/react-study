import { ITarefas } from '../../types/tarefas';
import Item from './Item';
import StyleLista from './Lista.module.scss';

function Lista({tarefas}: {tarefas: ITarefas[]}) {
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