import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from '../app/home/home.component';
import { UserListComponent } from './user-list/user-list.component';
import { BuscaComponent } from './busca/busca.component';
import { TarefasComponent } from './tarefas/tarefas.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent},
  { path: 'listagem', component: UserListComponent},
  { path: 'busca', component :BuscaComponent },
  { path: 'tarefas', component: TarefasComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
