import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'second-app-ngmodule';

  constructor(private route: ActivatedRoute) {
  }

  // handleNotification(message: string){
  //   console.log('Received from child: ', message);
  // }
}
