import { Component } from '@angular/core';

@Component({
  selector: 'app-control-flow',
  standalone: false,
  
  templateUrl: './control-flow.component.html',
  styleUrl: './control-flow.component.css'
})
export class ControlFlowComponent {
  div1Visible: boolean = false;
  isChecked: boolean = false;
  cityList: string[] = ["Pune", "Ahmedabad", "Bangalore", "Mumbai", "Nashik"];

  divVisible(isShow: boolean){
    this.div1Visible = isShow;
  }
}
