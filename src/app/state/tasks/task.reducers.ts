import {createReducer, createFeature,on} from "@ngrx/store";
import {TaskActions} from './task.actions';
import {TaskInterface} from "../../model/task.interface";


export const taskFeatureKey = 'task';

export interface State {
  error: string | null;
  tasks: TaskInterface[]
}

export const initialState: State = {
  error: null,
  tasks: []
};

export const reducer = createReducer(
  initialState,
 
);

export const taskFeature = createFeature({
  name: taskFeatureKey,
  reducer,
});
