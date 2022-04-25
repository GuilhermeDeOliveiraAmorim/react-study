import { useEffect, useState } from "react";
import { tempoParaSegundos } from "../../common/utils/time";
import { ITarefa } from "../../types/tarefas";
import Button from "../Button";
import Clock from "./Clock";
import StyleStopwatch from './Stopwatch.module.scss';

interface Props {
    selecionado: ITarefa | undefined
}

export default function Stopwatch({selecionado} : Props) {
    const [tempo, setTempo] = useState<number>(
        tempoParaSegundos(
            String(selecionado?.tempo)
        )
    );
    useEffect(() => {
        if (selecionado?.tempo) {
            setTempo(tempoParaSegundos(selecionado.tempo));
        }
    }, [selecionado]);
    return (
        <div className={StyleStopwatch.cronometro}>
            <p className={StyleStopwatch.titulo}>
                Escolha a tarefa e inicie o cronômetro
            </p>
            <div className={StyleStopwatch.relogioWrapper}>
                <Clock tempo={tempo} />
            </div>
            <Button>
                Começar
            </Button>
        </div>
    )
}