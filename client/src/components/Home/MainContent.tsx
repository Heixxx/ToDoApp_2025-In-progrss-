import React, { useContext } from "react";
import "../../css/main.css"; // Główny plik SCSS (zaktualizowany)
import UserContext from "../../context/UserContext";

// Importujemy service i interfejs (opcjonalnie)

import BigPanel from "../Tasks/BigPanel";

const MainContent: React.FC = (onAddTask) => {
    const { user } = useContext(UserContext);

    if (!user) {
        return <div>Unknown</div>;
    }

    return (
        <main className="main">
            <BigPanel></BigPanel>
            {/* <div className="gradient-block" aria-hidden="true">
                <div className="gradient-block__inner"></div>
            </div> */}
            {/* <div className="gradient-block" aria-hidden="true">
                <div className="gradient-block__inner"></div>
            </div> */}
        </main>
    );
};

export default MainContent;
