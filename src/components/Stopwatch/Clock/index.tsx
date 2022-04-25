import React from "react";
import StyleClock from './Clock.module.scss';

export default function Clock() {
    return (
        <React.Fragment>
            <span className={StyleClock.relogioNumero}>0</span>
            <span className={StyleClock.relogioNumero}>0</span>
            <span className={StyleClock.relogioDivisao}>:</span>
            <span className={StyleClock.relogioNumero}>0</span>
            <span className={StyleClock.relogioNumero}>0</span>
        </React.Fragment>
    );
}
