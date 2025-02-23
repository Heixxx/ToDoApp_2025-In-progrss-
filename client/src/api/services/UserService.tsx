import ApiClient from ".././clients/ApiClient";
import { User } from "../../Interfaces/UserInterface";

const UserService = {
    async getUser(): Promise<User | null> {
        try {
            const response = await ApiClient.get<User>("/user/me");
            return response.data;
        } catch (error) {
            console.error("Błąd pobierania użytkownika", error);
            return null;
        }
    },

    async setUser(user: User): Promise<boolean> {
        try {
            await ApiClient.post("/user", user);
            return true;
        } catch (error) {
            console.error("Błąd ustawiania użytkownika", error);
            return false;
        }
    },

    async updateUser(user: Partial<User>): Promise<boolean> {
        try {
            await ApiClient.patch("/user/me", user);
            return true;
        } catch (error) {
            console.error("Błąd aktualizacji użytkownika", error);
            return false;
        }
    },
};

export default UserService;
