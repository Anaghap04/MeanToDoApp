import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoappService {

  constructor(private http:HttpClient) { }

  server_address: string = 'http://localhost:3000/api';

  // Add TodoList
  addTodoList(data:any){
    return this.http.post<any>(`${this.server_address}/addtodolist`, data);
   }

  //  get all todoList
   getTodoList() {
    return this.http.get(`${this.server_address}/todolist`);
  }

  getDataById(id: string): Observable<any> {
    return this.http.get<any>(`${this.server_address}/get-todoListDetails/${id}`);
  }

  // delete todolist
  deletetodoList(id: string): Observable<any> {
    return this.http.delete<any>(`${this.server_address}/delete-todolist/${id}`);
  }
}
