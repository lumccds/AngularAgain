import { Component, OnInit } from '@angular/core';
import { Tarefas } from '../model/tarefas';
import { TodosService } from '../servico/todos.service';

@Component({
  selector: 'app-tarefas',
  templateUrl: './tarefas.component.html',
  styleUrls: ['./tarefas.component.css']
})
export class TarefasComponent implements OnInit {

  constructor(private todosSrv: TodosService) { }

  tarefas: Tarefas[];

  ngOnInit() {
    this.findAllTarefas();
  }

  findAllTarefas(){
    this.todosSrv.buscaTarefas().subscribe((tarefasOut: Tarefas[]) => {
      this.tarefas = tarefasOut;
      console.log(this.tarefas);
    });

  }

}
