import {TaskInterface} from "../../model/task.interface";

export interface TasksState {
  isLoading: boolean;
  error: string | null;
  tasks: TaskInterface[];
}