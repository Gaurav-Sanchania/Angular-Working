import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'angularTutorial';

  changeTitle() {
    this.title = 'Gaurav Sanchania';
  }

  ngOnInit() {
    // It will be called when the component is initialized
    // It is a lifecycle hook

    // this.changeTitle();
  }
}
