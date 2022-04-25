import { ITarefas } from '../../../types/tarefas'
import StyleLista from '../Lista.module.scss'

export default function Item({tarefa, tempo, selecionado, completo, id}: ITarefas) {
    console.log(
        {tarefa, tempo, selecionado, completo, id}
    );
    return (
        <li className={StyleLista.item}>
            <h3>{tarefa}</h3>
            <span>{tempo}</span>
        </li>
    )
}