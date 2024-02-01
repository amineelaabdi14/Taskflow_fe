import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {TaskService} from "../../services/task/task.service";
import {TaskActions} from './task.actions';
import {catchError, map, concatMap, of} from "rxjs";

@Injectable()
export class TaskEffects {

 

  constructor(private actions$: Actions, private taskService: TaskService) {
  }
}