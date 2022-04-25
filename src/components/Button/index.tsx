import React from "react";
import StyleButton from "./Button.module.scss";

class Button extends React.Component<{
    children: React.ReactChild,
    type?: "button" | "submit" | "reset" | undefined
}> {
    render() {
        const {type = "button"} = this.props;
        return (
            <button type={type} className={StyleButton.botao}>
                {this.props.children}
            </button>
        );
    }
}

export default Button;