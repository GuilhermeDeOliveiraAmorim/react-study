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
    }: Props) {
    return (
        <li
            className={`${StyleItem.item} ${selecionado ? StyleItem.itemSelecionado : ''} ${completo ? StyleItem.itemCompletado : '' }`}
            onClick={() => !completo && selecionaTarefa({
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
            {completo && <span className={StyleItem.concluido} aria-label="Tarefa concluída!"></span>}
        </li>
    )
}