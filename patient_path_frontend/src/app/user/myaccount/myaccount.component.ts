import { Component ,OnInit} from '@angular/core';
// import { UserService } from '../../services/user.service';
import { MatDialog } from '@angular/material/dialog';
// import { EditProfileComponent } from '../editprofile/editprofile.component'; 


import { UserService } from '../../services/user.service';





@Component({
  selector: 'app-myaccount',
  templateUrl: './myaccount.component.html',
  styleUrl: './myaccount.component.css'
})
export class MyaccountComponent {
  constructor(private userService: UserService,public dialog: MatDialog) { }
  user={
    name:'trisha',
    email:'tchowdhury455@gmail.com',
    number:'9862710589'
  };






ngOnInit():void{
  
}


}