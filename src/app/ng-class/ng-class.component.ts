import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-class',
  standalone: false,
  
  templateUrl: './ng-class.component.html',
  styleUrl: './ng-class.component.css'
})
export class NgClassComponent {
  divBgColor: string = 'bg-success';
  isChecked: boolean = false;
  div3ClassName: string = '';

  addDivColor(className :string) {
    this.divBgColor = className;
  }
}
