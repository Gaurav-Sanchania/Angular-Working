import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'second-app-ngmodule';

  // handleNotification(message: string){
  //   console.log('Received from child: ', message);
  // }
}
