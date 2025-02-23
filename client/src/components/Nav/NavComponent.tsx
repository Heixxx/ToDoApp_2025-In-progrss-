import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import UserContext from "../../context/UserContext";
import Nav from "./NavDesktop";
import NavMobile from "./NavMobileBtn";

const NavComponent: React.FC = () => {
    const { user } = useContext(UserContext);
    const [info, setInfo] = useState<boolean>(true);

    if (!user) {
        console.log(user);
        return <div>null</div>;
    }

    const closeInfo = (): void => {
        setInfo(false);
    };
    return (
        <nav>
            <div className="container">
                <Nav closeInfo={closeInfo} info={info} setInfo={setInfo} />
                <div className="line"></div>
            </div>
        </nav>
    );
};

export default NavComponent;
