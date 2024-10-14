// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-account',
//   templateUrl: './account.component.html',
//   styleUrl: './account.component.css'
// })
// export class AccountComponent {

// }


import { Component } from '@angular/core';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrl: './account.component.css'
})
export class AccountComponent {
    userName={
      firstName:'',
      lastName:'',
      email:'',
      age:'',
      phNo:''
    }
    constructor(){
      this.userName.firstName='Ram';
      this.userName.lastName='kumar';
      this.userName.email='ram@gmail.com';
      this.userName.age='20';
      this.userName.phNo='1234567890';

    }
}
