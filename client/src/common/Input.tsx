import React from "react";
import "../../src/css/input.css"; 
import { format, addDays } from "date-fns";

interface InputProps {
    width?: number;
    height?: number;
    type?: "text" | "datetime-local";
    value?: string;
    onChange?: (value: string) => void;
}

const Input: React.FC<InputProps> = ({ width, height, type = "text", value = "", onChange }) => {
    // Pobieramy aktualną datę i godzinę
    const now = new Date();
    const startDateTime = format(now, "yyyy-MM-dd'T'HH:mm"); 
    const maxDateTime = format(addDays(now, 3), "yyyy-MM-dd'T'HH:mm"); // 3 dni do przodu

    // Obsługa zmiany wartości
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (onChange) {
            onChange(e.target.value);
        }
    };

    return (
        <input 
            className="input"
            min={type === "datetime-local" ? startDateTime : undefined}
            max={type === "datetime-local" ? maxDateTime : undefined}
            type={type} 
            style={{ width: `${width}px`, height: `${height}px` }} 
            onChange={handleChange}
            value={value}
        />
    );
};

export default Input;
