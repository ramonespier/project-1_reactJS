import './styles.css'

import { Component } from "react";

export class Button extends Component {
    render() {
        const { text, onClick, disabled } = this.props

        return (
            <button
                className='button'
                onClick={onClick}
                disabled={disabled}
            >
                {text}
            </button>
        );
    }
}

Button.defaultProps = {
    text: "Click me", // valor padrão para text
    onClick: () => { }, // valor padrão para onClick (função vazia)
};