import {createAction, emptyProps, props} from "@ngrx/store";
import {TaskInterface} from "../../model/task.interface";

export const loadTasks = createAction(
  '[Task] Load Tasks');
