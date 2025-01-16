import { Component } from '@angular/core';

@Component({
  selector: 'app-forms',
  standalone: false,
  
  templateUrl: './forms.component.html',
  styleUrl: './forms.component.css'
})
export class FormsComponent {
  userobj: any = {
    firstName: '',
    lastName: '',
    userName: '',
    city: '',
    state: '',
    zipCode: '',
    isTermsAgreed: false,
  }

  // It overides the value in local strorage. Because map function not used. 
  onSubmit() {
    const formValue = this.userobj;
    const stringifyUser = JSON.stringify(formValue);
    localStorage.setItem('user', stringifyUser);
    console.log(localStorage);
  }
}
