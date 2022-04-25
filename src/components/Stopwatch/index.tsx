import { useState } from "react";
import { tempoParaSegundos } from "../../common/utils/time";
import { ITarefa } from "../../types/tarefas";
import Button from "../Button";
import Clock from "./Clock";
import StyleStopwatch from './Stopwatch.module.scss';

interface Props {
    selecionado: ITarefa | undefined
}

export default function Stopwatch({selecionado} : Props) {
    const [tempo, setTempo] = useState<number>();
    if (selecionado?.tempo) {
        setTempo(tempoParaSegundos(selecionado.tempo));
    }
    return (
        <div className={StyleStopwatch.cronometro}>
            <p className={StyleStopwatch.titulo}>
                Escolha a tarefa e inicie o cronômetro
            </p>
            <div className={StyleStopwatch.relogioWrapper}>
                <Clock />
            </div>
            <Button>
                Começar
            </Button>
        </div>
    )
}