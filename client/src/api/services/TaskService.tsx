import ApiClient from ".././clients/ApiClient";
import { Task } from "../../Interfaces/TaskInterface";

type TaskUpdateEvent = 'create' | 'update' | 'delete';

class TaskService {
  private static instance: TaskService;
  private observers: ((event: TaskUpdateEvent) => void)[] = [];

  private constructor() {}

  public static getInstance(): TaskService {
    if (!TaskService.instance) {
      TaskService.instance = new TaskService();
    }
    return TaskService.instance;
  }

  public subscribe(observer: (event: TaskUpdateEvent) => void): () => void {
    this.observers.push(observer);
    return () => {
      this.observers = this.observers.filter(obs => obs !== observer);
    };
  }

  private notify(event: TaskUpdateEvent): void {
    this.observers.forEach(observer => observer(event));
  }

  async getTasks(): Promise<Task[] | null> {
    try {
      const response = await ApiClient.get<Task[]>("https://localhost:5001/api/app/todos");
      return response.data;
    } catch (error) {
      this.handleError(error, 'Failed to fetch tasks');
      return null;
    }
  }

  async createTask(task: Omit<Task, 'task_Id'>): Promise<Task | null> {
    try {
      const response = await ApiClient.post<Task>(
        "https://localhost:5001/api/app/todos",
        task,
        { headers: { "Content-Type": "application/json" } }
      );
      
      if (response.status === 201) {
        this.notify('create');
        return response.data;
      }
      return null;
    } catch (error) {
      this.handleError(error, 'Failed to create task');
      return null;
    }
  }

  async deleteTask(taskId: number): Promise<boolean> {
    try {
      const response = await ApiClient.delete(`https://localhost:5001/api/app/todos/${taskId}`);
      if (response.status === 204) {
        this.notify('delete');
        return true;
      }
      return false;
    } catch (error) {
      this.handleError(error, 'Failed to delete task');
      return false;
    }
  }

  private handleError(error: unknown, defaultMessage: string): void {
    const message = error instanceof Error ? error.message : defaultMessage;
    console.error(`${message}:`, error);
  }
}

export default TaskService.getInstance();