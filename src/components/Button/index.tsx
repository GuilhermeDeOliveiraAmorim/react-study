import React from "react";
import StyleButton from "./Button.module.scss";

class Button extends React.Component<{
    children: React.ReactChild,
    type?: "button" | "submit" | "reset" | undefined,
    onClick?: () => void
}> {
    render() {
        const {type = "button", onClick} = this.props;
        return (
            <button onClick={onClick} type={type} className={StyleButton.botao}>
                {this.props.children}
            </button>
        );
    }
}

export default Button;