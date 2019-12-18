import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UserListComponent } from './user-list/user-list.component';
import { BuscaComponent } from './busca/busca.component';
import { TituloComponent } from './titulo/titulo.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RodapeComponent } from './rodape/rodape.component';
import { TarefasComponent } from './tarefas/tarefas.component';

@NgModule({
  declarations: [
    AppComponent,
    TituloComponent,
    NavbarComponent,
    RodapeComponent,
    HomeComponent,
    UserListComponent,
    BuscaComponent,
    TarefasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
