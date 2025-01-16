import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  standalone: false,
  
  templateUrl: './ng-for.component.html',
  styleUrl: './ng-for.component.css'
})
export class NgForComponent {
  cityList: string[] = ["Pune", "Nashik", "Mumbai", "Nagpur", "Thane"];
  employeeList: any = [
    {empId: 101, name: 'A', city: 'Ahmedabad'},
    {empId: 102, name: 'B', city: 'Pune'},
    {empId: 103, name: 'C', city: 'Mumbai'},
    {empId: 104, name: 'D', city: 'Thane'},
    {empId: 105, name: 'E', city: 'Nagpur'},
  ]  
}
