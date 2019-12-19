import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  constructor(private http: HttpClient) { }

  buscaTarefas() {
    return this.http.get(`https://jsonplaceholder.typicode.com/todos`)
  }

  filtraTarefas(id:number){
    return this.http.get(`https://jsonplaceholder.typicode.com/todos/${id}`)
  }
}
