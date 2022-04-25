import React from "react";
import StyleClock from './Clock.module.scss';

interface Props {
    tempo: number | undefined;
}

export default function Clock({tempo = 0} : Props) {
    const minutos = Math.floor(tempo / 60);
    const segundos = tempo % 60;
    const [minutoDezena, minutoUnidade] = String(minutos).padStart(2, '0');
    const [segundoDezena, segundoUnidade] = String(segundos).padStart(2, '0');
    return (
        <React.Fragment>
            <span className={StyleClock.relogioNumero}>{minutoDezena}</span>
            <span className={StyleClock.relogioNumero}>{minutoUnidade}</span>
            <span className={StyleClock.relogioDivisao}>:</span>
            <span className={StyleClock.relogioNumero}>{segundoDezena}</span>
            <span className={StyleClock.relogioNumero}>{segundoUnidade}</span>
        </React.Fragment>
    );
}
