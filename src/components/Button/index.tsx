import React from "react";
import StyleButton from "./Button.module.scss";

interface IProps {
    children: React.ReactChild;
}

class Button extends React.Component<IProps> {
    render() {
        return (
            <button className={StyleButton.botao}>
                {this.props.children}
            </button>
        );
    }
}

export default Button;