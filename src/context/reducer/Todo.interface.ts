export interface ITodo {
    id: number;
    task_name: string;
    completed: boolean;
}
export interface ITodos {
    todos: ITodo[]
}