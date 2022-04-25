import Button from "../Button";
import Clock from "./Clock";
import StyleStopwatch from './Stopwatch.module.scss';

export default function Stopwatch() {
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