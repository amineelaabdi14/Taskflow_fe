import {UserInterface} from "./user.interface";
import {TagInterface} from "./tag.interface";

export interface TaskInterface {
  id: number;
  title: string;
  description: string;
  startDate: string;
  deadline: string;
  taskStatus: string;
  status: string;
  message: string;
}
