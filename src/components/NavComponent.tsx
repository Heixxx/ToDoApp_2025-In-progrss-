import React, { useContext } from "react";
import { Link } from "react-router-dom"; // ✅ Używamy Link zamiast <a>
import "../css/nav.css";
import UserContext from "../context/UserContext";

const NavComponent: React.FC = () => {
    const {user} = useContext(UserContext);

    if (user==null){
        console.log(user);
        return <div>null</div>;
        
    }

    return (
        <nav>
            <div className="container">
                <div className="nav_pc">
                    <div className="nav_pc__left">
                        <Link to="/"><p>Home</p></Link>
                    </div>
                    <div className="nav_pc__right">
                        <p>Name: {user.name}</p>
                        <Link to="/about"><p>About</p></Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default NavComponent;
