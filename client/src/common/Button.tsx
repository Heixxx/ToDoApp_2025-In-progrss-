import React from "react";
import "../css/button.css"; 

interface ButtonProps {
    text: string;
    onClick?: () => void;
    variant?: "blue" | "yellow" | "violet" | "red";
    children?: React.ReactNode;
    type?: "button" | "submit"
}

const Button: React.FC<ButtonProps> = ({ text, onClick, variant = "blue", type = "button" }) => {
    return (
        <button className={`button ${variant}`} onClick={onClick} type={type}>
            {text}
        </button>
    );
};

export default Button;
