// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-account',
//   templateUrl: './account.component.html',
//   styleUrl: './account.component.css'
// })
// export class AccountComponent {

// }

import { Component } from '@angular/core';
import { ServiceService } from '../../apiservice/service.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrl: './account.component.css'
})
export class AccountComponent {
  user: any;
  constructor(private apiService: ServiceService) {
    this.apiService.fechadmindata(localStorage.getItem("adminemail")).subscribe({
      next: (res: any) => {
        this.user = res;
      }
    })

  }

}
