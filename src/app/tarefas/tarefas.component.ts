import { Component, OnInit } from '@angular/core';
import { Tarefas } from '../model/tarefas';
import { TodosService } from '../servico/todos.service';

@Component({
  selector: 'app-tarefas',
  templateUrl: './tarefas.component.html',
  styleUrls: ['./tarefas.component.css']
})
export class TarefasComponent implements OnInit {

  private idBusca : number;
  private _msgErro: string = null;
  private _tarefas: Tarefas = null;

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

  public pesquisar(){
    this.todosSrv.filtraTarefas(this.idBusca).subscribe((res: Tarefas) =>{
      this._tarefas = res;
    });

  }

}
