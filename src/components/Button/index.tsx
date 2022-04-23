import React from 'react';
import StyleButton from './Button.module.scss';

class Button extends React.Component {
    render() {
        return (
            <button className={StyleButton.botao}>
                Adicionar
            </button>
        )
    }
}

export default Button;