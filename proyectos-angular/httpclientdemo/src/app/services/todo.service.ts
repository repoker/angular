import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Todo} from '../interfaces/todo';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private urlBase = 'https://jsonplaceholder.typicode.com';

  constructor(private httpClient: HttpClient) {
  }

  getAllTodos(): Observable<Todo[]> {
    return this.httpClient.get<Todo[]>(`${this.urlBase}/todos`);
  }

  getTodo(id: string): Observable<Todo> {
    return this.httpClient.get<Todo>(`${this.urlBase}/todos/${id}`);
  }

  createTodo(todo: Todo) {
    return this.httpClient.post(`${this.urlBase}/todos`, todo);
  }

  updateTodo(todo: Todo) {
    return this.httpClient.put<Todo>(`${this.urlBase}/todos/${todo.id}`, todo);
  }

  deleteTodo(id: string) {
    return this.httpClient.delete(`${this.urlBase}/todos/${id}`);
  }

}
