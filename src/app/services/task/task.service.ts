import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {TaskInterface} from "../../model/task.interface";


@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private url: string = "http://localhost:8081/api/v1/tasks";


  constructor(private http: HttpClient) { }

  getAllTasks(): Observable<TaskInterface[]> {
    return this.http.get<TaskInterface[]>(this.url);
  }

  storeTask(task: TaskInterface): Observable<TaskInterface> {
    return this.http.post<TaskInterface>(this.url, task);
  }


}
