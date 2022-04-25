import { useEffect, useState } from "react";
import { tempoParaSegundos } from "../../common/utils/time";
import { ITarefa } from "../../types/tarefas";
import Button from "../Button";
import Clock from "./Clock";
import StyleStopwatch from './Stopwatch.module.scss';

interface Props {
    selecionado: ITarefa | undefined,
    finalizarTarefa: () => void
}

export default function Stopwatch({selecionado, finalizarTarefa} : Props) {
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
    function regressiva(contador: number = 0) {
        setTimeout(() => {
            if (contador > 0) {
                setTempo(contador - 1);
                return regressiva(contador - 1);
            }
            finalizarTarefa();
        }, 1000);
    }
    return (
        <div className={StyleStopwatch.cronometro}>
            <p className={StyleStopwatch.titulo}>
                Escolha a tarefa e inicie o cronômetro
            </p>
            <div className={StyleStopwatch.relogioWrapper}>
                <Clock tempo={tempo} />
            </div>
            <Button onClick={() => regressiva(tempo)} >
                Começar
            </Button>
        </div>
    )
}