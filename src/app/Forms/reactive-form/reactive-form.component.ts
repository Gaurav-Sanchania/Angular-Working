import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  standalone: false,
  
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.css'
})
export class ReactiveFormComponent {
  userForm: FormGroup = new FormGroup({
    fName: new FormControl("", [Validators.required]),
    lName: new FormControl("", [Validators.required, Validators.minLength(10)]),
    userName: new FormControl(""),
    city: new FormControl(""),
    state: new FormControl(""),
    zip: new FormControl(),
    isAgreed: new FormControl(false),
  })

  onSubmit() {
    const formValue = this.userForm.value;
  }
}
