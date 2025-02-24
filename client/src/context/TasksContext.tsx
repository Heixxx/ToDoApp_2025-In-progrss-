import React, {
    useEffect,
    useState,
    createContext,
    useCallback,
    useMemo,
} from "react";
import { Task } from "../Interfaces/TaskInterface";
import { BaseProvider } from "../Providers/BaseProvider";
import TaskService from "../api/services/TaskService";

type TasksContextType = {
    tasks: Task[];
    loading: boolean;
    error: Error | null;
    refreshTasks: () => Promise<void>;
    addTask: (task: Omit<Task, "task_Id">) => Promise<void>;
};

export const TasksContext = createContext<TasksContextType>({
    tasks: [],
    loading: false,
    error: null,
    refreshTasks: async () => {},
    addTask: async () => {},
});

export const TasksProvider: React.FC<BaseProvider> = ({ children }) => {
    const [tasks, setTasks] = useState<Task[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<Error | null>(null);

    const refreshTasks = useCallback(async () => {
        try {
            const taskData = await TaskService.getTasks();
            if (taskData) setTasks(taskData);
        } catch (error) {
            setError(new Error("Failed to fetch tasks"));
        }
    }, []);

    const addTask = useCallback(async (task: Omit<Task, "task_Id">) => {
        try {
            await TaskService.createTask(task);
        } catch (error) {
            setError(new Error("Failed to add task"));
        }
    }, []);

    useEffect(() => {
        const response = async () => {
            try {
                const taskData = await TaskService.getTasks();
                if (taskData) setTasks(taskData);
                console.log(taskData);
            } catch (error) {
                setError(new Error("Failed to fetch tasks"));
            }
        };
        response();
    }, []);

    useEffect(() => {
        const unsubscribe = TaskService.subscribe(() => {
            refreshTasks();
        });
        return () => unsubscribe();
    }, [refreshTasks]);
    const value = useMemo(
        () => ({
            tasks,
            loading,
            error,
            refreshTasks,
            addTask,
        }),
        [tasks, loading, error, refreshTasks, addTask]
    );

    return (
        <TasksContext.Provider value={value}>{children}</TasksContext.Provider>
    );
};

export default TasksContext;
