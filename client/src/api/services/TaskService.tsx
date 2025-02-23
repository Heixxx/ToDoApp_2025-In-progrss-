import ApiClient from ".././clients/ApiClient";
import { Task } from "../../Interfaces/TaskInterface";

const TaskService = {
    async getTasks(): Promise<Task | null> {
        try {
            const response = await ApiClient.get<Task>("https://localhost:5001/api/app/todos");
            return response.data;
        } catch (error) {
            console.error(error);
            // FUTURE - toastr
            return null;
        }
    },
    async getTask(id: number): Promise<Task | null> {
        try {
            const response = await ApiClient.get<Task>(`/task/${id}`);
            return response.data;
        } catch (error) {
            console.error(error);
            return null;
        }
    },
    async setTask(task: Task): Promise<boolean> {
        try {
            await ApiClient.post(`/task`, task);
            return true;
        } catch(error) {
            console.error(error);
            return false;
        }
    },
};

export default TaskService;
