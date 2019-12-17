import { User } from '../model/user';
import { UserService } from '../servico/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-id',
  templateUrl: './user-id.component.html',
  styleUrls: ['./user-id.component.css']
})
export class UserIdComponent implements OnInit {
  id: number
  user: User = new User(0, '','','',null,'','',null)

  constructor(private UserService: UserService) {}


  ngOnInit() {
  }
  searchOnClick() {
    this.UserService.get(this.id).subscribe((userOut: User)=>{
      this.user = userOut;
    })
  }

}
