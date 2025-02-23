import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../css/navMobile.css"; // Zamiast .css – SCSS
import "../../css/global.css";

interface NavMobileProps {}

const NavMobile: React.FC<NavMobileProps> = () => {
    // Stan: czy panel jest otwarty
    const [isOpen, setIsOpen] = useState<boolean>(false);

    // Linki do naszego panelu
    const navLinks = [
        { label: "Home", path: "/" },
        { label: "Tasks", path: "/tasks" },
        { label: "Contact", path: "/contact" },
    ];

    // Przełącznik otwierania/zamykania menu
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="burger">
            <button className="burger-btn cleanbutton" onClick={toggleMenu}>
                <img
                    className="burger-img"
                    src="/icons/burger.svg"
                    alt="Open menu"
                />
            </button>

            <div className={`burger-panel ${isOpen ? "open" : ""}`}>
                <div className="burger-panel__header">
                    <Link to="/" onClick={() => setIsOpen(false)}>
                    ToDoApp
                        <img
                            src="/icons/logo.svg"
                            alt="Logo"
                            className="burger-panel__logo"
                        />
                    </Link>
                </div>
                <div className="burger-panel__links">
                    {navLinks.map((link) => (
                        <Link
                            key={link.path}
                            to={link.path}
                            onClick={() => setIsOpen(false)}
                        >
                            {link.label}
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default NavMobile;
