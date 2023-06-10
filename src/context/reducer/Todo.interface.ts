export interface ITodo {
    _id: number;
    text: string;
    completed: boolean;
}
export interface ITodos {
    todos: ITodo[]
}