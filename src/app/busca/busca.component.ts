import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';
import { UserService } from '../servico/user.service';

@Component({
  selector: 'app-busca',
  templateUrl: './busca.component.html',
  styleUrls: ['./busca.component.css']
})
export class BuscaComponent implements OnInit {

  private idBusca : number;
  private _msgErro: string = null;
  private _user: User = null;

  constructor(private userSrv: UserService) { }

  ngOnInit() {
  }

  private pesquisar(){
    if (this.idBusca <= 0){
        this._msgErro = "ID inválido!";
        this._user = null;
    }
    else {
        this._msgErro = null;
        this.userSrv.recuperaUserPeloID(this.idBusca).subscribe((res: User) => {
          this._user = res;
          console.log(this._user);
      });
    }
  } 
}