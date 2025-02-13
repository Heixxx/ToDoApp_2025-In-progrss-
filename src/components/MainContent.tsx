import React, { useContext } from "react";
import "../css/main.css";
import UserContext from "../context/UserContext";

const MainContent: React.FC = () => {
    const {user} = useContext(UserContext);
    if (user==null){
        console.log(user);
        return <div>null</div>;
        
    }
    return <main>{user.name} {user.how_much_tasks}</main>;
};

export default MainContent;
