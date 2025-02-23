export interface Task {
    task_id: number;       // Zmieniono z "id" na "task_id"
    title: string;
    completed?: boolean;
    start_date?: string;   // Dopasowano do nazw z .NET
    end_date?: string;
    user_id?: number;      // Zmieniono z "userId" na "user_id"
    start_time?: string;   // Jeśli potrzebne
    end_time?: string;
}
