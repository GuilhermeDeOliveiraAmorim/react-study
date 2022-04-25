import { ITarefa } from '../../../types/tarefas'
import StyleItem from '../Item/Item.module.scss'

interface Props extends ITarefa {
    selecionaTarefa: (tarefaSelecionada: ITarefa) => void;
}

export default function Item(
    {
        tarefa,
        tempo,
        selecionado,
        completo,
        id,
        selecionaTarefa
    }: Props)
{
    console.log(
        {tarefa, tempo, selecionado, completo, id}
    );
    return (
        <li
            className={`${StyleItem.item} ${selecionado ? StyleItem.itemSelecionado : ''}`}
            onClick={() => selecionaTarefa({
                    tarefa,
                    tempo,
                    selecionado,
                    completo,
                    id
                })
            }
        >
            <h3>{tarefa}</h3>
            <span>{tempo}</span>
        </li>
    )
}