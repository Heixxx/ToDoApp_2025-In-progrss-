import React, {
    useState,
    useEffect,
    createContext,
    Dispatch,
    SetStateAction,
} from "react";
import { User } from "../Interfaces/UserInterface";
import { BaseProvider } from "../Providers/BaseProvider";
import UserService from "../api/UserService";

export const UserContext = createContext<{
    user: User | null;
    setUser: Dispatch<SetStateAction<User | null>>;
}>({ user: null, setUser: () => {} });

const userArray: User = {
    id: 1,
    name: "ddd",
    how_much_tasks: 22,
};

export const UserProvider: React.FC<BaseProvider> = ({ children }) => {
    const [user, setUser] = useState<User | null>(null);

    // If uder is changed = update
    // useEffect(() => {
    //     const fechtUser = async () =>{
    //         const user = await UserService.getUser();
    //         setUser(user);
    //     }
    //     fechtUser()
    // }, [user]);

    // First load
    useEffect(() => {
        const fechtUser = async () => {
            setUser(userArray);
        };
        fechtUser();
    }, []);

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    );
};

export default UserContext;
