import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  standalone: false,
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css'
})
export class DataBindingComponent {
  
  firstName :string = "Gaurav";
  rollNo :number = 101;
  isActive :boolean = true;
  currentDate :Date = new Date();
  myPlaceholder :string = "Enter your name";
  div1ClassName :string = "bg-primary";
  selectedCity :string = "";

  constructor() {
    console.log(this.firstName);
    this.isActive = false;
    console.log(this.isActive);
  }

  showWelcomeMess() {
    alert("Welcome to Angular 19");
  }

  onCityChange(event: any) {
    console.log("City changed", event.target.value);
  }
}
