import { ChangeDetectionStrategy, Component, linkedSignal, signal } from '@angular/core';

@Component({
  selector: 'app-signals',
  standalone: false,
  
  templateUrl: './signals.component.html',
  styleUrl: './signals.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SignalsComponent {
  firstName = signal<string>("Gaurav");
  lastName = signal<string>("Sanchania");
  rollNumber = signal<number>(0);
  courseName: string = "Angular";
  user = signal({id: 101, name: 'xyz'});

  constructor() {
    // const value =this.firstName;
    // setTimeout(() => {
    //   debugger;
    //   this.courseName = "React Js";
    //   this.firstName.set("Rahul");
    //   debugger;
    // }, 5000);
  }

  fullName = linkedSignal({
    source: this.firstName,
    computation: (newOption, previous) => {
      const fullName = newOption + " " + this.lastName();
      return fullName;
    }
  });

  email = linkedSignal({
    source: this.user,
    computation: user =>
      `${user.name + user.id}@gmail.com`,
    equal: (a:any, b:any) => a.id !== b.id
  });

  onChangeFirstName() {
    this.firstName.set("Vipul");
  }

  onChangeId() {
    this.user.set({id: 123, name: 'xyz'});
  }

  onIncreament(){
    this.rollNumber.update(oldValue => oldValue + 1);
  }
}
