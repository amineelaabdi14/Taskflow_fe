import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {select, Store} from "@ngrx/store";
import {TaskInterface} from "../../model/task.interface";
import {TaskActions} from "../../state/tasks/task.actions";
import { AppState } from 'src/app/state/app-state';



@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit{

  constructor(
    private store: Store<AppState>,
  ) {}


  ngOnInit(): void {
    this.store.dispatch(TaskActions.loadTasks());
  }

}
