// import { NgIf } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
// import { ActivatedRoute } from '@angular/router';
// import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ng-if',
  standalone: false,
  templateUrl: './ng-if.component.html',
  styleUrl: './ng-if.component.css'
})
export class NgIfComponent {
  // @Input() dataStr: string = "";
  // @Output() notify = new EventEmitter<string>();
  // constructor(private route: ActivatedRoute) {
  // }
  // ngOnInit() {
  //   this.route.queryParams.subscribe((queryParams) => {
  //     this.dataStr = queryParams['dataStr'];
  //   })
  // }
  // sendNotification() {
  //   this.notify.emit("Hello from ngIf component");
  // }

  div1Visible: boolean = false;
  number1: number = 10;
  number2: number = 10;

  showDiv() {
    this.div1Visible = true;
  }
  hideDiv() {
    this.div1Visible = false;
  }
}
