import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-myaccount',
  templateUrl: './myaccount.component.html',
  styleUrls: ['./myaccount.component.css'] // Corrected from styleUrl to styleUrls
})
export class MyaccountComponent implements OnInit {
  user: any; // Ideally, replace 'any' with a User interface/type

  constructor(private userService: UserService, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.getuser(); // Call to fetch user data
    console.log(localStorage.getItem("useremail"));
  }

  getuser(): void {
    const email = localStorage.getItem("useremail");
    if (email) {
      this.userService.getUserData(email).subscribe({
        next: (res: any) => {
          this.user = res;
          console.log(this.user);
        },
        error: (err) => {
          console.log(err);
        }
      });
    }
  }
}
