import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-myaccount',
  templateUrl: './myaccount.component.html',
  styleUrls: ['./myaccount.component.css'] // Corrected from styleUrl to styleUrls
})
export class MyaccountComponent implements OnInit {
  public user: any; // Ideally, replace 'any' with a User interface/type

  constructor(private userService: UserService, public dialog: MatDialog) {
    ///this.getuser();
  }

  ngOnInit(): void {
    this.getuser()
  }

  getuser(): void {
    const email = localStorage.getItem("useremail");

    if (email) { // Checks if email is not null or empty
      this.userService.getUserData(email).subscribe({
        next: (res: any) => {
          this.user = res;
          console.log(this.user);
        },
        error: (err) => {
          console.error('Error fetching user data:', err);
        }
      });
    } else {
      console.warn("User email is null or empty");
    }
  }
}
